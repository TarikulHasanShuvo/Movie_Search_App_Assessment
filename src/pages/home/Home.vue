<template>
  <div id="home" class="container">
    <div class="search-container">
      <div class="text">
        <h1>Welcome.</h1>
        <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
      </div>
      <SearchingComponent/>
    </div>
    <PopularMovies/>
    <PopularTvShows/>
    <PopularPeoples/>
  </div>
</template>
<script>


import SearchingComponent from "@/components/SearchingComponent";
import PopularMovies from "@/pages/home/components/PopularMovies";
import PopularTvShows from "@/pages/home/components/PopularTvShows";
import PopularPeoples from "@/pages/home/components/PopularPeoples";
import ApiService from "@/service/api.service";

export default {
  name: "Home",
  components: {PopularPeoples, PopularTvShows, PopularMovies, SearchingComponent},
  data: () => ({
    popularMovies: {},
    popularTvShows: {},
    popularPeoples: {}
  }),
  mounted() {
    this.getPopularMovies();
    this.getPopularTvShows()
    this.getPopularPeoples()
  },
  methods: {

    getPopularMovies() {
      ApiService.get('movie/popular')
          .then(({data}) => {
            this.popularMovies = data.results;
          })
    },

    getPopularPeoples() {
      ApiService.get('person/popular')
          .then(({data}) => {
            this.popularPeoples = data.results
          })
    },

    getPopularTvShows() {
      ApiService.get('tv/popular')
          .then(({data}) => {
            this.popularTvShows = data.results
          })
    },
    getImageUrl(url) {
      if (url != null) return process.env.VUE_APP_IMAGE_BASE_URL + url;
      else return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB70BErXiHUgPWX6-titEvYqTYQsV5kzqEKw&usqp=CAU';
    }
  }
}
</script>

<style scoped>

</style>