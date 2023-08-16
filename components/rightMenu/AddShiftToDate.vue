<template>
    <div class = "add-shift-data-container">
        <div v-for = "(date, index) in dateList">
            <div class = "date-data-container">
                <div class = "date-container">
                    <p class = "date-label">{{formatDate(dateList[index].date)}}</p>
                    <b-icon icon="x" style="colour: black" @click = "cancelDate(index,dateList[index].date )"></b-icon>
                </div>
                <div class = "date-items">
                    <div class = "time-items">
                        <div>
                            <p class = "time-label" >StartTime<pre class = "pre-directive">*</pre></p>
                            <input type = "time" v-model = "dateList[index].startTime" @change="updateVal(index)"/>
                        </div>
                        <div>
                            <p class = "time-label" >EndTime<pre class = "pre-directive">*</pre></p>
                            <input type = "time" v-model = "dateList[index].endTime" :min="dateList[index].startTime" @change="updateVal(index)"/>
                        </div>
                        <div>
                            <p class = "time-label"   >Price<pre class = "pre-directive">*</pre></p>
                            <input type = "number" v-model = "dateList[index].price" value = "0" @change="updateVal(index)"/>
                        </div>
                    </div>
                    <div class = "type-item">
                        <p class = "time-label" >Type<pre class = "pre-directive">*</pre></p>
                        <select v-model = "dateList[index].type" @change="updateVal(index)">
                            <option disabled value="">Please Select</option>
                            <option v-for="option in options" :value="option">{{option}}</option>
                          </select>
                    </div>

                </div>
                <div v-if = "dateList[index].isNotValid" class = "pre-directive">Enter Required value</div>
                <div v-if = "dateList[index].isTimeInvalid" class = "pre-directive">Enter Correct Time value</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props:['dates', 'updateDates'],
        data(){
            return{
                dateList:[],
                options: ['Consultation', 'Telephone', 'Ambulance']
            }
        },
        watch:{
            dates(newVal, oldVal){
                if(!this.dateList.length){
                    this.dateList =this.dates.map((e) => {
                    return {
                        date:e,
                        startTime: null,
                        endTime: null,
                        price: null,
                        type: null,
                        isNotValid: false,
                        isTimeInvalid: false
                    }
                   })
                } else {
                    let vm = this;
                    for(let i = 0; i< vm.dates.length ; i++){
                        let isDate = this.dateList.filter((e) => new Date(e.date).toLocaleDateString() == this.dates[i].toLocaleDateString())
                        if(!isDate.length){
                            let tempObj = JSON.parse(JSON.stringify(this.dateList))
                            tempObj.push({
                                date:this.dates[i],
                                startTime: null,
                                endTime: null,
                                price: null,
                                type: null,
                                isNotValid: false ,
                                isTimeInvalid: false
                            })
                            this.dateList = JSON.parse(JSON.stringify(tempObj))
                            console.log(this.dateList);
                        }
                    }
                }
            },
        },
        mounted(){
            if(!this.dateList.length){
                   this.dateList =this.dates.map((e) => {
                    return {
                        date:e,
                        startTime: null,
                        endTime: null,
                        price: null,
                        type: null,
                        isNotValid: false,
                        isTimeInvalid: false
                    }
             })
            }
                
        },
        methods:{
            updateVal(index){
                this.dateList[index].isNotValid = false;
                this.dateList[index].isTimeInvalid = false;
                
            },
            formatDate(date){
               return new Date(date).toLocaleDateString()
            },
            cancelDate(index, obj){
                let tempObj = new Date(obj).toLocaleDateString();
                let indx = this.dates.findIndex((e) => e.toLocaleDateString() == tempObj)
                this.dateList.splice(index, 1);
               this.updateDates(indx);
            },
            verifyAllValues(){
                let flag = true;
                this.dateList.forEach((e, index) => {
                    if(!e.endTime || !e.startTime || !e.price || !e.type){
                        e.isNotValid = true;
                        flag = false;
                    } else if(e.startTime > e.endTime){
                        flag = false;
                        e.isTimeInvalid = true;
                    }
                    
                })
                return flag
            }
        }
    }
</script>

<style scoped>
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
        display: flex;
        align-items: center;
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
    .pre-directive{
        color: red;
        font-size: 12px;
    }
</style>