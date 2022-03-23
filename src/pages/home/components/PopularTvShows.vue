<template>
  <div class="mt-5">
    <h3>What's Tv Shows</h3>
    <div class="row mt-4">
      <div v-for="(popularTvShow,index) in $parent.popularTvShows" class="col-2 mb-3">
        <div  role="button" @click="gotoSingleTvShow(popularTvShow.id)" v-if="index < 18" class="card border-0 shadow">
          <img width="135" height="200"
               :src="$parent.getImageUrl(popularTvShow.backdrop_path)"
               class="card-img-top" :alt="$parent.getImageUrl(popularTvShow.poster_path)">
          <div class="card-body text-center">
            <span>{{ popularTvShow.original_name ? popularTvShow.original_name : '' }}</span><br>
            <small>{{
                popularTvShow.first_air_date ? $moment(popularTvShow.first_air_date).format('DD MMMM, YYYY') : ''
              }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularTvShows",
  methods:{
    gotoSingleTvShow(id) {
      this.$router.push({name: 'singleTvShow', params: {id: id}})
    },
  }
}
</script>