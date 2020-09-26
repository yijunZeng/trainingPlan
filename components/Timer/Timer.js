// components/Timer/Timer.js
const computedBehavior = require('miniprogram-computed')
Component({
  behaviors: [computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    countName:{
      type:String,
      value:'计次'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    btnStartFlag:true,
    btnCountFlag:true,
    initSeconds:0,
    initMinutes:0,
    seconds:0,
    minutes:0,
    countInterval:null,
    countList:[]
  },
  computed:{
    btnLeftName(data) {
      return data.btnCountFlag ? '计次' : '复位'
    },
    btnRightName (data) {
      return data.btnStartFlag ? '开始' : '暂停'
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleLeftBtn() {
      if(this.data.btnCountFlag) {
        this.count()
      } else {

      }
    },
    handleRightBtn () {
      if (this.data.btnStartFlag) {
        this.start()
      }
    },
    /**
     * 开始计时
     */
    start(){
      this.setData({
        btnRightFlag:false
      })
      let _seconds = 0
      let _minutes = 0
      const counter = setInterval(()=>{
        if(_seconds > 59){
          _seconds = 0
          ++ _minutes;
          this.setData({
            seconds:_seconds,
            minutes:_minutes
          })
        } else {
          ++ _seconds;
          this.setData({
            seconds:_seconds,
          })
        }
      },1000)
    },
    /**
     * 暂停计时
     */
    pause() {

    },
    /**
     * 计次
     */
    count() {

    },
    /**
     * 复位
     */
    recovery () {

    }
  }
})
