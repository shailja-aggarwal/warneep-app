<template>
    <b-card class = "list-item-container shadow-sm p-3 mb-5 bg-white rounded">
        <div class = "label-icon-group">
            <p class = "item-title">{{data.title}}</p>
            <b-icon icon="pencil-fill" style="colour: black"></b-icon>
        </div>  
        <p class = "item-desc">{{data.desc}}</p>
        <p class = "item-title">Dates</p>
        <div v-for = "item in data.datesList">
            <DateList :dateObj = "item"></DateList>
        </div>
    </b-card>
  </template>
  
  <script>
  import DateList from './DateList.vue'
  import { BIcon} from 'bootstrap-vue'


  export default {
    props: ['data'],
    components:{
        DateList,
        BIcon,
    }
  }
  </script>

<style scoped>

.list-item-container{
  display: flex;
  flex:1;
  background-color: white;
  margin: 0px;
  padding: 0px;
  margin-top: 20px;
}


.list-item-container .card-body{
    margin: 0px;
    padding: 0px;
  }
  


.item-title{
    font-size: 18px;
    font-weight: 500;
}
.item-desc{
    font-size: 15px;
    font-weight: 400;
}

.label-icon-group{
    display: flex;
    justify-content: space-between;
}


</style>