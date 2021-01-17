// components/TagsList/TagsList.js
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
    lists:[
      {
        id:'1',
        name:'热身',
        type:'0',
      },
      {
        id:'2',
        name:'训练',
        type:'0',
      },
      {
        id:'3',
        name:'放松',
        type:'0',
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goto(event){
      const name = event.currentTarget.dataset.name
      wx.navigateTo({
        url: `../../pages/planing/stageInfoPage?name=${name}`,
      })
    }
  }
})
