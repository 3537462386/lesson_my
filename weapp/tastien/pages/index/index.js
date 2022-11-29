// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    banners: [
      {
        id: 1,
        pic:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/162038/16/32655/68895/637598caE41a32aeb/739f9cd30edf2383.jpg!q80.dpg',
      },
      {
        id: 2,
        pic: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/222561/8/16718/198784/62ce66e4E44808eaa/693a08e8ba9d78e4.jpg!q70.dpg.webp'
      },
      {
        id: 3,
        pic: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/137222/12/24601/95100/62d4b4d2E7f093638/9dcef4f18a221085.jpg!q70.dpg.webp'
      }
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})