<template>
  <div class = "main-container">
    <Dashboard/>
    <RightMenu v-if = "isAddNewShift"></RightMenu>
  </div>
</template>

<script>

import Dashboard from './dashboard/Dashboard.vue';
import RightMenu from './rightMenu/RightMenu.vue';
import { mapState } from 'vuex'


export default {
  components:{
    Dashboard,
    RightMenu,
  },
  computed: mapState({
    isAddNewShift: state => state.isAddNewShift,
    }),
}
</script>

<style scoped>

.main-container{
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    background:#dadada;
    height: 100vh;
}

</style>