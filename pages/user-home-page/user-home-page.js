Page({
    data:{
        // `点击切换 作品 动态 简介 work dynamic intro
        currentOption:'work',
        // ` 未选喜欢和已选喜欢的图标地址
        likedImg:'../../images/icon/liked.png',
        unlikedImg:'../../images/icon/like.png',
        // ` 个人信息
        user:{
            name:"我有明珠一颗",
            address:"四川 绵阳",
            'focus-on':2912,
            'be-focus-on':'21万',
            avatar:'http://p8zh0ix6u.bkt.clouddn.com/touxiang.jpeg',
            tags:['自由','平等','公正','法制'],
            detail: '齐白石，我国二十世纪杰出画家、书法家、篆刻家。原名齐璜，纯芝，小名阿芝，字渭青、号白石、白石翁、老白、又号寄萍、老萍、借山翁、三百石印富翁、寄萍老人等。。湖南湘潭人。齐白石家境贫困，世代务农，仅在12岁前随外祖父读过一段私塾。13岁起学木匠、那时雕花，差不多千篇一律，他突破陈规，造出许多新的花样。人称芝木匠。兼习画。亦习诗文，书法、篆刻，初为画工，为乡里人画衣冠像。六十岁后定居北京，以卖画、刻印为职业。生平推崇徐渭、朱耷、石涛、吴昌硕等前辈诸家，重视创新，不断变化，创造了独特不群的风貌。所画作品，都洋溢着对生活的热爱。其篆刻朴茂有力，书法刚劲沉着，诗文、画论也有独到之处。任中国文学艺术界联合会主席团委员，美术家协会主席。1953年中央文化部授予“人民艺术家”称号。齐白石是各方面造诣都很高的现代绘画大师。他的人品、绘画、诗句、书法、篆刻，无不出类拔翠。他的艺术创作极其丰富。他的风格对现代乃至当代中国画创作产生了极为巨大的影响。',
        },
        // ` 是否关注
        isFocusOn:true,
        // `作品
        works:[
            {
                name:'星空1',
                description:'这是一段描述',
                like:'20',
                liked:false,//是否喜欢
                img:'http://p8zh0ix6u.bkt.clouddn.com/work4.jpg',
                id:'0'
            },
            {
                name:'星空2',
                description:'这是一段描述',
                like:'90',
                liked: true,
                img:'http://p8zh0ix6u.bkt.clouddn.com/work1.jpg',
                id:'1'
            },
            {
                name:'星空3',
                description:'这是一段描述',
                like:'90',
                liked: true,
                img:'http://p8zh0ix6u.bkt.clouddn.com/work6.jpg',
                id:'2'
            }
        ],
        // `动态
        dynamics:[
            {
                title:'《蜡笔小新》',
                time:'2018-5-3',
                images:[
                    'http://p8zh0ix6u.bkt.clouddn.com/touxiang.jpeg',
                    'http://p8zh0ix6u.bkt.clouddn.com/touxiang.jpeg',
                ],
                tags:["漫画","贵","大师"],
                like:'27',
                liked: true,
                comments:[

                ],
                'comment-num':'0',
                id:0

            },
            {
                title:'《星空》',
                time:'2018-5-3',
                images:[
                    'http://p8zh0ix6u.bkt.clouddn.com/work1.jpg',
                    'http://p8zh0ix6u.bkt.clouddn.com/work1.jpg',
                    'http://p8zh0ix6u.bkt.clouddn.com/work2.jpg',
                ],
                tags:["油画","贵","大师"],
                like:'87',
                liked: true,
                comments:[

                ],
                'comment-num':'0',
                id:1

            },
        ]
    },
    // `点击切换option
    changeOption(e){
        this.setData({
            currentOption:e.target.dataset.option
        })
    },
    // 点击切换 关注和不关注
    changeFoucs(){
        this.setData({
            isFocusOn:!this.data.isFocusOn
        })
    },
    // `点击喜欢增加
    likeAdd(e){//作品
        // 作品和动态的喜欢区分开
        let index = e.currentTarget.id;
        if(e.target.dataset.type==='work'){
            let works = this.data.works;//数组文件
            let work = this.data.works[index];//当前操作的对象
            // 如果有liked属性 喜欢的数量-- 更换图标
            if (work.liked) {
                work.like = work.like - 1;
            } else {
                work.like = parseInt(work.like) + 1;
            }
            work.liked = !work.liked;
            this.setData({
                works,
            })
        }else{//动态
            let dynamics = this.data.dynamics;//数组文件
            let dynamic = this.data.dynamics[index];//当前操作的对象
            // 如果有liked属性 喜欢的数量-- 更换图标
            if (dynamic.liked) {
                dynamic.like = dynamic.like - 1;
            } else {
                dynamic.like = parseInt(dynamic.like) + 1;
            }
            dynamic.liked = !dynamic.liked;
            this.setData({
                dynamics,
            })
        }
        
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