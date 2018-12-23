<template>
  <v-app>
    <v-toolbar app color="#0eb29a">
      <v-toolbar-title class="white--text">
        <v-avatar tile="true" class="mx-2">
          <img src="./assets/ebook-logo.png" alt="avatar">
        </v-avatar>
        <span>台灣電子書搜尋</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat><router-link to="/search">Search</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view class="view-top"/>
  </v-app>

</template>

<style lang="scss">
.view-top {
  margin-top: 58px;
}
</style>
