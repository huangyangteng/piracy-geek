Page({
    data:{
        // 图片数组必须是[{},{}]格式
        imgs:[
            {id:0,path:'http://p8zh0ix6u.bkt.clouddn.com/touxiang.jpeg'},
            { id: 1,path:'http://p8zh0ix6u.bkt.clouddn.com/work1.jpg'},
            { id: 2,path:'http://p8zh0ix6u.bkt.clouddn.com/work2.jpg'},
            { id: 3,path:'http://p8zh0ix6u.bkt.clouddn.com/work4.jpg'},
            { id: 4,path:'http://p8zh0ix6u.bkt.clouddn.com/work6.jpg'},
        ]
    },
    imgLoad(e){
        // console.log(e)
        // 获取图片索引
        let index=e.target.id;
        let width = e.detail.width;
        if(width>750){
            this.data.imgs[index].isFull=true;
            
        }else{
            this.data.imgs[index].isFull = false;
        }
        this.setData({
            imgs: this.data.imgs
        })

    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
        
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