<template>
  <div class="">
    <form @submit.prevent="getAllContent">
      <div class="input-group mb-3 p-5">
        <input v-model="searchQuery" type="text" class="form-control rounded"
               placeholder="Search for a movie, tv show, person......"
               aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-warning px-5" type="submit" id="button-addon2">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
import ApiService from "@/service/api.service";

export default {
  name: "SearchingComponent",
  data: () => ({
    searchQuery: ''
  }),
  methods: {
    getAllContent() {
      if (this.searchQuery !== "") {
        this.getMovies();
        // await this.getPeoples();
        // await this.getTvShows();
        // this.$router.push('search');
      }
    },

    getMovies() {
      ApiService.get(`search/movie?query=${this.searchQuery}}`)
          .then(({data}) => {
            this.$store.commit('STORE_MOVIES', data);
            this.getPeoples();
          })
    },

    getPeoples() {
      ApiService.get(`search/person?query=${this.searchQuery}}`)
          .then(({data}) => {
            this.$store.commit('STORE_PEOPLES', data);
            this.getTvShows();
          })
    },

    getTvShows() {
      ApiService.get(`search/tv?query=${this.searchQuery}}`)
          .then(({data}) => {
            this.$store.commit('STORE_TV_SHOWS', data);
            this.$router.push('search');
          })
    },
  }
}
</script>
