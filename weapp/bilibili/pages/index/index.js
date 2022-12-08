Page({

    /**
     * 页面的初始数据
     */
    data: {
      //被点击导航菜单索引
      currentIndexNav: 0,
      //首页导航数据
      navList: [],
      //轮播图数据
      swiperList: [],
      // 视频列表数据
      videoList: []
    },
  
    // 点击首页导航按钮
    activeNav(e) {
      // console.log(e);
      this.setData({
        currentIndexNav: e.target.dataset.index
      })
    },
  
    // 获取首页导航数据
    getNavList() {
      let that = this;
      wx.request({
        url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/navList',
        success(res) {
          // console.log(res);
          if(res.data.code === 0) {
            that.setData({
              navList: res.data.data.navList
            })
          }
          // console.log(res.data.data.navList);
        }
      })
    },
  
    // 获取轮播图数据
    getSwiperList() {
      let that = this;
      wx.request({
        url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/swiperList',
        success(res) {
          // console.log(res);
          if(res.data.code === 0) {
            that.setData({
              swiperList: res.data.data.swiperList,
            })
          }
        }
      })
    },
  
    //获取视频列表
    getVideoList() {
      let that = this;
      wx.request({
        url: 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videosList',
        success(res) {
          // console.log(res);
          if(res.data.code === 0) {
            that.setData({
              videoList: res.data.data.videosList,
            })
          }
        }
      })
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      //获取首页导航数据
      this.getNavList(); 
      //获取轮播图数据
      this.getSwiperList();  
      //获取视频数据
      this.getVideoList();
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
  
  