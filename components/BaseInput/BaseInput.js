// components/BaseInput/BaseInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{ // 属性名
      type: String,
      value: '请输入'
    },
    value:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    valueStr:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getInputValue(e){
      const value = e.detail.value
      this.setData({'value':value})
      // this.triggerEvent('inputGetValue', value)
    },
  }
})
