<template>
  <div class="people">
    <div class="container">
      <div class="row mt-5">
        <div class="col-3">
          <img class="rounded" :src="getImageUrl(people.profile_path)" style="width: 100%"
               alt="">
          <div class="mt-5">
            <h4>Personal Information</h4>
            <div v-if="people.known_for_department" class="mt-4">
              <h6>Known For</h6>
              <span>{{ people.known_for_department }}</span>
            </div>
            <div v-if="people.birthday" class="mt-4">
              <h6>Birth Day</h6>
              <span>{{ $moment(people.birthday).format('DD MMMM, YYYY') }}</span>
            </div>
            <div v-if="people.deathday" class="mt-4">
              <h6>Death Day</h6>
              <span>{{ $moment(people.deathday).format('DD MMMM, YYYY') }}</span>
            </div>
            <div v-if="people.place_of_birth" class="mt-4">
              <h6>Place of Birth</h6>
              <span>{{ people.place_of_birth }}</span>
            </div>
            <div class="mt-4">
              <h6>Also Known As</h6>
              <p v-if="people.also_known_as" v-for="knownAs in people.also_known_as">{{ knownAs }}</p>
            </div>
          </div>
        </div>
        <div class="col-9">
          <h1>{{ people.name ? people.name : '' }}</h1>
          <div class="mt-5">
            <h4>Biography</h4>
            <p>{{ people.biography ? people.biography : '' }}</p>
          </div>
          <div v-if="peopleExtraInfo" class="mt-5">
            <h4>Known For</h4>
            <div class="row">
              <div v-for="knownFor in peopleExtraInfo" class="col-2 mb-3">
                <div class="card border-0 shadow">
                  <img width="135" height="135"
                       :src="getImageUrl(knownFor.backdrop_path)"
                       class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-title text-center">{{ knownFor.original_name ? knownFor.original_name : '' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "@/service/api.service";

export default {
  name: "singlePeople",
  data: () => ({
    people: {},
    peopleExtraInfo: []
  }),
  async mounted() {
    await this.getSinglePeople()
    await this.getPeopleExtraInfo()
  },
  methods: {
    getSinglePeople() {
      ApiService.get(`person/${this.$route.params.id}`)
          .then(({data}) => {
            this.people = data
          })
    },
    getImageUrl(url) {
      if (url != null) return process.env.VUE_APP_IMAGE_BASE_URL + url;
      else return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB70BErXiHUgPWX6-titEvYqTYQsV5kzqEKw&usqp=CAU';
    },
    getPeopleExtraInfo() {
      this.peopleExtraInfo = this.$store.state.peoples.results.filter(people => people.id == this.$route.params.id)[0]?.known_for
    }
  },


}
</script>

<style scoped>

</style>