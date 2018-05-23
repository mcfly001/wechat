const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    orderNavList: [
      "待付款",
      "待收货",
      "待评价",
      "已评价",
      "全部订单"
    ],
    personalInfo: [
      {
        icon: '',
        title: '我的分享金'
      },
      {
        icon: '',
        title: '打卡领福利'
      },
      {
        icon: '',
        title: '优惠券'
      },
      {
        icon: '',
        title: '钱和红包'
      },
      {
        icon: '',
        title: '我的消息'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = util.getUserInfo(app)
    console.log(userInfo)
    this.setData({
      avatarUrl: userInfo.userInfo.avatarUrl,
      userName: userInfo.userInfo.nickName
    })
    console.log(userInfo)
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