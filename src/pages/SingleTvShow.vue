<template>
  <div class="single-movie">
    <div v-if="tvShow" class="content"
         :style="`background-image: url(${getImageUrl(tvShow.poster_path)})`">
      <div class="layer">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <img :src="getImageUrl(tvShow.poster_path)" class="img-fluid" :alt="getImageUrl(tvShow.backdrop_path)">
            </div>
            <div class="col-9 my-auto ps-5">
              <h1>{{ tvShow.name }} <span v-if="tvShow.first_air_date" class="fw-lighter">({{
                  $moment(tvShow.first_air_date).format('YYYY')
                }})</span></h1>
              <p v-if="tvShow.genres">Type :
                <span v-for="(genre,index) in tvShow.genres">
                {{ genre.name }}{{ tvShow.genres.length > index + 1 ? ', ' : '.' }}
                </span>
              </p>
              <p v-if="tvShow.vote_count"><span>Total Vote : {{ tvShow.vote_count }}</span>
                <span class="ms-5">Average Vote :
                  {{
                    tvShow.vote_average
                  }}
                </span>
                <span class="ms-5">Popularity Vote : {{
                    tvShow.popularity
                  }}</span></p>
              <p><i>{{ tvShow.tagline ? tvShow.tagline : '' }}</i></p>
              <h3>Overview</h3>
              <p>{{ tvShow.overview ? tvShow.overview : '' }}.</p>
              <h4 v-if="tvShow.production_companies">Production Company</h4>
              <div class="row pt-3">
                <div v-for="production_company  in tvShow.production_companies" class="col">
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
          <div v-if="tvShow.spoken_languages" class="row">
            <div v-for="language in tvShow.spoken_languages" class="col-3 mb-3">
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
          <div v-if="tvShow.created_by" class="">
            <h6>Creator</h6>
           <div class="d-flex">
             <img :src="getImageUrl(tvShow.created_by[0]?.profile_path)" class="border rounded " width="80" height="80" alt="">
             <h6 class="ms-2 my-auto">{{tvShow.created_by[0] ? tvShow.created_by[0].name : '' }}</h6>
           </div>
          </div>
          <div class="mt-3">
            <h6>Status</h6>
            <p>{{ tvShow.status ? tvShow.status : '' }}</p>
          </div>
        </div>
      </div>
    </div>
    <loading v-model:active="isLoading" :is-full-page="true"/>
  </div>
</template>

<script>
import ApiService from "@/service/api.service";
import Loading from "vue-loading-overlay";

export default {
  name: "SingleTvShow",
  components: {
    Loading
  },
  data: () => ({
    tvShow: {},
    isLoading : true
  }),
  mounted() {
    this.getSingleTvShow()
  },
  methods: {
    getSingleTvShow() {
      ApiService.get(`tv/${this.$route.params.id}`)
          .then(({data}) => {
            this.tvShow = data
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