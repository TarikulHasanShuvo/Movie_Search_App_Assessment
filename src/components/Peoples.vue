<template>
  <div id="people">
    <div v-if="Object.keys($store.state.peoples).length" v-for="people in $store.state.peoples.results"
         class="card mb-4 border-0 shadow">
      <div class="row">
        <div @click="gotoSinglePeople(people.id)" role="button" class="col-md-1 p-0">
          <img :src="getImageUrl(people.profile_path)" class="img-thumbnail" height="90" width="100" alt="...">
        </div>
        <div class="col-md-11">
          <div class="card-body">
            <h5 @click="gotoSinglePeople(people.id)" role="button" class="card-title">{{ people.name ? people.name : '' }}</h5>
            <p v-if="people.known_for" class="card-text">Acting : <span v-for="(acting,index) in people.known_for">
              {{ acting.original_name ? acting.original_name : acting.original_title }}
              <span
                  v-if="acting.original_name || acting.original_title">{{
                  people.known_for.length > index + 1 ? ',' : '.'
                }}</span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2 v-else class="text-muted text-center my-5">No Peoples found.</h2>
    <div v-if="Object.keys($store.state.peoples).length" class="pagination">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button :class="{'disabled text-muted' : $store.state.peoples.page == 1}" :disabled="$store.state.peoples.page == 1" @click.prevent="$parent.$refs.searchingComponent.getMovies($store.state.peoples.page-1)" class="page-link" href="#">Previous</button></li>
          <li class="page-item"><button :class="{'disabled text-muted' : $store.state.peoples.total_pages == $store.state.peoples.page}" :disabled="$store.state.peoples.total_pages == $store.state.peoples.page" @click.prevent="$parent.$refs.searchingComponent.getPeoples($store.state.peoples.page+1)" class="page-link" href="#">Next</button></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Peoples",
  methods: {
    gotoSinglePeople(id) {
      this.$router.push({name: 'singlePeople', params: {id: id}})
    },
    getImageUrl(url) {
      if (url != null) return process.env.VUE_APP_IMAGE_BASE_URL + url;
      else return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNa8QCSDzzexFjhnpHPmHLRZQzXFPStVORDg&usqp=CAU';
    }
  }
}
</script>

<style scoped>

</style>