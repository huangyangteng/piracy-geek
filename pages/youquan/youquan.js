// pages/youquan/youquan.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 作品对象
    work:{
      name:'xxx',
      // 是否点了喜欢
      isLike:false,
      // 喜欢的人数
      likeNum:10,
      // 喜欢的人的头像
      likeImgs: [
        {
          img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=970453984,2480783532&fm=27&gp=0.jpg'
        },
        {
          img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=970453984,2480783532&fm=27&gp=0.jpg'
        },
        {
          img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=970453984,2480783532&fm=27&gp=0.jpg'
        },
        {
          img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=970453984,2480783532&fm=27&gp=0.jpg'
        },
        {
          img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=970453984,2480783532&fm=27&gp=0.jpg'
        },
        {
          img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=970453984,2480783532&fm=27&gp=0.jpg'
        },

      ]
    },
  },
  clicklike: function (e) {
    // 头像获取
    let avatarUrl = this.data.userInfo.avatarUrl;
    // 作品获取
    let work=this.data.work;
    // 判断是否已经点了 ‘喜欢’
    if(work.isLike){//已喜欢
      // 去除最后一项
      work.likeImgs.pop();
      // 改变状态
      work.isLike = !work.isLike;
    }else{//未点 ‘喜欢’
      work.likeImgs.push({ img: avatarUrl });
      // 改变状态
      work.isLike = !work.isLike;
    }
    // 统一更新数据
    this.setData({
      work
    })
    // es6语法 键 值相同可省略其一，相当于
    // this.setData({
    //   work:work
    // })
  


    // var imgs = this.data.imgs;
    // wx.getUserInfo({
    //   success: function (res) {
    //     // 拿到用户头像
    //     var uerimg = res.userInfo.avatarUrl;
    //     // 建立一个新的{}
    //     var array = {
    //       img: uerimg
    //     };
    //     // 把{}添加到imgs数组中
    //     imgs.push(array);
    //     for(var i=0;i<imgs.length;i++){
    //       if(imgs.length >= 7){
    //         imgs.splice(i-- , 1)
    //       }
    //     };
    //     that.setData({
    //       imgs: imgs
    //     })
    //   },
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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