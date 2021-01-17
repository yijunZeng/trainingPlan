// components/Calendar/Calendar.js
const computedBehavior = require('miniprogram-computed')
Component({
    behaviors: [computedBehavior],
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        dateList:[],
        currentDate:0,
        currentMonth:0,
        currentYear:0,
        theYear:0,
        theMonth:0,
        weeks:['一','二','三','四','五','六','日'],
        monthCh:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        changeMonthFlag:false,
    },
    lifetimes: {
        attached: function() {
          this.initDays()
        },
        detached: function() {
          // 在组件实例被从页面节点树移除时执行
        },
    },
    computed:{
        theMonthCh(data){
            console.log(data.theMonth)
            const idx = data.theMonth
            return data.monthCh[data.theMonth]
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        async initDays(){
            const dateClass = new Date()
            let year = dateClass.getFullYear()
            let month = dateClass.getMonth();
            let date = dateClass.getDate();
            let day = dateClass.getDay();
            this.setData({
                theYear:year,
                currentYear:year,
                currentMonth:month,
                currentDate:date,
                activeDate:date,
                theMonth:month
            })
            await this.getMDay()
            // console.log(theWeek)
            // console.log(fullDays)
        },
        getMDay(){
            // console.log(y)
            const m = this.data.theMonth
            console.log("换算的月份",m)
            const y = this.data.theYear
            const date = new Date(y,m,0)
            const fullDays = date.getDate()
            const theWeek = date.getDay(y,m,'1')
            let dateList = new Array(theWeek).fill('')
            for(let i=1;i<fullDays+1;i++) {
                dateList.push(i)
            }
            this.setData({
                dateList:dateList,
            })
        },
        getLastMonth(){
            let theMonth = this.data.theMonth;
            // let lastMonth = theMonth--;
            console.log('hshshsh')
            this.setData({
                theMonth:--theMonth,
                changeMonthFlag:true
            })
            this.getMDay()
        },
        async getNextMonth(){
            let theMonth = this.data.theMonth;
            let lastMonth = theMonth;
            await this.setData({
                theMonth:++theMonth,
                changeMonthFlag:true
            })
            this.getMDay()
        },
        clickDate(e){
            // console.log(e)
            const idx = e.currentTarget.dataset.value
            if(idx) {
                this.setData({
                    activeDate:idx,
                    changeMonthFlag:false
                })
            }
            
        }
    }
})
