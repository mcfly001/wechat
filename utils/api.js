/**
 * 获取左侧分类列表
 * @param pageSize
 * @param pageNum
 * @param searchText
 * @param callback
 * @returns {*}
 */
const getMenuList = (pageSize, pageNum, searchText, callback) => {
  return wx.request({
    url: `http://wuliaoyuan.top/api-douchi/get.category.list?pageSize=${pageSize}&pageNum=${pageNum}&searchText=${searchText}`,
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
 * @param searchText
 * @param callback
 * @returns {*}
 */
const getGoodsList = (pageSize, pageNum, searchText, callback) => {
  console.log(pageSize, pageNum, searchText)
  return wx.request({
    url: `http://wuliaoyuan.top/api-douchi/get.goods.list?pageSize=${pageSize}&pageNum=${pageNum}&name=${searchText}`,
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