const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 获取用户信息
 * @param app: 通过const app = getApp()获取
 */
const getUserInfo = (app) => {
  if (app.globalData.userInfo) {
    return {
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    }
  } else if (this.data.canIUse){
    app.userInfoReadyCallback = res => {
      return {
        userInfo: res.userInfo,
        hasUserInfo: true
      }
    }
  } else {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        return {
          userInfo: res.userInfo,
          hasUserInfo: true
        }
      }
    })
  }
}

module.exports = {
  formatTime: formatTime,
  getUserInfo: getUserInfo
}

