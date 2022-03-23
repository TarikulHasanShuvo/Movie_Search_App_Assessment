<template>
  <div class="single-movie">
    <div v-if="movie" class="content"
         :style="`background-image: url(${getImageUrl(movie.poster_path)})`">
      <div class="layer">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <img :src="getImageUrl(movie.poster_path)" class="img-fluid" :alt="getImageUrl(movie.backdrop_path)">
            </div>
            <div class="col-9 my-auto ps-5">
              <h1>{{ movie.original_title }} <span class="fw-lighter">({{
                  $moment(movie.release_date).format('YYYY')
                }})</span></h1>
              <p v-if="movie.genres">Type :
                <span v-for="(genre,index) in movie.genres">
                {{ genre.name }}{{ movie.genres.length > index + 1 ? ', ' : '.' }}
                </span>
              </p>
              <p v-if="movie.vote_count"><span>Total Vote : {{ movie.vote_count }}</span>
                <span class="ms-5">Average Vote :
                  {{
                    movie.vote_average
                  }}
                </span>
                <span class="ms-5">Popularity Vote : {{
                    movie.popularity
                  }}</span></p>
              <p><i>{{ movie.tagline ? movie.tagline : '' }}</i></p>
              <h3>Overview</h3>
              <p>{{ movie.overview ? movie.overview : '' }}.</p>
              <h4>Production Company</h4>
              <div class="row pt-3">
                <div v-for="production_company  in movie.production_companies" class="col">
                  <h6>{{ production_company.name ? production_company.name : '' }}</h6>
                  <p>{{ production_company.origin_country ? production_company.origin_country : '' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-10">
          <h3 class="mb-4">Languages </h3>
          <div v-if="movie.spoken_languages" class="row">
            <div v-for="language in movie.spoken_languages" class="col-3 mb-3">
              <div class="card shadow border-0 py-3">
                <div class="card-body">
                  <h6 class="card-title">English Name : {{ language.english_name ? language.english_name : '' }}</h6>
                  <span>Name : {{ language.name ? language.name : '' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="">
            <h6>Status</h6>
            <p>{{ movie.status ? movie.status : '' }}</p>
          </div>
          <div class="">
            <h6>Budget</h6>
            <p>{{ movie.budget ? ('$' + movie.budget) : 0 }}</p>
          </div>
          <div class="">
            <h6>Revenue</h6>
            <p>{{ movie.revenue ? ('$' + movie.revenue) : 0 }}</p>
          </div>
        </div>
      </div>
    </div>
    <loading v-model:active="isLoading" :is-full-page="true"/>
  </div>
</template>

<script>
import ApiService from "@/service/api.service";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "SingleSearch",
  components: {
    Loading
  },
  data: () => ({
    movie: {},
    isLoading : true
  }),
  mounted() {
    this.getSingleMovie()
  },
  methods: {
    getSingleMovie() {
      ApiService.get(`movie/${this.$route.params.id}`)
          .then(({data}) => {
            this.movie = data;
          }).finally(()=> this.isLoading = false)
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