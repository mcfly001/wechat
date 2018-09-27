const app = getApp()
const util = require('../../utils/util.js')
const api = require('../../utils/api.js')
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
var qqmapsdk

Page({
  data: {
    currentDistance: '',
    logo: '../icon/logo.jpg',
    banner: '../icon/banner.png',
    src: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
    title: '巧味厨房',
    address: '浦江农批市场',
    tel: '15869027281',
    info: '3公里以内免费送货上门',
    topnav: ['商品', '评价', '图集'],
    leftnav: [{'name': '全部', _id: '0'}],
    brieflist: [],
    currentCategoryId: '0' // 当前被选中的分类
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 获取左侧栏内容
    this.getCategoryList()
    // 默认是所有商品都呈现
    this.getGoodsList('', '0')
    this.getLocation()
    qqmapsdk = new QQMapWX({
      key: 'SCBBZ-BOJR4-WLMUQ-DOOJD-SFQI6-J7FQM'
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getLocationAreaName: function(latitude, longitude){
    var self = this
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        self.setData({
          currentDistance: res.result.address_component.district
        })
      },
      fail: function (res) {
        self.setData({
          currentDistance: '获取位置失败'
        })
      }
    })
  },
  getLocation: function(){
    var self = this
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        self.getLocationAreaName(latitude, longitude)
      }
    })
  },
  getCategoryList(){
    api.getMenuList(1, 99, '',  res => {
      this.setData({
        leftnav: [{'name': '全部', _id: '0'}].concat(res.data.data.data)
      })
    })
  },
  getGoodsList(name, categoryId){
    let filter = {}
    if(name){
      filter.name = name
    }
    if(categoryId && categoryId !== '0'){
      filter.categoryId = categoryId
    }
    api.getGoodsList(1, 99, filter,  res => {
      this.setData({
        brieflist: res.data.data.data
      })
    })
  },
  filterGoodsListByName(e){
    this.getGoodsList(e.detail.value)
  },
  filterGoodsByCategory(e){
    let catrgoryId = e.currentTarget.dataset.categoryid
    this.setData({
      currentCategoryId: catrgoryId
    })
    this.getGoodsList('', catrgoryId)
  }
})
