<template>
  <div class="search-categories">
    <div class="card">
      <div class="card-header bg-info fw-bold text-white">
        Search Results
      </div>
      <div class="card-body px-0 ">
        <ol class="list-group">
          <li @click="$parent.activeCategory = searchCategory" :key="index" v-for="(searchCategory,index) in $parent.searchingCategories"
              class="list-group-item" :class="{'active' : $parent.activeCategory == searchCategory}">
            <div class="text-capitalize">{{ searchCategory.name.replace('_', ' ') }}</div>
            <span class="badge bg-secondary rounded-pill">
              {{
                Object.keys($store.state[`${searchCategory.name}`]).length ? $store.state[`${searchCategory.name}`].total_results : 0
              }}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResultCategories"
}
</script>

<style scoped>

</style>