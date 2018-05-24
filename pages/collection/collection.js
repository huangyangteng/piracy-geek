Page({

  /**
   * 页面的初始数据
   */
  data: {
    objs:[
      {name:'我有明珠一颗',age:'18'},
      { name: '我有明珠一个', age: '18' },
      { name: '我有明珠一斤', age: '18' }
    ]
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
    //修改原数据
      this.data.objs.forEach(item => {
          item.firstStr = item.name.charAt(0);
          item.lastStr = item.name.charAt(item.name.length - 1);

      });
      this.setData({
          objs: this.data.objs
      })
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