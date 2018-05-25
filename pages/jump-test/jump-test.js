// 数据来源于data下面的假数据
let workData=require('../../data/work');
// console.log(workData)
Page({
    data:{
       
    },
    onTap(e){
        let postId = e.currentTarget.dataset.postid;
        console.log('postId is '+postId);
        // 跳转到相应的详情页面
        wx.navigateTo({
            url: "post-detail/post-detail?id=" + postId
        })

    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
        // onLoad先于data加载
        // 页面加载时，提供给data数据
        this.setData({
            works: workData
        })
        
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
        
    },
    onShow:function(){
        // 生命周期函数--监听页面显示
        
    },
    onHide:function(){
        // 生命周期函数--监听页面隐藏
        
    },
    onUnload:function(){
        // 生命周期函数--监听页面卸载
        
    },
    onPullDownRefresh: function() {
        // 页面相关事件处理函数--监听用户下拉动作
        
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
        
    },
    onShareAppMessage: function() {
        // 用户点击右上角分享
        return {
          title: 'title', // 分享标题
          desc: 'desc', // 分享描述
          path: 'path' // 分享路径
        }
    }
})