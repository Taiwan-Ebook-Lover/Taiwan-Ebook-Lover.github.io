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
    <div>Search</div>
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
    selectedCompanies: [],
    selectedSort: '',
    searchword: '',
  })
};
</script>


<style lang="scss">
.bg-grey {
  background-color: #f2f2f2;
}
</style>
