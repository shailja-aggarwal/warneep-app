<template>
    <div class = "dashboard-container" >
        <b-card class = "dashboard-card-container add-height-container" :class =  "!isAddNewShift ? 'add-padding' : 'add-right-padding'">
            <div class = "dashboard-card-container">
                <FilterTime/>
                <ShiftList/>
            </div>
        </b-card>
    </div>
  </template>
  
  <script>

  import ShiftList from './ShiftList';
  import FilterTime from './FilterTime';
  import { mapState } from 'vuex'

   export default {
     components:{
        ShiftList,
        FilterTime,
     },
     computed: mapState({
    isAddNewShift: state => state.isAddNewShift,
    }),
    }
  </script>

  <style scoped>
  .dashboard-container{
    flex:3;
    height: 90vh;
    
  }
  .add-height-container{
    height: 90vh;
    overflow-y: scroll;

  }
  .dashboard-card-container{
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    
  }
  .add-padding{
    padding-right: 15%;
    padding-left: 15%;
  }
  .add-right-padding{
    padding-left: 15%;
  }
</style>