<template>
    <div class = "right-menu-container add-height">
        <b-card class = "add-height scroll-update">
            <p class = "label-title">Create/Edit</p>
            <CreateShiftContainer></CreateShiftContainer>
        </b-card>
    </div>
  </template>
  
  <script>

  import CreateShiftContainer from './CreateShiftContainer'

  export default {
    components: {CreateShiftContainer},
    data(){
        return{
            
        }
    },
    methods:{

    }
  }
  </script>

<style scoped>
.right-menu-container{
  flex:1;
}
.add-height{
    height: 90vh;
}
.scroll-update{
    overflow-y: scroll;
}
.label-title{
    font-size: 20px;
    font-weight: 500;
    margin-top:5px;
}
</style>