<template>
    <div class = "shift-list-container">
        <div class = "shift-button">
            <p class = "label-title">Shifts</p>
            <button @click = "AddShift">ADD SHIFT</button>
        </div>
        <div v-if = "listItem && listItem.length">
            <div v-for = "item in listItem">
                <ListItem :data = "item"/>
            </div>
        </div>
        <b-card v-else class = "no-data-container">
            <p>No Data Available</p>
        </b-card>
    </div>
  </template>
  
  <script>

  import ListItem from './ListItem';
  import { mapState } from 'vuex'


  export default {
    components: {ListItem},
    computed: mapState({
        listItem: state => state.listItem,
    }),
    methods:{
        AddShift(){
            this.$store.commit('updateAddNewShift', true)
        },
    },
    data(){
        return{
            // listItem:[
            //     {
            //         title:'test1',
            //         desc: 'sertok drfyghjinok trfyugjoikp drt',
            //         datesList: [
            //             {
            //                 date: '12/02/2023',
            //                 startTime: '12:00',
            //                 endTime: '5:00',
            //                 type: 'Comsumption',
            //                 price: '4'
            //             },
            //             {
            //                 date: '12/02/2023',
            //                 startTime: '12:00',
            //                 endTime: '5:00',
            //                 type: 'Comsumption',
            //                 price: '4'
            //             },
            //             {
            //                 date: '12/02/2023',
            //                 startTime: '12:00',
            //                 endTime: '5:00',
            //                 type: 'Comsumption',
            //                 price: '4'
            //             },
            //             {
            //                 date: '12/02/2023',
            //                 startTime: '12:00',
            //                 endTime: '5:00',
            //                 type: 'Comsumption',
            //                 price: '4'
            //             }
            //         ]
            //     },
            //     {
            //         title:'test2',
            //         desc: 'sertok drfyghjinok trfyugjoikp drt',
            //         datesList: [
            //             {
            //                 date: '12/02/2023',
            //                 startTime: '12:00',
            //                 endTime: '5:00',
            //                 type: 'Comsumption',
            //                 price: '4'
            //             },
            //         ]
            //     },
            //     {
            //         title:'test3',
            //         desc: 'sertok drfyghjinok trfyugjoikp drt',
            //         datesList: [
            //             {
            //                 date: '12/02/2023',
            //                 startTime: '12:00',
            //                 endTime: '5:00',
            //                 type: 'Comsumption',
            //                 price: '4'
            //             },
            //             {
            //                 date: '12/02/2023',
            //                 startTime: '12:00',
            //                 endTime: '5:00',
            //                 type: 'Comsumption',
            //                 price: '4'
            //             },
            //         ]
            //     }
            // ]
        }
    }
  }
  </script>

<style scoped>
.shift-list-container{
    margin-top: 5%;

}
.shift-button{
    display: flex;
    justify-content: space-between;
}
.label-title{
    font-size: 20px;
    font-weight: 500;
    margin-top:5px;
}
button{
    padding: 10px;
    margin: 0px;
    background: black;
    color: white;
    font-size: 12px;
    border-radius: 5px;
    height: 10%;
    padding: 8px;
}
.no-data-container{
    background: white;
    margin-top:20px;
    color: black;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>