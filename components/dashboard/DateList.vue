<template>
    <div class = "date-item-container">
        <p class = "set-flex-1 item">{{updateObj(dateObj.date)}}</p>
        <p class = "set-flex-1 item">{{dateObj.startTime}}</p>
        <p class = "set-flex-1 item">{{dateObj.endTime}}</p>
        <p class = "set-flex-3 item">{{dateObj.type}}</p>
        <p class = "set-flex-1 item">{{dateObj.price}}</p>
    </div>
  </template>
  
  <script>

  export default {
    props: ['dateObj'],
    methods:{
        updateObj(val){
            return new Date(val).toLocaleDateString()
        }
    }
  }
  </script>

<style scoped>
.date-item-container{
  display: flex;
  margin-top: 20px;
  background-color: #3f3e3e;
  color:white;
  flex-direction: row;
}
.set-flex-1{
    flex:1;
}
.set-flex-3{
    flex:3;
}
.item{
    display: flex;
    margin: 0px;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
</style>