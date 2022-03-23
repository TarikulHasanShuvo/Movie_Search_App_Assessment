<template>
  <div class="">
    <form @submit.prevent="getAllContent" class=" mb-3 p-5">
      <div class="input-group">
        <input v-model="$store.state.searchQuery" type="text" @keyup="error=false" class="form-control rounded"
               placeholder="Search for a movie, tv show, person......"
               aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-warning px-5" type="submit" id="button-addon2">Search</button>

      </div>
      <span v-if="error" class="text-danger">Search field is required.</span>
    </form>
    <loading v-model:active="isLoading"
             :can-cancel="true"
             :is-full-page="true"/>
  </div>
</template>

<script>
import ApiService from "@/service/api.service";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "SearchingComponent",
  components: {
    Loading
  },
  data: () => ({
    error: false,
    isLoading: false
  }),
  methods: {
    async getAllContent() {
      if (this.$store.state.searchQuery !== "") {
        this.isLoading = true;
        await this.getMovies();
        await this.getPeoples();
        await this.getTvShows();
        await this.$router.push('search');
      } else this.error = true;
    },

    getMovies(page = 1) {
      if (page > 1) this.isLoading = true;
      ApiService.get(`search/movie?query=${this.$store.state.searchQuery}&page=${page}`)
          .then(({data}) => {
            this.$store.commit('STORE_MOVIES', data);
            if (page > 1) this.isLoading = false;
          })
    },

    getPeoples(page = 1) {
      if (page > 1) this.isLoading = true;
      ApiService.get(`search/person?query=${this.$store.state.searchQuery}&page=${page}`)
          .then(({data}) => {
            this.$store.commit('STORE_PEOPLES', data);
            if (page > 1) this.isLoading = false;
          })
    },

    getTvShows(page = 1) {
      if (page > 1) this.isLoading = true;
      ApiService.get(`search/tv?query=${this.$store.state.searchQuery}&page=${page}`)
          .then(({data}) => {
            this.$store.commit('STORE_TV_SHOWS', data);
            this.isLoading = false;
          })
    }
  }
}
</script>
