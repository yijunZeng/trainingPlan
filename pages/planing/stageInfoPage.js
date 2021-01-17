// pages/planing/stageInfoPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {
        id:'',
        name:''
      },
      {
        id:'',
        name:''
      },
    ],
    dialogShow:false,
    deleteIdx:'',
    buttons: [{text: '取消'}, {text: '确定'}],
    title:'',
    
  },
  add(){
    let _lists = this.data.lists
    const demo = {
      id:'',
      name:''
    }
    _lists.push(demo)
    this.setData({
      lists:_lists
    })
  },
  tapDialogButton(e){
    console.log(e)
    const type = (e.detail.index === 1)
    if(type) {
      let _lists = this.data.lists
      _lists.splice(this.data.deleteIdx,1)
      this.setData({
        lists:_lists,
        deleteIdx:'',
        dialogShow:false
      })
    }else {
      this.setData({
        deleteIdx:'',
        dialogShow:false
      })
    }
  },
  deleteItem(event){
    const idx = event.currentTarget.dataset.idx;
    this.setData({
      deleteIdx:idx,
      dialogShow:true
    })
  },
  save(){
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      title:options.name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})