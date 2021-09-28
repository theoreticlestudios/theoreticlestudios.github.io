<template>
   <div class="row" style="height: 100vh">
    <div class="col-3" id="navbar-col">
      <p class="text-h2 abril text-white" style="text-align: left; padding-top: 4vh; padding-left: 2vw">Theoreticle<br>Studios</p>

    </div>
    <div class="col-9">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
#navbar-col {
  background-image: linear-gradient(rgba(53, 0, 211, 0.7), rgba(53, 0, 211, 0.5)), url("../assets/90-deg-rotatedgigabyte.png");
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
}
.abril {
  font-family: "Abril Fatface";
}

</style>
