<template>
  <div>
    <div class="bg-grey">
      <v-container pb-0>
        <v-layout wrap>
          <v-flex xs12 sm6 md4 mr-4>
            <v-text-field
              v-model="searchword"
              label="Solo"
              placeholder="搜尋您想比價的電子書名關鍵字或 ISBN"
              append-icon="search"
              solo
              clearable
              @keyup.enter.native='submitSearch'
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md2>
            <v-select
              v-model="selectedSort"
              :items="sorts"
              label="選擇排序"
              solo
              clearable
              @change="sortOnChange"
            ></v-select>
          </v-flex>

        </v-layout>
        <v-layout>
           <v-flex xs12 sm6 md6>
            <v-select
              v-model="selectedCompanies"
              :items="companies"
              item-text="name"
              item-value="value"
              chips
              label="過濾書店"
              prepend-icon="filter_list"
              multiple
              clearable
              @change="filterCompanies"
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container pb-0>
      <span>{{ books.length === 0 ? '' : `共有 ${books.length} 筆結果`}}</span>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-container grid-list-md mt-5 v-if="isLoading">
          <book-loading class="my-5"/>
        </v-container>
        <v-flex v-for="(book, key) in books" :key='key' xs12 sm12 md12 pa-2>
          <v-layout row wrap>
            <v-flex md1>
              <v-img :src="book.thumbnail" :alt="book.title"/>
            </v-flex>
            <v-flex md11>
              <v-card-title>
                <h2 class="title">{{ book.title }}</h2>
                  <v-chip small @click="toggleCompany(book.company)">
                  <v-avatar>
                    <img :src="`img/${book.company}.png`" :alt="book.title">
                  </v-avatar>
                  {{ booksCompanyTable[book.company] }}
                </v-chip>
              </v-card-title>
              <v-card-text class="subheading">{{ book.about ? `${book.about.substr(0, 150)}...` : '' }}</v-card-text>
              <span class="subheading price">{{ book.price }} {{ book.priceCurrency }}</span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
// @ is an alias to /src
import BookLoading from '@/components/BookLoading.vue';

export default {
  name: 'search',
  components: {
    'book-loading': BookLoading,
  },
  data: () => ({
    sorts: ['綜合排名', '價格低至高', '價格高至低'],
    companies: [
      { name: 'Readmoo 讀墨', value: 'readmoo' },
      { name: '博客來', value: 'booksCompany' },
      { name: '樂天 kobo', value: 'kobo' },
      { name: 'Google Play 圖書', value: 'playStore' },
      { name: 'Pubu 電子書城', value: 'pubu' },
      { name: 'BOOKWALKER', value: 'bookWalker' },
      { name: 'Taaze 讀冊生活', value: 'taaze' },
    ],
    booksCompanyTable: {
      booksCompany: '博客來',
      readmoo: 'Readmoo 讀墨',
      kobo: '樂天 kobo',
      taaze: 'TAAZE 讀冊生活',
      bookWalker: 'BOOKWALKER',
      playStore: 'Google Play 圖書',
      pubu: 'Pubu 電子書城',
    },
    searchword: '',
    selectedSort: '',
    selectedCompanies: [],
    searchResult: {},
    booksResult: [],
    books: [],
    isLoading: false,
  }),
  mounted() {
    if (this.$route.query.q) {
      this.searchword = this.$route.query.q;
      this.submitSearch();
    }
  },
  methods: {
    submitSearch() {
      if (this.searchword === '') return;
      this.isLoading = true;
      this.$router.push({ path: 'search', query: { q: this.searchword } });

      const api = new URL('https://ebook.yuer.tw/search');
      const params = { q: this.searchword };
      api.search = new URLSearchParams(params);

      fetch(api)
        .then(response => response.json())
        .then((data) => {
          this.searchResult = data;
          for (const company in data) {
            data[company].forEach((book) => {
              const bookData = { ...book, company };
              this.books.push(bookData);
            });
          }
          this.booksResult = [...this.books];
          this.isLoading = false;
        }).catch((err) => {
          // eslint-disable-next-line
          console.error(err);
          this.isLoading = false;
        });
    },
    filterCompanies() {
      if (this.selectedCompanies.length === 0) {
        this.books = [...this.booksResult];
        return;
      }
      this.books = [];
      this.selectedCompanies.forEach((company) => {
        const data = this.booksResult.filter(book => book.company === company);
        this.books.push(...data);
      });
    },
    sortOnChange() {
      if (this.selectedSort === '價格低至高') {
        this.books = this.books.sort((a, b) => a.price - b.price);
      } else if (this.selectedSort === '價格高至低') {
        this.books = this.books.sort((a, b) => b.price - a.price);
      } else {
        this.books = [...this.booksResult];
      }
    },
    toggleCompany(company) {
      const index = this.selectedCompanies.indexOf(company);
      if (index === -1) {
        this.selectedCompanies.push(company);
      } else {
        this.selectedCompanies.splice(index, 1);
      }
    }
  },

};
</script>


<style lang="scss">
.bg-grey {
  background-color: #f2f2f2;
}
.price {
  color: #fa4181;
  padding: 0 16px;
}
</style>
