<template>
  <div id="movies">
    <div v-if="Object.keys($store.state.tv_shows).length" v-for="tvShow in $store.state.tv_shows.results"
         class="card mb-3 shadow rounded-3">
      <div class="row g-0">
        <div @click="gotoSingleTvShow(tvShow.id)" role="button" class="col-md-1 p-0">
          <img :src="getImageUrl(tvShow.backdrop_path)" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-11">
          <div class="card-body">
            <h5 @click="gotoSingleTvShow(tvShow.id)" role="button" class="card-title">{{ tvShow.original_name ? tvShow.original_name : '' }}</h5>
            <p v-if="tvShow.first_air_date !=null" class="card-text"><small class="text-muted">{{
                $moment(tvShow.first_air_date).format('DD MMMM YYYY')

              }}</small></p>
            <p class="card-text">{{ tvShow.overview ? tvShow.overview : '' }}</p>
          </div>
        </div>
      </div>
    </div>
    <h2 v-else class="text-muted text-center my-5">No Tv Shows found.</h2>
  </div>
</template>

<script>
export default {
  name: "TvShows",
  methods: {
    gotoSingleTvShow(id) {
      this.$router.push({name: 'singleTvShow', params: {id: id}})
    },
    getImageUrl(url) {
      if(url != null) return process.env.VUE_APP_IMAGE_BASE_URL + url;
      else return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB70BErXiHUgPWX6-titEvYqTYQsV5kzqEKw&usqp=CAU';
    }
  }
}
</script>

<style scoped>

</style>