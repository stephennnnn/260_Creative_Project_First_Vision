<template>
<div class="wrapper">
  <div class="pictures">
    <div class="picture" v-for="picture in pictures" :key="picture.id" style="border: solid #343a40;">
      <div class="info">
        <h1>{{picture.author}}<br>{{picture.tenure}}</h1>
      </div>
      <div class="image">
        <h1>{{picture.quote}}</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ArtList',
  props: {
    pictures: Array
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pictures {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.picture {
  margin: 10px;
  margin-top: 50px;
  width: 90%;
}

.picture .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #343a40;
  color: white;
  padding: 10px 10px;
}

.info h1 {
  font-size: 16px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

</style>
