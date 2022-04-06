<template>
  <div class="bgimg" style="margin-top: 20px; margin-bottom: 20px;">
    <div class="middle">
      <h1>Welcome</h1>
      <hr style="background-color: black;">
      <p>This website is a resource for information about Joseph Smith and his first vision.</p>
    </div>
  </div>
</template>

<style>
.bgimg {
  background-image: url("../../images/grove.jpeg");
  background-color: pink;
  height: 700px;
  width: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
}

.middle {
  border-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
  font-weight: bold;
  background-color: lightgrey;
  opacity: 0.5;
}

hr {
  margin: auto;
  width: 69%;
  background-color: white;
}

p {

}

</style>
