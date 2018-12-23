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
            ></v-select>
          </v-flex>

        </v-layout>
        <v-layout>
           <v-flex xs12 sm6 md4>
            <v-select
              v-model="selectedCompanies"
              :items="companies"
              chips
              label="過濾書店"
              prepend-icon="filter_list"
              multiple
              clearable
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex v-for="(book, key) in books" :key='key' xs12 sm12 md12>

          <v-card>
            <v-layout row wrap>
              <v-flex md1>
                <v-img :src="book.thumbnail" :alt="book.title"/>
              </v-flex>
              <v-flex md8>
                <v-card-title>
                  {{ book.title }}
                  <span>{{ booksCompanyTable[book.company] }}</span>
                </v-card-title>
                <v-card-text>{{ book.about ? book.about.substr(0, 150) + '...' : '' }}</v-card-text>
                <span>{{ book.price }} {{ book.priceCurrency }}</span>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'search',
  components: {
    // HelloWorld,
  },
  data: () => ({
    sorts: ['綜合排名', '價格低至高', '價格高至低'],
    companies: ['Readmoo', '博客來', '樂天 kobo', 'Play 圖書', 'Pubu', 'Hyread', 'Taaze'],
    booksCompanyTable: {
      booksCompany: '博客來',
      readmoo: 'Readmoo 讀墨',
      kobo: 'Rakuten kobo',
      taaze: 'TAAZE 讀冊生活',
      bookWalker: 'BOOKWALKER',
      playStore: 'Google Play 圖書',
      pubu: 'Pubu 電子書城',
    },
    selectedCompanies: [],
    selectedSort: '',
    searchword: '',
    searchResut: {},
    books: [],
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
      this.$router.push({ path: 'search', query: { q: this.searchword } });

      const api = new URL('https://ebook.yuer.tw/search');
      const params = { q: this.searchword };
      api.search = new URLSearchParams(params);

      fetch(api).then((response) => {
        return response.json();
      }).then((data) => {
        this.searchResut = data;

        for (const company in data) {
          data[company].forEach((book) => {
            const bookData = { ...book, company };
            this.books.push(bookData);
          });
        }
      }).catch((err) => {
        // eslint-disable-next-line
        console.error(err);
      });
    },
  },

};
</script>


<style lang="scss">
.bg-grey {
  background-color: #f2f2f2;
}
</style>
