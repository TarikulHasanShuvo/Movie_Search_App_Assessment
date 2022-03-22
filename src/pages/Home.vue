<template>
  <div>
    <div class="input-group mb-3 p-5">
      <input v-model="searchQuery" type="text" class="form-control rounded"
             placeholder="Search for a movie, tv show, person......"
             aria-label="Recipient's username" aria-describedby="button-addon2">
      <button @click="getAllContent" class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
    </div>

  </div>
</template>
<script>
import ApiService from "@/service/api.service";

export default {
  name: "Home",
  data: () => ({
    searchQuery: ''
  }),
  methods: {
    getAllContent() {
      if (this.searchQuery !== "") {
        this.getMovies();
      }
    },

    getMovies() {
      ApiService.get(`search/movie?query=${this.searchQuery}}`).then(res => {
        console.log("movies : ", res)
        this.getPeoples()
      })
    },

    getPeoples() {
      ApiService.get(`search/person?query=${this.searchQuery}}`).then(res => {
        console.log("people : ", res)
        this.getTvShows()
      })
    },

    getTvShows() {
      ApiService.get(`search/tv?query=${this.searchQuery}}`).then(res => {
        console.log("tv : ", res)
      })
    },
  }
}
</script>

<style scoped>

</style>