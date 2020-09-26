// pages/center/center.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginFlag:false
  },

// 登录函数
  clickLogin() {
    wx.login({
      success:res => {
        if(res.code) {
          this.login(res.code)
        }
      }
    })
    
  },
  login(code) {
    wx.request({
      url: 'http://localhost:3000/sendCode',
      method:"post",
      data:{
        code:code,
        appId:app.globalData.appId,
        appSecret:app.globalData.appSecret
      },
      success () {
        console.log("send success!")
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log()
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