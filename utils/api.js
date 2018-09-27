/**
 * 获取左侧分类列表
 * @param pageSize
 * @param pageNum
 * @param name
 * @param callback
 * @returns {*}
 */
const getMenuList = (pageSize, pageNum, name, callback) => {
  return wx.request({
    url: `http://wuliaoyuan.top/api-douchi/get.category.list?pageSize=${pageSize}&pageNum=${pageNum}&name=${name}`,
    success: function (res) {
      console.log(1133111, res)
      callback && callback(res)
    }
  })
}

/**
 * 获取商品列表
 * @param pageSize
 * @param pageNum
 * @param filter
 * @param callback
 * @returns {*}
 */
const getGoodsList = (pageSize, pageNum, filter, callback) => {
  return wx.request({
    url: `http://wuliaoyuan.top/api-douchi/get.goods.list?pageSize=${pageSize}&pageNum=${pageNum}&filter=${JSON.stringify(filter)}`,
    success: function (res) {
      console.log(111111, res)
      callback && callback(res)
    }
  })
}



module.exports = {
  getGoodsList: getGoodsList,
  getMenuList: getMenuList
}