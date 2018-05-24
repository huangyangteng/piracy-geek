Page({

  /**
   * 页面的初始数据
   */
  data: {
    // `切换已有作品和目标作品 existing target
    currentOption:'existing',
    // ` 未拥有   显示的藏品数据
    collectionOnDisplay:[
      {
        name: '星空1',
        description: '这是一段描述',
        author:'作者1号',
        collector:'收藏者1号',
        like: '20',
        liked: false,//是否喜欢
        img: 'http://p8zh0ix6u.bkt.clouddn.com/work4.jpg',
        id: '0'
      },
      {
        name: '星空2',
        description: '这是一段描述',
        like: '90',
        author: '作者2号',
        collector: '收藏者2号',
        liked: true,
        img: 'http://p8zh0ix6u.bkt.clouddn.com/work1.jpg',
        id: '1'
      },
      {
        name: '星空3',
        description: '这是一段描述',
        like: '90',
        author: '作者3号',
        collector: '收藏者3号',
        liked: true,
        img: 'http://p8zh0ix6u.bkt.clouddn.com/work6.jpg',
        id: '2'
      }

    ]

  },
  // ` 切换已有作品和目标作品
  changeCollection(e){
    this.setData({
      currentOption: e.target.dataset.type
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.data.objs=objs.map(item=>)
   
    
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