<template>
  <v-container text-md-center text-sm-center text-xs-center fluid>
    <v-layout row wrap mt-5>

      <v-flex lg2 offset-lg5 sm4 offset-sm4 xs6 offset-xs3>
          <v-img
            :src="require('@/assets/ebook-logo-bg.svg')"
            alt="ebook-logo"
            aspect-ratio="1"
          >
          </v-img>
      </v-flex>

      <v-flex my-2 xs12>
        <div class="display-2 grey--text text--darken-3">台灣電子書搜尋</div>
      </v-flex>

      <v-flex my-3 lg6 offset-lg3 sm8 offset-sm2>
        <v-form ref="form" @submit.prevent="redirectToSearch" >
          <v-text-field
              v-model="searchWord"
              placeholder="搜尋您想比價的電子書名關鍵字或 ISBN"
              append-icon="search"
              @click:append="redirectToSearch"
              solo
              clearable
              hide-details
            ></v-text-field>
        </v-form>
      </v-flex>

      <v-flex lg6 offset-lg3 sm8 offset-sm2>
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

      <v-flex xs12>
        <div class="headline grey--text">

          <span class="hidden-xs-only">
            <i class="fab fa-twitter"></i> 在<a class="theme-color" href="https://twitter.com/TaiwanEBook">推特</a>上追蹤我們
          </span>

          <span class="hidden-xs-only mx-4 vertical-divider"></span>

          <span>
            看看支援哪
            <v-tooltip
              bottom
              color="white"
              max-width="400"
              v-model="isTooltipShow"
            >
              <template v-slot:activator="{ on, attrs }">
                <span
                  v-bind="attrs"
                  v-on="on"
                  class="theme-color"
                  @mouseover="handleTooltip"
                  @mouseleave="handleTooltip"
                >
                    {{bookstores.length}} 間台灣線上電子書店
                </span>
              </template>

              <v-layout row wrap>
                <v-flex v-for="(bookstore, key) in bookstores" :key='key' xs6 my-2>
                  <v-avatar
                    size="32">
                    <img :src="`img/${bookstore.id}.png`" :alt="bookstore.displayName">
                  </v-avatar>
                  <span class="ma-2 grey--text text--darken-1">
                    {{ bookstore.displayName }}
                  </span>
                  <span class='float-right mr-3'>
                    {{bookstore.isOnline? '🟢' : '🔴'}}
                  </span>
                </v-flex>
              </v-layout>
            </v-tooltip>
          </span>

        </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    searchWord: '',
    isTooltipShow: false,
    bookstores: [],
    validBookstores: [],
    selectedBookstores: [],
  }),
  mounted() {
    this.getBookstores();
  },
  methods: {
    redirectToSearch() {
      if (this.searchWord === '') return;
      this.$router.push({
        path: 'searches',
        query: {
          q: this.searchWord,
          bookstores: this.selectedBookstores,
        },
      });
    },
    getBookstores() {
      const api = new URL('https://ebook.yuer.tw:8443/v1/bookstores');

      fetch(api)
        .then((response) => response.json())
        .then((bookstores) => {
          this.bookstores = bookstores;
          this.validBookstores = bookstores.filter((bookstore) => bookstore.isOnline);
          this.selectedBookstores = this.validBookstores.map((bookstore) => bookstore.id);
        });
    },
    handleTooltip() {
      this.isTooltipShow = !this.isTooltipShow;
    },
    remove(index) {
      this.selectedBookstores.splice(index, 1);
      this.selectedBookstores = [...this.selectedBookstores];
    },
  },
};
</script>

<style scoped>
.vertical-divider {
  border-left: 1px solid;
}

.theme-color {
  color: #0eb29a;
}

a {
  text-decoration: none;
}
</style>
