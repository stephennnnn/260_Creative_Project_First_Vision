<template>
  <div class="container">
    <div class="card" style="text-align: center; background-color: #343a40; color: white; padding: 10px; margin-top: 20px;">
      <h2 style="color:  #28a745;">Quotes on the First Vision from LDS Prophets</h2>
    </div>
    <div>
      <ArtList :pictures="this.$root.$data.data" />
    </div>
  </div>
</template>

<script>
import ArtList from "../components/ArtList.vue"
export default {
  name: 'HomeView',
  components: {
    ArtList
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
