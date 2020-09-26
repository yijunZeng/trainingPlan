// components/AntiTimer/AntiTimer.js
import {formatNumber} from '../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    initTime:'02:00',
    time:'',
    seconds:0,
    minutes:0,
    antiTimer:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    start() {
        let _times = this.data.time
        let _minutes = 2
        let _seconds = 0
        this.setData({
          seconds:_seconds,
          minutes:_minutes
        })
      const antiTimer = setInterval(() => {
        if (_seconds > 0) {
          let showSeconds = 0
          --_seconds;
          this.setData({
            seconds:formatNumber(_seconds)
          })
        } else if(_seconds === 0 && _minutes > 0){
          _seconds = 10;
          -- _minutes;
          this.setData({
            seconds:_seconds,
            minutes:formatNumber(_minutes)
          })
        } else if (_seconds === 0 && _minutes === 0) {
          clearInterval(antiTimer)
          console.log("清除定时器",this.data.antiTimer)
        }
      }, 1000);
      this.setData({
        antiTimer:antiTimer
      })
    },
    // clearTimeInterval() {
    //   const timeInterv = this.data.antiTimer

    // }
    /**
     * 倒计时暂停
     */
    pause(){
      const timer = this.data.antiTimer
      clearInterval(timer)
    },
    /**
     * 倒计时结束
     */
    stop(){

    }
  }
})
