<template>
    <div class = "filter-container">
      <p class = "label-title">Filter</p>
      <div class = "filter-slider">
        <p class = "filter-label">Filter on Price</p>
        <input type="range" min="0" max="100" value="50" class="slider" v-model="sliderValue" />
        {{ sliderValue }}
      </div>
    </div>
  </template>
  
  <script>



  export default {
    data(){
      return{
        sliderValue: 50
      }
    },
  }
  </script>

<style scoped>
.filter-container{

}
.label-title{
  font-size: 20px;
  font-weight: 500;
}
.filter-slider{
  display: flex;
}
.filter-label{
  padding: 0px;
  margin: 0px;
  margin-right: 5%;

}
</style>