<template>
  <v-app>
    <v-toolbar app color="#0eb29a">
      <v-toolbar-title class="white--text">
        <v-avatar tile="true" class="mx-2">
          <img src="./assets/ebook-logo.png" alt="ebook-logo">
        </v-avatar>
        <span>台灣電子書搜尋</span>
      </v-toolbar-title>
      <v-spacer/>

      <v-toolbar-items class="hidden-sm-and-down mr-2">
        <a class="img-flex" href="https://play.google.com/store/apps/details?id=liou.rayyuan.ebooksearchtaiwan">
          <img src="./assets/play-store-badge.svg" alt="play-store">
        </a>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-sm-and-down">
        <a class="img-flex" href="https://itunes.apple.com/tw/app/%E5%8F%B0%E7%81%A3%E9%9B%BB%E5%AD%90%E6%9B%B8%E6%90%9C%E5%B0%8B/id1279690327">
          <img src="./assets/app-store-badge.svg" alt="app-store">
        </a>
      </v-toolbar-items>
    </v-toolbar>
    <router-view class="view-top"/>
  </v-app>

</template>

<style lang="scss" scoped>
.view-top {
  margin-top: 58px;
}
.img-flex {
  display: flex;
}
</style>

<style>
body {
  font-family: "Microsoft JhengHei", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
