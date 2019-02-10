<template>
  <v-container text-md-center text-sm-center text-xs-center fluid>
    <v-layout column justify-center align-center>

      <v-flex>
        <div>

          <v-img
            :src="require('@/assets/ebook-logo-bg.svg')"
            alt="ebook-logo"
            width="250"
            aspect-ratio="1"
          >
          </v-img>

        </div>
      </v-flex>

      <v-flex>
        <div class="display-3 mb-4">台灣電子書搜尋</div>
      </v-flex>

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
        <div class="headline"><i class="fab fa-twitter"></i> 在推特上追蹤我們 | 看看支援哪 8 間台灣線上電子書店</div>
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
