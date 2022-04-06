<template>
<div class="wrapper">
  <div class="pictures">
    <div class="picture" v-for="picture in pictures" :key="picture.id">
      <div class="info">
        <h1>{{picture.title}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/'+picture.image">
      </div>
      <div class="price">
        <h2>{{picture.artist}}</h2>
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
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.picture {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.picture img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.picture .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  background-color: DarkRed;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

</style>
