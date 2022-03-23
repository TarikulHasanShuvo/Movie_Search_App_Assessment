<template>
  <div id="movies">
    <div v-if="Object.keys($store.state.movies).length" v-for="movie in $store.state.movies.results"
         class="card mb-3 shadow rounded-3">
      <div class="row g-0">
        <div role="button" @click="gotoSingleMovie(movie.id)" class="col-md-1 p-0">
          <img :src="getImageUrl(movie.backdrop_path)" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-11">
          <div class="card-body">
            <h5 role="button" @click="gotoSingleMovie(movie.id)" class="card-title">
              {{ movie.original_title ? movie.original_title : '' }}</h5>
            <p class="card-text"><small class="text-muted">{{
                $moment(movie.release_date).format('DD MMMM YYYY')
              }}</small></p>
            <p class="card-text">{{ movie.overview ? movie.overview : '' }}</p>
          </div>
        </div>
      </div>
    </div>
    <h2 v-else class="text-muted text-center my-5">No movies found.</h2>

    <div v-if="Object.keys($store.state.movies).length" class="pagination">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button :class="{'disabled text-muted' : $store.state.movies.page == 1}" :disabled="$store.state.movies.page == 1" @click.prevent="$parent.$refs.searchingComponent.getMovies($store.state.movies.page-1)" class="page-link" href="#">Previous</button></li>
          <li class="page-item"><button :class="{'disabled text-muted' : $store.state.movies.total_pages == $store.state.movies.page}" :disabled="$store.state.movies.total_pages == $store.state.movies.page" @click.prevent="$parent.$refs.searchingComponent.getMovies($store.state.movies.page+1)" class="page-link" href="#">Next</button></li>
        </ul>
      </nav>
    </div>

  </div>
</template>
<script>


export default {
  name: "Movies",
  data : ()=>({
    page : 1
  }),
  methods: {
    gotoSingleMovie(id) {
      this.$router.push({name: 'singleMovie', params: {id: id}})
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