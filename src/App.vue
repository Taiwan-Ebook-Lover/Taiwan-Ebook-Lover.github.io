<template>
  <v-app>
    <v-toolbar short class="elevation-0" :color="toolBarColor">
      <v-toolbar-title :class="toolBarTitleClass" class="home" @click="redirectHome">
        <v-avatar tile class="ma-2" size="40">
          <img src="./assets/ebook-logo.svg" alt="ebook-logo" />
        </v-avatar>
        <span class="hidden-xs-only">台灣電子書搜尋</span>
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down mr-2">
        <a class="img-flex" href="https://denkeni.medium.com/farewell-ebooktw-ios-dea6fd5e542b">
          <img src="./assets/app-store-badge.svg" alt="app-store" />
        </a>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-sm-and-down mr-2">
        <a
          class="img-flex"
          href="https://play.google.com/store/apps/details?id=liou.rayyuan.ebooksearchtaiwan"
        >
          <img src="./assets/play-store-badge.svg" alt="play-store" />
        </a>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-md-and-up mr-2">
        <v-btn :class="fontColor" @click="isDialogShow = true">Get App</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view :class="routeViewBackgoundColor" />

    <v-dialog v-model="isDialogShow" max-width="350">
      <v-card>
        <v-layout row wrap>
          <v-flex mx-4 my-4 xs12>
            <a href="https://denkeni.medium.com/farewell-ebooktw-ios-dea6fd5e542b">
              <v-img :src="require('./assets/app-store-badge.svg')" alt="app-store"></v-img>
            </a>
          </v-flex>

          <v-flex mx-4 mb-4 xs12>
            <a href="https://play.google.com/store/apps/details?id=liou.rayyuan.ebooksearchtaiwan">
              <v-img :src="require('./assets/play-store-badge.svg')" alt="play-store"></v-img>
            </a>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'ebook-search',
  computed: {
    toolBarColor() {
      return this.$route.path === '/' ? '#f5f5f5' : '#0eb29a';
    },
    fontColor() {
      return this.$route.path === '/' ? 'grey--text text--darken-1' : 'grey--text';
    },
    routeViewBackgoundColor() {
      return this.$route.path === '/' ? 'bg-grey height-100' : 'height-100';
    },
    toolBarTitleClass() {
      return this.$route.path === '/' ? 'disable-all' : 'white--text';
    },
  },
  data: () => ({
    isDialogShow: false,
  }),
  methods: {
    redirectHome() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  cursor: pointer;
}

.img-flex {
  display: flex;
}

.disable-all {
  display: none;
}

.height-100 {
  height: 100vh;
}

.bg-grey {
  background: #f5f5f5;
}
</style>

<style>
body {
  font-family: 'Microsoft JhengHei', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
