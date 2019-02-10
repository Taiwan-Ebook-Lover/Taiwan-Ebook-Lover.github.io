<template>
  <v-app>
    <v-toolbar app :color="toolBarColor">
      <v-toolbar-title :class="toolBarTitleClass">
        <v-avatar tile="true" class="ma-2">
          <img src="./assets/ebook-logo.svg" alt="ebook-logo">
        </v-avatar>
        <span class="hidden-xd-and-down">台灣電子書搜尋</span>
      </v-toolbar-title>

      <v-spacer/>

      <v-toolbar-items class="hidden-sm-and-down mr-2">
        <a class="img-flex" href="https://itunes.apple.com/tw/app/%E5%8F%B0%E7%81%A3%E9%9B%BB%E5%AD%90%E6%9B%B8%E6%90%9C%E5%B0%8B/id1279690327">
          <img src="./assets/app-store-badge.svg" alt="app-store">
        </a>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-sm-and-down mr-2">
        <a class="img-flex" href="https://play.google.com/store/apps/details?id=liou.rayyuan.ebooksearchtaiwan">
          <img src="./assets/play-store-badge.svg" alt="play-store">
        </a>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-md-and-up mr-2">
        <v-btn flat :class="fontColor" @click="isDialogShow = true" >Get App</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view :class="routeViewBackgoundColor"/>

    <v-dialog
      v-model="isDialogShow"
      max-width="350"
    >
      <v-card>
        <v-card-title class="headline">Get App</v-card-title>

        <v-layout row wrap>
          <v-flex mx-4 my-3 xs12>
            <a href="https://itunes.apple.com/tw/app/%E5%8F%B0%E7%81%A3%E9%9B%BB%E5%AD%90%E6%9B%B8%E6%90%9C%E5%B0%8B/id1279690327">
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
      return this.$route.path === '/' ? 'elevation-0' : '#0eb29a';
    },
    fontColor() {
      return this.$route.path === '/' ? '' : 'white--text';
    },
    routeViewBackgoundColor() {
      return this.$route.path === '/' ? 'view-top bg-grey' : 'view-top';
    },
    toolBarTitleClass() {
      return this.$route.path === '/' ? 'disable-all' : 'white--text';
    },
  },
  data: () => ({
    isDialogShow: false,
  }),
};
</script>

<style lang="scss" scoped>
.view-top {
  margin-top: 48px;
}

.img-flex {
  display: flex;
}

.disable-all {
  display: none;
}

.bg-grey {
  background: #f5f5f5;
}
</style>

<style>
body {
  font-family: "Microsoft JhengHei", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
