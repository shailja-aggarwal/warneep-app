<template>
    <div class = "create-shift-container">
        <p class = "create-shift add-pre">Title<pre class = "pre-directive">*</pre></p>
        <input v-model = "shift.title" class = "input-container" maxlength ="100" @change = "updateVal"/>
        <p v-if = "isTitle" class = "pre-directive">Enter the mandatory field</p>
        <p class = "create-shift">Description</p>
        <textarea v-model = "shift.desc" class = "input-container" maxlength  = "500"></textarea>
        <p class = "create-shift">Date</p>
        <m-date-picker v-model="dates" :multi="multi" :always-display="false" :format="formatDate" lang="en"></m-date-picker> 
        <div v-if = "dates.length">
            <AddShiftToDate :dates = "dates" ref = "add-shift-to-date" :updateDates = "updateDates"></AddShiftToDate>

        </div>
        <div class = "button-grp" v-if = "dates.length">
            <button>DELETE</button>
            <button @click = "updateList">SAVE</button>

        </div>
        
    </div>
</template>

<script>
 import AddShiftToDate from './AddShiftToDate'

    export default{
        components: {
            AddShiftToDate
        },
        data(){
            return{
                shift: {
                    title: null,
                    desc: null,
                    datesList: null,
 
                },
                multi: true,         
                dates: [],
                isTitle: false,

            }
        },
        methods:{
            updateVal(){
                this.isTitle = false;
            },
            formatDate(date) {
                      let d = date.toLocaleDateString();
                      console.log(d);
                      return d;
            },
            updateList(){
                let val = this.$refs['add-shift-to-date'].verifyAllValues()
                if(val){
                   if(this.shift.title){
                    this.shift.datesList = this.$refs['add-shift-to-date'].dateList;
                    this.$store.commit('updateDatesList', this.shift);
                    this.$store.commit('updateAddNewShift', false)
                   } else {
                    this.isTitle = true
                   }

                }

            },
            updateDates(indx){
                this.dates.splice(indx, 1)
            }

        }
    }
</script>

<style scoped>
    .create-shift{
        margin:0px;
        font-size: 12px;
        font-weight: 500;
        color: grey;
        margin-top:10px;
    }
    .input-container{
        width:250px;
        border: 1px black solid;
    }
    textarea:focus, input:focus{
        outline: none;
    }
    .add-shift-button{
        margin-top:20px;
    }
    .add-shift-data-container{
        margin-top:20px
    }
        .date-container{
            display: flex;
            justify-content: space-between;
        }
        .date-items{
        background: #3f3e3e;
        padding: 5px;;
        }
        .time-items{
            display: flex;
        }
        .time-label{
            color: white;
            font-size: 10px;
            margin: 0px;
        }
        .date-data-container{
            margin-bottom: 20px;
        }
        .date-items input{
            margin-right: 10px;
            width:100px
        }
        .type-item input{
            width:100%
        }
        .date-label{
            margin:0px;
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
            margin-right:20px;
            width: 50%;
        }
        .button-grp{
            margin-top: 20px;
            display: flex;
            justify-content: flex-start;
            padding:20px;
        }
        .pre-directive{
            color: red;
            font-size: 12px;
        }
        .add-pre{
            display: flex;
        }
       

</style>
<style>
.container{
    padding: 0px;
}
.selected-date {
    margin:0px;
    border: 1px black solid !important;
}
</style>