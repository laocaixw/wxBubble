//index.js
let WxBubble = require('../../wxBubble/wxBubble.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    var that = this
    wx.getSystemInfo({
      success: res => {
        that.setData({
          sysInfo: {
            windowWidth: res.windowWidth,
            windowHeight: res.windowHeight
          }
        })
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //事件处理函数
  bindAvatarTap: function (e) {
    if (wx.canIUse('createSelectorQuery')) {
      WxBubble.showBubble(this, "#avatar", "我是气泡，箭头向下！", {
        direction: "down",
        backgroudColor: "rgba(102, 102, 102, 0.8)",
        fontColor: "#fff",
        fontSize: 32,
        paddingColumn: 20,
        paddingRow: 40,
        contentRadius: 10,
        arrowHeight: 30,
      })
    }
  },
  bindNickNameTap: function (e) {
    if (wx.canIUse('createSelectorQuery')) {
      WxBubble.showBubble(this, "#nickname", "我是气泡，箭头向上，哈哈哈哈！", {
        direction: "up",
        backgroudColor: "#1aad19",
        fontColor: "#fff",
        fontSize: 24,
        paddingColumn: 10,
        paddingRow: 20,
        contentRadius: 10,
        arrowHeight: 15,
      })
    }
  }
})