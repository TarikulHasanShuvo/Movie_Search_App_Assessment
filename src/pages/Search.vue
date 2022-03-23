<template>
  <div class="search container">
    <SearchingComponent ref="searchingComponent"/>
    <div class="row">
      <div class="col-3">
        <SearchResultCategories/>
      </div>
      <div class="col-9">
        <Movies v-if="activeCategory.name === 'movies'"/>
        <Peoples v-if="activeCategory.name === 'peoples'"/>
        <TvShows v-if="activeCategory.name === 'tv_shows'"/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResultCategories from "@/components/SearchResultCategories";
import Movies from "@/components/Movies";
import SearchingComponent from "@/components/SearchingComponent";
import Peoples from "@/components/Peoples";
import TvShows from "@/components/TvShows";

export default {
  name: "Search",
  components: {TvShows, Peoples, SearchingComponent, Movies, SearchResultCategories},
  data: () => ({
    searchingCategories: [
      {name: 'movies',},
      {name: 'peoples',},
      {name: 'tv_shows',}
    ],
    activeCategory: {}
  }),
  mounted() {
    this.activeCategory = this.searchingCategories[0];
  },
  methods: {}
}
</script>

<style scoped>

</style>