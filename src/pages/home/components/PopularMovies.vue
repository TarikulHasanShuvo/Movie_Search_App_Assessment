<template>
  <div class="mt-5">
    <h3>What's Popular Movies</h3>
    <div class="row mt-4">
      <div v-for="(popularMovie,index) in $parent.popularMovies" class="col-2 mb-3">
        <div role="button" @click="gotoSingleMovie(popularMovie.id)" v-if="index < 18" class="card border-0 shadow">
          <img width="135" height="200"
               :src="$parent.getImageUrl(popularMovie.backdrop_path)"
               class="card-img-top" :alt="$parent.getImageUrl(popularMovie.poster_path)">
          <div class="card-body text-center">
            <span>{{ popularMovie.original_title ? popularMovie.original_title : '' }}</span><br>
            <small>{{
                popularMovie.release_date ? $moment(popularMovie.release_date).format('DD MMMM, YYYY') : ''
              }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularMovies",
  methods: {
    gotoSingleMovie(id) {
      this.$router.push({name: 'singleMovie', params: {id: id}})
    },
  }
}
</script>
