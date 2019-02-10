<template>
  <v-container text-md-center text-sm-center text-xs-center fluid>
    <v-layout wrap justify-center my-4>
      <div class="book-logo">
        <book-logo/>
      </div>

      <v-flex shrink my-auto>
        <div class="display-3 mb-4">台灣電子書搜尋</div>
        <v-flex>
          <v-form ref="form" @submit.prevent="redirectToSearch">
            <v-text-field
              v-model="searchword"
              label="Solo"
              placeholder="搜尋您想比價的電子書名關鍵字或 ISBN"
              append-icon="search"
              @click:append="redirectToSearch"
              solo
              clearable
            ></v-text-field>
          </v-form>
        </v-flex>
        <v-flex>
          <v-btn color="#0eb29a" class="white--text" large @click="redirectToSearch">開始搜尋</v-btn>
          <div class="img-store">
             <a class="img-flex" href="https://itunes.apple.com/tw/app/%E5%8F%B0%E7%81%A3%E9%9B%BB%E5%AD%90%E6%9B%B8%E6%90%9C%E5%B0%8B/id1279690327">
              <img class="mt-1" src="../assets/app-store-badge.svg" alt="app-store">
            </a>
          </div>
          <div class="img-store">
            <a class="img-flex" href="https://play.google.com/store/apps/details?id=liou.rayyuan.ebooksearchtaiwan">
              <img class="mt-1" src="../assets/play-store-badge.svg" alt="play-store">
            </a>
          </div>
        </v-flex>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BookLogo from '@/components/BookLogo.vue';

export default {
  name: 'home',
  components: {
    'book-logo': BookLogo,
  },
  data: () => ({
    searchword: '',
  }),
  methods: {
    redirectToSearch() {
      if (this.searchword === '') return;
      this.$router.push({ path: 'search', query: { q: this.searchword } });
    },
  },
};
</script>

<style scoped>
.img-store {
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  margin: 8px 12px;
}
.book-logo {
  width: 256px;
}
</style>
