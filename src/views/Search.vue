<template>
  <div>
    <div class="bg-grey">
      <v-container pb-0>
        <v-layout row>
          <v-flex xs12 mx-5 mt-4>
            <v-form ref="form" @submit.prevent="submitSearch">
              <v-text-field
                v-model="searchWord"
                placeholder="搜尋您想比價的電子書名關鍵字或 ISBN"
                append-icon="search"
                @click:append="submitSearch"
                solo
                clearable
              >
              </v-text-field>
            </v-form>
          </v-flex>
        </v-layout>

        <v-layout>
           <v-flex xs12>
            <v-select
              v-model="selectedBookstores"
              :items="validBookstores"
              item-text="displayName"
              item-value="id"
              chips
              label="選擇書店"
              prepend-icon="filter_list"
              multiple
              clearable
            >

              <template
                slot="selection"
                slot-scope="{ item, index }"
              >
                <v-chip
                  close
                  @click:close="remove(index)"
                >
                  <span>{{ item.displayName }}</span>
                </v-chip>
              </template>

            </v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container grid-list-md my-12 v-if="isLoading">
      <book-loading class="my-12"/>
    </v-container>

    <v-container pb-0>
      <v-flex v-if="total !== 0" mx-5 row>
        <v-flex xs12 sm6 md6 lg6>
          <v-radio-group
            v-model="selectedSort"
            @change="sortOnChange"
            row
          >
            <v-radio
              v-for="(sort, i) in sorts"
              :key="i"
              :label="`${sort}`"
              :value="sort"
            ></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 sm6 md6 lg6>
          <v-card-text class="text-right">
            共有 {{total}} 筆結果，搜尋時間：{{searchResult.searchDateTime}}
            <v-btn
              color="primary"
              @click="copySharedLink"
              @mouseleave="hiddenShow"
              text
            >
              share
              <v-icon>
                mdi-share
              </v-icon>
            </v-btn>
            <span>
              <v-tooltip
                right
                v-model="show"
              >
                <template v-slot:activator="{ on, attrs }">
                  <span
                    v-bind="attrs"
                    v-on="on"
                  >
                  </span>
                </template>
                <span>Copied!</span>
              </v-tooltip>
            </span>
          </v-card-text>
        </v-flex>
      </v-flex>
      <v-tabs
        v-if="total !== 0"
        v-model="tab"
        show-arrows
      >
        <v-tab
          v-for="(result, i) in bookstoresResults"
          :key="i"
        >
        {{result.bookstore.displayName}}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-if="total !== 0" v-model="tab">
        <v-tab-item
          v-for="(result, i) in bookstoresResults"
          :key="i"
        >
          <v-flex v-if="!result.books.length">
            <span class="result-not-found">查無結果</span>
          </v-flex>

          <v-container grid-list-md>
            <v-layout row>
              <v-flex v-for="(book, i) in result.books" :key='i' xs12 pa-2>
                <v-layout row wrap>
                  <v-flex xs5 sm3 md2 lg2>
                    <v-chip small class="mb-2">
                      <v-avatar>
                        <img :src="`../img/${result.bookstore.id}.png`"
                          :alt="result.bookstore.displayName">
                      </v-avatar>
                      {{ result.bookstore.displayName }}
                    </v-chip>
                    <a :href="book.link">
                      <v-img :src="book.thumbnail" :alt="book.title"/>
                    </a>
                  </v-flex>
                  <v-flex xs7 sm9 md10 lg10>
                    <v-card-title class="pa-2">
                      <h2 class="title"><a :href="book.link">{{ book.title }}</a></h2>
                    </v-card-title>
                    <v-card-text class="subheading pa-2">
                      <ul
                        v-if="
                          book.authors ||
                          book.translators ||
                          book.painters ||
                          book.painters ||
                          book.publisher ||
                          book.publishDate
                        "
                        class="contributor"
                      >
                        <li v-if="book.authors" class="subheading">
                          作者：{{ book.authors.join('、') }}
                        </li>

                        <li v-if="book.translators" class="subheading">
                          譯者：{{ book.translators.join('、') }}
                        </li>

                        <li v-if="book.painters" class="subheading">
                          繪者：{{ book.painters.join('、') }}
                        </li>

                        <li v-if="book.publisher" class="subheading">
                          出版：{{ book.publisher }}
                        </li>

                        <li v-if="book.publishDate" class="subheading">
                          出版日期：{{ book.publishDate }}
                        </li>
                      </ul>

                      <p v-if="book.about">{{ `${book.about.substr(0, 150)}...` }}</p>

                      <ul v-if="book.price || book.nonDrmPrice" class="subheading price-list">
                        <li v-if="book.price" class="">
                          價格：{{ book.price }} {{ book.priceCurrency || ''}}
                        </li>

                        <li v-if="book.nonDrmPrice">
                          DRM-free 價格：{{ book.nonDrmPrice }} {{ book.priceCurrency || ''}}
                        </li>
                      </ul>

                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
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
    tab: null,
    isLoading: false,
    // search
    searchWord: '',
    selectedSort: '綜合排序',
    sorts: ['綜合排序', '價格低至高', '價格高至低'],
    selectedBookstores: [],
    // data from api
    bookstores: [],
    validBookstores: [],
    total: 0,
    searchResult: {},
    bookstoresResults: [],
    sharedLink: '',
    show: false,
    apiUrl: process.env.VUE_APP_API_URL,
  }),
  async mounted() {
    await this.getBookstores();

    if (this.$route.params.id) {
      const searchId = this.$route.params.id;
      this.getSearchResult(searchId);

      return;
    }

    if (this.$route.query.bookstores?.length) {
      const tmpBookstores = this.validBookstores.filter((bookstore) => this.$route.query.bookstores
        .includes(bookstore.id));
      this.selectedBookstores = tmpBookstores.map((bookstore) => bookstore.id);
    } else {
      this.selectedBookstores = this.validBookstores.map((bookstore) => bookstore.id);
    }

    if (this.$route.query.q) {
      this.searchWord = this.$route.query.q;
      this.submitSearch();
    }
  },
  methods: {
    async getBookstores() {
      const api = new URL(`${this.apiUrl}/bookstores`);

      await fetch(api)
        .then((response) => response.json())
        .then((bookstores) => {
          this.bookstores = bookstores;
          this.validBookstores = bookstores.filter((bookstore) => bookstore.isOnline);
        });
    },
    getSearchResult(id) {
      this.isLoading = true;
      const api = new URL(`${this.apiUrl}/searches/${id}`);

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          this.searchResult = data;
          this.total = this.searchResult.totalQuantity;
          this.bookstoresResults = JSON.parse(JSON.stringify(this.searchResult.results));
          this.selectedBookstores = this.bookstoresResults.map((result) => result.bookstore.id);
          this.searchWord = this.searchResult.keywords;
          const searchId = this.searchResult.id;
          this.sharedLink = `${window.location.protocol}//${window.location.host}/searches/${searchId}`;
        }).finally(() => {
          this.isLoading = false;
        });
    },
    submitSearch() {
      if (this.searchWord === '') return;
      // Reset data
      this.total = 0;
      this.searchResult = {};
      this.bookstoresResults = [];
      // start loading and fetch data
      this.isLoading = true;
      if (this.selectedBookstores.length === 0) {
        this.selectedBookstores = this.validBookstores.map((bookstore) => bookstore.id);
      }

      const api = new URL(`${this.apiUrl}/searches`);
      const params = new URLSearchParams();
      params.append('q', this.searchWord);
      this.selectedBookstores.map((bookstore) => params.append('bookstores', bookstore));
      api.search = params;

      fetch(api, { method: 'POST' })
        .then((response) => response.json())
        .then((data) => {
          this.searchResult = data;
          this.total = this.searchResult.totalQuantity;
          this.bookstoresResults = JSON.parse(JSON.stringify(this.searchResult.results));
          this.selectedBookstores = this.bookstoresResults.map((result) => result.bookstore.id);
          const searchId = this.searchResult.id;
          this.sharedLink = `${window.location.protocol}//${window.location.host}/searches/${searchId}`;
          this.$router.replace({ path: `/searches/${searchId}` });
        }).finally(() => {
          this.isLoading = false;
        });
    },
    sortOnChange() {
      if (this.selectedSort === '價格低至高') {
        this.bookstoresResults.forEach((bookstoreResult) => {
          bookstoreResult.books.sort((a, b) => a.price - b.price);
        });
      } else if (this.selectedSort === '價格高至低') {
        this.bookstoresResults.forEach((bookstoreResult) => {
          bookstoreResult.books.sort((a, b) => b.price - a.price);
        });
      } else {
        this.bookstoresResults = JSON.parse(JSON.stringify(this.searchResult.results));
      }
    },
    remove(index) {
      this.selectedBookstores.splice(index, 1);
      this.selectedBookstores = [...this.selectedBookstores];
    },
    async copySharedLink() {
      await navigator.clipboard.writeText(this.sharedLink);
      this.show = true;
    },
    hiddenShow() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: initial;
  text-decoration: initial;
}

.bg-grey {
  background-color: #f2f2f2;
}

.result-count .result-not-found {
  color: rgba(0, 0, 0, 0.54);
}

.contributor {
  list-style: none;
  padding-left: 0;
  margin-bottom: 16px;
}

.price-list {
  list-style: none;
  padding-left: 0;
  color: #fa4181;
}

.mouse-pointer {
  &:hover {
    cursor: pointer;
  }
}
</style>
