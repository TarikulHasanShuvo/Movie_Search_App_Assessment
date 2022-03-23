<template>
  <div class="mt-5">
    <h3>Who is the popular Peoples</h3>
    <div class="row mt-4">
      <div v-for="(popularPeople,index) in $parent.popularPeoples" class="col-2 mb-3">
        <div role="button" @click="gotoSinglePeople(popularPeople.id)" v-if="index < 18" class="card border-0 shadow">
          <img width="135" height="200"
               :src="$parent.getImageUrl(popularPeople.profile_path)"
               class="card-img-top" :alt="$parent.getImageUrl(popularPeople.profile_path)">
          <div class="card-body text-center">
            <span>{{ popularPeople.name ? popularPeople.name : '' }}</span><br>
            <small>{{
                popularPeople.known_for_department ? popularPeople.known_for_department : ''
              }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopularPeoples",
  methods: {
    gotoSinglePeople(id) {
      this.$router.push({name: 'singlePeople', params: {id: id}})
    },
  }
}
</script>