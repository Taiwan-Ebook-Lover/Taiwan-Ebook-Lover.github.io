<template>
  <v-container text-md-center text-sm-center text-xs-center fluid>
    <v-layout row wrap>

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

      <v-flex xs12>
        <div class="headline grey--text">
          <span class="hidden-xs-only"><i class="fab fa-twitter"></i>在推特上追蹤我們</span>
          <span class="hidden-xs-only mx-4 vertical-divider"></span>
          <span>看看支援哪 8 間台灣線上電子書店</span>
        </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
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
.vertical-divider {
  border-left: 1px solid;
}
</style>
