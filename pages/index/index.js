const app = getApp()
const util = require('../../utils/util.js')
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
    leftnav: ['热销榜', '单人精彩套餐', '冰爽饮品限时特惠', '精选热菜', '爽口凉菜', '热销榜', '单人精彩套餐', '冰爽饮品限时特惠', '精选热菜', '爽口凉菜', '精选套餐', '果拼果汁', '小吃主食', '特色小粥'],
    brieflist: [
      {
        foods: [
          {
            ratings: [
              {
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                rateType: 0,
                text: "很喜欢的粥",
                rateTime: 1469281964000,
                username: "3******c"
              }
            ],
            icon: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
            sellCount: 229,
            price: 10,
            name: "皮蛋瘦肉粥",
            oldPrice: "",
            description: "咸粥",
            rating: 100,
            info: "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
            image: "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ],
        name: "热销榜",
        type: -1
      },
      {
        foods: [
          {
            ratings: [
              {
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                rateType: 1,
                text: "",
                rateTime: 1469261964000,
                username: "3******b"
              }
            ],
            icon: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
            sellCount: 124,
            price: 10,
            name: "葱花饼",
            oldPrice: "",
            description: "",
            rating: 85,
            info: "",
            image: "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ],
        name: "冰爽饮品限时特惠",
        type: 1
      },
      {
        foods: [
          {
            ratings: [
              {
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                rateType: 0,
                text: "很喜欢的粥",
                rateTime: 1469281964000,
                username: "3******c"
              }
            ],
            icon: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
            sellCount: 114,
            price: 14,
            name: "牛肉馅饼",
            oldPrice: "",
            description: "",
            rating: 91,
            info: "",
            image: "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ],
        name: "精选热菜",
        type: -1
      },
      {
        foods: [
          {
            ratings: [
              {
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                rateType: 0,
                text: "",
                rateTime: 1469271264000,
                username: "2******3"
              }
            ],
            icon: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
            sellCount: 101,
            price: 17,
            name: "招牌猪肉白菜锅贴/10个",
            oldPrice: "",
            description: "",
            rating: 78,
            info: "",
            image: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ],
        name: "爽口凉菜",
        type: -1
      },
      {
        foods: [
          {
            ratings: [
              {
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                rateType: 1,
                text: "",
                rateTime: 1469261964000,
                username: "3******b"
              }
            ],
            icon: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
            sellCount: 91,
            price: 9,
            name: "南瓜粥",
            oldPrice: "",
            description: "甜粥",
            rating: 100,
            info: "undefined",
            image: "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ],
        name: "精选套餐",
        type: -1
      },
      {
        foods: [
          {
            ratings: [
              {
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                rateType: 0,
                text: "很喜欢的粥",
                rateTime: 1469281964000,
                username: "3******c"
              }
            ],
            icon: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
            sellCount: 86,
            price: 12,
            name: "红豆薏米美肤粥",
            oldPrice: "",
            description: "甜粥",
            rating: 100,
            info: "",
            image: "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ],
        name: "果拼果汁",
        type: -1
      },
      {
        foods: [
          {
            ratings: [
              {
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                rateType: 0,
                text: "",
                rateTime: 1469271264000,
                username: "2******3"
              }
            ],
            icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
            sellCount: 84,
            price: 4,
            name: "八宝酱菜",
            oldPrice: "",
            description: "",
            rating: 100,
            info: "",
            image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ],
        name: "小吃主食",
        type: -1
      },
      {
        foods: [
          {
            ratings: [
              {
                avatar: "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
                rateType: 1,
                text: "",
                rateTime: 1469261964000,
                username: "3******b"
              }
            ],
            icon: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
            sellCount: 81,
            price: 10,
            name: "红枣山药糙米粥",
            oldPrice: "",
            description: "",
            rating: 91,
            info: "",
            image: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
          }
        ],
        name: "特色粥品",
        type: -1
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //util.getUserInfo(app)
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
  }
})
