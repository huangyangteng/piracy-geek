import pinyin from 'pinyin'

const WEB_LIST = [
    {
        id: 'u0qz1cvlymd',
        type: 'web',
        source: '',
        cid: '320',
        title: '跟月影学可视化',
        subTitle: '系统掌握图形学与可视化核心原理',
        authorName: '月影',
        authorInfo:
            '前奇虎360奇舞团团长，可视化UI框架SpriteJS核心开发者，《JavaScript王者归来》作者',
        contents: [
            {
                id: 'bg1kbgdofzs',
                title: '课前必学',
                subList: [
                    {
                        id: 'bkak9onf3fm',
                        title: '开篇词 | 不写网页的前端工程师，还能干什么？',
                        src:
                            '跟月影学可视化/html/__252088__开篇词 _ 不写网页的前端工程师，还能干什么？.html',
                        audio: ''
                    },
                    {
                        id: 'l0snplogvj9',
                        title: '预习 | Web前端与可视化到底有什么区别？',
                        src:
                            '跟月影学可视化/html/__252090__预习 _ Web前端与可视化到底有什么区别？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '600t2vrfq2k',
                title: '图形基础篇',
                subList: [
                    {
                        id: '0nowf4gek6c',
                        title: '01 | 浏览器中实现可视化的四种方式',
                        src:
                            '跟月影学可视化/html/__252076__01 _ 浏览器中实现可视化的四种方式.html',
                        audio: ''
                    },
                    {
                        id: 'j14w40f20ar',
                        title:
                            '02 |  指令式绘图系统：如何用Canvas绘制层次关系图？',
                        src:
                            '跟月影学可视化/html/__252705__02 _ 指令式绘图系统：如何用Canvas绘制层次关系图？.html',
                        audio: ''
                    },
                    {
                        id: '8dsxeob00l0',
                        title:
                            '03 | 声明式图形系统：如何用SVG图形元素绘制可视化图表？',
                        src:
                            '跟月影学可视化/html/__252710__03 _ 声明式图形系统：如何用SVG图形元素绘制可视化图表？.html',
                        audio: ''
                    },
                    {
                        id: 'm71hhz9chkj',
                        title:
                            '04 | GPU与渲染管线：如何用WebGL绘制最简单的几何图形？',
                        src:
                            '跟月影学可视化/html/__254631__04 _ GPU与渲染管线：如何用WebGL绘制最简单的几何图形？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '2bt8oqkubgb',
                title: '数学篇',
                subList: [
                    {
                        id: 'ji2fcrv4ysy',
                        title: '05 | 如何用向量和坐标系描述点和线段？',
                        src:
                            '跟月影学可视化/html/__255584__05 _ 如何用向量和坐标系描述点和线段？.html',
                        audio: ''
                    },
                    {
                        id: 'e8pm9xoh3q1',
                        title: '06 |  可视化中你必须要掌握的向量乘法知识',
                        src:
                            '跟月影学可视化/html/__256827__06 _ 可视化中你必须要掌握的向量乘法知识.html',
                        audio: ''
                    },
                    {
                        id: 'jqn26yv9i9t',
                        title: '07 | 如何用向量和参数方程描述曲线？',
                        src:
                            '跟月影学可视化/html/__257051__07 _ 如何用向量和参数方程描述曲线？.html',
                        audio: ''
                    },
                    {
                        id: 'wmc3geo0t3l',
                        title:
                            '08 | 如何利用三角剖分和向量操作描述并处理多边形？',
                        src:
                            '跟月影学可视化/html/__258101__08 _ 如何利用三角剖分和向量操作描述并处理多边形？.html',
                        audio: ''
                    },
                    {
                        id: '7c7huoqiah5',
                        title: '09 | 如何用仿射变换对几何图形进行坐标变换？',
                        src:
                            '跟月影学可视化/html/__259264__09 _ 如何用仿射变换对几何图形进行坐标变换？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'crh3ajgvf0o',
                title: '视觉基础篇',
                subList: [
                    {
                        id: '06g1216h9e4',
                        title: '10 | 图形系统如何表示颜色？',
                        src:
                            '跟月影学可视化/html/__260922__10 _ 图形系统如何表示颜色？.html',
                        audio: ''
                    },
                    {
                        id: 'lzfqf1do885',
                        title:
                            '11｜图案生成：如何生成重复图案、分形图案以及随机效果？',
                        src:
                            '跟月影学可视化/html/__262330__11｜图案生成：如何生成重复图案、分形图案以及随机效果？.html',
                        audio: ''
                    },
                    {
                        id: '82zeklpt5p3',
                        title: '12 | 如何使用滤镜函数实现美颜效果？',
                        src:
                            '跟月影学可视化/html/__263455__12 _ 如何使用滤镜函数实现美颜效果？.html',
                        audio: ''
                    },
                    {
                        id: 'rq850tfcd1g',
                        title: '13 | 如何给简单的图案添加纹理和复杂滤镜？',
                        src:
                            '跟月影学可视化/html/__264199__13 _ 如何给简单的图案添加纹理和复杂滤镜？.html',
                        audio: ''
                    },
                    {
                        id: 'bir2vyw7hy2',
                        title: '14 | 如何使用片元着色器进行几何造型？',
                        src:
                            '跟月影学可视化/html/__265376__14 _ 如何使用片元着色器进行几何造型？.html',
                        audio: ''
                    },
                    {
                        id: '4vd4t2y2jpb',
                        title: '15 | 如何用极坐标系绘制有趣图案？',
                        src:
                            '跟月影学可视化/html/__266346__15 _ 如何用极坐标系绘制有趣图案？.html',
                        audio: ''
                    },
                    {
                        id: 'nksg5i6mx4c',
                        title: '16 | 如何使用噪声生成复杂的纹理？',
                        src:
                            '跟月影学可视化/html/__267016__16 _ 如何使用噪声生成复杂的纹理？.html',
                        audio: ''
                    },
                    {
                        id: 'jdewecvj2o2',
                        title: '17 | 如何使用后期处理通道增强图像效果？',
                        src:
                            '跟月影学可视化/html/__267863__17 _ 如何使用后期处理通道增强图像效果？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'aun6tr0hmbr',
                title: '视觉高级篇',
                subList: [
                    {
                        id: 'lihaqa211uj',
                        title: '18 | 如何生成简单动画让图形动起来？',
                        src:
                            '跟月影学可视化/html/__268865__18 _ 如何生成简单动画让图形动起来？.html',
                        audio: ''
                    },
                    {
                        id: 's6robm3v1gi',
                        title: '19 | 如何用着色器实现像素动画？',
                        src:
                            '跟月影学可视化/html/__269494__19 _ 如何用着色器实现像素动画？.html',
                        audio: ''
                    },
                    {
                        id: 'r59j5hqgisd',
                        title: '20 | 如何用WebGL绘制3D物体？',
                        src:
                            '跟月影学可视化/html/__270356__20 _ 如何用WebGL绘制3D物体？.html',
                        audio: ''
                    },
                    {
                        id: 'xx3nwnxxbg7',
                        title: '21 | 如何添加相机，用透视原理对物体进行投影？',
                        src:
                            '跟月影学可视化/html/__271225__21 _ 如何添加相机，用透视原理对物体进行投影？.html',
                        audio: ''
                    },
                    {
                        id: '4oz4o4g3cny',
                        title: '22 | 如何用仿射变换来移动和旋转3D物体？',
                        src:
                            '跟月影学可视化/html/__271842__22 _ 如何用仿射变换来移动和旋转3D物体？.html',
                        audio: ''
                    },
                    {
                        id: '0ccl73fta5w',
                        title: '23 | 如何模拟光照让3D场景更逼真？（上）',
                        src:
                            '跟月影学可视化/html/__273007__23 _ 如何模拟光照让3D场景更逼真？（上）.html',
                        audio: ''
                    },
                    {
                        id: 'mokr8mgolcq',
                        title: '24 |  如何模拟光照让3D场景更逼真？（下）',
                        src:
                            '跟月影学可视化/html/__274341__24 _ 如何模拟光照让3D场景更逼真？（下）.html',
                        audio: ''
                    },
                    {
                        id: 'oc3cvm5ahwk',
                        title: '25 | 如何用法线贴图模拟真实物体表面',
                        src:
                            '跟月影学可视化/html/__274956__25 _ 如何用法线贴图模拟真实物体表面.html',
                        audio: ''
                    },
                    {
                        id: 'w01rwaqq7uh',
                        title: '26 | 如何绘制带宽度的曲线？',
                        src:
                            '跟月影学可视化/html/__275838__26 _ 如何绘制带宽度的曲线？.html',
                        audio: ''
                    },
                    {
                        id: 'z7i25vmz0rp',
                        title: '27 | 案例：如何实现简单的3D可视化图表？',
                        src:
                            '跟月影学可视化/html/__277226__27 _ 案例：如何实现简单的3D可视化图表？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'f8nulf10e4y',
                title: '性能篇',
                subList: [
                    {
                        id: 'zjs9ksmb07u',
                        title: '28 | Canvas、SVG与WebGL在性能上的优势与劣势',
                        src:
                            '跟月影学可视化/html/__277717__28 _ Canvas、SVG与WebGL在性能上的优势与劣势.html',
                        audio: ''
                    },
                    {
                        id: 'hahpletngr5',
                        title: '29 | 怎么给Canvas绘制加速？',
                        src:
                            '跟月影学可视化/html/__279075__29 _ 怎么给Canvas绘制加速？.html',
                        audio: ''
                    },
                    {
                        id: 'yz73hbes95a',
                        title: '30｜怎么给WebGL绘制加速？',
                        src:
                            '跟月影学可视化/html/__280287__30｜怎么给WebGL绘制加速？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'q3j22mnhaag',
                title: '数据篇',
                subList: [
                    {
                        id: 'g3fmgfbbygu',
                        title: '31 | 针对海量数据，如何优化性能？',
                        src:
                            '跟月影学可视化/html/__283666__31 _ 针对海量数据，如何优化性能？.html',
                        audio: ''
                    },
                    {
                        id: 'e1c95az618z',
                        title:
                            '32 | 数据之美：如何选择合适的方法对数据进行可视化处理？',
                        src:
                            '跟月影学可视化/html/__284595__32 _ 数据之美：如何选择合适的方法对数据进行可视化处理？.html',
                        audio: ''
                    },
                    {
                        id: 'rjenuu0qny8',
                        title:
                            '33 | 数据处理（一）：可视化数据处理的一般方法是什么？',
                        src:
                            '跟月影学可视化/html/__285581__33 _ 数据处理（一）：可视化数据处理的一般方法是什么？.html',
                        audio: ''
                    },
                    {
                        id: 'jdz91wcfp9r',
                        title: '34 | 数据处理（二）：如何处理多元变量？',
                        src:
                            '跟月影学可视化/html/__286380__34 _ 数据处理（二）：如何处理多元变量？.html',
                        audio: ''
                    },
                    {
                        id: 'wsf20iop4hc',
                        title: '35| 设计（一）：如何让可视化设计更加清晰？',
                        src:
                            '跟月影学可视化/html/__288323__35_ 设计（一）：如何让可视化设计更加清晰？.html',
                        audio: ''
                    },
                    {
                        id: '2dwta2cxln5',
                        title: '36 | 设计（二）：如何理解可视化设计原则？',
                        src:
                            '跟月影学可视化/html/__289560__36 _ 设计（二）：如何理解可视化设计原则？.html',
                        audio: ''
                    },
                    {
                        id: 'zdbw1recvbz',
                        title:
                            '37 | 实战（一）：如何使用图表库绘制常用数据图表？',
                        src:
                            '跟月影学可视化/html/__290387__37 _ 实战（一）：如何使用图表库绘制常用数据图表？.html',
                        audio: ''
                    },
                    {
                        id: 'pqtrbub385b',
                        title:
                            '38 | 实战（二）：如何使用数据驱动框架绘制常用数据图表？',
                        src:
                            '跟月影学可视化/html/__291822__38 _ 实战（二）：如何使用数据驱动框架绘制常用数据图表？.html',
                        audio: ''
                    },
                    {
                        id: 'e7elogov7hn',
                        title: '39 | 实战（三）：如何实现地理信息的可视化？',
                        src:
                            '跟月影学可视化/html/__292607__39 _ 实战（三）：如何实现地理信息的可视化？.html',
                        audio: ''
                    },
                    {
                        id: 'ivj38wetyya',
                        title: '40| 实战（四）：如何实现3D地球可视化（上）？',
                        src:
                            '跟月影学可视化/html/__294332__40_ 实战（四）：如何实现3D地球可视化（上）？.html',
                        audio: ''
                    },
                    {
                        id: '1j6fd4tw9t1',
                        title: '41 | 实战（五）：如何实现3D地球可视化（下）？',
                        src:
                            '跟月影学可视化/html/__294944__41 _ 实战（五）：如何实现3D地球可视化（下）？.html',
                        audio: ''
                    },
                    {
                        id: '9c2zlci5d5f',
                        title: '42 | 如何整理出我们自己的可视化工具集？',
                        src:
                            '跟月影学可视化/html/__296035__42 _ 如何整理出我们自己的可视化工具集？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'umkuiyc7npr',
                title: '国庆策划',
                subList: [
                    {
                        id: 'fkowphnt18u',
                        title: '国庆策划 | 假期别闲着，一起来挑战“手势密码”',
                        src:
                            '跟月影学可视化/html/__293197__国庆策划 _ 假期别闲着，一起来挑战“手势密码”.html',
                        audio: ''
                    },
                    {
                        id: 'u0ec8la1ff8',
                        title:
                            '国庆策划 | 快来看看怎么用原生JavaScript实现手势解锁组件',
                        src:
                            '跟月影学可视化/html/__293376__国庆策划 _ 快来看看怎么用原生JavaScript实现手势解锁组件.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'hbbiq4s4lql',
                title: '特别放送',
                subList: [
                    {
                        id: '07yjyxy2hyf',
                        title: '加餐1 | 作为一名程序员，数学到底要多好？',
                        src:
                            '跟月影学可视化/html/__260319__加餐1 _ 作为一名程序员，数学到底要多好？.html',
                        audio: ''
                    },
                    {
                        id: 't5cwpj34map',
                        title:
                            '加餐2 | SpriteJS：我是如何设计一个可视化图形渲染引擎的？',
                        src:
                            '跟月影学可视化/html/__280669__加餐2 _ SpriteJS：我是如何设计一个可视化图形渲染引擎的？.html',
                        audio: ''
                    },
                    {
                        id: 'ptppiupn66z',
                        title: '用户故事 | 非前端开发，我为什么要学可视化？',
                        src:
                            '跟月影学可视化/html/__281807__用户故事 _ 非前端开发，我为什么要学可视化？.html',
                        audio: ''
                    },
                    {
                        id: '4hqpmyfdngc',
                        title: '加餐3 | 轻松一刻：我想和你聊聊前端的未来',
                        src:
                            '跟月影学可视化/html/__282902__加餐3 _ 轻松一刻：我想和你聊聊前端的未来.html',
                        audio: ''
                    },
                    {
                        id: '3qxcstn9d7r',
                        title: '加餐4 | 一篇文章，带你快速理解函数式编程',
                        src:
                            '跟月影学可视化/html/__287296__加餐4 _ 一篇文章，带你快速理解函数式编程.html',
                        audio: ''
                    },
                    {
                        id: 'ch2s69820jx',
                        title: '加餐5｜周爱民：我想和你分享些学习的道理',
                        src:
                            '跟月影学可视化/html/__293016__加餐5｜周爱民：我想和你分享些学习的道理.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'dus2ms8pble',
                title: '结束语',
                subList: [
                    {
                        id: '737g7dt91eh',
                        title: '结束语 | 可视化工程师的未来之路',
                        src:
                            '跟月影学可视化/html/__296552__结束语 _ 可视化工程师的未来之路.html',
                        audio: ''
                    },
                    {
                        id: 'njv70hl5w77',
                        title: '有奖征集倒计时4天！你填写毕业问卷了吗？',
                        src:
                            '跟月影学可视化/html/__306770__有奖征集倒计时4天！你填写毕业问卷了吗？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: '9xckul4pjx8',
        type: 'web',
        cid: '207',
        title: '从0打造音视频直播系统',
        subTitle: '手把手教你打造实时互动音视频直播系统',
        authorName: '李超',
        authorInfo: '前新东方音视频直播技术专家，前沪江音视频架构师',
        contents: [
            {
                id: 'ubz7w6ggh9r',
                title: '开篇词',
                subList: [
                    {
                        id: '8625ft7ol6z',
                        title: '开篇词 | 5G的到来将会为音视频插上飞翔的翅膀',
                        src:
                            '从0打造音视频直播系统/html/__107916__开篇词 _ 5G的到来将会为音视频插上飞翔的翅膀.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'am4f0hbrtz3',
                title: 'WebRTC1对1通话',
                subList: [
                    {
                        id: 'uxm4kxfaqsx',
                        title: '01 | 原来通过浏览器访问摄像头这么容易',
                        src:
                            '从0打造音视频直播系统/html/__107948__01 _ 原来通过浏览器访问摄像头这么容易.html',
                        audio: ''
                    },
                    {
                        id: '9b0d4ovzuv5',
                        title: '02 | 如何通过WebRTC进行音视频设备检测呢？',
                        src:
                            '从0打造音视频直播系统/html/__108491__02 _ 如何通过WebRTC进行音视频设备检测呢？.html',
                        audio: ''
                    },
                    {
                        id: 'zrkg41nz992',
                        title: '03 | 如何使用浏览器给自己拍照呢？',
                        src:
                            '从0打造音视频直播系统/html/__109065__03 _ 如何使用浏览器给自己拍照呢？.html',
                        audio: ''
                    },
                    {
                        id: 'kw5agtrh9p2',
                        title: '04 | 可以把采集到的音视频数据录制下来吗？',
                        src:
                            '从0打造音视频直播系统/html/__109105__04 _ 可以把采集到的音视频数据录制下来吗？.html',
                        audio: ''
                    },
                    {
                        id: 'olqsoxl0foc',
                        title: '05 | 原来浏览器还能抓取桌面？',
                        src:
                            '从0打造音视频直播系统/html/__109973__05 _ 原来浏览器还能抓取桌面？.html',
                        audio: ''
                    },
                    {
                        id: 'j3lub5ajfw4',
                        title: '06 | WebRTC中的RTP及RTCP详解',
                        src:
                            '从0打造音视频直播系统/html/__109999__06 _ WebRTC中的RTP及RTCP详解.html',
                        audio: ''
                    },
                    {
                        id: 'lgnzsl0d1v9',
                        title: '07 | 你竟然不知道SDP？它可是WebRTC的驱动核心！',
                        src:
                            '从0打造音视频直播系统/html/__111337__07 _ 你竟然不知道SDP？它可是WebRTC的驱动核心！.html',
                        audio: ''
                    },
                    {
                        id: 'uxhm36mo8od',
                        title: '08 | 有话好商量，论媒体协商',
                        src:
                            '从0打造音视频直播系统/html/__111675__08 _ 有话好商量，论媒体协商.html',
                        audio: ''
                    },
                    {
                        id: '226o495s3hf',
                        title: '09 | 让我们揭开WebRTC建立连接的神秘面纱',
                        src:
                            '从0打造音视频直播系统/html/__112325__09 _ 让我们揭开WebRTC建立连接的神秘面纱.html',
                        audio: ''
                    },
                    {
                        id: '3a1bw6ftvit',
                        title: '10 | WebRTC NAT穿越原理',
                        src:
                            '从0打造音视频直播系统/html/__113560__10 _ WebRTC NAT穿越原理.html',
                        audio: ''
                    },
                    {
                        id: 'p6v2q5yo6e8',
                        title: '11 | 如何通过Node.js实现一套最简单的信令系统？',
                        src:
                            '从0打造音视频直播系统/html/__114179__11 _ 如何通过Node.js实现一套最简单的信令系统？.html',
                        audio: ''
                    },
                    {
                        id: '36wq44kundb',
                        title: '12 | RTCPeerConnection：音视频实时通讯的核心',
                        src:
                            '从0打造音视频直播系统/html/__116324__12 _ RTCPeerConnection：音视频实时通讯的核心.html',
                        audio: ''
                    },
                    {
                        id: '1qpwu1uvldh',
                        title: '13 | 在WebRTC中如何控制传输速率呢？',
                        src:
                            '从0打造音视频直播系统/html/__117408__13 _ 在WebRTC中如何控制传输速率呢？.html',
                        audio: ''
                    },
                    {
                        id: 'ybi7ef5nrus',
                        title: '14 | 如何打开/关闭音视频？',
                        src:
                            '从0打造音视频直播系统/html/__118194__14 _ 如何打开_关闭音视频？.html',
                        audio: ''
                    },
                    {
                        id: 'z8fy95x9cwu',
                        title: '15 | WebRTC中的数据统计原来这么强大（上）',
                        src:
                            '从0打造音视频直播系统/html/__118885__15 _ WebRTC中的数据统计原来这么强大（上）.html',
                        audio: ''
                    },
                    {
                        id: 'mbs3xl2vjpq',
                        title: '16 | WebRTC中的数据统计原来这么强大（下）',
                        src:
                            '从0打造音视频直播系统/html/__120243__16 _ WebRTC中的数据统计原来这么强大（下）.html',
                        audio: ''
                    },
                    {
                        id: '9io2k7yuinw',
                        title: '17 | 如何使用Canvas绘制统计图表（上）？',
                        src:
                            '从0打造音视频直播系统/html/__120251__17 _ 如何使用Canvas绘制统计图表（上）？.html',
                        audio: ''
                    },
                    {
                        id: 'dqhtedjzvpb',
                        title: '18 | 如何使用Canvas绘制统计图表（下）？',
                        src:
                            '从0打造音视频直播系统/html/__126276__18 _ 如何使用Canvas绘制统计图表（下）？.html',
                        audio: ''
                    },
                    {
                        id: '5qm5n80tmno',
                        title: '19 | WebRTC能不能进行文本聊天呢？',
                        src:
                            '从0打造音视频直播系统/html/__127360__19 _ WebRTC能不能进行文本聊天呢？.html',
                        audio: ''
                    },
                    {
                        id: '6a4nuumuu0f',
                        title: '20 | 原来WebRTC还可以实时传输文件？',
                        src:
                            '从0打造音视频直播系统/html/__128394__20 _ 原来WebRTC还可以实时传输文件？.html',
                        audio: ''
                    },
                    {
                        id: 'lujfapitina',
                        title: '21 | 如何保证数据传输的安全（上）？',
                        src:
                            '从0打造音视频直播系统/html/__128405__21 _ 如何保证数据传输的安全（上）？.html',
                        audio: ''
                    },
                    {
                        id: 'uocsry9u7mi',
                        title: '22 | 如何保证数据传输的安全（下）？',
                        src:
                            '从0打造音视频直播系统/html/__131276__22 _ 如何保证数据传输的安全（下）？.html',
                        audio: ''
                    },
                    {
                        id: 'y3fqu30jrrb',
                        title:
                            '23 | 实战演练：通过WebRTC实现一个1对1音视频实时直播系统',
                        src:
                            '从0打造音视频直播系统/html/__131822__23 _ 实战演练：通过WebRTC实现一个1对1音视频实时直播系统.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '8j9xmnb2xvp',
                title: 'WebRTC多人音视频实时通话',
                subList: [
                    {
                        id: 'jd7adma5vu0',
                        title: '24 | 多人音视频实时通讯是怎样的架构？',
                        src:
                            '从0打造音视频直播系统/html/__132863__24 _ 多人音视频实时通讯是怎样的架构？.html',
                        audio: ''
                    },
                    {
                        id: 'aks20bbpryz',
                        title: '25 | 那些常见的流媒体服务器，你该选择谁？',
                        src:
                            '从0打造音视频直播系统/html/__134284__25 _ 那些常见的流媒体服务器，你该选择谁？.html',
                        audio: ''
                    },
                    {
                        id: 'ymb375904bt',
                        title: '26 | 为什么编译Medooze Server这么难？',
                        src:
                            '从0打造音视频直播系统/html/__135422__26 _ 为什么编译Medooze Server这么难？.html',
                        audio: ''
                    },
                    {
                        id: '4l10w4mnd2c',
                        title: '27 | 让我们一起探索Medooze的具体实现吧（上）',
                        src:
                            '从0打造音视频直播系统/html/__136000__27 _ 让我们一起探索Medooze的具体实现吧（上）.html',
                        audio: ''
                    },
                    {
                        id: 'fqlzxqtkebu',
                        title: '28 | 让我们一起探索Medooze的具体实现吧（下）',
                        src:
                            '从0打造音视频直播系统/html/__136862__28 _ 让我们一起探索Medooze的具体实现吧（下）.html',
                        audio: ''
                    },
                    {
                        id: '63o0nj95u4k',
                        title: '29 | 如何使用Medooze 实现多方视频会议？',
                        src:
                            '从0打造音视频直播系统/html/__137836__29 _ 如何使用Medooze 实现多方视频会议？.html',
                        audio: ''
                    },
                    {
                        id: 'merfca75e8m',
                        title:
                            '30 | 实战演练：通过WebRTC实现多人音视频实时互动直播系统',
                        src:
                            '从0打造音视频直播系统/html/__138903__30 _ 实战演练：通过WebRTC实现多人音视频实时互动直播系统.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'zin8je4gj9h',
                title: '支持上万人同时在线的直播系统',
                subList: [
                    {
                        id: 'wdl7dr06rmv',
                        title: '31 | 一对多直播系统RTMP/HLS，你该选哪个？',
                        src:
                            '从0打造音视频直播系统/html/__140181__31 _ 一对多直播系统RTMP_HLS，你该选哪个？.html',
                        audio: ''
                    },
                    {
                        id: 'er1cjucr3vx',
                        title: '32 | HLS：实现一对多直播系统的必备协议',
                        src:
                            '从0打造音视频直播系统/html/__141052__32 _ HLS：实现一对多直播系统的必备协议.html',
                        audio: ''
                    },
                    {
                        id: 'h7hryh8cdp4',
                        title: '33 | FLV：适合录制的多媒体格式',
                        src:
                            '从0打造音视频直播系统/html/__141743__33 _ FLV：适合录制的多媒体格式.html',
                        audio: ''
                    },
                    {
                        id: '0wikftz7b6d',
                        title: '34 | 如何使用Nginx搭建最简单的直播服务器？',
                        src:
                            '从0打造音视频直播系统/html/__143563__34 _ 如何使用Nginx搭建最简单的直播服务器？.html',
                        audio: ''
                    },
                    {
                        id: 'jzjqla64837',
                        title: '35 | 如何构建云端一对多直播系统？',
                        src:
                            '从0打造音视频直播系统/html/__144646__35 _ 如何构建云端一对多直播系统？.html',
                        audio: ''
                    },
                    {
                        id: 'a36bprc1m84',
                        title: '36 | 如何使用 flv.js 播放 FLV 多媒体文件呢？',
                        src:
                            '从0打造音视频直播系统/html/__145000__36 _ 如何使用 flv.js 播放 FLV 多媒体文件呢？.html',
                        audio: ''
                    },
                    {
                        id: 'v2ygxciiua7',
                        title: '37 | 如何使用 video.js 播放多媒体文件？',
                        src:
                            '从0打造音视频直播系统/html/__145003__37 _ 如何使用 video.js 播放多媒体文件？.html',
                        audio: ''
                    },
                    {
                        id: 'ld1fb6zatgo',
                        title:
                            '38 | 实战推演：带你实现一个支持万人同时在线的直播系统',
                        src:
                            '从0打造音视频直播系统/html/__147300__38 _ 实战推演：带你实现一个支持万人同时在线的直播系统.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'qn6o5aor2ep',
                title: '结束语',
                subList: [
                    {
                        id: 'g49z7h9nni1',
                        title: '结束语 | 路漫漫其修远兮，吾将上下而求索',
                        src:
                            '从0打造音视频直播系统/html/__148589__结束语 _ 路漫漫其修远兮，吾将上下而求索.html',
                        audio: ''
                    },
                    {
                        id: 'u0lokh3sqv1',
                        title:
                            '结课测试 | 这些音视频直播系统的知识你都掌握了吗？',
                        src:
                            '从0打造音视频直播系统/html/__230841__结课测试 _ 这些音视频直播系统的知识你都掌握了吗？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'dbn11xsqgxe',
        type: 'web',
        cid: '252',
        title: 'JavaScript核心原理解析',
        subTitle: '重构你对JavaScript语言的认知',
        authorName: '周爱民',
        authorInfo:
            '《JavaScript语言精髓与编程实践》作者，南潮科技（Ruff）首席架构师',
        contents: [
            {
                id: 'el7udyyne7o',
                title: '开篇词',
                subList: [
                    {
                        id: '4wi6qjrvf9o',
                        title: '开篇词 | 如何解决语言问题？',
                        src:
                            'JavaScript核心原理解析/html/__163480__开篇词 _ 如何解决语言问题？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'usarw9kqz9z',
                title: '从零开始：JavaScript语言是如何构建起来的',
                subList: [
                    {
                        id: '9pf5asovry7',
                        title:
                            '01 | delete 0：JavaScript中到底有什么是可以销毁的',
                        src:
                            'JavaScript核心原理解析/html/__164312__01 _ delete 0：JavaScript中到底有什么是可以销毁的.html',
                        audio: ''
                    },
                    {
                        id: '4k0yot1zfp7',
                        title:
                            '02 | var x = y = 100：声明语句与语法改变了JavaScript语言核心性质',
                        src:
                            'JavaScript核心原理解析/html/__165198__02 _ var x = y = 100：声明语句与语法改变了JavaScript语言核心性质.html',
                        audio: ''
                    },
                    {
                        id: 'jcuvhyspwrr',
                        title:
                            '03 | a.x = a = {n:2}：一道被无数人无数次地解释过的经典面试题',
                        src:
                            'JavaScript核心原理解析/html/__165985__03 _ a.x = a = {n_2}：一道被无数人无数次地解释过的经典面试题.html',
                        audio: ''
                    },
                    {
                        id: 'g6e6thnmxum',
                        title:
                            '04 | export default function() {}：你无法导出一个匿名函数表达式',
                        src:
                            'JavaScript核心原理解析/html/__166491__04 _ export default function() {}：你无法导出一个匿名函数表达式.html',
                        audio: ''
                    },
                    {
                        id: 'j4pcdka8936',
                        title:
                            '05 | for (let x of [1,2,3]) ...：for循环并不比使用函数递归节省开销',
                        src:
                            'JavaScript核心原理解析/html/__167907__05 _ for (let x of [1,2,3]) ...：for循环并不比使用函数递归节省开销.html',
                        audio: ''
                    },
                    {
                        id: 'q2ea1xonojx',
                        title:
                            '加餐 | 捡豆吃豆的学问（上）：这门课讲的是什么？',
                        src:
                            'JavaScript核心原理解析/html/__171116__加餐 _ 捡豆吃豆的学问（上）：这门课讲的是什么？.html',
                        audio: ''
                    },
                    {
                        id: 'k6mly8omx21',
                        title: '加餐 | 捡豆吃豆的学问（下）：这门课该怎么学？',
                        src:
                            'JavaScript核心原理解析/html/__171125__加餐 _ 捡豆吃豆的学问（下）：这门课该怎么学？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'p3ytidafkc0',
                title: '从表达式到执行引擎：JavaScript是如何运行的',
                subList: [
                    {
                        id: '8yifzdbx95q',
                        title:
                            '06 | x: break x;  搞懂如何在循环外使用break，方知语句执行真解',
                        src:
                            'JavaScript核心原理解析/html/__168980__06 _ x_ break x; 搞懂如何在循环外使用break，方知语句执行真解.html',
                        audio: ''
                    },
                    {
                        id: 'o6a1kw6e9ao',
                        title: '07 | `${1}`：详解JavaScript中特殊的可执行结构',
                        src:
                            'JavaScript核心原理解析/html/__169584__07 _ `${1}`：详解JavaScript中特殊的可执行结构.html',
                        audio: ''
                    },
                    {
                        id: '4syptxsz7cq',
                        title:
                            '08 | x => x：函数式语言的核心抽象：函数与表达式的同一性',
                        src:
                            'JavaScript核心原理解析/html/__171617__08 _ x =_ x：函数式语言的核心抽象：函数与表达式的同一性.html',
                        audio: ''
                    },
                    {
                        id: 'huthahvtzam',
                        title:
                            '09 | (...x)：不是表达式、语句、函数，但它却能执行',
                        src:
                            'JavaScript核心原理解析/html/__172636__09 _ (...x)：不是表达式、语句、函数，但它却能执行.html',
                        audio: ''
                    },
                    {
                        id: 'pv5qkngc3w5',
                        title: '10 | x = yield x：迭代过程的“函数式化”',
                        src:
                            'JavaScript核心原理解析/html/__174314__10 _ x = yield x：迭代过程的“函数式化”.html',
                        audio: ''
                    },
                    {
                        id: 'rjbb4hmgis1',
                        title: '11 | throw 1;：它在“最简单语法榜”上排名第三',
                        src:
                            'JavaScript核心原理解析/html/__175044__11 _ throw 1;：它在“最简单语法榜”上排名第三.html',
                        audio: ''
                    },
                    {
                        id: 'ytqbpzoig34',
                        title: '加餐 | 让JavaScript运行起来',
                        src:
                            'JavaScript核心原理解析/html/__175261__加餐 _ 让JavaScript运行起来.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'pypl4g18u19',
                title: '从原型到类：JavaScript是如何一步步走向应用编程语言的',
                subList: [
                    {
                        id: 'bz331novs6i',
                        title:
                            '12 | 1 in 1..constructor：这行代码的结果，既可能是true，也可能是false',
                        src:
                            'JavaScript核心原理解析/html/__176975__12 _ 1 in 1..constructor：这行代码的结果，既可能是true，也可能是false.html',
                        audio: ''
                    },
                    {
                        id: '68ylr8g8rqj',
                        title:
                            '13 | new X：从构造器到类，为你揭密对象构造的全程',
                        src:
                            'JavaScript核心原理解析/html/__177397__13 _ new X：从构造器到类，为你揭密对象构造的全程.html',
                        audio: ''
                    },
                    {
                        id: 'px8jwy464to',
                        title:
                            '14 | super.xxx()：虽然直到ES10还是个半吊子实现，却也值得一讲',
                        src:
                            'JavaScript核心原理解析/html/__178150__14 _ super.xxx()：虽然直到ES10还是个半吊子实现，却也值得一讲.html',
                        audio: ''
                    },
                    {
                        id: 'iy7wm022xr7',
                        title:
                            '15 | return Object.create(new.target.prototype)：做框架设计的基本功：写一个根类',
                        src:
                            'JavaScript核心原理解析/html/__179238__15 _ return Object.create(new.target.prototype)：做框架设计的基本功：写一个根类.html',
                        audio: ''
                    },
                    {
                        id: 'cugatw90ksf',
                        title:
                            '16 | [a, b] = {a, b}：让你从一行代码看到对象的本质',
                        src:
                            'JavaScript核心原理解析/html/__179774__16 _ [a, b] = {a, b}：让你从一行代码看到对象的本质.html',
                        audio: ''
                    },
                    {
                        id: 'gcu0o81b35y',
                        title:
                            '17 | Object.setPrototypeOf(x, null)：连Brendan Eich都认错，但null值还活着',
                        src:
                            'JavaScript核心原理解析/html/__181429__17 _ Object.setPrototypeOf(x, null)：连Brendan Eich都认错，但null值还活着.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'dv47b6wbqv5',
                title: '从粗通到精通的进阶之路：唯一不变的是变化本身',
                subList: [
                    {
                        id: '7su3dipv43l',
                        title:
                            '18 | a + b：动态类型是灾难之源还是最好的特性？（上）',
                        src:
                            'JavaScript核心原理解析/html/__181952__18 _ a + b：动态类型是灾难之源还是最好的特性？（上）.html',
                        audio: ''
                    },
                    {
                        id: 'xvm3capfkit',
                        title:
                            '19 | a + b：动态类型是灾难之源还是最好的特性？（下）',
                        src:
                            'JavaScript核心原理解析/html/__182300__19 _ a + b：动态类型是灾难之源还是最好的特性？（下）.html',
                        audio: ''
                    },
                    {
                        id: 'mvxaek565tj',
                        title:
                            '20 | (0, eval)("x = 100") ：一行让严格模式形同虚设的破坏性设计（上）',
                        src:
                            'JavaScript核心原理解析/html/__183440__20 _ (0, eval)(_x = 100_) ：一行让严格模式形同虚设的破坏性设计（上）.html',
                        audio: ''
                    },
                    {
                        id: 'knli3q6r117',
                        title:
                            '21 | (0, eval)("x = 100") ：一行让严格模式形同虚设的破坏性设计（下）',
                        src:
                            'JavaScript核心原理解析/html/__184589__21 _ (0, eval)(_x = 100_) ：一行让严格模式形同虚设的破坏性设计（下）.html',
                        audio: ''
                    },
                    {
                        id: 'gqvyc3nkkjc',
                        title:
                            "22 | new Function('x = 100')();：函数的类化是对动态与静态系统的再次统一",
                        src:
                            "JavaScript核心原理解析/html/__185031__22 _ new Function('x = 100')();：函数的类化是对动态与静态系统的再次统一.html",
                        audio: ''
                    }
                ]
            },
            {
                id: '21m0glbdo9v',
                title: '结束语',
                subList: [
                    {
                        id: 'sly54h4n825',
                        title: '结束语 | 愿你能做一个真正“懂”的程序员',
                        src:
                            'JavaScript核心原理解析/html/__185727__结束语 _ 愿你能做一个真正“懂”的程序员.html',
                        audio: ''
                    },
                    {
                        id: '21fv0xlal0e',
                        title:
                            '结课测试 | 这些JavaScript知识，你真的掌握了吗？',
                        src:
                            'JavaScript核心原理解析/html/__252779__结课测试 _ 这些JavaScript知识，你真的掌握了吗？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'rtkwa6fl4cl',
        type: 'web',
        cid: '416',
        title: 'ReactHooks核心原理与实战',
        subTitle: '业务场景驱动，带你吃透 React Hooks',
        authorName: '王沛',
        authorInfo: 'eBay 中国研发中心资深技术专家',
        contents: [
            {
                id: '4yj4zklguor',
                title: '开篇词',
                subList: [
                    {
                        id: 'jwro9vajyy9',
                        title:
                            '开篇词 | 全面拥抱 Hooks，掌握最新 React 开发方式',
                        src:
                            'ReactHooks核心原理与实战/html/__376577__开篇词_全面拥抱Hooks掌握最新React开发方式.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'k6b2mob5wnu',
                title: '基础篇',
                subList: [
                    {
                        id: 'grv57yzjhwl',
                        title:
                            '01｜认识 React：如何创建你的第一个 React 应用？',
                        src:
                            'ReactHooks核心原理与实战/html/__376532__01认识React如何创建你的第一个React应用.html',
                        audio: ''
                    },
                    {
                        id: '4wv8if0lb0c',
                        title: '02｜理解 Hooks：React 为什么要发明 Hooks？',
                        src:
                            'ReactHooks核心原理与实战/html/__378311__02理解HooksReact为什么要发明Hooks.html',
                        audio: ''
                    },
                    {
                        id: '2x3c0n6acvt',
                        title:
                            '03｜内置 Hooks（1）：如何保存组件状态和使用生命周期？',
                        src:
                            'ReactHooks核心原理与实战/html/__379299__03内置Hooks1如何保存组件状态和使用生命周期.html',
                        audio: ''
                    },
                    {
                        id: 'fhp4qblr0e9',
                        title:
                            '04｜内置 Hooks（2）：为什么要避免重复定义回调函数？',
                        src:
                            'ReactHooks核心原理与实战/html/__380210__04内置Hooks2为什么要避免重复定义回调函数.html',
                        audio: ''
                    },
                    {
                        id: 'nea78x6soax',
                        title:
                            '05｜进一步认识 Hooks ：如何正确理解函数组件的生命周期？',
                        src:
                            'ReactHooks核心原理与实战/html/__380891__05进一步认识Hooks如何正确理解函数组件的生命周期.html',
                        audio: ''
                    },
                    {
                        id: 'yn09hx81jkk',
                        title: '06｜自定义Hooks ：四个典型的使用场景',
                        src:
                            'ReactHooks核心原理与实战/html/__381423__06自定义Hooks四个典型的使用场景.html',
                        audio: ''
                    },
                    {
                        id: 'uiwuay57uya',
                        title: '07｜全局状态管理：如何在函数组件中使用 Redux？',
                        src:
                            'ReactHooks核心原理与实战/html/__382459__07全局状态管理如何在函数组件中使用Redux.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '4cy0fa7wi3r',
                title: '实战篇',
                subList: [
                    {
                        id: '2wh40a72gvr',
                        title: '08｜复杂状态处理：如何保证状态一致性？',
                        src:
                            'ReactHooks核心原理与实战/html/__383084__08复杂状态处理如何保证状态一致性.html',
                        audio: ''
                    },
                    {
                        id: '9qf4aehbh0n',
                        title: '答疑解惑01｜如何转换应用React Hooks 的思路？',
                        src:
                            'ReactHooks核心原理与实战/html/__384252__答疑解惑01如何转换应用ReactHooks的思路.html',
                        audio: ''
                    },
                    {
                        id: '07zs2d1vprr',
                        title: '09｜异步处理：如何向服务器端发送请求？',
                        src:
                            'ReactHooks核心原理与实战/html/__384630__09异步处理如何向服务器端发送请求.html',
                        audio: ''
                    },
                    {
                        id: '9whcki2fdiw',
                        title:
                            '10｜函数组件设计模式：如何应对复杂条件渲染场景？',
                        src:
                            'ReactHooks核心原理与实战/html/__385358__10函数组件设计模式如何应对复杂条件渲染场景.html',
                        audio: ''
                    },
                    {
                        id: 'ma38gkj4qy5',
                        title: '11｜事件处理：如何创建自定义事件？',
                        src:
                            'ReactHooks核心原理与实战/html/__385964__11事件处理如何创建自定义事件.html',
                        audio: ''
                    },
                    {
                        id: '1xqwpqu8ckv',
                        title: '12｜项目结构：为什么要按领域组织文件夹结构？',
                        src:
                            'ReactHooks核心原理与实战/html/__386843__12项目结构为什么要按领域组织文件夹结构.html',
                        audio: ''
                    },
                    {
                        id: '8kbjiuwfm7x',
                        title: '13｜Form：Hooks 给 Form 处理带来了哪些新变化？',
                        src:
                            'ReactHooks核心原理与实战/html/__387824__13FormHooks给Form处理带来了哪些新变化.html',
                        audio: ''
                    },
                    {
                        id: 'zcrvteeampq',
                        title:
                            '14 | 使用浮动层：如何展示对话框，并给对话框传递参数？',
                        src:
                            'ReactHooks核心原理与实战/html/__388776__14_使用浮动层如何展示对话框并给对话框传递参数.html',
                        audio: ''
                    },
                    {
                        id: '615dta8bmlq',
                        title:
                            '15 | 路由管理：为什么每一个前端应用都需要使用路由机制？',
                        src:
                            'ReactHooks核心原理与实战/html/__389596__15_路由管理为什么每一个前端应用都需要使用路由机制.html',
                        audio: ''
                    },
                    {
                        id: 'o6m43a26zmd',
                        title: '16 | 按需加载：如何提升应用打开速度？',
                        src:
                            'ReactHooks核心原理与实战/html/__390121__16_按需加载如何提升应用打开速度.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'bu5z4f3gbvc',
                title: '扩展篇',
                subList: [
                    {
                        id: '3oxgqartoqb',
                        title: '17 | 打包部署：你的应用是如何上线的？',
                        src:
                            'ReactHooks核心原理与实战/html/__391089__17_打包部署你的应用是如何上线的.html',
                        audio: ''
                    },
                    {
                        id: 'f2gafj7r1gb',
                        title:
                            '18 | 单元测试：自定义 Hooks 应该如何进行单元测试？',
                        src:
                            'ReactHooks核心原理与实战/html/__391977__18_单元测试自定义Hooks应该如何进行单元测试.html',
                        audio: ''
                    },
                    {
                        id: 'usu145oxu1g',
                        title: '19｜第三方工具库：最常用的第三方工具库有哪些？',
                        src:
                            'ReactHooks核心原理与实战/html/__393048__19第三方工具库最常用的第三方工具库有哪些.html',
                        audio: ''
                    },
                    {
                        id: 'by6v0zqb57e',
                        title: '20 | React 的未来：什么是服务器端组件？',
                        src:
                            'ReactHooks核心原理与实战/html/__393688__20_React的未来什么是服务器端组件.html',
                        audio: ''
                    },
                    {
                        id: '62879cfbijz',
                        title: '答疑解惑02',
                        src:
                            'ReactHooks核心原理与实战/html/__394526__答疑解惑02.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'j4nfus58syk',
                title: '结课测试题',
                subList: [
                    {
                        id: 'jovl7ti6bvh',
                        title:
                            '结课测试题｜这些 React Hooks 的知识你都掌握了吗？',
                        src:
                            'ReactHooks核心原理与实战/html/__395584__结课测试题｜这些 React Hooks 的知识你都掌握了吗？.html',
                        audio: ''
                    },
                    {
                        id: '9nvmgx3zolo',
                        title: '结束语｜抓住本质，方能事半功倍',
                        src:
                            'ReactHooks核心原理与实战/html/__396547__结束语｜抓住本质，方能事半功倍.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    // {
    //     id: 'ztnbgyi6ae1',
    //     type: 'web',
    //     cid: '100053801',
    //     title: '跟月影学可视化',
    //     authorInfo: '360的',
    //     authorName: '月影',
    //     contents: [
    //         {
    //             id: 'cdywx0u429n',
    //             title: '课前必学',
    //             subList: [
    //                 {
    //                     id: '1n8fy9v4ktv',
    //                     title: '开篇词 | 不写网页的前端工程师，还能干什么？',
    //                     src:
    //                         './跟月影学可视化/html/00开篇词不写网页的前端工程师还能干什么.html',
    //                     audio:
    //                         './跟月影学可视化/audio/00开篇词不写网页的前端工程师还能干什么.mp3'
    //                 },
    //                 {
    //                     id: '0jmepk60fm4',
    //                     title: '预习 | Web前端与可视化到底有什么区别？',
    //                     src:
    //                         './跟月影学可视化/html/00预习Web前端与可视化到底有什么区别.html',
    //                     audio:
    //                         './跟月影学可视化/audio/00预习Web前端与可视化到底有什么区别.mp3'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'd7voexpq7ne',
    //             title: '图形基础篇',
    //             subList: [
    //                 {
    //                     id: 'pcdvwvijtpk',
    //                     title: '01 | 浏览器中实现可视化的四种方式',
    //                     src:
    //                         './跟月影学可视化/html/01浏览器中实现可视化的四种方式.html',
    //                     audio:
    //                         './跟月影学可视化/audio/01浏览器中实现可视化的四种方式.mp3'
    //                 },
    //                 {
    //                     id: 'ur9dudhq03i',
    //                     title:
    //                         '02 |  指令式绘图系统：如何用Canvas绘制层次关系图？',
    //                     src:
    //                         './跟月影学可视化/html/02指令式绘图系统如何用Canvas绘制层次关系图.html',
    //                     audio:
    //                         './跟月影学可视化/audio/02指令式绘图系统如何用Canvas绘制层次关系图.mp3'
    //                 },
    //                 {
    //                     id: 'tr04nyqr5b5',
    //                     title:
    //                         '03 | 声明式图形系统：如何用SVG图形元素绘制可视化图表？',
    //                     src:
    //                         './跟月影学可视化/html/03声明式图形系统如何用SVG图形元素绘制可视化图表.html',
    //                     audio:
    //                         './跟月影学可视化/audio/03声明式图形系统如何用SVG图形元素绘制可视化图表.mp3'
    //                 },
    //                 {
    //                     id: 'tnrorn8s730',
    //                     title:
    //                         '04 | GPU与渲染管线：如何用WebGL绘制最简单的几何图形？',
    //                     src:
    //                         './跟月影学可视化/html/04GPU与渲染管线如何用WebGL绘制最简单的几何图形上.html',
    //                     audio:
    //                         './跟月影学可视化/audio/04GPU与渲染管线如何用WebGL绘制最简单的几何图形上.mp3'
    //                 }
    //             ]
    //         },
    //         {
    //             id: '410yyaa4iyq',
    //             title: '数学篇',
    //             subList: [
    //                 {
    //                     id: 'ix8z8bvmppc',
    //                     title: '05 | 如何用向量和坐标系描述点和线段？',
    //                     src:
    //                         './跟月影学可视化/html/05如何用向量和坐标系描述点和线段.html',
    //                     audio:
    //                         './跟月影学可视化/audio/05如何用向量和坐标系描述点和线段.mp3'
    //                 },
    //                 {
    //                     id: 'wqwe473pm5k',
    //                     title: '06 |  可视化中你必须要掌握的向量乘法知识',
    //                     src:
    //                         './跟月影学可视化/html/06可视化中你必须要掌握的向量乘法知识.html',
    //                     audio:
    //                         './跟月影学可视化/audio/06可视化中你必须要掌握的向量乘法知识.mp3'
    //                 },
    //                 {
    //                     id: '61gp6h39je2',
    //                     title: '07 | 如何用向量和参数方程描述曲线？',
    //                     src:
    //                         './跟月影学可视化/html/07如何用向量和参数方程描述曲线.html',
    //                     audio:
    //                         './跟月影学可视化/audio/07如何用向量和参数方程描述曲线.mp3'
    //                 },
    //                 {
    //                     id: 'ygrsdz70l6k',
    //                     title:
    //                         '08 | 如何利用三角剖分和向量操作描述并处理多边形？',
    //                     src:
    //                         './跟月影学可视化/html/08如何利用三角剖分和向量操作描述并处理多边形.html',
    //                     audio:
    //                         './跟月影学可视化/audio/08如何利用三角剖分和向量操作描述并处理多边形.mp3'
    //                 },
    //                 {
    //                     id: 'ob4rxekhayl',
    //                     title: '09 | 如何用仿射变换对几何图形进行坐标变换？',
    //                     src:
    //                         './跟月影学可视化/html/09如何用仿射变换对几何图形进行坐标变换.html',
    //                     audio:
    //                         './跟月影学可视化/audio/09如何用仿射变换对几何图形进行坐标变换.mp3'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'podjol935pw',
    //             title: '视觉基础篇',
    //             subList: [
    //                 {
    //                     id: 'jz8nl2wd6uw',
    //                     title: '10 | 图形系统如何表示颜色？',
    //                     src:
    //                         './跟月影学可视化/html/10图形系统如何表示颜色.html',
    //                     audio:
    //                         './跟月影学可视化/audio/10图形系统如何表示颜色.mp3'
    //                 },
    //                 {
    //                     id: 'wrx64786wvb',
    //                     title:
    //                         '11｜图案生成：如何生成重复图案、分形图案以及随机效果？',
    //                     src:
    //                         './跟月影学可视化/html/11图案生成如何生成重复图案分形图案以及随机效果.html',
    //                     audio:
    //                         './跟月影学可视化/audio/11图案生成如何生成重复图案分形图案以及随机效果.mp3'
    //                 },
    //                 {
    //                     id: '53bsli2vyov',
    //                     title: '12 | 如何使用滤镜函数实现美颜效果？',
    //                     src:
    //                         './跟月影学可视化/html/12如何使用滤镜函数实现美颜效果.html',
    //                     audio:
    //                         './跟月影学可视化/audio/12如何使用滤镜函数实现美颜效果.mp3'
    //                 },
    //                 {
    //                     id: 'm44sh6n1x1a',
    //                     title: '13 | 如何给简单的图案添加纹理和复杂滤镜？',
    //                     src:
    //                         './跟月影学可视化/html/13如何给简单的图案添加纹理和复杂滤镜.html',
    //                     audio:
    //                         './跟月影学可视化/audio/13如何给简单的图案添加纹理和复杂滤镜.mp3'
    //                 },
    //                 {
    //                     id: 'e0n1vdfxpn8',
    //                     title: '14 | 如何使用片元着色器进行几何造型？',
    //                     src:
    //                         './跟月影学可视化/html/14如何使用片元着色器进行几何造型.html',
    //                     audio:
    //                         './跟月影学可视化/audio/14如何使用片元着色器进行几何造型.mp3'
    //                 },
    //                 {
    //                     id: '1anus9u2kij',
    //                     title: '15 | 如何用极坐标系绘制有趣图案？',
    //                     src:
    //                         './跟月影学可视化/html/15如何用极坐标系绘制有趣图案.html',
    //                     audio:
    //                         './跟月影学可视化/audio/15如何用极坐标系绘制有趣图案.mp3'
    //                 },
    //                 {
    //                     id: 'nxeqgfr3p8l',
    //                     title: '16 | 如何使用噪声生成复杂的纹理？',
    //                     src:
    //                         './跟月影学可视化/html/16如何使用噪声生成复杂的纹理.html',
    //                     audio:
    //                         './跟月影学可视化/audio/16如何使用噪声生成复杂的纹理.mp3'
    //                 },
    //                 {
    //                     id: '33k445fon80',
    //                     title: '17 | 如何使用后期处理通道增强图像效果？',
    //                     src:
    //                         './跟月影学可视化/html/17如何使用后期处理通道增强图像效果.html',
    //                     audio:
    //                         './跟月影学可视化/audio/17如何使用后期处理通道增强图像效果.mp3'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'gjomzq50c7c',
    //             title: '视觉高级篇',
    //             subList: [
    //                 {
    //                     id: 'ngpfhw3flid',
    //                     title: '18 | 如何生成简单动画让图形动起来？',
    //                     src:
    //                         './跟月影学可视化/html/18如何生成简单动画让图形动起来.html',
    //                     audio:
    //                         './跟月影学可视化/audio/18如何生成简单动画让图形动起来.mp3'
    //                 },
    //                 {
    //                     id: '2jmlce8c8hv',
    //                     title: '19 | 如何用着色器实现像素动画？',
    //                     src:
    //                         './跟月影学可视化/html/19如何用着色器实现像素动画.html',
    //                     audio:
    //                         './跟月影学可视化/audio/19如何用着色器实现像素动画.mp3'
    //                 },
    //                 {
    //                     id: 'qfju33o53jq',
    //                     title: '20 | 如何用WebGL绘制3D物体？',
    //                     src:
    //                         './跟月影学可视化/html/20如何用WebGL绘制3D物体.html',
    //                     audio:
    //                         './跟月影学可视化/audio/20如何用WebGL绘制3D物体.mp3'
    //                 },
    //                 {
    //                     id: '0t4hpnah65c',
    //                     title: '21 | 如何添加相机，用透视原理对物体进行投影？',
    //                     src:
    //                         './跟月影学可视化/html/21如何添加相机用透视原理对物体进行投影.html',
    //                     audio:
    //                         './跟月影学可视化/audio/21如何添加相机用透视原理对物体进行投影.mp3'
    //                 },
    //                 {
    //                     id: '201wnniku70',
    //                     title: '22 | 如何用仿射变换来移动和旋转3D物体？',
    //                     src: '',
    //                     audio: ''
    //                 },
    //                 {
    //                     id: '1fh0out8gpg',
    //                     title: '23 | 如何模拟光照让3D场景更逼真？（上）',
    //                     src: '',
    //                     audio: ''
    //                 },
    //                 {
    //                     id: 'cy8t9eb8ps1',
    //                     title: '24 |  如何模拟光照让3D场景更逼真？（下）',
    //                     src: '',
    //                     audio: ''
    //                 },
    //                 {
    //                     id: 'zcz42hptsou',
    //                     title: '25 | 如何用法线贴图模拟真实物体表面',
    //                     src: '',
    //                     audio: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'i9ol8w3n1x3',
    //             title: '特别放送',
    //             subList: [
    //                 {
    //                     id: 'wadq4ossnz7',
    //                     title: '加餐一 | 作为一名程序员，数学到底要多好？',
    //                     src:
    //                         './跟月影学可视化/html/加餐一作为一名程序员数学到底要多好.html',
    //                     audio:
    //                         './跟月影学可视化/audio/加餐一作为一名程序员数学到底要多好.mp3'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        id: 'qnu3goh6npx',
        type: 'web',
        cid: '100031001',
        title: 'Flutter核心技术与实战',
        subTitle: '来自Google的高性能跨平台开发框架',
        authorName: '陈航',
        authorInfo: '美团点评高级技术专家',
        contents: [
            {
                id: 'xuuoe4m1nue',
                title: '课前必读',
                subList: [
                    {
                        id: 'yzxah99r0b1',
                        title:
                            '开篇词 | 为什么每一位大前端从业者都应该学习Flutter？',
                        src:
                            './Flutter核心技术与实战/html/开篇词为什么每一位大前端从业者都应该学习Flutter.html',
                        audio:
                            './Flutter核心技术与实战/audio/开篇词为什么每一位大前端从业者都应该学习Flutter.mp3'
                    },
                    {
                        id: 'gotzuv98gq3',
                        title: '01 | 预习篇 · 从0开始搭建Flutter工程环境',
                        src:
                            './Flutter核心技术与实战/html/01预习篇·从0开始搭建Flutter工程环境.html',
                        audio:
                            './Flutter核心技术与实战/audio/01预习篇·从0开始搭建Flutter工程环境.mp3'
                    },
                    {
                        id: 'g6os8konrm2',
                        title: '02 | 预习篇 · Dart语言概览',
                        src:
                            './Flutter核心技术与实战/html/02预习篇·Dart语言概览1.html',
                        audio:
                            './Flutter核心技术与实战/audio/02预习篇·Dart语言概览.mp3'
                    }
                ]
            },
            {
                id: 'i5vu8r7henj',
                title: 'Flutter开发起步',
                subList: [
                    {
                        id: 'fng3vpriilk',
                        title: '03 | 深入理解跨平台方案的历史发展逻辑',
                        src:
                            './Flutter核心技术与实战/html/03深入理解跨平台方案的历史发展逻辑.html',
                        audio:
                            './Flutter核心技术与实战/audio/03深入理解跨平台方案的历史发展逻辑.mp3'
                    },
                    {
                        id: 'zuf7q4ki10l',
                        title: '04 | Flutter区别于其他方案的关键技术是什么？',
                        src:
                            './Flutter核心技术与实战/html/04Flutter区别于其他方案的关键技术是什么.html',
                        audio:
                            './Flutter核心技术与实战/audio/04Flutter区别于其他方案的关键技术是什么.mp3'
                    },
                    {
                        id: 'xmgtd9lcrox',
                        title:
                            '05 | 从标准模板入手，体会Flutter代码是如何运行在原生系统上的',
                        src:
                            './Flutter核心技术与实战/html/05从标准模板入手体会Flutter代码是如何运行在原生系统上的.html',
                        audio:
                            './Flutter核心技术与实战/audio/05从标准模板入手体会Flutter代码是如何运行在原生系统上的.mp3'
                    }
                ]
            },
            {
                id: 'j8k9oux1z8u',
                title: 'Dart语言基础',
                subList: [
                    {
                        id: '1hp5ivg7189',
                        title:
                            '06 | 基础语法与类型变量：Dart是如何表示信息的？',
                        src:
                            './Flutter核心技术与实战/html/06基础语法与类型变量Dart是如何表示信息的.html',
                        audio:
                            './Flutter核心技术与实战/audio/06基础语法与类型变量Dart是如何表示信息的.mp3'
                    },
                    {
                        id: 'pjrvd1mkt5p',
                        title: '07 | 函数、类与运算符：Dart是如何处理信息的？',
                        src:
                            './Flutter核心技术与实战/html/07函数类与运算符Dart是如何处理信息的.html',
                        audio:
                            './Flutter核心技术与实战/audio/07函数类与运算符Dart是如何处理信息的.mp3'
                    },
                    {
                        id: '9g44k5n5vk7',
                        title: '08 | 综合案例：掌握Dart核心特性',
                        src:
                            './Flutter核心技术与实战/html/08综合案例掌握Dart核心特性.html',
                        audio:
                            './Flutter核心技术与实战/audio/08综合案例掌握Dart核心特性.mp3'
                    }
                ]
            },
            {
                id: 'rlsg1ls5km6',
                title: 'Flutter基础',
                subList: [
                    {
                        id: 'gonimtygcy4',
                        title: '09 | Widget，构建Flutter界面的基石',
                        src:
                            './Flutter核心技术与实战/html/09Widget构建Flutter界面的基石.html',
                        audio:
                            './Flutter核心技术与实战/audio/09Widget构建Flutter界面的基石.mp3'
                    },
                    {
                        id: '0gzluf2bz7m',
                        title: '10 | Widget中的State到底是什么？',
                        src:
                            './Flutter核心技术与实战/html/10Widget中的State到底是什么.html',
                        audio:
                            './Flutter核心技术与实战/audio/10Widget中的State到底是什么.mp3'
                    },
                    {
                        id: '7coxljz3srf',
                        title: '11 | 提到生命周期，我们是在说什么？',
                        src:
                            './Flutter核心技术与实战/html/11提到生命周期我们是在说什么.html',
                        audio:
                            './Flutter核心技术与实战/audio/11提到生命周期我们是在说什么1.mp3'
                    },
                    {
                        id: 'ky9empr8rir',
                        title:
                            '12 | 经典控件（一）：文本、图片和按钮在Flutter中怎么用？',
                        src:
                            './Flutter核心技术与实战/html/12经典控件一文本图片和按钮在Flutter中怎么用.html',
                        audio:
                            './Flutter核心技术与实战/audio/12经典控件一文本图片和按钮在Flutter中怎么用.mp3'
                    },
                    {
                        id: 'xb6cxyaiuh8',
                        title:
                            '13 | 经典控件（二）：UITableView/ListView在Flutter中是什么？',
                        src:
                            './Flutter核心技术与实战/html/13经典控件二UITableViewListView在Flutter中是什么.html',
                        audio:
                            './Flutter核心技术与实战/audio/13经典控件二UITableViewListView在Flutter中是什么.mp3'
                    },
                    {
                        id: '8nli572b6bi',
                        title:
                            '14 | 经典布局：如何定义子控件在父容器中排版的位置？',
                        src:
                            './Flutter核心技术与实战/html/14经典布局如何定义子控件在父容器中排版的位置.html',
                        audio:
                            './Flutter核心技术与实战/audio/14经典布局如何定义子控件在父容器中排版的位置.mp3'
                    },
                    {
                        id: '2bdy4lcmbnd',
                        title:
                            '15 | 组合与自绘，我该选用何种方式自定义Widget？',
                        src:
                            './Flutter核心技术与实战/html/15组合与自绘我该选用何种方式自定义Widget.html',
                        audio:
                            './Flutter核心技术与实战/audio/15组合与自绘我该选用何种方式自定义Widget1.mp3'
                    },
                    {
                        id: 'fmb137hznw4',
                        title:
                            '16 | 从夜间模式说起，如何定制不同风格的App主题？',
                        src:
                            './Flutter核心技术与实战/html/16从夜间模式说起如何定制不同风格的App主题.html',
                        audio:
                            './Flutter核心技术与实战/audio/16从夜间模式说起如何定制不同风格的App主题1.mp3'
                    },
                    {
                        id: 'y1b39399wmp',
                        title:
                            '17 | 依赖管理（一）：图片、配置和字体在Flutter中怎么用？',
                        src:
                            './Flutter核心技术与实战/html/17依赖管理一图片配置和字体在Flutter中怎么用.html',
                        audio:
                            './Flutter核心技术与实战/audio/17依赖管理一图片配置和字体在Flutter中怎么用.mp3'
                    },
                    {
                        id: 'vjqzhnooorv',
                        title:
                            '18 | 依赖管理（二）：第三方组件库在Flutter中要如何管理？',
                        src:
                            './Flutter核心技术与实战/html/18依赖管理二第三方组件库在Flutter中要如何管理.html',
                        audio:
                            './Flutter核心技术与实战/audio/18依赖管理二第三方组件库在Flutter中要如何管理.mp3'
                    },
                    {
                        id: 'ewkgmgjwkau',
                        title: '19 | 用户交互事件该如何响应？',
                        src:
                            './Flutter核心技术与实战/html/19用户交互事件该如何响应.html',
                        audio:
                            './Flutter核心技术与实战/audio/19用户交互事件该如何响应.mp3'
                    },
                    {
                        id: 'j41litrc8fk',
                        title: '20 | 关于跨组件传递数据，你只需要记住这三招',
                        src:
                            './Flutter核心技术与实战/html/20关于跨组件传递数据你只需要记住这三招.html',
                        audio:
                            './Flutter核心技术与实战/audio/20关于跨组件传递数据你只需要记住这三招.mp3'
                    },
                    {
                        id: 'b2u5onufow8',
                        title: '21 | 路由与导航，Flutter是这样实现页面切换的',
                        src:
                            './Flutter核心技术与实战/html/21路由与导航Flutter是这样实现页面切换的.html',
                        audio:
                            './Flutter核心技术与实战/audio/21路由与导航Flutter是这样实现页面切换的.mp3'
                    }
                ]
            },
            {
                id: '5pdyn1arycp',
                title: 'Flutter进阶',
                subList: [
                    {
                        id: 'twl1frvjp6i',
                        title: '22 | 如何构造炫酷的动画效果？',
                        src:
                            './Flutter核心技术与实战/html/22如何构造炫酷的动画效果.html',
                        audio:
                            './Flutter核心技术与实战/audio/22如何构造炫酷的动画效果.mp3'
                    },
                    {
                        id: 'w8e37jzmxmf',
                        title: '23 | 单线程模型怎么保证UI运行流畅？',
                        src:
                            './Flutter核心技术与实战/html/23单线程模型怎么保证UI运行流畅.html',
                        audio:
                            './Flutter核心技术与实战/audio/23单线程模型怎么保证UI运行流畅.mp3'
                    },
                    {
                        id: '2bxl4wxk4t7',
                        title: '24 | HTTP网络编程与JSON解析',
                        src:
                            './Flutter核心技术与实战/html/24HTTP网络编程与JSON解析.html',
                        audio:
                            './Flutter核心技术与实战/audio/24HTTP网络编程与JSON解析.mp3'
                    },
                    {
                        id: 'jsrnxik6m8n',
                        title: '25 | 本地存储与数据库的使用和优化',
                        src:
                            './Flutter核心技术与实战/html/25本地存储与数据库的使用和优化.html',
                        audio:
                            './Flutter核心技术与实战/audio/25本地存储与数据库的使用和优化.mp3'
                    },
                    {
                        id: 'hkq1dtkewo5',
                        title:
                            '26 | 如何在Dart层兼容Android/iOS平台特定实现？（一）',
                        src:
                            './Flutter核心技术与实战/html/26如何在Dart层兼容AndroidiOS平台特定实现一.html',
                        audio:
                            './Flutter核心技术与实战/audio/26如何在Dart层兼容AndroidiOS平台特定实现一.mp3'
                    },
                    {
                        id: 'gfepahsl7rn',
                        title:
                            '27 | 如何在Dart层兼容Android/iOS平台特定实现？（二）',
                        src:
                            './Flutter核心技术与实战/html/27如何在Dart层兼容AndroidiOS平台特定实现二.html',
                        audio:
                            './Flutter核心技术与实战/audio/27如何在Dart层兼容AndroidiOS平台特定实现二.mp3'
                    },
                    {
                        id: 'drfkdil9abk',
                        title: '28 | 如何在原生应用中混编Flutter工程？',
                        src:
                            './Flutter核心技术与实战/html/28如何在原生应用中混编Flutter工程.html',
                        audio:
                            './Flutter核心技术与实战/audio/28如何在原生应用中混编Flutter工程.mp3'
                    },
                    {
                        id: 'lexywge937v',
                        title: '29 | 混合开发，该用何种方案管理导航栈？',
                        src:
                            './Flutter核心技术与实战/html/29混合开发该用何种方案管理导航栈.html',
                        audio:
                            './Flutter核心技术与实战/audio/29混合开发该用何种方案管理导航栈.mp3'
                    },
                    {
                        id: 'miw7f5foqcg',
                        title: '30 | 为什么需要做状态管理，怎么做？',
                        src:
                            './Flutter核心技术与实战/html/30为什么需要做状态管理怎么做.html',
                        audio:
                            './Flutter核心技术与实战/audio/30为什么需要做状态管理怎么做.mp3'
                    },
                    {
                        id: 'x5j4qriu4wr',
                        title: '31 | 如何实现原生推送能力？',
                        src:
                            './Flutter核心技术与实战/html/31如何实现原生推送能力.html',
                        audio:
                            './Flutter核心技术与实战/audio/31如何实现原生推送能力.mp3'
                    },
                    {
                        id: 'ddc25ltp0s6',
                        title: '32 | 适配国际化，除了多语言我们还需要注意什么?',
                        src:
                            './Flutter核心技术与实战/html/32适配国际化除了多语言我们还需要注意什么.html',
                        audio:
                            './Flutter核心技术与实战/audio/32适配国际化除了多语言我们还需要注意什么.mp3'
                    },
                    {
                        id: 'ezurwmj0idr',
                        title: '33 | 如何适配不同分辨率的手机屏幕？',
                        src:
                            './Flutter核心技术与实战/html/33如何适配不同分辨率的手机屏幕.html',
                        audio:
                            './Flutter核心技术与实战/audio/33如何适配不同分辨率的手机屏幕.mp3'
                    },
                    {
                        id: 'lt7iyft9riv',
                        title: '34 | 如何理解Flutter的编译模式？',
                        src:
                            './Flutter核心技术与实战/html/34如何理解Flutter的编译模式.html',
                        audio:
                            './Flutter核心技术与实战/audio/34如何理解Flutter的编译模式.mp3'
                    },
                    {
                        id: 'gvqpklxzrz2',
                        title: '35 | Hot Reload是怎么做到的？',
                        src:
                            './Flutter核心技术与实战/html/35HotReload是怎么做到的.html',
                        audio:
                            './Flutter核心技术与实战/audio/35HotReload是怎么做到的.mp3'
                    },
                    {
                        id: 'opfejjstdjn',
                        title: '36 | 如何通过工具链优化开发调试效率？',
                        src:
                            './Flutter核心技术与实战/html/36如何通过工具链优化开发调试效率.html',
                        audio:
                            './Flutter核心技术与实战/audio/36如何通过工具链优化开发调试效率.mp3'
                    },
                    {
                        id: 'lmdqc7p0hnp',
                        title: '37 | 如何检测并优化Flutter App的整体性能表现？',
                        src:
                            './Flutter核心技术与实战/html/37如何检测并优化FlutterApp的整体性能表现.html',
                        audio:
                            './Flutter核心技术与实战/audio/37如何检测并优化FlutterApp的整体性能表现.mp3'
                    },
                    {
                        id: 'udhhd8t4g0r',
                        title: '38 | 如何通过自动化测试提高交付质量？',
                        src:
                            './Flutter核心技术与实战/html/38如何通过自动化测试提高交付质量.html',
                        audio:
                            './Flutter核心技术与实战/audio/38如何通过自动化测试提高交付质量.mp3'
                    }
                ]
            },
            {
                id: 'pylruyc2q65',
                title: 'Flutter综合应用',
                subList: [
                    {
                        id: 'k45uvksvod4',
                        title:
                            '39 | 线上出现问题，该如何做好异常捕获与信息采集？',
                        src:
                            './Flutter核心技术与实战/html/39线上出现问题该如何做好异常捕获与信息采集.html',
                        audio:
                            './Flutter核心技术与实战/audio/39线上出现问题该如何做好异常捕获与信息采集.mp3'
                    },
                    {
                        id: '16hj633n76p',
                        title:
                            '40 | 衡量Flutter App线上质量，我们需要关注这三个指标',
                        src:
                            './Flutter核心技术与实战/html/40衡量FlutterApp线上质量我们需要关注这三个指标1.html',
                        audio:
                            './Flutter核心技术与实战/audio/40衡量FlutterApp线上质量我们需要关注这三个指标.mp3'
                    },
                    {
                        id: 'fdf2q3d71wv',
                        title:
                            '41 | 组件化和平台化，该如何组织合理稳定的Flutter工程结构？',
                        src:
                            './Flutter核心技术与实战/html/41组件化和平台化该如何组织合理稳定的Flutter工程结构.html',
                        audio:
                            './Flutter核心技术与实战/audio/41组件化和平台化该如何组织合理稳定的Flutter工程结构.mp3'
                    },
                    {
                        id: 'dif32z83yo1',
                        title: '42 | 如何构建高效的Flutter App打包发布环境？',
                        src:
                            './Flutter核心技术与实战/html/42如何构建高效的FlutterApp打包发布环境.html',
                        audio:
                            './Flutter核心技术与实战/audio/42如何构建高效的FlutterApp打包发布环境.mp3'
                    },
                    {
                        id: 'vmgx81dujsd',
                        title: '43 | 如何构建自己的Flutter混合开发框架（一）？',
                        src:
                            './Flutter核心技术与实战/html/43如何构建自己的Flutter混合开发框架一.html',
                        audio:
                            './Flutter核心技术与实战/audio/43如何构建自己的Flutter混合开发框架一.mp3'
                    },
                    {
                        id: '1shcd7llyz8',
                        title: '44 | 如何构建自己的Flutter混合开发框架（二）？',
                        src:
                            './Flutter核心技术与实战/html/44如何构建自己的Flutter混合开发框架二1.html',
                        audio:
                            './Flutter核心技术与实战/audio/44如何构建自己的Flutter混合开发框架二.mp3'
                    }
                ]
            },
            {
                id: 'ussw7fn6lak',
                title: '结束语',
                subList: [
                    {
                        id: 'he5bpo0qc6d',
                        title: '结束语 | 勿畏难，勿轻略',
                        src:
                            './Flutter核心技术与实战/html/结束语勿畏难勿轻略.html',
                        audio:
                            './Flutter核心技术与实战/audio/结束语勿畏难勿轻略.mp3'
                    },
                    {
                        id: 'ecfas5kc5pq',
                        title:
                            '结课测试 | 关于Flutter的这些知识，你都掌握了吗？',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: 'q422nkzlypx',
                title: '特别放送',
                subList: [
                    {
                        id: 'wzujdwn61qh',
                        title:
                            '特别放送 ｜ 温故而知新，与你说说专栏的那些思考题',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'chongxueqianduan',
        type: 'web',
        title: '重学前端',
        cid: '100023201',
        subTitle: '每天10分钟，重构你的前端知识体系',
        authorName: '程劭非（winter)',
        authorInfo: '前手机淘宝前端负责人',
        contents: [
            {
                id: '000',
                title: '0开篇词+学习路线+架构图(3讲)',
                subList: [
                    {
                        id: 'YO5vkhdcI9w2rXac',
                        src:
                            './重学前端/0开篇词+学习路线+架构图(3讲)/01-明确你的前端学习路线与方法.html',
                        title: '明确你的前端学习路线与方法'
                    },
                    {
                        id: '0McYmsmMCm2CJ0ml',
                        src:
                            './重学前端/0开篇词+学习路线+架构图(3讲)/02-列一份前端知识架构图.html',
                        title: '列一份前端知识架构图'
                    },
                    {
                        id: 'SqolQ64pEZp1n6x7',
                        src:
                            './重学前端/0开篇词+学习路线+架构图(3讲)/开篇词-从今天起，重新理解前端.html',
                        title: '开篇词-从今天起，重新理解前端'
                    }
                ]
            },
            {
                id: '001',
                title: '模块一：JavaScript(15讲)',
                subList: [
                    {
                        id: 'sj1T7fCTN4kPErNu',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/05-JavaScript类型：关于类型，有哪些你不知道的细节？.html',
                        title:
                            'JavaScript类型：关于类型，有哪些你不知道的细节？'
                    },
                    {
                        id: 'WsHcP54U64VJN5pY',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/06-JavaScript对象：面向对象还是基于对象？.html',
                        title: 'JavaScript对象：面向对象还是基于对象？'
                    },
                    {
                        id: 'Pj66hcUPZFBhDUBh',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/07-JavaScript对象：我们真的需要模拟类吗？.html',
                        title: 'JavaScript对象：我们真的需要模拟类吗？'
                    },
                    {
                        id: 'vMGz4DiueEh41Ptm',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/08-JavaScript对象：你知道全部的对象分类吗？.html',
                        title: 'JavaScript对象：你知道全部的对象分类吗？'
                    },
                    {
                        id: 'NvFfgxEc6RtBhtfv',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/16-JavaScript执行（一）：Promise里的代码为什么比setTimeout先执行？.html',
                        title:
                            'JavaScript执行（一）：Promise里的代码为什么比setTimeout先执行？'
                    },
                    {
                        id: '079lJjCFiVsZVV0x',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/17-JavaScript执行（二）：闭包和执行上下文到底是怎么回事？.html',
                        title:
                            'JavaScript执行（二）：闭包和执行上下文到底是怎么回事？'
                    },
                    {
                        id: 'gyo4NsqyL3oUIYAQ',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/18-JavaScript执行（三）：你知道现在有多少种函数吗？.html',
                        title:
                            'JavaScript执行（三）：你知道现在有多少种函数吗？'
                    },
                    {
                        id: 'hPbNapyaYbtxIGu0',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/19-JavaScript执行（四）：try里面放return，finally还会执行吗？.html',
                        title:
                            'JavaScript执行（四）：try里面放return，finally还会执行吗？'
                    },
                    {
                        id: 'n9NE5jM8s1tmpYf9',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/26-JavaScript词法：为什么12.toString会报错？.html',
                        title: 'JavaScript词法：为什么12会报错？.html'
                    },
                    {
                        id: 'xhfd1l7sqNtNfgTy',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/27-（小实验）理解编译原理：一个四则运算的解释器.html',
                        title: '（小实验）理解编译原理：一个四则运算的解释器'
                    },
                    {
                        id: '4CHB7zfedoo3J1fM',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/28-JavaScript语法（预备篇）：到底要不要写分号呢？.html',
                        title: 'JavaScript语法（预备篇）：到底要不要写分号呢？'
                    },
                    {
                        id: 'X06FfglznuEIT8Mz',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/29-JavaScript语法（一）：在script标签写export为什么会抛错？.html',
                        title:
                            'JavaScript语法（一）：在script标签写export为什么会抛错？'
                    },
                    {
                        id: 'dyHKhNHbWq3CshtD',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/30-JavaScript语法（二）：你知道哪些JavaScript语句？.html',
                        title:
                            'JavaScript语法（二）：你知道哪些JavaScript语句？'
                    },
                    {
                        id: 'sdexl8qGKWy0Lksj',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/31-JavaScript语法（三）：什么是表达式语句？.html',
                        title: 'JavaScript语法（三）：什么是表达式语句？'
                    },
                    {
                        id: '61M792Wwc9sUzRRK',
                        src:
                            './重学前端/1模块一：JavaScript(15讲)/32-JavaScript语法（四）：新加入的--运算符，哪里有些不一样呢？.html',
                        title:
                            'JavaScript语法（四）：新加入的--运算符，哪里有些不一样呢？'
                    }
                ]
            },
            {
                id: '002',
                title: '模块二：HTML和CSS(16讲)',
                subList: [
                    {
                        id: '8Yml8jpOl0MYsJh0',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/03-HTML语义：div和span不是够用了吗？.html',
                        title: 'HTML语义：div和span不是够用了吗？'
                    },
                    {
                        id: 'XbEwYCeX87XByNCO',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/04-HTML语义：如何运用语义类标签来呈现Wiki网页？.html',
                        title: 'HTML语义：如何运用语义类标签来呈现Wiki网页？'
                    },
                    {
                        id: 'p3b3RSVTfgGq2Fr1',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/09-CSS语法：除了属性和选择器，你还需要知道这些带@的规则.html',
                        title:
                            'CSS语法：除了属性和选择器，你还需要知道这些带@的规则'
                    },
                    {
                        id: '86ZppNOcMPprJmrz',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/15-HTML元信息类标签：你知道head里一共能写哪几种标签吗？.html',
                        title:
                            'HTML元信息类标签：你知道head里一共能写哪几种标签吗？'
                    },
                    {
                        id: 'H1LlQ4Lo692h7BDt',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/20-CSS选择器：如何选中svg里的a元素？.html',
                        title: 'CSS选择器：如何选中svg里的a元素？'
                    },
                    {
                        id: 'ZeRn6U2dAxZWbFdI',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/21-CSS选择器：伪元素是怎么回事儿？.html',
                        title: 'CSS选择器：伪元素是怎么回事儿？'
                    },
                    {
                        id: 'snjSrRKxyAyYRz7R',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/23-HTML链接：除了a标签，还有哪些标签叫链接？.html',
                        title: 'HTML链接：除了a标签，还有哪些标签叫链接？'
                    },
                    {
                        id: 'fZGFk3HdSldVt6Fc',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/24-CSS排版：从毕升开始，我们就开始用正常流了.html',
                        title: 'CSS排版：从毕升开始，我们就开始用正常流了'
                    },
                    {
                        id: 'ZspCE0oqmOIM8C44',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/33-HTML替换型元素：为什么link一个CSS要用href，而引入js要用src呢？.html',
                        title:
                            'HTML替换型元素：为什么link一个CSS要用href，而引入js要用src呢？'
                    },
                    {
                        id: 'xiXNQ03HskEwDDHM',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/34-HTML小实验：用代码分析HTML标准.html',
                        title: 'HTML小实验：用代码分析HTML标准'
                    },
                    {
                        id: 'hpB2bw7UL7ShDN2C',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/35-CSSFlex排版：为什么垂直居中这么难？.html',
                        title: 'CSSFlex排版：为什么垂直居中这么难？'
                    },
                    {
                        id: '3OTPZZVYwF2RfXgX',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/38-CSS动画与交互：为什么动画要用贝塞尔曲线这么奇怪的东西？.html',
                        title:
                            'CSS动画与交互：为什么动画要用贝塞尔曲线这么奇怪的东西？'
                    },
                    {
                        id: 'jcZztZ0xOa52UxGp',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/39-HTML语言：DTD到底是什么？.html',
                        title: 'HTML语言：DTD到底是什么？'
                    },
                    {
                        id: 'KDhTftfhstytDKty',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/40-CSS渲染：CSS是如何绘制颜色的？.html',
                        title: 'CSS渲染：CSS是如何绘制颜色的？'
                    },
                    {
                        id: 'Gbwg5CElxOZ7D63g',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/41-CSS小实验：动手做，用代码挖掘CSS属性.html',
                        title: 'CSS小实验：动手做，用代码挖掘CSS属性'
                    },
                    {
                        id: 'iDXZ562gfy5hPIzo',
                        src:
                            './重学前端/2模块二：HTML和CSS(16讲)/42-HTML·ARIA：可访问性是只给盲人用的特性么？.html',
                        title: 'HTML·ARIA：可访问性是只给盲人用的特性么？'
                    }
                ]
            },
            {
                id: '003',
                title: '模块三：浏览器实现原理与API(9讲)',
                subList: [
                    {
                        id: 'iGg8X1I50wIY1cgQ',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/10-浏览器：一个浏览器是如何工作的？（阶段一）.html',
                        title: '浏览器：一个浏览器是如何工作的？（阶段一）'
                    },
                    {
                        id: '6HpDOtZg2GfrVvAK',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/11-浏览器：一个浏览器是如何工作的？（阶段二）.html',
                        title: '浏览器：一个浏览器是如何工作的？（阶段二）'
                    },
                    {
                        id: 'pzegcQI1srcLzPNc',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/12-浏览器：一个浏览器是如何工作的（阶段三）.html',
                        title: '浏览器：一个浏览器是如何工作的（阶段三）'
                    },
                    {
                        id: 'eyAm4tM6maTnrPKr',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/13-浏览器：一个浏览器是如何工作的？（阶段四）.html',
                        title: '浏览器：一个浏览器是如何工作的？（阶段四）'
                    },
                    {
                        id: 'J8wiAnc3wwLL2n3f',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/14-浏览器：一个浏览器是如何工作的？（阶段五）.html',
                        title: '浏览器：一个浏览器是如何工作的？（阶段五）'
                    },
                    {
                        id: '7yAL4LmJaVBAdZsB',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/22-浏览器DOM：你知道HTML的节点有哪几种吗？.html',
                        title: '浏览器DOM：你知道HTML的节点有哪几种吗？'
                    },
                    {
                        id: 'umxh5Ecwooblew5o',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/25-浏览器CSSOM：如何获取一个元素的准确位置.html',
                        title: '浏览器CSSOM：如何获取一个元素的准确位置'
                    },
                    {
                        id: 'vgl3Ar5NiTbNB92b',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/36-浏览器事件：为什么会有捕获过程和冒泡过程？.html',
                        title: '浏览器事件：为什么会有捕获过程和冒泡过程？'
                    },
                    {
                        id: 'TzzWkS8XtNfseJNC',
                        src:
                            './重学前端/3模块三：浏览器实现原理与API(9讲)/37-浏览器API（小实验）：动手整理全部API.html',
                        title: '浏览器API（小实验）：动手整理全部API'
                    }
                ]
            },
            {
                id: '004',
                title: '模块四：前端综合应用(5讲)',
                subList: [
                    {
                        id: 'xwcwwQjFxeMUoyJW',
                        src:
                            './重学前端/4模块四：前端综合应用(5讲)/43-性能：前端的性能到底对业务数据有多大的影响？.html',
                        title: '性能：前端的性能到底对业务数据有多大的影响？'
                    },
                    {
                        id: 'nzPvwOJMGLB0a552',
                        src:
                            './重学前端/4模块四：前端综合应用(5讲)/44-工具链：什么样的工具链才能提升团队效率？.html',
                        title: '工具链：什么样的工具链才能提升团队效率？'
                    },
                    {
                        id: 'zIBbcgnBnUzscpar',
                        src:
                            './重学前端/4模块四：前端综合应用(5讲)/45-持续集成：几十个前端一起工作，如何保证工作质量？.html',
                        title:
                            '持续集成：几十个前端一起工作，如何保证工作质量？'
                    },
                    {
                        id: 'u5nAN3kDo5310xcI',
                        src:
                            './重学前端/4模块四：前端综合应用(5讲)/46-搭建系统：大量的低价值需求应该如何应对？.html',
                        title: '搭建系统：大量的低价值需求应该如何应对？'
                    },
                    {
                        id: 'UXCa2n7a9M4aRTAR',
                        src:
                            './重学前端/4模块四：前端综合应用(5讲)/47-前端架构：前端架构有哪些核心问题？.html',
                        title: '前端架构：前端架构有哪些核心问题？'
                    }
                ]
            },
            {
                id: '005',
                title: '5特别加餐',
                subList: [
                    {
                        id: 'LFbG0x3kgWe5YAk0',
                        src: './重学前端/5特别加餐/加餐-前端与图形学.html',
                        title: '加餐-前端与图形学'
                    },
                    {
                        id: 'Zr3gPIyAxcaRFnGd',
                        src:
                            './重学前端/5特别加餐/加餐-前端交互基础设施的建设.html',
                        title: '加餐-前端交互基础设施的建设'
                    },
                    {
                        id: 'AsUf7qPnxZScqicE',
                        src:
                            './重学前端/5特别加餐/尾声-长风破浪会有时，直挂云帆济沧海.html',
                        title: '尾声-长风破浪会有时，直挂云帆济沧海'
                    },
                    {
                        id: 'WFVKDoSpOFVzcxB9',
                        src: './重学前端/5特别加餐/简介.html',
                        title: '简介'
                    },
                    {
                        id: '0QWh2by4qnm173lI',
                        src:
                            './重学前端/5特别加餐/新年彩蛋-2019，有哪些前端技术值得关注？.html',
                        title: '新年彩蛋-2019，有哪些前端技术值得关注？'
                    },
                    {
                        id: 'UhhbMR4obevbnKNi',
                        src:
                            './重学前端/5特别加餐/期中答疑-name(){}与name-function(){}，两种写法有什么区别吗？.html',
                        title:
                            '期中答疑-name(){}与name-function(){}，两种写法有什么区别吗？'
                    },
                    {
                        id: 'zA1QQhkt2JB3wXQQ',
                        src:
                            './重学前端/5特别加餐/用户故事-那些你与“重学前端”的不解之缘.html',
                        title: '用户故���-那些你与“重学前端”的不解之缘'
                    },
                    {
                        id: 'qL5w1yR7ERHPv4eD',
                        src:
                            './重学前端/5特别加餐/答疑加餐-学了这么多前端的“小众”知识，到底对我有什么帮助？.html',
                        title:
                            '答疑加餐-学了这么多前端的“小众”知识，到底对我有什么帮助？'
                    },
                    {
                        id: 'fwZnxTeSmORT9hem',
                        src:
                            './重学前端/5特别加餐/期末答疑：前端代码单元测试怎么做？.html',
                        title: '期末答疑：前端代码单元测试怎么做？'
                    },
                    {
                        id: 'MuQxsZ7PtBrb3uDO',
                        src:
                            './重学前端/5特别加餐/期末答疑（二）：前端架构中，每个逻辑页面如何可以做到独立发布呢？.html',
                        title:
                            '期末答疑（二）：前端架构中，每个逻辑页面如何可以做到独立发布呢？'
                    }
                ]
            }
        ]
    },
    {
        id: 'liulanqi',
        type: 'web',
        title: '浏览器工作原理与实践',
        cid: '100033601',
        subTitle: '透过浏览器看懂前端本质',
        authorName: '李兵',
        authorInfo: '前盛大创新院高级研究员',
        contents: [
            {
                id: '00000',
                title: '开篇词(1讲)',
                subList: [
                    {
                        id: 'kqXcgUBdF8mBLsWB',
                        src: './浏览器工作原理与实践/开篇词(1讲)/开篇词.html',
                        title:
                            '开篇词-参透了浏览器的工作原理，你就能解决80%的前端难题'
                    }
                ]
            },
            {
                id: '00001',
                title: '宏观视角下的浏览器(6讲)',
                subList: [
                    {
                        id: 'UKYFsR93oqDdGCZa',
                        src:
                            './浏览器工作原理与实践/宏观视角下的浏览器(6讲)/01-Chrome架构：仅仅打开了1个页面，为什么有4个进程？.html',
                        title:
                            'Chrome架构：仅仅打开了1个页面，为什么有4个进程？'
                    },
                    {
                        id: 'bwZ7TDERu4anR3Dr',
                        src:
                            './浏览器工作原理与实践/宏观视角下的浏览器(6讲)/02-TCP协议：如何保证页面文件能被完整送达浏览器？.html',
                        title: 'TCP协议：如何保证页面文件能被完整送达浏览器？'
                    },
                    {
                        id: 'SZQTRgsu4S1tyzxJ',
                        src:
                            './浏览器工作原理与实践/宏观视角下的浏览器(6讲)/03-HTTP请求流程：为什么很多站点第二次打开速度会很快？.html',
                        title:
                            'HTTP请求流程：为什么很多站点第二次打开速度会很快？'
                    },
                    {
                        id: 'hgwUYYloQj3tcUgh',
                        src:
                            './浏览器工作原理与实践/宏观视角下的浏览器(6讲)/04-导航流程：从输入URL到页面展示，这中间发生了什么？.html',
                        title:
                            '导航流程：从输入URL到页面展示，这中间发生了什么？'
                    },
                    {
                        id: 'OgCpyLFvsraTDRd4',
                        src:
                            './浏览器工作原理与实践/宏观视角下的浏览器(6讲)/05-渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的？.html',
                        title:
                            '渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的？'
                    },
                    {
                        id: 'yl8pWwZl5c58bfZt',
                        src:
                            './浏览器工作原理与实践/宏观视角下的浏览器(6讲)/06-渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的？.html',
                        title:
                            '渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的？'
                    }
                ]
            },
            {
                id: '00003',
                title: '浏览器中的JavaScript执行机制(5讲)',
                subList: [
                    {
                        id: 'kpOf8uVj5BBRiT3J',
                        src:
                            './浏览器工作原理与实践/浏览器中的JavaScript执行机制(5讲)/07-变量提升：JavaScript代码是按顺序执行的吗？.html',
                        title: '变量提升：JavaScript代码是按顺序执行的吗？'
                    },
                    {
                        id: 'ZndSvY7yZsN5pU8l',
                        src:
                            './浏览器工作原理与实践/浏览器中的JavaScript执行机制(5讲)/08-调用栈：为什么JavaScript代码会出现栈溢出？.html',
                        title: '调用栈：为什么JavaScript代码会出现栈溢出？'
                    },
                    {
                        id: 'N6pXEAO71YO4t6xZ',
                        src:
                            './浏览器工作原理与实践/浏览器中的JavaScript执行机制(5讲)/09-块级作用域：var缺陷以及为什么要引入let和const？.html',
                        title: '块级作用域：var缺陷以及为什么要引入let和const？'
                    },
                    {
                        id: '57TPCPOy5RaCrjwv',
                        src:
                            './浏览器工作原理与实践/浏览器中的JavaScript执行机制(5讲)/10-作用域链和闭包：代码中出现相同的变量，JavaScript引擎是如何选择的？.html',
                        title:
                            '作用域链和闭包：代码中出现相同的变量，JavaScript引擎是如何选择的？'
                    },
                    {
                        id: '3q9XyudM88mZvkZk',
                        src:
                            './浏览器工作原理与实践/浏览器中的JavaScript执行机制(5讲)/11-this：从JavaScript执行上下文的视角讲清楚this.html',
                        title: 'this：从JavaScript执行上下文的视角讲清楚this'
                    }
                ]
            },
            {
                id: '00004',
                title: 'V8工作原理(3讲)',
                subList: [
                    {
                        id: 'Sbue58jHv6QRmNQ1',
                        src:
                            './浏览器工作原理与实践/V8工作原理(3讲)/12-栈空间和堆空间：数据是如何存储的？.html',
                        title: '栈空间和堆空间：数据是如何存储的？'
                    },
                    {
                        id: 'Xv5KC8EuDPdd3Eox',
                        src:
                            './浏览器工作原理与实践/V8工作原理(3讲)/13-垃圾回收：垃圾数据是如何自动回收的？.html',
                        title: '垃圾回收：垃圾数据是如何自动回收的？'
                    },
                    {
                        id: 'vdZDHLQFrNSK6FUZ',
                        src:
                            './浏览器工作原理与实践/V8工作原理(3讲)/14-编译器和解释器：V8是如何执行一段JavaScript代码的？.html',
                        title:
                            '编译器和解释器：V8是如何执行一段JavaScript代码的？'
                    }
                ]
            },
            {
                id: '00005',
                title: '浏览器中的页面循环系统(6讲)',
                subList: [
                    {
                        id: 'IqG1U2onFdKwapw1',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面循环系统(6讲)/15-消息队列和事件循环：页面是怎么“活”起来的？.html',
                        title: '消息队列和事件循环：页面是怎么“活”起来的？'
                    },
                    {
                        id: 'ANvZP3dxOSZznmbI',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面循环系统(6讲)/16-WebAPI：setTimeout是如何实现的？.html',
                        title: 'WebAPI：setTimeout是如何实现的？'
                    },
                    {
                        id: 'OQ9bj7yqXlpV5gAg',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面循环系统(6讲)/17-WebAPI：XMLHttpRequest是怎么实现的？.html',
                        title: 'WebAPI：XMLHttpRequest是怎么实现的？'
                    },
                    {
                        id: 'MSXYmmn2HhsqXlPe',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面循环系统(6讲)/18-宏任务和微任务：不是所有任务都是一个待遇.html',
                        title: '宏任务和微任务：不是所有任务都是一个待遇'
                    },
                    {
                        id: 'meOZoAgy61Jf6VJz',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面循环系统(6讲)/19-Promise：使用Promise，告别回调函数.html',
                        title: 'Promise：使用Promise，告别回调函数'
                    },
                    {
                        id: 'Wzi4QPG7ZEmSWbUU',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面循环系统(6讲)/20-asyncawait：使用同步的方式去写异步代码.html',
                        title: 'asyncawait：使用同步的方式去写异步代码'
                    }
                ]
            },
            {
                id: '00006',
                title: '浏览器中的页面(8讲)',
                subList: [
                    {
                        id: 'KakqiJ3gwQ1sDA7A',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面(8讲)/21-Chrome开发者工具：利用网络面板做性能分析.html',
                        title: 'Chrome开发者工具：利用网络面板做性能分析'
                    },
                    {
                        id: 'Ukzz0gLqHTgjgUWT',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面(8讲)/22-DOM树：JavaScript是如何影响DOM树构建的？.html',
                        title: 'DOM树：JavaScript是如何影响DOM树构建的？'
                    },
                    {
                        id: 'yP7M7zx30DofT0Wb',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面(8讲)/23-渲染流水线：CSS如何影响首次加载时的白屏时间？.html',
                        title: '渲染流水线：CSS如何影响首次加载时的白屏时间？'
                    },
                    {
                        id: 'ALCR1imD2ClEcR5E',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面(8讲)/24-分层和合成机制：为什么CSS动画比JavaScript高效？.html',
                        title: '分层和合成机制：为什么CSS动画比JavaScript高效？'
                    },
                    {
                        id: 'FKo1IU2kOtZrPYaA',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面(8讲)/25-页面性能：如何系统地优化页面？.html',
                        title: '页面性能：如何系统地优化页面？'
                    },
                    {
                        id: 'vattg9aavDWjF9hq',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面(8讲)/26-虚拟DOM：虚拟DOM和实际的DOM有何不同？.html',
                        title: '虚拟DOM：虚拟DOM和实际的DOM有何不同？'
                    },
                    {
                        id: 'ubDoDmzbxRqOUuCS',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面(8讲)/27-渐进式网页应用（PWA）：它究竟解决了Web应用的哪些问题？.html',
                        title:
                            '渐进式网页应用（PWA）：它究竟解决了Web应用的哪些问题？'
                    },
                    {
                        id: 'TpCLURVhwKVvhQDG',
                        src:
                            './浏览器工作原理与实践/浏览器中的页面(8讲)/28-WebComponent：像搭积木一样构建Web应用.html',
                        title: 'WebComponent：像搭积木一样构建Web应用'
                    }
                ]
            },
            {
                id: '00007',
                title: '浏览器中的网络(3讲)',
                subList: [
                    {
                        id: 'BNAJ3n4RIsccx1Cd',
                        src:
                            './浏览器工作原理与实践/浏览器中的网络(3讲)/29-HTTP1：HTTP性能优化.html',
                        title: 'HTTP1：HTTP性能优化'
                    },
                    {
                        id: 'ssK8rcnrOqbtneo3',
                        src:
                            './浏览器工作原理与实践/浏览器中的网络(3讲)/30｜HTTP2：如何提升网络速度？.html',
                        title: '30｜HTTP2：如何提升网络速度？'
                    },
                    {
                        id: 'Xka571bnoUDbRAyy',
                        src:
                            './浏览器工作原理与实践/浏览器中的网络(3讲)/31｜HTTP3：甩掉TCP、TLS的包袱，构建高效网络.html',
                        title: '31｜HTTP3：甩掉TCP、TLS的包袱，构建高效网络'
                    }
                ]
            },
            {
                id: '00008',
                title: '浏览器安全(5讲)',
                subList: [
                    {
                        id: 'UxbqThi251ri0slI',
                        src:
                            './浏览器工作原理与实践/浏览器安全(5讲)/32-同源策略：为什么XMLHttpRequest不能跨域请求资源？.html',
                        title:
                            '同源策略：为什么XMLHttpRequest不能跨域请求资源？'
                    },
                    {
                        id: 'VJJJ3vdU2HRC768E',
                        src:
                            './浏览器工作原理与实践/浏览器安全(5讲)/33-跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性？.html',
                        title:
                            '跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性？'
                    },
                    {
                        id: 'eb9OKn5XUhHMLx7c',
                        src:
                            './浏览器工作原理与实践/浏览器安全(5讲)/34-CSRF攻击：陌生链接不要随便点.html',
                        title: 'CSRF攻击：陌生链接不要随便点'
                    },
                    {
                        id: 'HqXTCBiU4NjHiItn',
                        src:
                            './浏览器工作原理与实践/浏览器安全(5讲)/35-安全沙箱：页面和系统之间的隔离墙.html',
                        title: '安全沙箱：页面和系统之间的隔离墙'
                    },
                    {
                        id: 'HFCf6TbUKEPXkX56',
                        src:
                            './浏览器工作原理与实践/浏览器安全(5讲)/36-HTTPS：让数据传输更安全.html',
                        title: 'HTTPS：让数据传输更安全'
                    }
                ]
            },
            {
                id: '009',
                title: '结束语(2讲)',
                subList: [
                    {
                        id: 'SnaU7QbRsUpP2iOG',
                        src:
                            './浏览器工作原理与实践/结束语(2讲)/结束语-大道至简.html',
                        title: '结束语-大道至简'
                    }
                ]
            }
        ]
    },
    {
        title: '图解GoogleV8',
        id: 'przrb31aplb',
        type: 'web',
        cid: '100048001',
        subTitle: '一门课搞懂 JavaScript 执行逻辑',
        authorName: '李兵',
        authorInfo: '前盛大创新院高级研究员',
        contents: [
            {
                id: '7gzbheaqyw8',
                title: '宏观视角',
                subList: [
                    {
                        id: 'kd0mcdb1jq6',
                        title:
                            '开篇词 | 如何学习谷歌高性能 JavaScript 引擎V8？',
                        src:
                            './图解GoogleV8/html/开篇词如何学习谷歌高性能JavaScript引擎V8.html'
                    },
                    {
                        id: '85s8s5ivm81',
                        title: '01 | V8是如何执行一段JavaScript代码的？',
                        src:
                            './图解GoogleV8/html/01V8是如何执行一段JavaScript代码的.html'
                    }
                ]
            },
            {
                id: 'cr72t7mrn5s',
                title: 'JavaScript设计思想篇',
                subList: [
                    {
                        id: 'ajwuw0azawu',
                        title:
                            '02 | 函数即对象：一篇文章彻底搞懂JavaScript的函数特点',
                        src:
                            './图解GoogleV8/html/02函数即对象一篇文章彻底搞懂JavaScript的函数特点.html'
                    },
                    {
                        id: '0me21v0eb9o',
                        title:
                            '03 | 快属性和慢属性：V8是怎样提升对象属性访问速度的？',
                        src:
                            './图解GoogleV8/html/03快属性和慢属性V8采用了哪些策略提升了对象属性的访问速度.html'
                    },
                    {
                        id: 'opdz7r80e14',
                        title:
                            '04 | 函数表达式：涉及大量概念，函数表达式到底该怎么学？',
                        src:
                            './图解GoogleV8/html/04函数表达式涉及大量概念函数表达式到底该怎么学.html'
                    },
                    {
                        id: 'drt5ahnrfiu',
                        title: '05｜原型链：V8是如何实现对象继承的？',
                        src:
                            './图解GoogleV8/html/05原型链V8是如何实现对象继承的.html'
                    },
                    {
                        id: 'r2xo914x0mb',
                        title: '06｜作用域链：V8是如何查找变量的？',
                        src:
                            './图解GoogleV8/html/06作用域链V8是如何查找变量的.html'
                    },
                    {
                        id: 'db7xvu3n2qm',
                        title: '07｜类型转换：V8是怎么实现1+“2”的？',
                        src:
                            './图解GoogleV8/html/07类型转换V8是怎么实现12的.html'
                    },
                    {
                        id: 'xfbmss76riz',
                        title: '08｜答疑：如何构建和使用V8的调试工具d8？',
                        src:
                            './图解GoogleV8/html/08答疑如何构建和使用V8的调试工具d8.html'
                    }
                ]
            },
            {
                id: 't61kjy03sb3',
                title: 'V8编译流水线',
                subList: [
                    {
                        id: '12uok2hclth',
                        title: '09 | 运行时环境：运行JavaScript代码的基石',
                        src:
                            './图解GoogleV8/html/09运行时环境运行JavaScript代码的基石.html'
                    },
                    {
                        id: 't7wietm55bj',
                        title:
                            '10 | 机器代码：二进制机器码究竟是如何被CPU执行的？',
                        src:
                            './图解GoogleV8/html/10机器代码二进制机器码究竟是如何被CPU执行的.html'
                    },
                    {
                        id: 'vw0nkprjw4l',
                        title: '11 | 堆和栈：函数调用是如何影响到内存布局的？',
                        src:
                            './图解GoogleV8/html/11堆和栈函数调用是如何影响到内存布局的.html'
                    },
                    {
                        id: '9xk62l381ci',
                        title: '12 | 延迟解析：V8是如何实现闭包的？',
                        src:
                            './图解GoogleV8/html/12延迟解析V8是如何实现闭包的.html'
                    },
                    {
                        id: '9fhqzti7yax',
                        title: '13 | 字节码（一）：V8为什么又重新引入字节码？',
                        src:
                            './图解GoogleV8/html/13字节码一V8为什么又重新引入字节码.html'
                    },
                    {
                        id: 'endkpunyfyr',
                        title:
                            '14｜字节码（二）：解释器是如何解释执行字节码的？',
                        src:
                            './图解GoogleV8/html/14字节码二解释器是如何解释执行字节码的.html'
                    },
                    {
                        id: 'ayj7qmahv16',
                        title: '15 | 隐藏类：如何在内存中快速查找对象属性？',
                        src:
                            './图解GoogleV8/html/15隐藏类如何在内存中快速查找对象属性.html'
                    },
                    {
                        id: 'jkh68me4fnc',
                        title:
                            '16 | 答疑： V8是怎么通过内联缓存来提升函数执行效率的？',
                        src:
                            './图解GoogleV8/html/16答疑V8是怎么通过内联缓存来提升函数执行效率的.html'
                    }
                ]
            },
            {
                id: 'y2i1rsg0kdn',
                title: '事件循环和垃圾回收',
                subList: [
                    {
                        id: 'cb83n130yjt',
                        title: '17 | 消息队列：V8是怎么实现回调函数的？',
                        src:
                            './图解GoogleV8/html/17消息队列V8是怎么实现回调函数的.html'
                    },
                    {
                        id: 'u853srid4hf',
                        title: '18 | 异步编程（一）：V8是如何实现微任务的？',
                        src:
                            './图解GoogleV8/html/18异步编程一V8是如何实现微任务的.html'
                    },
                    {
                        id: '1v2r7ozetva',
                        title:
                            '19｜异步编程（二）：V8是如何实现async/await的？',
                        src:
                            './图解GoogleV8/html/19异步编程二V8是如何实现asyncawait的.html'
                    },
                    {
                        id: '5ougkdqea3y',
                        title:
                            '20 | 垃圾回收（一）：V8的两个垃圾回收器是如何工作的？',
                        src:
                            './图解GoogleV8/html/20垃圾回收一V8的两个垃圾回收器是如何工作的.html'
                    },
                    {
                        id: 'erjx1q3ya32',
                        title:
                            '21 | 垃圾回收（二）：V8是如何优化垃圾回收器执行效率的？',
                        src:
                            './图解GoogleV8/html/21垃圾回收二V8是如何优化垃圾回收器执行效率的.html'
                    },
                    {
                        id: 'bwfv9iylak9',
                        title: '22｜答疑：几种常见内存问题的解决策略',
                        src:
                            './图解GoogleV8/html/22答疑几种常见内存问题的解决策略.html'
                    }
                ]
            },
            {
                id: 'ckxbecytuey',
                title: '结束语',
                subList: [
                    {
                        id: '100r8vm684d',
                        title: '结束语 | 我的前端学习踩坑史',
                        src: './图解GoogleV8/html/结束语我的前端学习踩坑史.html'
                    }
                ]
            }
        ]
    },
    {
        id: 'wanzhuanvscode',
        type: 'web',
        title: '玩转VSCODE',
        cid: null,
        subTitle: '玩转vscode编辑器',
        authorName: '吕鹏',
        authorInfo: '微软工程师',
        contents: [
            {
                id: 'wanzhuanvscodedjj',
                title: '全部文章',
                subList: [
                    {
                        id: '0QWD3BDcLSMz1b90',
                        src:
                            '玩转vscode/全部文章/开篇词讲玩转编辑器，向高效能编程再进一步.html',
                        title: '开篇词讲玩转编辑器，向高效能编程再进一步'
                    },
                    {
                        id: 'RgS7hrEmCHEu8gfv',
                        src:
                            '玩转vscode/全部文章/01讲学编辑器，到底应该学什么.html',
                        title: '01讲学编辑器，到底应该学什么'
                    },
                    {
                        id: 'zuO3eMPQxEGKj8Iz',
                        src:
                            '玩转vscode/全部文章/02讲VSCode的Why、How和What.html',
                        title: '02讲VSCode的Why、How和What'
                    },
                    {
                        id: 'qOQfrndINIHGy3Ef',
                        src: '玩转vscode/全部文章/03讲如何快速上手VSCode.html',
                        title: '03讲如何快速上手VSCode'
                    },
                    {
                        id: 'xGFyzKRlBPbc1FK6',
                        src:
                            '玩转vscode/全部文章/04讲 如何做到双手不离键盘.html',
                        title: '04讲 如何做到双手不离键盘'
                    },
                    {
                        id: '4nNWHq5jP1imKMOn',
                        src: '玩转vscode/全部文章/05讲快捷键进阶攻略.html',
                        title: '05讲快捷键进阶攻略'
                    },
                    {
                        id: 'phIKOPodSZvcRYez',
                        src:
                            '玩转vscode/全部文章/06讲拒绝重复，你一定要学会的多光标特性.html',
                        title: '06讲拒绝重复，你一定要学会的多光标特性'
                    },
                    {
                        id: 'nrXIM7PoVQQB5MLi',
                        src:
                            '玩转vscode/全部文章/07讲如何快速在文件、符号、代码之间跳转(1).html',
                        title: '07讲如何快速在文件、符号、代码之间跳转(1)'
                    },
                    {
                        id: 'bopt4Z2MHkS277NH',
                        src: '玩转vscode/全部文章/08讲玩转鼠标操作.html',
                        title: '08讲玩转鼠标操作'
                    },
                    {
                        id: '5fx7PQeNOAHRQB7f',
                        src:
                            '玩转vscode/全部文章/09讲代码自动补全、快速修复和重构的二三事.html',
                        title: '09讲代码自动补全、快速修复和重构的二三事'
                    },
                    {
                        id: '4127huohgYKjbfWT',
                        src:
                            '玩转vscode/全部文章/10讲拒绝重复，你的代码百宝箱：如何书写codesnippet.html',
                        title:
                            '10讲拒绝重复，你的代码百宝箱：如何书写codesnippet'
                    },
                    {
                        id: 'nNYI1XrYmuOf6z1t',
                        src:
                            '玩转vscode/全部文章/11讲一定要用好代码折叠、小地图和面包屑特性.html',
                        title: '11讲一定要用好代码折叠、小地图和面包屑特性'
                    },
                    {
                        id: 'g8kskhOJjDZTeJqL',
                        src:
                            '玩转vscode/全部文章/12讲极速搜索有时候比Intellisense还重要.html',
                        title: '12讲极速搜索有时候比Intellisense还重要'
                    },
                    {
                        id: 'acsmiQ2AbDzi8mf6',
                        src: '玩转vscode/全部文章/13讲优化你的编辑器设置.html',
                        title: '13讲优化你的编辑器设置'
                    },
                    {
                        id: 'ZGdm3Xll3cYwDwt6',
                        src:
                            '玩转vscode/全部文章/14讲什么是工作台和命令面板.html',
                        title: '14讲什么是工作台和命令面板'
                    },
                    {
                        id: '4L2EPwerJtefWXT9',
                        src:
                            '玩转vscode/全部文章/15讲了解文件管理，什么是multi-rootworkspace.html',
                        title: '15讲了解文件管理，什么是multi-rootworkspace'
                    },
                    {
                        id: 'itTAM2qQmqD12Er6',
                        src:
                            '玩转vscode/全部文章/16讲怎么在编辑器里做好版本管理.html',
                        title: '16讲怎么在编辑器里做好版本管理'
                    },
                    {
                        id: 'G1F1mH36KyTaIWmX',
                        src:
                            '玩转vscode/全部文章/17讲如何配置终端模拟器，告别系统终端.html',
                        title: '17讲如何配置终端模拟器，告别系统终端'
                    },
                    {
                        id: 'cPv1w3UtEhZMkNz4',
                        src:
                            '玩转vscode/全部文章/18讲为你的项目打造Workflow（上）.html',
                        title: '18讲为你的项目打造Workflow（上）'
                    },
                    {
                        id: '92HyZO14X4x8G8u1',
                        src:
                            '玩转vscode/全部文章/19讲为你的项目打造Workflow（下）.html',
                        title: '19讲为你的项目打造Workflow（下）'
                    },
                    {
                        id: 'GvMbYoZiaReee7qr',
                        src:
                            '玩转vscode/全部文章/20讲聊debugger时，我们在聊什么.html',
                        title: '20讲聊debugger时，我们在聊什么'
                    },
                    {
                        id: 'i9QIu7MLNPva9Jh4',
                        src:
                            '玩转vscode/全部文章/21讲你不知道的工作区快捷键.html',
                        title: '21讲你不知道的工作区快捷键'
                    },
                    {
                        id: '4Zsh7g0dcJlCKePx',
                        src:
                            '玩转vscode/全部文章/22讲基于自然语言或者纯文本的设置界面，总有一款适合你.html',
                        title:
                            '22讲基于自然语言或者纯文本的设置界面，总有一款适合你'
                    },
                    {
                        id: 'BuUESabD67AxLJNH',
                        src:
                            '玩转vscode/全部文章/23讲基础语言支持：JSON、Markdown.html',
                        title: '23讲基础语言支持：JSON、Markdown'
                    },
                    {
                        id: 'sw37j6B1xxUfZrQE',
                        src:
                            '玩转vscode/全部文章/24讲前端语言支持：JavaScript和Node.js.html',
                        title: '24讲前端语言支持：JavaScript和Node.html'
                    },
                    {
                        id: 'XdqWLzkonkmiUlCF',
                        src:
                            '玩转vscode/全部文章/25讲后端语言支持（一）：Go、Java.html',
                        title: '25讲后端语言支持（一）：Go、Java'
                    },
                    {
                        id: 'N9K0I5eYu0dDXHuG',
                        src:
                            '玩转vscode/全部文章/26讲后端语言支持（二）：Python、C#.html',
                        title: '26讲后端语言支持（二）：Python、C#'
                    },
                    {
                        id: 'SAcM2aGXrSHecX8N',
                        src:
                            '玩转vscode/全部文章/27讲HTML、CSS以及前端开发神器Emmet介绍与支持.html',
                        title: '27讲HTML、CSS以及前端开发神器Emmet介绍与支持'
                    },
                    {
                        id: 'PwKJLYGNNm01G2ZD',
                        src:
                            '玩转vscode/全部文章/28讲如何深度定制自己的主题.html',
                        title: '28讲如何深度定制自己的主题'
                    },
                    {
                        id: 'TrJRn8FXXXfihAFb',
                        src: '玩转vscode/全部文章/29讲不错的插件推荐.html',
                        title: '29讲不错的插件推荐'
                    },
                    {
                        id: 'uH3roHKhd3ZiQfrf',
                        src:
                            '玩转vscode/全部文章/30讲如何在VSCode中配置、部署和调试Docker.html',
                        title: '30讲如何在VSCode中配置、部署和调试Docker'
                    },
                    {
                        id: 'bJieWemD2cGElcuB',
                        src:
                            '玩转vscode/全部文章/31讲一些你可能不知道的Tips&Tricks.html',
                        title: '31讲一些你可能不知道的Tips&Tricks'
                    },
                    {
                        id: 'LHTIjNprDGWAfa6i',
                        src:
                            '玩转vscode/全部文章/32讲插件开发（一）：why、how和what.html',
                        title: '32讲插件开发（一）：why、how和what'
                    },
                    {
                        id: 'YD686pPGB0GnZehX',
                        src:
                            '玩转vscode/全部文章/33讲插件开发（二）：编写编辑器快捷键及分享快捷键配置、代码片段、主题等.html',
                        title:
                            '33讲插件开发（二）：编写编辑器快捷键及分享快捷键配置、代码片段、主题等'
                    },
                    {
                        id: 'ODKYUH4N04yRigHA',
                        src:
                            '玩转vscode/全部文章/34讲插件开发（三）：自定义语言支持.html',
                        title: '34讲插件开发（三）：自定义语言支持'
                    },
                    {
                        id: 'FxjW87qReDIIGuDm',
                        src:
                            '玩转vscode/全部文章/35讲插件开发（四）：Decorations装饰器.html',
                        title: '35讲插件开发（四）：Decorations装饰器'
                    },
                    {
                        id: 'C73Gw0kDxPJkgqby',
                        src:
                            '玩转vscode/全部文章/36讲插件开发（五）：工作台相关API.html',
                        title: '36讲插件开发（五）：工作台相关API'
                    },
                    {
                        id: '1XhUqEpKqQNeOnyx',
                        src:
                            '玩转vscode/全部文章/37讲插件开发（六）：VSCode插件维护和发布要点.html',
                        title: '37讲插件开发（六）：VSCode插件维护和发布要点'
                    },
                    {
                        id: 'wVk59YcdcHNDUimy',
                        src:
                            '玩转vscode/全部文章/结束语讲学编辑器，究竟学了什么.html',
                        title: '结束语讲学编辑器，究竟学了什么'
                    }
                ]
            }
        ]
    }
]
const CS_LIST = [
    //深入浅出计算机组成原理
    {
        id: 'klad1o97mmx',
        type: 'cs',
        cid: '100026001',
        title: '深入浅出计算机组成原理',
        subTitle: '带你掌握计算机体系全貌',
        authorName: '徐文浩',
        authorInfo: 'bothub创始人',
        contents: [
            {
                id: '7ut40znfcng',
                title: '入门篇',
                subList: [
                    {
                        id: 't8zdc85dv5u',
                        title: '开篇词 | 为什么你需要学习计算机组成原理？',
                        src:
                            '深入浅出计算机组成原理/html/__91427__开篇词 _ 为什么你需要学习计算机组成原理？.html',
                        audio: ''
                    },
                    {
                        id: 'yj4rthzvenr',
                        title: '01 | 冯·诺依曼体系结构：计算机组成的金字塔',
                        src:
                            '深入浅出计算机组成原理/html/__91793__01 _ 冯·诺依曼体系结构：计算机组成的金字塔.html',
                        audio: ''
                    },
                    {
                        id: 'o2a301xcpkl',
                        title:
                            '02 | 给你一张知识地图，计算机组成原理应该这么学',
                        src:
                            '深入浅出计算机组成原理/html/__92378__02 _ 给你一张知识地图，计算机组成原理应该这么学.html',
                        audio: ''
                    },
                    {
                        id: '9hmybydlpf0',
                        title:
                            '03 | 通过你的CPU主频，我们来谈谈“性能”究竟是什么？',
                        src:
                            '深入浅出计算机组成原理/html/__92215__03 _ 通过你的CPU主频，我们来谈谈“性能”究竟是什么？.html',
                        audio: ''
                    },
                    {
                        id: 'n3qysljo8iv',
                        title: '04 | 穿越功耗墙，我们该从哪些方面提升“性能”？',
                        src:
                            '深入浅出计算机组成原理/html/__93246__04 _ 穿越功耗墙，我们该从哪些方面提升“性能”？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'r5fy4o7cl3g',
                title: '原理篇：指令和运算',
                subList: [
                    {
                        id: 'd9jdnzcercx',
                        title: '05 | 计算机指令：让我们试试用纸带编程',
                        src:
                            '深入浅出计算机组成原理/html/__93359__05 _ 计算机指令：让我们试试用纸带编程.html',
                        audio: ''
                    },
                    {
                        id: 'rp1o3ad38wq',
                        title: '06 | 指令跳转：原来if...else就是goto',
                        src:
                            '深入浅出计算机组成原理/html/__94075__06 _ 指令跳转：原来if...else就是goto.html',
                        audio: ''
                    },
                    {
                        id: '2yn1h94jdvi',
                        title: '07 | 函数调用：为什么会发生stack overflow？',
                        src:
                            '深入浅出计算机组成原理/html/__94427__07 _ 函数调用：为什么会发生stack overflow？.html',
                        audio: ''
                    },
                    {
                        id: 'zb6n95wo2oe',
                        title:
                            '08 | ELF和静态链接：为什么程序无法同时在Linux和Windows下运行？',
                        src:
                            '深入浅出计算机组成原理/html/__94470__08 _ ELF和静态链接：为什么程序无法同时在Linux和Windows下运行？.html',
                        audio: ''
                    },
                    {
                        id: '84uccdddu3u',
                        title: '09 | 程序装载：“640K内存”真的不够用么？',
                        src:
                            '深入浅出计算机组成原理/html/__95223__09 _ 程序装载：“640K内存”真的不够用么？.html',
                        audio: ''
                    },
                    {
                        id: 'fztcgccx3fe',
                        title: '10 | 动态链接：程序内部的“共享单车”',
                        src:
                            '深入浅出计算机组成原理/html/__95244__10 _ 动态链接：程序内部的“共享单车”.html',
                        audio: ''
                    },
                    {
                        id: '8xs6ko70a84',
                        title:
                            '11 | 二进制编码：“手持两把锟斤拷，口中疾呼烫烫烫”？',
                        src:
                            '深入浅出计算机组成原理/html/__95844__11 _ 二进制编码：“手持两把锟斤拷，口中疾呼烫烫烫”？.html',
                        audio: ''
                    },
                    {
                        id: 'jsob921lc1p',
                        title:
                            '12 | 理解电路：从电报机到门电路，我们如何做到“千里传信”？',
                        src:
                            '深入浅出计算机组成原理/html/__95868__12 _ 理解电路：从电报机到门电路，我们如何做到“千里传信”？.html',
                        audio: ''
                    },
                    {
                        id: '8yvqrs4piv6',
                        title: '13 | 加法器：如何像搭乐高一样搭电路（上）？',
                        src:
                            '深入浅出计算机组成原理/html/__95883__13 _ 加法器：如何像搭乐高一样搭电路（上）？.html',
                        audio: ''
                    },
                    {
                        id: 'iys7u8evc4i',
                        title: '14 | 乘法器：如何像搭乐高一样搭电路（下）？',
                        src:
                            '深入浅出计算机组成原理/html/__97477__14 _ 乘法器：如何像搭乐高一样搭电路（下）？.html',
                        audio: ''
                    },
                    {
                        id: '9oh2ua7hfh6',
                        title:
                            '15 | 浮点数和定点数（上）：怎么用有限的Bit表示尽可能多的信息？',
                        src:
                            '深入浅出计算机组成原理/html/__97866__15 _ 浮点数和定点数（上）：怎么用有限的Bit表示尽可能多的信息？.html',
                        audio: ''
                    },
                    {
                        id: 'nyeagajjt3f',
                        title:
                            '16 | 浮点数和定点数（下）：深入理解浮点数到底有什么用？',
                        src:
                            '深入浅出计算机组成原理/html/__98312__16 _ 浮点数和定点数（下）：深入理解浮点数到底有什么用？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'df7jswbqau5',
                title: '原理篇：处理器',
                subList: [
                    {
                        id: 'xy9h3xepu6i',
                        title: '17 | 建立数据通路（上）：指令+运算=CPU',
                        src:
                            '深入浅出计算机组成原理/html/__98872__17 _ 建立数据通路（上）：指令+运算=CPU.html',
                        audio: ''
                    },
                    {
                        id: '3ddo5xyoh1j',
                        title: '18 | 建立数据通路（中）：指令+运算=CPU',
                        src:
                            '深入浅出计算机组成原理/html/__99092__18 _ 建立数据通路（中）：指令+运算=CPU.html',
                        audio: ''
                    },
                    {
                        id: 'raxtsmeyeah',
                        title: '19 | 建立数据通路（下）：指令+运算=CPU',
                        src:
                            '深入浅出计算机组成原理/html/__99505__19 _ 建立数据通路（下）：指令+运算=CPU.html',
                        audio: ''
                    },
                    {
                        id: 'hq51k2z44ay',
                        title:
                            '20 | 面向流水线的指令设计（上）：一心多用的现代CPU',
                        src:
                            '深入浅出计算机组成原理/html/__99523__20 _ 面向流水线的指令设计（上）：一心多用的现代CPU.html',
                        audio: ''
                    },
                    {
                        id: '9ez9vc97sl6',
                        title:
                            '21 | 面向流水线的指令设计（下）：奔腾4是怎么失败的？',
                        src:
                            '深入浅出计算机组成原理/html/__100554__21 _ 面向流水线的指令设计（下）：奔腾4是怎么失败的？.html',
                        audio: ''
                    },
                    {
                        id: '0ljsoxzi4eh',
                        title: '22 | 冒险和预测（一）：hazard是“危”也是“机”',
                        src:
                            '深入浅出计算机组成原理/html/__100569__22 _ 冒险和预测（一）：hazard是“危”也是“机”.html',
                        audio: ''
                    },
                    {
                        id: 'h4f79xv66qa',
                        title: '23 | 冒险和预测（二）：流水线里的接力赛',
                        src:
                            '深入浅出计算机组成原理/html/__101172__23 _ 冒险和预测（二）：流水线里的接力赛.html',
                        audio: ''
                    },
                    {
                        id: 'fbe5uu76r5o',
                        title: '24 | 冒险和预测（三）：CPU里的“线程池”',
                        src:
                            '深入浅出计算机组成原理/html/__101436__24 _ 冒险和预测（三）：CPU里的“线程池”.html',
                        audio: ''
                    },
                    {
                        id: 'bqgpt93jjzh',
                        title:
                            '25 | 冒险和预测（四）：今天下雨了，明天还会下雨么？',
                        src:
                            '深入浅出计算机组成原理/html/__102166__25 _ 冒险和预测（四）：今天下雨了，明天还会下雨么？.html',
                        audio: ''
                    },
                    {
                        id: 'abf4m45sdx6',
                        title:
                            '26 | Superscalar和VLIW：如何让CPU的吞吐率超过1？',
                        src:
                            '深入浅出计算机组成原理/html/__102888__26 _ Superscalar和VLIW：如何让CPU的吞吐率超过1？.html',
                        audio: ''
                    },
                    {
                        id: 'slkrtwoovpr',
                        title: '27 | SIMD：如何加速矩阵乘法？',
                        src:
                            '深入浅出计算机组成原理/html/__103433__27 _ SIMD：如何加速矩阵乘法？.html',
                        audio: ''
                    },
                    {
                        id: 'f1cb80tqnp3',
                        title: '28 | 异常和中断：程序出错了怎么办？',
                        src:
                            '深入浅出计算机组成原理/html/__103717__28 _ 异常和中断：程序出错了怎么办？.html',
                        audio: ''
                    },
                    {
                        id: 'd8spybnrgkt',
                        title: '29 | CISC和RISC：为什么手机芯片都是ARM？',
                        src:
                            '深入浅出计算机组成原理/html/__104259__29 _ CISC和RISC：为什么手机芯片都是ARM？.html',
                        audio: ''
                    },
                    {
                        id: 'nurssrgwor4',
                        title: '30 | GPU（上）：为什么玩游戏需要使用GPU？',
                        src:
                            '深入浅出计算机组成原理/html/__104747__30 _ GPU（上）：为什么玩游戏需要使用GPU？.html',
                        audio: ''
                    },
                    {
                        id: 'cfyex9wd88j',
                        title: '31 | GPU（下）：为什么深度学习需要使用GPU？',
                        src:
                            '深入浅出计算机组成原理/html/__105401__31 _ GPU（下）：为什么深度学习需要使用GPU？.html',
                        audio: ''
                    },
                    {
                        id: 'ns30ozyi9gy',
                        title: '32 | FPGA和ASIC：计算机体系结构的黄金时代',
                        src:
                            '深入浅出计算机组成原理/html/__105974__32 _ FPGA和ASIC：计算机体系结构的黄金时代.html',
                        audio: ''
                    },
                    {
                        id: '7v5k7b742r5',
                        title: '33 | 解读TPU：设计和拆解一块ASIC芯片',
                        src:
                            '深入浅出计算机组成原理/html/__106476__33 _ 解读TPU：设计和拆解一块ASIC芯片.html',
                        audio: ''
                    },
                    {
                        id: 'j1ghb304hh6',
                        title:
                            '34 | 理解虚拟机：你在云上拿到的计算机是什么样的？',
                        src:
                            '深入浅出计算机组成原理/html/__107183__34 _ 理解虚拟机：你在云上拿到的计算机是什么样的？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'vkzn8tthx23',
                title: '原理篇：存储与I/O系统',
                subList: [
                    {
                        id: 'tur5b7yiga2',
                        title:
                            '35 | 存储器层次结构全景：数据存储的大金字塔长什么样？',
                        src:
                            '深入浅出计算机组成原理/html/__107422__35 _ 存储器层次结构全景：数据存储的大金字塔长什么样？.html',
                        audio: ''
                    },
                    {
                        id: 'r4ik27soikm',
                        title:
                            '36 | 局部性原理：数据库性能跟不上，加个缓存就好了？',
                        src:
                            '深入浅出计算机组成原理/html/__107447__36 _ 局部性原理：数据库性能跟不上，加个缓存就好了？.html',
                        audio: ''
                    },
                    {
                        id: '2aza4wl9lvk',
                        title: '37 | 高速缓存（上）：“4毫秒”究竟值多少钱？',
                        src:
                            '深入浅出计算机组成原理/html/__107477__37 _ 高速缓存（上）：“4毫秒”究竟值多少钱？.html',
                        audio: ''
                    },
                    {
                        id: '3apc4y4rgng',
                        title: '38 | 高速缓存（下）：你确定你的数据更新了么？',
                        src:
                            '深入浅出计算机组成原理/html/__109331__38 _ 高速缓存（下）：你确定你的数据更新了么？.html',
                        audio: ''
                    },
                    {
                        id: '547gcs5ga8y',
                        title:
                            '39 | MESI协议：如何让多核CPU的高速缓存保持一致？',
                        src:
                            '深入浅出计算机组成原理/html/__109874__39 _ MESI协议：如何让多核CPU的高速缓存保持一致？.html',
                        audio: ''
                    },
                    {
                        id: 'v2bhr3sadtn',
                        title:
                            '40 | 理解内存（上）：虚拟内存和内存保护是什么？',
                        src:
                            '深入浅出计算机组成原理/html/__110474__40 _ 理解内存（上）：虚拟内存和内存保护是什么？.html',
                        audio: ''
                    },
                    {
                        id: 'n2b5py6yqjs',
                        title: '41 | 理解内存（下）：解析TLB和内存保护',
                        src:
                            '深入浅出计算机组成原理/html/__111172__41 _ 理解内存（下）：解析TLB和内存保护.html',
                        audio: ''
                    },
                    {
                        id: 'rdu4zowf7n6',
                        title: '42 | 总线：计算机内部的高速公路',
                        src:
                            '深入浅出计算机组成原理/html/__111952__42 _ 总线：计算机内部的高速公路.html',
                        audio: ''
                    },
                    {
                        id: 'e9xyvwmldeg',
                        title:
                            '43 | 输入输出设备：我们并不是只能用灯泡显示“0”和“1”',
                        src:
                            '深入浅出计算机组成原理/html/__113361__43 _ 输入输出设备：我们并不是只能用灯泡显示“0”和“1”.html',
                        audio: ''
                    },
                    {
                        id: 'srix9515159',
                        title: '44 | 理解IO_WAIT：I/O性能到底是怎么回事儿？',
                        src:
                            '深入浅出计算机组成原理/html/__113809__44 _ 理解IO_WAIT：I_O性能到底是怎么回事儿？.html',
                        audio: ''
                    },
                    {
                        id: '4v453afo5fh',
                        title: '45 | 机械硬盘：Google早期用过的“黑科技”',
                        src:
                            '深入浅出计算机组成原理/html/__116104__45 _ 机械硬盘：Google早期用过的“黑科技”.html',
                        audio: ''
                    },
                    {
                        id: 'iufqf618kf1',
                        title: '46 | SSD硬盘（上）：如何完成性能优化的KPI？',
                        src:
                            '深入浅出计算机组成原理/html/__117144__46 _ SSD硬盘（上）：如何完成性能优化的KPI？.html',
                        audio: ''
                    },
                    {
                        id: 'eoujp7e5ls3',
                        title: '47 | SSD硬盘（下）：如何完成性能优化的KPI？',
                        src:
                            '深入浅出计算机组成原理/html/__118191__47 _ SSD硬盘（下）：如何完成性能优化的KPI？.html',
                        audio: ''
                    },
                    {
                        id: 'r5yl8x3bsxw',
                        title: '48 | DMA：为什么Kafka这么快？',
                        src:
                            '深入浅出计算机组成原理/html/__118657__48 _ DMA：为什么Kafka这么快？.html',
                        audio: ''
                    },
                    {
                        id: 'd59s3gu2lqj',
                        title: '49 | 数据完整性（上）：硬件坏了怎么办？',
                        src:
                            '深入浅出计算机组成原理/html/__119901__49 _ 数据完整性（上）：硬件坏了怎么办？.html',
                        audio: ''
                    },
                    {
                        id: '36jgwvg477x',
                        title: '50 | 数据完整性（下）：如何还原犯罪现场？',
                        src:
                            '深入浅出计算机组成原理/html/__123407__50 _ 数据完整性（下）：如何还原犯罪现场？.html',
                        audio: ''
                    },
                    {
                        id: '5kv9abxd6vd',
                        title:
                            '51 | 分布式计算：如果所有人的大脑都联网会怎样？',
                        src:
                            '深入浅出计算机组成原理/html/__128197__51 _ 分布式计算：如果所有人的大脑都联网会怎样？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '0pypnqp7un0',
                title: '应用篇',
                subList: [
                    {
                        id: 'zj7207tvpxx',
                        title:
                            '52 | 设计大型DMP系统（上）：MongoDB并不是什么灵丹妙药',
                        src:
                            '深入浅出计算机组成原理/html/__130507__52 _ 设计大型DMP系统（上）：MongoDB并不是什么灵丹妙药.html',
                        audio: ''
                    },
                    {
                        id: 'k1a1jt3ta9k',
                        title: '53 | 设计大型DMP系统（下）：SSD拯救了所有的DBA',
                        src:
                            '深入浅出计算机组成原理/html/__131720__53 _ 设计大型DMP系统（下）：SSD拯救了所有的DBA.html',
                        audio: ''
                    },
                    {
                        id: '8buze8r48oi',
                        title:
                            '54 | 理解Disruptor（上）：带你体会CPU高速缓存的风驰电掣',
                        src:
                            '深入浅出计算机组成原理/html/__132477__54 _ 理解Disruptor（上）：带你体会CPU高速缓存的风驰电掣.html',
                        audio: ''
                    },
                    {
                        id: 'hdn65wyupmw',
                        title:
                            '55 | 理解Disruptor（下）：不需要换挡和踩刹车的CPU，有多快？',
                        src:
                            '深入浅出计算机组成原理/html/__134020__55 _ 理解Disruptor（下）：不需要换挡和踩刹车的CPU，有多快？.html',
                        audio: ''
                    },
                    {
                        id: 'wvpr46q0r7v',
                        title: '结束语 | 知也无涯，愿你也享受发现的乐趣',
                        src:
                            '深入浅出计算机组成原理/html/__134999__结束语 _ 知也无涯，愿你也享受发现的乐趣.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'xltfnw6m2ct',
                title: '答疑与加餐',
                subList: [
                    {
                        id: '5a669gst64i',
                        title: '特别加餐 | 我在2019年F8大会的两日见闻录',
                        src:
                            '深入浅出计算机组成原理/html/__93720__特别加餐 _ 我在2019年F8大会的两日见闻录.html',
                        audio: ''
                    },
                    {
                        id: '34mmtpr3nu4',
                        title:
                            'FAQ第一期 | 学与不学，知识就在那里，不如就先学好了',
                        src:
                            '深入浅出计算机组成原理/html/__111447__FAQ第一期 _ 学与不学，知识就在那里，不如就先学好了.html',
                        audio: ''
                    },
                    {
                        id: 'vzzhjnisaar',
                        title:
                            '用户故事 | 赵文海：怕什么真理无穷，进一寸有一寸的欢喜',
                        src:
                            '深入浅出计算机组成原理/html/__118482__用户故事 _ 赵文海：怕什么真理无穷，进一寸有一寸的欢喜.html',
                        audio: ''
                    },
                    {
                        id: 'ww57ogy2oi8',
                        title: 'FAQ第二期 | 世界上第一个编程语言是怎么来的？',
                        src:
                            '深入浅出计算机组成原理/html/__120012__FAQ第二期 _ 世界上第一个编程语言是怎么来的？.html',
                        audio: ''
                    },
                    {
                        id: 'okgocem221m',
                        title: '特别加餐 | 我的一天怎么过？',
                        src:
                            '深入浅出计算机组成原理/html/__129197__特别加餐 _ 我的一天怎么过？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    //数据结构与算法之美
    {
        title: '数据结构与算法之美',
        id: 'fe99gzh24zw',
        type: 'cs',
        cid: '100017301',
        subTitle: '为工程师量身打造的数据结构与算法私教课',
        authorName: '王争',
        authorInfo: '前Google工程师',
        contents: [
            {
                id: 'lqpfqybk2xo',
                title: '开篇词',
                subList: [
                    {
                        id: 'fc8in2resba',
                        title: '开篇词-从今天起，跨过“数据结构与算法”这道坎',
                        src:
                            './数据结构与算法之美/html/开篇词-从今天起，跨过“数据结构与算法”这道坎.html'
                    }
                ]
            },
            {
                id: 'cnitz0qgj7j',
                title: '入门篇',
                subList: [
                    {
                        id: 'fx6mf9nkjx5',
                        title: '01-为什么要学习数据结构和算法',
                        src:
                            './数据结构与算法之美/html/01-为什么要学习数据结构和算法.html'
                    },
                    {
                        id: 'j3od0ztsggn',
                        title: '02-如何抓住重点，系统高效地学习数据结构与算法',
                        src:
                            './数据结构与算法之美/html/02-如何抓住重点，系统高效地学习数据结构与算法.html'
                    },
                    {
                        id: 'bjvtluuzeyq',
                        title:
                            '03-复杂度分析（上）：如何分析、统计算法的执行效率和资源消耗',
                        src:
                            './数据结构与算法之美/html/03-复杂度分析（上）：如何分析、统计算法的执行效率和资源消耗.html'
                    },
                    {
                        id: '241j62whpt0',
                        title:
                            '04-复杂度分析（下）：浅析最好、最坏、平均、均摊时间复杂度',
                        src:
                            './数据结构与算法之美/html/04-复杂度分析（下）：浅析最好、最坏、平均、均摊时间复杂度.html'
                    }
                ]
            },
            {
                id: '7bi3xjwchj5',
                title: '基础篇',
                subList: [
                    {
                        id: '5ktcuiq6mw6',
                        title: '05-数组：为什么很多编程语言中数组都从0开始编号',
                        src:
                            './数据结构与算法之美/html/05-数组：为什么很多编程语言中数组都从0开始编号.html'
                    },
                    {
                        id: 'jqmiq86jfuv',
                        title: '06-链表（上）：如何实现LRU缓存淘汰算法?',
                        src:
                            './数据结构与算法之美/html/06-链表（上）：如何实现LRU缓存淘汰算法.html'
                    },
                    {
                        id: 'nn15levw2vf',
                        title: '07-链表（下）：如何轻松写出正确的链表代码',
                        src:
                            './数据结构与算法之美/html/07-链表（下）：如何轻松写出正确的链表代码.html'
                    },
                    {
                        id: 'm3431q3yx4p',
                        title: '08-栈：如何实现浏览器的前进和后退功能',
                        src:
                            './数据结构与算法之美/html/08-栈：如何实现浏览器的前进和后退功能.html'
                    },
                    {
                        id: 'tdhe2bqi9yj',
                        title: '09-队列：队列在线程池等有限资源池中的应用',
                        src:
                            './数据结构与算法之美/html/09-队列：队列在线程池等有限资源池中的应用.html'
                    },
                    {
                        id: '1u3efwoofpc',
                        title: '10-递归：如何用三行代码找到“最终推荐人”',
                        src:
                            './数据结构与算法之美/html/10-递归：如何用三行代码找到“最终推荐人”.html'
                    },
                    {
                        id: 'djenllgfzk4',
                        title:
                            '11-排序（上）：为什么插入排序比冒泡排序更受欢迎',
                        src:
                            './数据结构与算法之美/html/11-排序（上）：为什么插入排序比冒泡排序更受欢迎.html'
                    },
                    {
                        id: 'rfgqvxh8x6g',
                        title:
                            '12-排序（下）：如何用快排思想在O(n)内查找第K大元素',
                        src:
                            './数据结构与算法之美/html/12-排序（下）：如何用快排思想在O(n)内查找第K大元素.html'
                    },
                    {
                        id: 'yjz95tdp9u7',
                        title: '13-线性排序：如何根据年龄给100万用户数据排序',
                        src:
                            './数据结构与算法之美/html/13-线性排序：如何根据年龄给100万用户数据排序.html'
                    },
                    {
                        id: '1jvjqmxcryy',
                        title:
                            '14-排序优化：如何实现一个通用的、高性能的排序函数',
                        src:
                            './数据结构与算法之美/html/14-排序优化：如何实现一个通用的、高性能的排序函数.html'
                    },
                    {
                        id: 'ncc1nq6mwp9',
                        title:
                            '15-二分查找（上）：如何用最省内存的方式实现快速查找功能',
                        src:
                            './数据结构与算法之美/html/15-二分查找（上）：如何用最省内存的方式实现快速查找功能.html'
                    },
                    {
                        id: 'ewm4qyqg4zk',
                        title:
                            '16-二分查找（下）：如何快速定位IP对应的省份地址',
                        src:
                            './数据结构与算法之美/html/16-二分查找（下）：如何快速定位IP对应的省份地址.html'
                    },
                    {
                        id: 'ma0947us3xh',
                        title: '17-跳表：为什么Redis一定要用跳表来实现有序集合',
                        src:
                            './数据结构与算法之美/html/17-跳表：为什么Redis一定要用跳表来实现有序集合.html'
                    },
                    {
                        id: 'umyhraz7xt1',
                        title:
                            '18-散列表（上）：Word文档中的单词拼写检查功能是如何实现的',
                        src:
                            './数据结构与算法之美/html/18-散列表（上）：Word文档中的单词拼写检查功能是如何实现的.html'
                    },
                    {
                        id: '3g6rujcucsp',
                        title:
                            '19-散列表（中）：如何打造一个工业级水平的散列表',
                        src:
                            './数据结构与算法之美/html/19-散列表（中）：如何打造一个工业级水平的散列表.html'
                    },
                    {
                        id: '5johh7fyzzu',
                        title:
                            '20-散列表（下）：为什么散列表和链表经常会一起使用',
                        src:
                            './数据结构与算法之美/html/20-散列表（下）：为什么散列表和链表经常会一起使用.html'
                    },
                    {
                        id: 'jnp77g1hsh9',
                        title:
                            '21-哈希算法（上）：如何防止数据库中的用户信息被脱库',
                        src:
                            './数据结构与算法之美/html/21-哈希算法（上）：如何防止数据库中的用户信息被脱库.html'
                    },
                    {
                        id: 'sn3kwuocgk9',
                        title:
                            '22-哈希算法（下）：哈希算法在分布式系统中有哪些应用',
                        src:
                            './数据结构与算法之美/html/22-哈希算法（下）：哈希算法在分布式系统中有哪些应用.html'
                    },
                    {
                        id: '81clhzsmpcn',
                        title:
                            '23-二叉树基础（上）：什么样的二叉树适合用数组来存储',
                        src:
                            './数据结构与算法之美/html/23-二叉树基础（上）：什么样的二叉树适合用数组来存储.html'
                    },
                    {
                        id: 'eva8z1ccjzx',
                        title:
                            '24-二叉树基础（下）：有了如此高效的散列表，为什么还需要二叉树',
                        src:
                            './数据结构与算法之美/html/24-二叉树基础（下）：有了如此高效的散列表，为什么还需要二叉树.html'
                    },
                    {
                        id: '07ft6twpicf',
                        title:
                            '25-红黑树（上）：为什么工程中都用红黑树这种二叉树',
                        src:
                            './数据结构与算法之美/html/25-红黑树（上）：为什么工程中都用红黑树这种二叉树.html'
                    },
                    {
                        id: 'dqgx0m1r3mk',
                        title:
                            '26-红黑树（下）：掌握这些技巧，你也可以实现一个红黑树',
                        src:
                            './数据结构与算法之美/html/26-红黑树（下）：掌握这些技巧，你也可以实现一个红黑树.html'
                    },
                    {
                        id: 'qcp0l12bv7y',
                        title:
                            '27-递归树：如何借助树来求解递归算法的时间复杂度',
                        src:
                            './数据结构与算法之美/html/27-递归树：如何借助树来求解递归算法的时间复杂度.html'
                    },
                    {
                        id: 'wv6n9n7wcwo',
                        title: '28-堆和堆排序：为什么说堆排序没有快速排序快',
                        src:
                            './数据结构与算法之美/html/28-堆和堆排序：为什么说堆排序没有快速排序快.html'
                    },
                    {
                        id: '9ye6uows72b',
                        title:
                            '29-堆的应用：如何快速获取到Top10最热门的搜索关键词',
                        src:
                            './数据结构与算法之美/html/29-堆的应用：如何快速获取到Top10最热门的搜索关键词.html'
                    },
                    {
                        id: 'cyfqbnvhoje',
                        title:
                            '30-图的表示：如何存储微博、微信等社交网络中的好友关系',
                        src:
                            './数据结构与算法之美/html/30-图的表示：如何存储微博、微信等社交网络中的好友关系.html'
                    },
                    {
                        id: '631usvgm5uq',
                        title:
                            '31-深度和广度优先搜索：如何找出社交网络中的三度好友关系',
                        src:
                            './数据结构与算法之美/html/31-深度和广度优先搜索：如何找出社交网络中的三度好友关系.html'
                    },
                    {
                        id: 'dv7boab2pia',
                        title:
                            '32-字符串匹配基础（上）：如何借助哈希算法实现高效字符串匹配',
                        src:
                            './数据结构与算法之美/html/32-字符串匹配基础（上）：如何借助哈希算法实现高效字符串匹配.html'
                    },
                    {
                        id: 'moceebsrhm4',
                        title:
                            '33-字符串匹配基础（中）：如何实现文本编辑器中的查找功能',
                        src:
                            './数据结构与算法之美/html/33-字符串匹配基础（中）：如何实现文本编辑器中的查找功能.html'
                    },
                    {
                        id: '4yc79cdnfcl',
                        title:
                            '34-字符串匹配基础（下）：如何借助BM算法轻松理解KMP算法',
                        src:
                            './数据结构与算法之美/html/34-字符串匹配基础（下）：如何借助BM算法轻松理解KMP算法.html'
                    },
                    {
                        id: 'aih7fujs19m',
                        title:
                            '35-Trie树：如何实现搜索引擎的搜索关键词提示功能',
                        src:
                            './数据结构与算法之美/html/35-Trie树：如何实现搜索引擎的搜索关键词提示功能.html'
                    },
                    {
                        id: 'y3l0mo7uhm1',
                        title:
                            '36-AC自动机：如何用多模式串匹配实现敏感词过滤功能',
                        src:
                            './数据结构与算法之美/html/36-AC自动机：如何用多模式串匹配实现敏感词过滤功能.html'
                    },
                    {
                        id: 'j39fkvhe46h',
                        title: '37-贪心算法：如何用贪心算法实现Huffman压缩编码',
                        src:
                            './数据结构与算法之美/html/37-贪心算法：如何用贪心算法实现Huffman压缩编码.html'
                    },
                    {
                        id: 'cv594pauod6',
                        title:
                            '38-分治算法：谈一谈大规模计算框架MapReduce中的分治思想',
                        src:
                            './数据结构与算法之美/html/38-分治算法：谈一谈大规模计算框架MapReduce中的分治思想.html'
                    },
                    {
                        id: 'q7noihrr9ma',
                        title:
                            '39-回溯算法：从电影《蝴蝶效应》中学习回溯算法的核心思想',
                        src:
                            './数据结构与算法之美/html/39-回溯算法：从电影《蝴蝶效应》中学习回溯算法的核心思想.html'
                    },
                    {
                        id: 'xhk7jil09au',
                        title:
                            '40-初识动态规划：如何巧妙解决“双十一”购物时的凑单问题',
                        src:
                            './数据结构与算法之美/html/40-初识动态规划：如何巧妙解决“双十一”购物时的凑单问题.html'
                    },
                    {
                        id: 'w9w7u1l10pc',
                        title:
                            '41-动态规划理论：一篇文章带你彻底搞懂最优子结构、无后效性和重复子问题',
                        src:
                            './数据结构与算法之美/html/41-动态规划理论：一篇文章带你彻底搞懂最优子结构、无后效性和重复子问题.html'
                    },
                    {
                        id: 'n702gomekmd',
                        title:
                            '42-动态规划实战：如何实现搜索引擎中的拼写纠错功能',
                        src:
                            './数据结构与算法之美/html/42-动态规划实战：如何实现搜索引擎中的拼写纠错功能.html'
                    }
                ]
            },
            {
                id: 'zruv5o46q5e',
                title: '高级篇',
                subList: [
                    {
                        id: '851u70udzxe',
                        title: '43-拓扑排序：如何确定代码源文件的编译依赖关系',
                        src:
                            './数据结构与算法之美/html/43-拓扑排序：如何确定代码源文件的编译依赖关系.html'
                    },
                    {
                        id: 'gzkce6w1zg1',
                        title:
                            '44-最短路径：地图软件是如何计算出最优出行路径的',
                        src:
                            './数据结构与算法之美/html/44-最短路径：地图软件是如何计算出最优出行路径的.html'
                    },
                    {
                        id: 'yaseqv899ql',
                        title: '45-位图：如何实现网页爬虫中的URL去重功能',
                        src:
                            './数据结构与算法之美/html/45-位图：如何实现网页爬虫中的URL去重功能.html'
                    },
                    {
                        id: 'dokgh93bz91',
                        title:
                            '46-概率统计：如何利用朴素贝叶斯算法过滤垃圾短信',
                        src:
                            './数据结构与算法之美/html/46-概率统计：如何利用朴素贝叶斯算法过滤垃圾短信.html'
                    },
                    {
                        id: '1lbip7n515t',
                        title: '47-向量空间：如何实现一个简单的音乐推荐系统',
                        src:
                            './数据结构与算法之美/html/47-向量空间：如何实现一个简单的音乐推荐系统.html'
                    },
                    {
                        id: '1n9rwgfpmiu',
                        title: '48-B+树：MySQL数据库索引是如何实现的',
                        src:
                            './数据结构与算法之美/html/48-B+树：MySQL数据库索引是如何实现的.html'
                    },
                    {
                        id: '1rlopoz1swj',
                        title: '49-搜索：如何用A*搜索算法实现游戏中的寻路功能',
                        src:
                            './数据结构与算法之美/html/49-搜索：如何用A搜索算法实现游戏中的寻路功能.html'
                    },
                    {
                        id: '0fl7ml67ol1',
                        title: '50-索引：如何在海量数据中快速查找某个数据',
                        src:
                            './数据结构与算法之美/html/50-索引：如何在海量数据中快速查找某个数据.html'
                    },
                    {
                        id: 'gzrsbj1pv4b',
                        title:
                            '51-并行算法：如何利用并行处理提高算法的执行效率',
                        src:
                            './数据结构与算法之美/html/51-并行算法：如何利用并行处理提高算法的执行效率.html'
                    }
                ]
            },
            {
                id: 'znudxe2z6k5',
                title: '实战篇',
                subList: [
                    {
                        id: '3pq1jjkany5',
                        title:
                            '52-算法实战（一）：剖析Redis常用数据类型对应的数据结构',
                        src:
                            './数据结构与算法之美/html/52-算法实战（一）：剖析Redis常用数据类型对应的数据结构.html'
                    },
                    {
                        id: 'wn836lz8mjz',
                        title:
                            '53-算法实战（二）：剖析搜索引擎背后的经典数据结构和算法',
                        src:
                            './数据结构与算法之美/html/53-算法实战（二）：剖析搜索引擎背后的经典数据结构和算法.html'
                    },
                    {
                        id: 'a2zr6yxjes7',
                        title:
                            '54-算法实战（三）：剖析高性能队列Disruptor背后的数据结构和算法',
                        src:
                            './数据结构与算法之美/html/54-算法实战（三）：剖析高性能队列Disruptor背后的数据结构和算法.html'
                    },
                    {
                        id: 'rzdyowuujfk',
                        title:
                            '55-算法实战（四）：剖析微服务接口鉴权限流背后的数据结构和算法',
                        src:
                            './数据结构与算法之美/html/55-算法实战（四）：剖析微服务接口鉴权限流背后的数据结构和算法.html'
                    },
                    {
                        id: 'qveetb1uoat',
                        title:
                            '56-算法实战（五）：如何用学过的数据结构和算法实现一个短网址系统',
                        src:
                            './数据结构与算法之美/html/56-算法实战（五）：如何用学过的数据结构和算法实现一个短网址系统.html'
                    }
                ]
            },
            {
                id: '5avsseddcdx',
                title: '加餐：不定期福利',
                subList: [
                    {
                        id: 'muzih11erz0',
                        title: '不定期福利第一期-数据结构与算法学习书单',
                        src:
                            './数据结构与算法之美/html/不定期福利第一期-数据结构与算法学习书单.html'
                    },
                    {
                        id: 'fwj5kpl2t9g',
                        title:
                            '不定期福利第二期-王争：羁绊前行的，不是肆虐的狂风，而是内心的迷茫',
                        src:
                            './数据结构与算法之美/html/不定期福利第二期-王争：羁绊前行的，不是肆虐的狂风，而是内心的迷茫.html'
                    },
                    {
                        id: 'id9btrlvo6n',
                        title: '不定期福利第三期-测一测你的算法阶段学习成果',
                        src:
                            './数据结构与算法之美/html/不定期福利第三期-测一测你的算法阶段学习成果.html'
                    },
                    {
                        id: 'bvisaoz2vep',
                        title:
                            '不定期福利第四期-刘超：我是怎么学习《数据结构与算法之美》的',
                        src:
                            './数据结构与算法之美/html/不定期福利第四期-刘超：我是怎么学习《数据结构与算法之美》的.html'
                    },
                    {
                        id: 't4r39swjdzo',
                        title:
                            '总结课-在实际开发中，如何权衡选择使用哪种数据结构和算法',
                        src:
                            './数据结构与算法之美/html/总结课-在实际开发中，如何权衡选择使用哪种数据结构和算法.html'
                    },
                    {
                        id: '4issi14ts6u',
                        title: '《数据结构与算法之美》学习指导手册',
                        src: ''
                    }
                ]
            },
            {
                id: 'g29njvt177j',
                title: '加餐：春节7天练',
                subList: [
                    {
                        id: 'ubz5yosby2v',
                        title: '春节7天练-Day1：数组和链表',
                        src:
                            './数据结构与算法之美/html/春节7天练-Day1：数组和链表.html'
                    },
                    {
                        id: 'm2f4g2l5owd',
                        title: '春节7天练-Day2：栈、队列和递归',
                        src:
                            './数据结构与算法之美/html/春节7天练-Day2：栈、队列和递归.html'
                    },
                    {
                        id: 'lyjpfxv1ycx',
                        title: '春节7天练-Day3：排序和二分查找',
                        src:
                            './数据结构与算法之美/html/春节7天练-Day3：排序和二分查找.html'
                    },
                    {
                        id: 'mz7v5er9ptv',
                        title: '春节7天练-Day4：散列表和字符串',
                        src:
                            './数据结构与算法之美/html/春节7天练-Day4：散列表和字符串.html'
                    },
                    {
                        id: 'qhkghp4q7ay',
                        title: '春节7天练-Day5：二叉树和堆',
                        src:
                            './数据结构与算法之美/html/春节7天练-Day5：二叉树和堆.html'
                    },
                    {
                        id: 'jugst50ret3',
                        title: '春节7天练-Day6：图',
                        src: './数据结构与算法之美/html/春节7天练-Day6：图.html'
                    },
                    {
                        id: 'v5vee1o1nb4',
                        title: '春节7天练-Day7：贪心、分治、回溯和动态规划',
                        src:
                            './数据结构与算法之美/html/春节7天练-Day7：贪心、分治、回溯和动态规划.html'
                    }
                ]
            },
            {
                id: 'skq5mtzifcs',
                title: '加餐：用户学习故事',
                subList: [
                    {
                        id: 'vrsgz19pgfh',
                        title: '用户故事-Jerry银银：这一年我的脑海里只有算法',
                        src:
                            './数据结构与算法之美/html/用户故事-Jerry银银：这一年我的脑海里只有算法.html'
                    },
                    {
                        id: 'hzw36n6spho',
                        title:
                            '用户故事-zixuan：站在思维的高处，才有足够的视野和能力欣赏“美”',
                        src:
                            './数据结构与算法之美/html/用户故事-zixuan：站在思维的高处，才有足够的视野和能力欣赏“美”.html'
                    }
                ]
            },
            {
                id: 'x4w6x5uimll',
                title: '结束语',
                subList: [
                    {
                        id: '1wepwuyrj52',
                        title: '结束语-送君千里，终须一别',
                        src:
                            './数据结构与算法之美/html/结束语-送君千里，终须一别.html'
                    },
                    {
                        id: 'cyqspz63035',
                        title: '第2季回归-这一次，我们一起拿下设计模式！',
                        src: ''
                    },
                    {
                        id: '2dsfbgmz10v',
                        title: '结课测试｜这些数据结构与算法，你真的掌握了吗',
                        src: ''
                    }
                ]
            },
            {
                id: 'wwqjmjashrg',
                title: '打卡召集令',
                subList: [
                    {
                        id: 'nbv0zrdq6tr',
                        title: '打卡召集令-60天攻克数据结构与算法',
                        src: ''
                    },
                    {
                        id: '299enhm7aj1',
                        title: '打卡召集令-第一阶段知识总结',
                        src: ''
                    },
                    {
                        id: 'ktlqvjs2wca',
                        title: '打卡召集令-第二阶段知识总结',
                        src: ''
                    },
                    {
                        id: 'f2zhxi1eamn',
                        title: '打卡召集令-第三阶段知识总结',
                        src: ''
                    },
                    {
                        id: 'd0xi6q0j165',
                        title: '打卡召集令-第四阶段知识总结',
                        src: ''
                    }
                ]
            }
        ]
    },
    //动态规划面试宝典
    {
        id: 'sgtavymkcfu',
        type: 'cs',
        cid: '347',
        title: '动态规划面试宝典',
        subTitle: '学好动态规划，面试晋升都不怕',
        authorName: '卢誉声',
        authorInfo: 'Autodesk 资深工程师',
        contents: [
            {
                id: '2yl3cilqe9f',
                title: '课前必读',
                subList: [
                    {
                        id: 'egatxs6esvk',
                        title: '开篇词｜为什么大厂都爱考动态规划？',
                        src:
                            '动态规划面试宝典/html/__284937__开篇词｜为什么大厂都爱考动态规划？.html',
                        audio: ''
                    },
                    {
                        id: 'la8mhj64h33',
                        title:
                            '导读｜动态规划问题纷繁复杂，如何系统学习和掌握它？',
                        src:
                            '动态规划面试宝典/html/__285025__导读｜动态规划问题纷繁复杂，如何系统学习和掌握它？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'gu7xz1r82ou',
                title: '初识动态规划',
                subList: [
                    {
                        id: '1v13ld6a4su',
                        title: '01 | 硬币找零问题：从贪心算法说起',
                        src:
                            '动态规划面试宝典/html/__285230__01 _ 硬币找零问题：从贪心算法说起.html',
                        audio: ''
                    },
                    {
                        id: '3u0uf3fi85u',
                        title: '02 | 暴力递归：当贪心失效了怎么办？',
                        src:
                            '动态规划面试宝典/html/__285888__02 _ 暴力递归：当贪心失效了怎么办？.html',
                        audio: ''
                    },
                    {
                        id: 'fco2x78c9uk',
                        title: '03 | 备忘录：如何避免递归中的重复计算？',
                        src:
                            '动态规划面试宝典/html/__287199__03 _ 备忘录：如何避免递归中的重复计算？.html',
                        audio: ''
                    },
                    {
                        id: 'jnrvxxr31u0',
                        title: '04 | 动态规划：完美解决硬币找零',
                        src:
                            '动态规划面试宝典/html/__287406__04 _ 动态规划：完美解决硬币找零.html',
                        audio: ''
                    },
                    {
                        id: 'egpqv5s3ry8',
                        title:
                            '05｜面试即正义第一期：什么样的问题应该使用动态规划？',
                        src:
                            '动态规划面试宝典/html/__289310__05｜面试即正义第一期：什么样的问题应该使用动态规划？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'okl0z9co6c3',
                title: '动态规划的套路',
                subList: [
                    {
                        id: 'dulgdrifdkx',
                        title: '06 | 0-1背包：动态规划的Hello World',
                        src:
                            '动态规划面试宝典/html/__290092__06 _ 0-1背包：动态规划的Hello World.html',
                        audio: ''
                    },
                    {
                        id: 'u67xktqpkim',
                        title: '07｜完全背包：深入理解背包问题',
                        src:
                            '动态规划面试宝典/html/__291638__07｜完全背包：深入理解背包问题.html',
                        audio: ''
                    },
                    {
                        id: 'p615r6wh1o8',
                        title:
                            '08｜子数组问题：从解决动归问题套路到实践解题思路',
                        src:
                            '动态规划面试宝典/html/__292667__08｜子数组问题：从解决动归问题套路到实践解题思路.html',
                        audio: ''
                    },
                    {
                        id: 'hqumyunxyrz',
                        title: '09｜子序列问题：详解重要的一大类动态规划问题',
                        src:
                            '动态规划面试宝典/html/__293232__09｜子序列问题：详解重要的一大类动态规划问题.html',
                        audio: ''
                    },
                    {
                        id: 'xr81qwdj3jv',
                        title: '10｜面试即正义第二期：常见的动态规划面试题串烧',
                        src:
                            '动态规划面试宝典/html/__293536__10｜面试即正义第二期：常见的动态规划面试题串烧.html',
                        audio: ''
                    },
                    {
                        id: 'obngiwrwedd',
                        title: '加餐｜买卖股票：常见且必考的动态规划面试题',
                        src:
                            '动态规划面试宝典/html/__293557__加餐｜买卖股票：常见且必考的动态规划面试题.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '77u8en0k9je',
                title: '举一反三突破套路',
                subList: [
                    {
                        id: 'c8wpfx9jdlg',
                        title: '11｜动态规划新问题1：攻破最长递增子序列问题',
                        src:
                            '动态规划面试宝典/html/__294300__11｜动态规划新问题1：攻破最长递增子序列问题.html',
                        audio: ''
                    },
                    {
                        id: 'uf500wyz4he',
                        title: '12｜动态规划新问题2：攻破最大子数组问题',
                        src:
                            '动态规划面试宝典/html/__295396__12｜动态规划新问题2：攻破最大子数组问题.html',
                        audio: ''
                    },
                    {
                        id: 'arfnsjpnwe0',
                        title:
                            '13｜动态规划算法设计的关键：最优子结构与状态依赖',
                        src:
                            '动态规划面试宝典/html/__295952__13｜动态规划算法设计的关键：最优子结构与状态依赖.html',
                        audio: ''
                    },
                    {
                        id: 'j27d5n7vpxa',
                        title: '14｜面试即正义第三期：刷题指南，熟能生巧',
                        src:
                            '动态规划面试宝典/html/__296625__14｜面试即正义第三期：刷题指南，熟能生巧.html',
                        audio: ''
                    },
                    {
                        id: 'k1wfzl67n01',
                        title: '15｜课程回顾与总结（上）',
                        src:
                            '动态规划面试宝典/html/__297230__15｜课程回顾与总结（上）.html',
                        audio: ''
                    },
                    {
                        id: 'txyw2h3oogf',
                        title: '16｜课程回顾与总结（下）',
                        src:
                            '动态规划面试宝典/html/__297232__16｜课程回顾与总结（下）.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'zx7cshylym5',
                title: '结束语',
                subList: [
                    {
                        id: 'z81akb06xmv',
                        title: '结束语｜在我家的后院养长颈鹿',
                        src:
                            '动态规划面试宝典/html/__299061__结束语｜在我家的后院养长颈鹿.html',
                        audio: ''
                    },
                    {
                        id: 'z8i0t592g6m',
                        title: '有奖征集倒计时3天！你填写毕业问卷了吗？',
                        src:
                            '动态规划面试宝典/html/__305043__有奖征集倒计时3天！你填写毕业问卷了吗？.html',
                        audio: ''
                    },
                    {
                        id: 'veap487yga7',
                        title: '结课问卷获奖用户名单',
                        src:
                            '动态规划面试宝典/html/__309762__结课问卷获奖用户名单.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '0xhawk8sh5a',
                title: '期末测试',
                subList: [
                    {
                        id: 'wfax8kyc7x9',
                        title: '期末测试｜有关动态规划，你掌握了多少呢？',
                        src:
                            '动态规划面试宝典/html/__299068__期末测试｜有关动态规划，你掌握了多少呢？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    //趣谈Linux操作系统
    {
        id: '2hb3c13cmva',
        type: 'cs',
        cid: '100024701',
        title: '趣谈Linux操作系统',
        subTitle: '像故事一样的操作系统入门课',
        authorName: '刘超',
        authorInfo: '网易杭州研究院云计算技术部首席架构师',
        contents: [
            {
                id: 's3acll2li7f',
                title: '入门准备篇',
                subList: [
                    {
                        id: '5awsdtzzbdn',
                        title: '开篇词 | 为什么要学习Linux操作系统？',
                        src:
                            './趣谈Linux操作系统/html/开篇词为什么要学习Linux操作系统.html',
                        audio:
                            './趣谈Linux操作系统/audio/开篇词为什么要学习Linux操作系统.mp3'
                    },
                    {
                        id: 'qu7x9uthkaf',
                        title: '01 | 入学测验：你究竟对Linux操作系统了解多少？',
                        src:
                            './趣谈Linux操作系统/html/01入学测验你究竟对Linux操作系统了解多少.html',
                        audio:
                            './趣谈Linux操作系统/audio/01入学测验你究竟对Linux操作系统了解多少.mp3'
                    },
                    {
                        id: '8hifj9zhca2',
                        title:
                            '02 | 学习路径：爬过这六个陡坡，你就能对Linux了如指掌',
                        src:
                            './趣谈Linux操作系统/html/02学习路径爬过这六个陡坡你就能对Linux了如指掌.html',
                        audio:
                            './趣谈Linux操作系统/audio/02学习路径爬过这六个陡坡你就能对Linux了如指掌.mp3'
                    }
                ]
            },
            {
                id: 'l1wre0evmbx',
                title: '核心原理篇：第一部分Linux操作系统综述',
                subList: [
                    {
                        id: '88xzd183mr7',
                        title:
                            '03 | 你可以把Linux内核当成一家软件外包公司的老板',
                        src:
                            './趣谈Linux操作系统/html/03你可以把Linux内核当成一家软件外包公司的老板.html',
                        audio:
                            './趣谈Linux操作系统/audio/03你可以把Linux内核当成一家软件外包公司的老板.mp3'
                    },
                    {
                        id: 'o01g5bm6ii1',
                        title:
                            '04 | 快速上手几个Linux命令：每家公司都有自己的黑话',
                        src:
                            './趣谈Linux操作系统/html/04快速上手几个Linux命令每家公司都有自己的黑话.html',
                        audio:
                            './趣谈Linux操作系统/audio/04快速上手几个Linux命令每家公司都有自己的黑话.mp3'
                    },
                    {
                        id: 'hk36hjy5bth',
                        title:
                            '05 | 学会几个系统调用：咱们公司能接哪些类型的项目？',
                        src:
                            './趣谈Linux操作系统/html/05学会几个系统调用咱们公司能接哪些类型的项目.html',
                        audio:
                            './趣谈Linux操作系统/audio/05学会几个系统调用咱们公司能接哪些类型的项目.mp3'
                    }
                ]
            },
            {
                id: '6d5cv4tf7z0',
                title: '核心原理篇：第二部分系统初始化',
                subList: [
                    {
                        id: 'fe7svy5ew2s',
                        title:
                            '06 | x86架构：有了开放的架构，才能打造开放的营商环境',
                        src:
                            './趣谈Linux操作系统/html/06x86架构有了开放的架构才能打造开放的营商环境.html',
                        audio:
                            './趣谈Linux操作系统/audio/06x86架构有了开放的架构才能打造开放的营商环境.mp3'
                    },
                    {
                        id: '94aqkwa4kj9',
                        title:
                            '07 | 从BIOS到bootloader：创业伊始，有活儿老板自己上',
                        src:
                            './趣谈Linux操作系统/html/07从BIOS到bootloader创业伊始有活儿老板自己上.html',
                        audio:
                            './趣谈Linux操作系统/audio/07从BIOS到bootloader创业伊始有活儿老板自己上.mp3'
                    },
                    {
                        id: 'f29u2z41lhn',
                        title: '08 | 内核初始化：生意做大了就得成立公司',
                        src:
                            './趣谈Linux操作系统/html/08内核初始化生意做大了就得成立公司.html',
                        audio:
                            './趣谈Linux操作系统/audio/08内核初始化生意做大了就得成立公司.mp3'
                    },
                    {
                        id: 'a4un1buovvc',
                        title: '09 | 系统调用：公司成立好了就要开始接项目',
                        src:
                            './趣谈Linux操作系统/html/09系统调用公司成立好了就要开始接项目.html',
                        audio:
                            './趣谈Linux操作系统/audio/09系统调用公司成立好了就要开始接项目.mp3'
                    }
                ]
            },
            {
                id: 'hd9gl5kbuv1',
                title: '核心原理篇：第三部分进程管理',
                subList: [
                    {
                        id: 'snm75h4wzqb',
                        title: '10 | 进程：公司接这么多项目，如何管？',
                        src:
                            './趣谈Linux操作系统/html/10进程公司接这么多项目如何管.html',
                        audio:
                            './趣谈Linux操作系统/audio/10进程公司接这么多项目如何管.mp3'
                    },
                    {
                        id: 'kkdsrees4m6',
                        title: '11 | 线程：如何让复杂的项目并行执行？',
                        src:
                            './趣谈Linux操作系统/html/11线程如何让复杂的项目并行执行.html',
                        audio:
                            './趣谈Linux操作系统/audio/11线程如何让复杂的项目并行执行.mp3'
                    },
                    {
                        id: 'bpkgmj6vghh',
                        title:
                            '12 | 进程数据结构（上）：项目多了就需要项目管理系统',
                        src:
                            './趣谈Linux操作系统/html/12进程数据结构上项目多了就需要项目管理系统.html',
                        audio:
                            './趣谈Linux操作系统/audio/12进程数据结构上项目多了就需要项目管理系统.mp3'
                    },
                    {
                        id: 'i4jkizoo7qz',
                        title:
                            '13 | 进程数据结构（中）：项目多了就需要项目管理系统',
                        src:
                            './趣谈Linux操作系统/html/13进程数据结构中项目多了就需要项目管理系统.html',
                        audio:
                            './趣谈Linux操作系统/audio/13进程数据结构中项目多了就需要项目管理系统.mp3'
                    },
                    {
                        id: 'qskdh6yib69',
                        title:
                            '14 | 进程数据结构（下）：项目多了就需要项目管理系统',
                        src:
                            './趣谈Linux操作系统/html/14进程数据结构下项目多了就需要项目管理系统.html',
                        audio:
                            './趣谈Linux操作系统/audio/14进程数据结构下项目多了就需要项目管理系统.mp3'
                    },
                    {
                        id: '3d3wo2dlyq1',
                        title: '15 | 调度（上）：如何制定项目管理流程？',
                        src:
                            './趣谈Linux操作系统/html/15调度上如何制定项目管理流程.html',
                        audio:
                            './趣谈Linux操作系统/audio/15调度上如何制定项目管理流程.mp3'
                    },
                    {
                        id: 'l8svhiu4drd',
                        title: '16 | 调度（中）：主动调度是如何发生的？',
                        src:
                            './趣谈Linux操作系统/html/16调度中主动调度是如何发生的.html',
                        audio:
                            './趣谈Linux操作系统/audio/16调度中主动调度是如何发生的.mp3'
                    },
                    {
                        id: 'nazr9dvsrla',
                        title: '17 | 调度（下）：抢占式调度是如何发生的？',
                        src:
                            './趣谈Linux操作系统/html/17调度下抢占式调度是如何发生的.html',
                        audio:
                            './趣谈Linux操作系统/audio/17调度下抢占式调度是如何发生的.mp3'
                    },
                    {
                        id: 'zli4ngb5enr',
                        title: '18 | 进程的创建：如何发起一个新项目？',
                        src:
                            './趣谈Linux操作系统/html/18进程的创建如何发起一个新项目.html',
                        audio:
                            './趣谈Linux操作系统/audio/18进程的创建如何发起一个新项目.mp3'
                    },
                    {
                        id: '1cey0svaiki',
                        title: '19 | 线程的创建：如何执行一个新子项目？',
                        src:
                            './趣谈Linux操作系统/html/19线程的创建如何执行一个新子项目.html',
                        audio:
                            './趣谈Linux操作系统/audio/19线程的创建如何执行一个新子项目.mp3'
                    }
                ]
            },
            {
                id: 'xm0a0453cci',
                title: '核心原理篇：第四部分内存管理',
                subList: [
                    {
                        id: '1hk1tae3t8p',
                        title:
                            '20 | 内存管理（上）：为客户保密，规划进程内存空间布局',
                        src:
                            './趣谈Linux操作系统/html/20内存管理上为客户保密规划进程内存空间布局.html',
                        audio:
                            './趣谈Linux操作系统/audio/20内存管理上为客户保密规划进程内存空间布局.mp3'
                    },
                    {
                        id: 'jq8zisr7oo9',
                        title:
                            '21 | 内存管理（下）：为客户保密，项目组独享会议室封闭开发',
                        src:
                            './趣谈Linux操作系统/html/21内存管理下为客户保密项目组独享会议室封闭开发.html',
                        audio:
                            './趣谈Linux操作系统/audio/21内存管理下为客户保密项目组独享会议室封闭开发.mp3'
                    },
                    {
                        id: '4ooyqqrkktk',
                        title: '22 | 进程空间管理：项目组还可以自行布置会议室',
                        src:
                            './趣谈Linux操作系统/html/22进程空间管理项目组还可以自行布置会议室.html',
                        audio:
                            './趣谈Linux操作系统/audio/22进程空间管理项目组还可以自行布置会议室.mp3'
                    },
                    {
                        id: '34jvxkdx1jw',
                        title:
                            '23 | 物理内存管理（上）：会议室管理员如何分配会议室？',
                        src:
                            './趣谈Linux操作系统/html/23物理内存管理上会议室管理员如何分配会议室.html',
                        audio:
                            './趣谈Linux操作系统/audio/23物理内存管理上会议室管理员如何分配会议室.mp3'
                    },
                    {
                        id: 'vzu218kjdk3',
                        title:
                            '24 | 物理内存管理（下）：会议室管理员如何分配会议室？',
                        src:
                            './趣谈Linux操作系统/html/24物理内存管理下会议室管理员如何分配会议室.html',
                        audio:
                            './趣谈Linux操作系统/audio/24物理内存管理下会议室管理员如何分配会议室.mp3'
                    },
                    {
                        id: 'vdx8x4klvuk',
                        title: '25 | 用户态内存映射：如何找到正确的会议室？',
                        src:
                            './趣谈Linux操作系统/html/25用户态内存映射如何找到正确的会议室.html',
                        audio:
                            './趣谈Linux操作系统/audio/25用户态内存映射如何找到正确的会议室.mp3'
                    },
                    {
                        id: '7c82t93umh1',
                        title: '26 | 内核态内存映射：如何找到正确的会议室？',
                        src:
                            './趣谈Linux操作系统/html/26内核态内存映射如何找到正确的会议室.html',
                        audio:
                            './趣谈Linux操作系统/audio/26内核态内存映射如何找到正确的会议室.mp3'
                    }
                ]
            },
            {
                id: 'gbddm936uja',
                title: '核心原理篇：第五部分文件系统',
                subList: [
                    {
                        id: 'j9cit68c5e8',
                        title:
                            '27 | 文件系统：项目成果要归档，我们就需要档案库',
                        src:
                            './趣谈Linux操作系统/html/27文件系统项目成果要归档我们就需要档案库.html',
                        audio:
                            './趣谈Linux操作系统/audio/27文件系统项目成果要归档我们就需要档案库.mp3'
                    },
                    {
                        id: '9ed256g5afj',
                        title:
                            '28 | 硬盘文件系统：如何最合理地组织档案库的文档？',
                        src:
                            './趣谈Linux操作系统/html/28硬盘文件系统如何最合理地组织档案库的文档.html',
                        audio:
                            './趣谈Linux操作系统/audio/28硬盘文件系统如何最合理地组织档案库的文档.mp3'
                    },
                    {
                        id: 'y9mh45pafk2',
                        title: '29 | 虚拟文件系统：文件多了就需要档案管理系统',
                        src:
                            './趣谈Linux操作系统/html/29虚拟文件系统文件多了就需要档案管理系统.html',
                        audio:
                            './趣谈Linux操作系统/audio/29虚拟文件系统文件多了就需要档案管理系统.mp3'
                    },
                    {
                        id: 'anrdbkrlcrg',
                        title: '30 | 文件缓存：常用文档应该放在触手可得的地方',
                        src:
                            './趣谈Linux操作系统/html/30文件缓存常用文档应该放在触手可得的地方.html',
                        audio:
                            './趣谈Linux操作系统/audio/30文件缓存常用文档应该放在触手可得的地方.mp3'
                    }
                ]
            },
            {
                id: 'ql3wov4wpig',
                title: '核心原理篇：第六部分输入输出系统',
                subList: [
                    {
                        id: 'n3azyv1gc30',
                        title: '31 | 输入与输出：如何建立售前售后生态体系？',
                        src:
                            './趣谈Linux操作系统/html/31输入与输出如何建立售前售后生态体系.html',
                        audio:
                            './趣谈Linux操作系统/audio/31输入与输出如何建立售前售后生态体系.mp3'
                    },
                    {
                        id: '59ytyra7o9k',
                        title: '32 | 字符设备（上）：如何建立直销模式？',
                        src:
                            './趣谈Linux操作系统/html/32字符设备上如何建立直销模式.html',
                        audio:
                            './趣谈Linux操作系统/audio/32字符设备上如何建立直销模式.mp3'
                    },
                    {
                        id: 'qf6g8pt01mu',
                        title: '33 | 字符设备（下）：如何建立直销模式？',
                        src:
                            './趣谈Linux操作系统/html/33字符设备下如何建立直销模式.html',
                        audio:
                            './趣谈Linux操作系统/audio/33字符设备下如何建立直销模式.mp3'
                    },
                    {
                        id: 'g2adkfnjvik',
                        title: '34 | 块设备（上）：如何建立代理商销售模式？',
                        src:
                            './趣谈Linux操作系统/html/34块设备上如何建立代理商销售模式.html',
                        audio:
                            './趣谈Linux操作系统/audio/34块设备上如何建立代理商销售模式.mp3'
                    },
                    {
                        id: '6zt1m96xzfn',
                        title: '35 | 块设备（下）：如何建立代理商销售模式？',
                        src:
                            './趣谈Linux操作系统/html/35块设备下如何建立代理商销售模式.html',
                        audio:
                            './趣谈Linux操作系统/audio/35块设备下如何建立代理商销售模式.mp3'
                    }
                ]
            },
            {
                id: '46kr8f4xjfu',
                title: '核心原理篇：第七部分进程间通信',
                subList: [
                    {
                        id: 'lubbs47b05u',
                        title:
                            '36 | 进程间通信：遇到大项目需要项目组之间的合作才行',
                        src:
                            './趣谈Linux操作系统/html/36进程间通信遇到大项目需要项目组之间的合作才行.html',
                        audio:
                            './趣谈Linux操作系统/audio/36进程间通信遇到大项目需要项目组之间的合作才行.mp3'
                    },
                    {
                        id: 'xfjwrww493c',
                        title:
                            '37 | 信号（上）：项目组A完成了，如何及时通知项目组B？',
                        src:
                            './趣谈Linux操作系统/html/37信号上项目组A完成了如何及时通知项目组B.html',
                        audio:
                            './趣谈Linux操作系统/audio/37信号上项目组A完成了如何及时通知项目组B.mp3'
                    },
                    {
                        id: '62o71rf5t7p',
                        title:
                            '38 | 信号（下）：项目组A完成了，如何及时通知项目组B？',
                        src:
                            './趣谈Linux操作系统/html/38信号下项目组A完成了如何及时通知项目组B.html',
                        audio:
                            './趣谈Linux操作系统/audio/38信号下项目组A完成了如何及时通知项目组B.mp3'
                    },
                    {
                        id: 'glm85tv2m04',
                        title: '39 | 管道：项目组A完成了，如何交接给项目组B？',
                        src:
                            './趣谈Linux操作系统/html/39管道项目组A完成了如何交接给项目组B.html',
                        audio:
                            './趣谈Linux操作系统/audio/39管道项目组A完成了如何交接给项目组B.mp3'
                    },
                    {
                        id: '8mkgr31ex5z',
                        title:
                            '40 | IPC（上）：不同项目组之间抢资源，如何协调？',
                        src:
                            './趣谈Linux操作系统/html/40IPC上不同项目组之间抢资源如何协调.html',
                        audio:
                            './趣谈Linux操作系统/audio/40IPC上不同项目组之间抢资源如何协调.mp3'
                    },
                    {
                        id: 'giygvgt08o5',
                        title:
                            '41 | IPC（中）：不同项目组之间抢资源，如何协调？',
                        src:
                            './趣谈Linux操作系统/html/41IPC中不同项目组之间抢资源如何协调.html',
                        audio:
                            './趣谈Linux操作系统/audio/41IPC中不同项目组之间抢资源如何协调.mp3'
                    },
                    {
                        id: 'jrpgvsupfg9',
                        title:
                            '42 | IPC（下）：不同项目组之间抢资源，如何协调？',
                        src:
                            './趣谈Linux操作系统/html/42IPC下不同项目组之间抢资源如何协调.html',
                        audio:
                            './趣谈Linux操作系统/audio/42IPC下不同项目组之间抢资源如何协调.mp3'
                    }
                ]
            },
            {
                id: 'i2dhobgbgsc',
                title: '核心原理篇：第八部分网络系统',
                subList: [
                    {
                        id: 'odkvdwvk906',
                        title: '43 预习 | Socket通信之网络协议基本原理',
                        src:
                            './趣谈Linux操作系统/html/43·预习Socket通信之网络协议基本原理.html',
                        audio:
                            './趣谈Linux操作系统/audio/43·预习Socket通信之网络协议基本原理.mp3'
                    },
                    {
                        id: '9utbc1hk3d1',
                        title:
                            '43 | Socket通信：遇上特大项目，要学会和其他公司合作',
                        src:
                            './趣谈Linux操作系统/html/43Socket通信遇上特大项目要学会和其他公司合作.html',
                        audio:
                            './趣谈Linux操作系统/audio/43Socket通信遇上特大项目要学会和其他公司合作.mp3'
                    },
                    {
                        id: 'zrvx4785ism',
                        title:
                            '44 | Socket内核数据结构：如何成立特大项目合作部？',
                        src:
                            './趣谈Linux操作系统/html/44Socket内核数据结构如何成立特大项目合作部.html',
                        audio:
                            './趣谈Linux操作系统/audio/44Socket内核数据结构如何成立特大项目合作部.mp3'
                    },
                    {
                        id: 'lsa5pkxhjzr',
                        title:
                            '45 | 发送网络包（上）：如何表达我们想让合作伙伴做什么？',
                        src:
                            './趣谈Linux操作系统/html/45发送网络包上如何表达我们想让合作伙伴做什么.html',
                        audio:
                            './趣谈Linux操作系统/audio/45发送网络包上如何表达我们想让合作伙伴做什么.mp3'
                    },
                    {
                        id: 'cbkgqaw90nl',
                        title:
                            '46 | 发送网络包（下）：如何表达我们想让合作伙伴做什么？',
                        src:
                            './趣谈Linux操作系统/html/46发送网络包下如何表达我们想让合作伙伴做什么.html',
                        audio:
                            './趣谈Linux操作系统/audio/46发送网络包下如何表达我们想让合作伙伴做什么.mp3'
                    },
                    {
                        id: '85ytbuwkby1',
                        title:
                            '47 | 接收网络包（上）：如何搞明白合作伙伴让我们做什么？',
                        src:
                            './趣谈Linux操作系统/html/47接收网络包上如何搞明白合作伙伴让我们做什么.html',
                        audio:
                            './趣谈Linux操作系统/audio/47接收网络包上如何搞明白合作伙伴让我们做什么.mp3'
                    },
                    {
                        id: 'd7qqwtudqba',
                        title:
                            '48 | 接收网络包（下）：如何搞明白合作伙伴让我们做什么？',
                        src:
                            './趣谈Linux操作系统/html/48接收网络包下如何搞明白合作伙伴让我们做什么.html',
                        audio:
                            './趣谈Linux操作系统/audio/48接收网络包下如何搞明白合作伙伴让我们做什么.mp3'
                    }
                ]
            },
            {
                id: 'kblvladftp5',
                title: '核心原理篇：第九部分虚拟化',
                subList: [
                    {
                        id: '0p1bw4xlarc',
                        title: '49 | 虚拟机：如何成立子公司，让公司变集团？',
                        src:
                            './趣谈Linux操作系统/html/49虚拟机如何成立子公司让公司变集团.html',
                        audio:
                            './趣谈Linux操作系统/audio/49虚拟机如何成立子公司让公司变集团.mp3'
                    },
                    {
                        id: 'jxnsr50l3gn',
                        title:
                            '50 | 计算虚拟化之CPU（上）：如何复用集团的人力资源？',
                        src:
                            './趣谈Linux操作系统/html/50计算虚拟化之CPU上如何复用集团的人力资源.html',
                        audio:
                            './趣谈Linux操作系统/audio/50计算虚拟化之CPU上如何复用集团的人力资源.mp3'
                    },
                    {
                        id: '9l8j1wjqtfx',
                        title:
                            '51 | 计算虚拟化之CPU（下）：如何复用集团的人力资源？',
                        src:
                            './趣谈Linux操作系统/html/51计算虚拟化之CPU下如何复用集团的人力资源.html',
                        audio:
                            './趣谈Linux操作系统/audio/51计算虚拟化之CPU下如何复用集团的人力资源.mp3'
                    },
                    {
                        id: 'h8bs2ab4436',
                        title: '52 | 计算虚拟化之内存：如何建立独立的办公室？',
                        src:
                            './趣谈Linux操作系统/html/52计算虚拟化之内存如何建立独立的办公室.html',
                        audio:
                            './趣谈Linux操作系统/audio/52计算虚拟化之内存如何建立独立的办公室.mp3'
                    },
                    {
                        id: 'fma6o2sr4v3',
                        title:
                            '53 | 存储虚拟化（上）：如何建立自己保管的单独档案库？',
                        src:
                            './趣谈Linux操作系统/html/53存储虚拟化上如何建立自己保管的单独档案库.html',
                        audio:
                            './趣谈Linux操作系统/audio/53存储虚拟化上如何建立自己保管的单独档案库.mp3'
                    },
                    {
                        id: 'bear5i9ajd8',
                        title:
                            '54 | 存储虚拟化（下）：如何建立自己保管的单独档案库？',
                        src:
                            './趣谈Linux操作系统/html/54存储虚拟化下如何建立自己保管的单独档案库.html',
                        audio:
                            './趣谈Linux操作系统/audio/54存储虚拟化下如何建立自己保管的单独档案库.mp3'
                    },
                    {
                        id: 'zs3j8cjgjns',
                        title: '55 | 网络虚拟化：如何成立独立的合作部？',
                        src:
                            './趣谈Linux操作系统/html/55网络虚拟化如何成立独立的合作部.html',
                        audio:
                            './趣谈Linux操作系统/audio/55网络虚拟化如何成立独立的合作部.mp3'
                    }
                ]
            },
            {
                id: '9ih01p5osb2',
                title: '核心原理篇：第十部分容器化',
                subList: [
                    {
                        id: 'rwaqthcwrb3',
                        title: '56 | 容器：大公司为保持创新，鼓励内部创业',
                        src:
                            './趣谈Linux操作系统/html/56容器大公司为保持创新鼓励内部创业.html',
                        audio:
                            './趣谈Linux操作系统/audio/56容器大公司为保持创新鼓励内部创业.mp3'
                    },
                    {
                        id: 'daumq3e1l6a',
                        title: '57 | Namespace技术：内部创业公司应该独立运营',
                        src:
                            './趣谈Linux操作系统/html/57Namespace技术内部创业公司应该独立运营.html',
                        audio:
                            './趣谈Linux操作系统/audio/57Namespace技术内部创业公司应该独立运营.mp3'
                    },
                    {
                        id: 'l52lijfnabq',
                        title: '58 | cgroup技术：内部创业公司应该独立核算成本',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'z1qn1sme7jf',
                        title: '59 | 数据中心操作系统：上市敲钟',
                        src:
                            './趣谈Linux操作系统/html/59数据中心操作系统上市敲钟.html',
                        audio:
                            './趣谈Linux操作系统/audio/59数据中心操作系统上市敲钟.mp3'
                    }
                ]
            },
            {
                id: 'v1n5e80yc2e',
                title: '实战串讲篇',
                subList: [
                    {
                        id: 'yr17s85ta5g',
                        title:
                            '60 | 搭建操作系统实验环境（上）：授人以鱼不如授人以渔',
                        src:
                            './趣谈Linux操作系统/html/60搭建操作系统实验环境上授人以鱼不如授人以渔.html',
                        audio:
                            './趣谈Linux操作系统/audio/60搭建操作系统实验环境上授人以鱼不如授人以渔.mp3'
                    },
                    {
                        id: 'bcjjmba8go8',
                        title:
                            '61 | 搭建操作系统实验环境（下）：授人以鱼不如授人以渔',
                        src:
                            './趣谈Linux操作系统/html/61搭建操作系统实验环境下授人以鱼不如授人以渔.html',
                        audio:
                            './趣谈Linux操作系统/audio/61搭建操作系统实验环境下授人以鱼不如授人以渔.mp3'
                    },
                    {
                        id: 'k5zpiiph9ze',
                        title:
                            '62 | 知识串讲：用一个创业故事串起操作系统原理（一）',
                        src:
                            './趣谈Linux操作系统/html/62知识串讲用一个创业故事串起操作系统原理一.html',
                        audio:
                            './趣谈Linux操作系统/audio/62知识串讲用一个创业故事串起操作系统原理一.mp3'
                    },
                    {
                        id: 'vdt8o5el61t',
                        title:
                            '63 | 知识串讲：用一个创业故事串起操作系统原理（二）',
                        src:
                            './趣谈Linux操作系统/html/63知识串讲用一个创业故事串起操作系统原理二.html',
                        audio:
                            './趣谈Linux操作系统/audio/63知识串讲用一个创业故事串起操作系统原理二.mp3'
                    },
                    {
                        id: 'sapnpf7mbth',
                        title:
                            '64 | 知识串讲：用一个创业故事串起操作系统原理（三）',
                        src:
                            './趣谈Linux操作系统/html/64知识串讲用一个创业故事串起操作系统原理三.html',
                        audio:
                            './趣谈Linux操作系统/audio/64知识串讲用一个创业故事串起操作系统原理三.mp3'
                    },
                    {
                        id: 't4bovn5f545',
                        title:
                            '65 | 知识串讲：用一个创业故事串起操作系统原理（四）',
                        src:
                            './趣谈Linux操作系统/html/65知识串讲用一个创业故事串起操作系统原理四.html',
                        audio:
                            './趣谈Linux操作系统/audio/65知识串讲用一个创业故事串起操作系统原理四.mp3'
                    },
                    {
                        id: 'jzp48uasbc5',
                        title:
                            '66 | 知识串讲：用一个创业故事串起操作系统原理（五）',
                        src:
                            './趣谈Linux操作系统/html/66知识串讲用一个创业故事串起操作系统原理五.html',
                        audio:
                            './趣谈Linux操作系统/audio/66知识串讲用一个创业故事串起操作系统原理五.mp3'
                    },
                    {
                        id: 'ezh25knok8x',
                        title: '期末测试 | 这些操作系统问题，你真的掌握了吗？',
                        src:
                            './趣谈Linux操作系统/html/67期末测试这些操作系统问题你真的掌握了吗.html',
                        audio:
                            './趣谈Linux操作系统/audio/67期末测试这些操作系统问题你真的掌握了吗.mp3'
                    },
                    {
                        id: 'zx02vzd9h2s',
                        title: '结束语 | 永远别轻视任何技术，也永远别轻视自己',
                        src:
                            './趣谈Linux操作系统/html/结束语永远别轻视任何技术也永远别轻视自己.html',
                        audio:
                            './趣谈Linux操作系统/audio/结束语永远别轻视任何技术也永远别轻视自己.mp3'
                    }
                ]
            },
            {
                id: 'r0s0ppm3quh',
                title: '专栏加餐',
                subList: [
                    {
                        id: 'ud9xgywgrpm',
                        title:
                            '学习攻略（一）：学好操作系统，需要掌握哪些前置知识？',
                        src:
                            './趣谈Linux操作系统/html/学习攻略一学好操作系统需要掌握哪些前置知识.html',
                        audio:
                            './趣谈Linux操作系统/audio/学习攻略一学好操作系统需要掌握哪些前置知识.mp3'
                    },
                    {
                        id: 'mbto0926uqv',
                        title: '“趣谈Linux操作系统”食用指南',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: 'meg0udah00g',
                title: '结课测试',
                subList: []
            }
        ]
    },
    //操作系统
    {
        id: '3tztuk6bhcf',
        type: 'cs',
        cid: '411',
        resource: 'https://gitee.com/lmos/cosmos',
        title: '操作系统实战45讲',
        subTitle: '从0到1，实现自己的操作系统',
        authorName: '彭东',
        authorInfo: '网名 LMOS，Intel 傲腾项目关键开发者',
        contents: [
            {
                id: 'konwl5q93g0',
                title: '开篇词',
                subList: [
                    {
                        id: 'buy0agxlwr2',
                        title: '开篇词 | 为什么要学写一个操作系统？',
                        src:
                            '操作系统实战45讲/html/__372018__开篇词 _ 为什么要学写一个操作系统？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'g723egm1y4w',
                title: '尝尝鲜：从一个Hello到另一个Hello',
                subList: [
                    {
                        id: 'skyj3zcs6fq',
                        title: '01 | 程序的运行过程：从代码到机器运行',
                        src:
                            '操作系统实战45讲/html/__369457__01 _ 程序的运行过程：从代码到机器运行.html',
                        audio: ''
                    },
                    {
                        id: 'f1wxxauavyr',
                        title: '02 | 几行汇编几行C：实现一个最简单的内核',
                        src:
                            '操作系统实战45讲/html/__369502__02 _ 几行汇编几行C：实现一个最简单的内核.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'oki6d3t5w8s',
                title: '心有蓝图：设计',
                subList: [
                    {
                        id: 'jl87f1pqltz',
                        title: '03 | 黑盒之中有什么：内核结构与设计',
                        src:
                            '操作系统实战45讲/html/__372609__03 _ 黑盒之中有什么：内核结构与设计.html',
                        audio: ''
                    },
                    {
                        id: '6w0mg6908qz',
                        title:
                            '04 | 震撼的Linux全景图：业界成熟的内核架构长什么样？',
                        src:
                            '操作系统实战45讲/html/__374474__04 _ 震撼的Linux全景图：业界成熟的内核架构长什么样？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'g2m1wukmkfi',
                title: '程序的基石：硬件',
                subList: [
                    {
                        id: '89e7xedtl88',
                        title: '05 | CPU工作模式：执行程序的三种模式',
                        src:
                            '操作系统实战45讲/html/__375278__05 _ CPU工作模式：执行程序的三种模式.html',
                        audio: ''
                    },
                    {
                        id: 'g8c0ms4qett',
                        title: '06 | 虚幻与真实：程序中的地址如何转换？',
                        src:
                            '操作系统实战45讲/html/__376064__06 _ 虚幻与真实：程序中的地址如何转换？.html',
                        audio: ''
                    },
                    {
                        id: '46uqs5abnk9',
                        title: '07 | Cache与内存：程序放在哪儿？',
                        src:
                            '操作系统实战45讲/html/__376711__07 _ Cache与内存：程序放在哪儿？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '3m1r7sochfg',
                title: '基本法：同步原语',
                subList: [
                    {
                        id: '3g4kft7bzzc',
                        title: '08 | 锁：并发操作中，解决数据同步的四种方法',
                        src:
                            '操作系统实战45讲/html/__377913__08 _ 锁：并发操作中，解决数据同步的四种方法.html',
                        audio: ''
                    },
                    {
                        id: '6cz4mssdusl',
                        title:
                            '09 | 瞧一瞧Linux：Linux的自旋锁和信号量如何实现？',
                        src:
                            '操作系统实战45讲/html/__378870__09 _ 瞧一瞧Linux：Linux的自旋锁和信号量如何实现？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'zaeoh2xlve0',
                title: '夺权：启动初始化',
                subList: [
                    {
                        id: 'r460xpb0qca',
                        title: '10 | 设置工作模式与环境（上）：建立计算机',
                        src:
                            '操作系统实战45讲/html/__379291__10 _ 设置工作模式与环境（上）：建立计算机.html',
                        audio: ''
                    },
                    {
                        id: '8na214hicuk',
                        title: '11 | 设置工作模式与环境（中）：建造二级引导器',
                        src:
                            '操作系统实战45讲/html/__380507__11 _ 设置工作模式与环境（中）：建造二级引导器.html',
                        audio: ''
                    },
                    {
                        id: 'o3yvmtupquf',
                        title: '12 | 设置工作模式与环境（下）：探查和收集信息',
                        src:
                            '操作系统实战45讲/html/__381157__12 _ 设置工作模式与环境（下）：探查和收集信息.html',
                        audio: ''
                    },
                    {
                        id: '6hvwvkgyiud',
                        title: '13 | 第一个C函数：如何实现板级初始化？',
                        src:
                            '操作系统实战45讲/html/__381810__13 _ 第一个C函数：如何实现板级初始化？.html',
                        audio: ''
                    },
                    {
                        id: 'rp3145ivqhu',
                        title: '14 | Linux初始化（上）：GRUB与vmlinuz的结构',
                        src:
                            '操作系统实战45讲/html/__382733__14 _ Linux初始化（上）：GRUB与vmlinuz的结构.html',
                        audio: ''
                    },
                    {
                        id: '9k5twgvn3yr',
                        title: '15 | Linux初始化（下）：从_start到第一个进程',
                        src:
                            '操作系统实战45讲/html/__383611__15 _ Linux初始化（下）：从_start到第一个进程.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '88rrzt8zcnw',
                title: '土地革命：内存',
                subList: [
                    {
                        id: 'ffrqrc5tqyx',
                        title: '16 | 划分土地（上）：如何划分与组织内存？',
                        src:
                            '操作系统实战45讲/html/__384366__16 _ 划分土地（上）：如何划分与组织内存？.html',
                        audio: ''
                    },
                    {
                        id: '6d9o4fxh99k',
                        title: '17 | 划分土地（中）：如何实现内存页面初始化？',
                        src:
                            '操作系统实战45讲/html/__384772__17 _ 划分土地（中）：如何实现内存页面初始化？.html',
                        audio: ''
                    },
                    {
                        id: 'izcywgytmz1',
                        title:
                            '18 | 划分土地（下）：如何实现内存页的分配与释放？',
                        src:
                            '操作系统实战45讲/html/__385628__18 _ 划分土地（下）：如何实现内存页的分配与释放？.html',
                        audio: ''
                    },
                    {
                        id: 'ry5cordtf6c',
                        title: '19 | 土地不能浪费：如何管理内存对象？',
                        src:
                            '操作系统实战45讲/html/__386400__19 _ 土地不能浪费：如何管理内存对象？.html',
                        audio: ''
                    },
                    {
                        id: 'r2dpot9x7sw',
                        title: '20 | 土地需求扩大与保障：如何表示虚拟内存？',
                        src:
                            '操作系统实战45讲/html/__387258__20 _ 土地需求扩大与保障：如何表示虚拟内存？.html',
                        audio: ''
                    },
                    {
                        id: 'yxfooaru6vn',
                        title:
                            '21 | 土地需求扩大与保障：如何分配和释放虚拟内存？',
                        src:
                            '操作系统实战45讲/html/__388167__21 _ 土地需求扩大与保障：如何分配和释放虚拟内存？.html',
                        audio: ''
                    },
                    {
                        id: '6jdppntu31c',
                        title: '22 | 瞧一瞧Linux：伙伴系统如何分配内存？',
                        src:
                            '操作系统实战45讲/html/__389123__22 _ 瞧一瞧Linux：伙伴系统如何分配内存？.html',
                        audio: ''
                    },
                    {
                        id: '8dksrrjctsp',
                        title: '23 | 瞧一瞧Linux：SLAB如何分配内存？',
                        src:
                            '操作系统实战45讲/html/__389880__23 _ 瞧一瞧Linux：SLAB如何分配内存？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '2osfy9mk0kv',
                title: '活动实体：进程',
                subList: [
                    {
                        id: '2if7yf05fg3',
                        title: '24 | 活动的描述：到底什么是进程？',
                        src:
                            '操作系统实战45讲/html/__390674__24 _ 活动的描述：到底什么是进程？.html',
                        audio: ''
                    },
                    {
                        id: 'qtyxtgwreih',
                        title: '25 | 多个活动要安排（上）：多进程如何调度？',
                        src:
                            '操作系统实战45讲/html/__391222__25 _ 多个活动要安排（上）：多进程如何调度？.html',
                        audio: ''
                    },
                    {
                        id: 'o56ioagc6p3',
                        title:
                            '26 | 多个活动要安排（下）：如何实现进程的等待与唤醒机制？',
                        src:
                            '操作系统实战45讲/html/__392198__26 _ 多个活动要安排（下）：如何实现进程的等待与唤醒机制？.html',
                        audio: ''
                    },
                    {
                        id: '0idy4w0adwu',
                        title: '27 | 瞧一瞧Linux：Linux如何实现进程与进程调度?',
                        src:
                            '操作系统实战45讲/html/__393350__27 _ 瞧一瞧Linux：Linux如何实现进程与进程调度_.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'ofd59858afy',
                title: '下属部门：设备I/O',
                subList: [
                    {
                        id: 'a2hh4v1m2ps',
                        title: '28 | 部门分类：如何表示设备类型与设备驱动？',
                        src:
                            '操作系统实战45讲/html/__394084__28 _ 部门分类：如何表示设备类型与设备驱动？.html',
                        audio: ''
                    },
                    {
                        id: 'gk9f69ef1gb',
                        title: '29 | 部门建立：如何在内核中注册设备？',
                        src:
                            '操作系统实战45讲/html/__394875__29 _ 部门建立：如何在内核中注册设备？.html',
                        audio: ''
                    },
                    {
                        id: 'hr4c0ucmvkb',
                        title: '30 | 部门响应：设备如何处理内核I/O包？',
                        src:
                            '操作系统实战45讲/html/__395772__30 _ 部门响应：设备如何处理内核I_O包？.html',
                        audio: ''
                    },
                    {
                        id: '9u7maobm3ub',
                        title: '31 | 瞧一瞧Linux：如何获取所有设备信息？',
                        src:
                            '操作系统实战45讲/html/__396896__31 _ 瞧一瞧Linux：如何获取所有设备信息？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 's76ylwcjweb',
                title: '银行仓库：文件系统',
                subList: [
                    {
                        id: '0s6l25yvdff',
                        title: '32 | 仓库结构：如何组织文件?',
                        src:
                            '操作系统实战45讲/html/__397594__32 _ 仓库结构：如何组织文件_.html',
                        audio: ''
                    },
                    {
                        id: 'rxpg9ua1fwj',
                        title: '33 | 仓库划分：文件系统的格式化操作',
                        src:
                            '操作系统实战45讲/html/__398697__33 _ 仓库划分：文件系统的格式化操作.html',
                        audio: ''
                    },
                    {
                        id: 'e1osmc1zd4f',
                        title: '34 | 仓库管理：如何实现文件的六大基本操作？',
                        src:
                            '操作系统实战45讲/html/__399700__34 _ 仓库管理：如何实现文件的六大基本操作？.html',
                        audio: ''
                    },
                    {
                        id: 'c16jgpbdb0w',
                        title: '35 | 瞧一瞧Linux：虚拟文件系统如何管理文件？',
                        src:
                            '操作系统实战45讲/html/__400424__35 _ 瞧一瞧Linux：虚拟文件系统如何管理文件？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'z3kuinnihv2',
                title: '通信部：网络',
                subList: [
                    {
                        id: '3g1qfvwz3mq',
                        title: '36 | 从URL到网卡：如何全局观察网络数据流动？',
                        src:
                            '操作系统实战45讲/html/__401467__36 _ 从URL到网卡：如何全局观察网络数据流动？.html',
                        audio: ''
                    },
                    {
                        id: '8j3p2705gj5',
                        title: '37 | 从内核到应用：网络数据在内核中如何流转',
                        src:
                            '操作系统实战45讲/html/__402840__37 _ 从内核到应用：网络数据在内核中如何流转.html',
                        audio: ''
                    },
                    {
                        id: 'cb519h0k1gy',
                        title: '38 | 从单排到团战：详解操作系统的宏观网络架构',
                        src:
                            '操作系统实战45讲/html/__404013__38 _ 从单排到团战：详解操作系统的宏观网络架构.html',
                        audio: ''
                    },
                    {
                        id: '93eg678znvj',
                        title: '39 | 瞧一瞧Linux：详解socket实现与网络编程接口',
                        src:
                            '操作系统实战45讲/html/__404724__39 _ 瞧一瞧Linux：详解socket实现与网络编程接口.html',
                        audio: ''
                    },
                    {
                        id: 'fpitfksnbyo',
                        title: '40 | 瞧一瞧Linux：详解socket的接口实现',
                        src:
                            '操作系统实战45讲/html/__405781__40 _ 瞧一瞧Linux：详解socket的接口实现.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'fcqx7ywon8x',
                title: '服务交接：接口',
                subList: [
                    {
                        id: 'i07s3z3mqmh',
                        title: '41 | 服务接口：如何搭建沟通桥梁？',
                        src:
                            '操作系统实战45讲/html/__406633__41 _ 服务接口：如何搭建沟通桥梁？.html',
                        audio: ''
                    },
                    {
                        id: 'oqdsbh4u27d',
                        title: '42 | 瞧一瞧Linux：如何实现系统API？',
                        src:
                            '操作系统实战45讲/html/__407343__42 _ 瞧一瞧Linux：如何实现系统API？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '77fk7jgo76u',
                title: '番外篇：虚化的世界',
                subList: [
                    {
                        id: '5nnn42c1i0n',
                        title: '43 | 虚拟机内核：KVM是什么？',
                        src:
                            '操作系统实战45讲/html/__408124__43 _ 虚拟机内核：KVM是什么？.html',
                        audio: ''
                    },
                    {
                        id: 'mrehm3tqdr2',
                        title: '44 | 容器：如何理解容器的实现机制？',
                        src:
                            '操作系统实战45讲/html/__408927__44 _ 容器：如何理解容器的实现机制？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'euvj921q9w3',
                title: '特别放送',
                subList: [
                    {
                        id: 'fjtmlmj3pko',
                        title: '用户故事 | 成为面向“知识库”的工程师',
                        src:
                            '操作系统实战45讲/html/__396020__用户故事 _ 成为面向“知识库”的工程师.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    //趣谈网络协议
    {
        title: '趣谈网络协议',
        id: 'r5pnzf6jb5j',
        type: 'cs',
        cid: '100007101',
        subTitle: '像小说一样的网络协议入门课',
        authorName: '刘超',
        authorInfo: '网易研究院云计算技术部首席架构师',
        contents: [
            {
                id: 'bmtj8fhmxxj',
                title: '第一模块通信协议综述',
                subList: [
                    {
                        id: 'qcxr0dh88sm',
                        title: '第1讲-为什么要学习网络协议？',
                        src:
                            './趣谈网络协议/html/第1讲-为什么要学习网络协议？.html'
                    },
                    {
                        id: '3ip6t92mcxd',
                        title: '第2讲-网络分层的真实含义是什么？',
                        src:
                            './趣谈网络协议/html/第2讲-网络分层的真实含义是什么？.html'
                    },
                    {
                        id: 'elu7t2prdqg',
                        title: '第3讲-ifconfig：最熟悉又陌生的命令行',
                        src:
                            './趣谈网络协议/html/第3讲-ifconfig：最熟悉又陌生的命令行.html'
                    },
                    {
                        id: '89set0yzk4c',
                        title: '第4讲-DHCP与PXE：IP是怎么来的，又是怎么没的？',
                        src:
                            './趣谈网络协议/html/第4讲-DHCP与PXE：IP是怎么来的，又是怎么没的？.html'
                    }
                ]
            },
            {
                id: 'gshwbxt1com',
                title: '第二模块底层网络知识详解：从二层到三层',
                subList: [
                    {
                        id: 'ovyj7dzvp77',
                        title:
                            '第5讲-从物理层到MAC层：如何在宿舍里自己组网玩联机游戏？',
                        src:
                            './趣谈网络协议/html/第5讲-从物理层到MAC层：如何在宿舍里自己组网玩联机游戏？.html'
                    },
                    {
                        id: 'ym0753vaq5v',
                        title: '第6讲-交换机与VLAN：办公室太复杂，我要回学校',
                        src:
                            './趣谈网络协议/html/第6讲-交换机与VLAN：办公室太复杂，我要回学校.html'
                    },
                    {
                        id: 'x5ea375mry3',
                        title: '第7讲-ICMP与ping：投石问路的侦察兵',
                        src:
                            './趣谈网络协议/html/第7讲-ICMP与ping：投石问路的侦察兵.html'
                    },
                    {
                        id: 'jl8t3i8u38x',
                        title:
                            '第8讲-世界这么大，我想出网关：欧洲十国游与玄奘西行',
                        src:
                            './趣谈网络协议/html/第8讲-世界这么大，我想出网关：欧洲十国游与玄奘西行.html'
                    },
                    {
                        id: 'jtbglsjqbbu',
                        title: '第9讲-路由协议：西出网关无故人，敢问路在何方',
                        src:
                            './趣谈网络协议/html/第9讲-路由协议：西出网关无故人，敢问路在何方.html'
                    }
                ]
            },
            {
                id: 'eqwtp3sl4ui',
                title: '第二模块底层网络知识详解：最重要的传输层',
                subList: [
                    {
                        id: '0vaciq9pqv1',
                        title: '第10讲-UDP协议：因性善而简单，难免碰到“城会玩”',
                        src:
                            './趣谈网络协议/html/第10讲-UDP协议：因性善而简单，难免碰到“城会玩”.html'
                    },
                    {
                        id: 'kjife5qwp6g',
                        title:
                            '第11讲-TCP协议（上）：因性恶而复杂，先恶后善反轻松',
                        src:
                            './趣谈网络协议/html/第11讲-TCP协议（上）：因性恶而复杂，先恶后善反轻松.html'
                    },
                    {
                        id: '89afutmo6p4',
                        title:
                            '第12讲-TCP协议（下）：西行必定多妖孽，恒心智慧消磨难',
                        src:
                            './趣谈网络协议/html/第12讲-TCP协议（下）：西行必定多妖孽，恒心智慧消磨难.html'
                    },
                    {
                        id: 'w593hmtdc76',
                        title: '第13讲-套接字Socket：Talkischeap,showmethecode',
                        src:
                            './趣谈网络协议/html/第13讲-套接字Socket：Talkischeap,showmethecode.html'
                    }
                ]
            },
            {
                id: 'fg39bgblef5',
                title: '第二模块底层网络知识详解：最常用的应用层',
                subList: [
                    {
                        id: '1njcugmyhav',
                        title: '第14讲-HTTP协议：看个新闻原来这么麻烦',
                        src:
                            './趣谈网络协议/html/第14讲-HTTP协议：看个新闻原来这么麻烦.html'
                    },
                    {
                        id: 'kuujkm6t1cj',
                        title: '第15讲-HTTPS协议：点外卖的过程原来这么复杂',
                        src:
                            './趣谈网络协议/html/第15讲-HTTPS协议：点外卖的过程原来这么复杂.html'
                    },
                    {
                        id: 'wb54x81b43c',
                        title: '第16讲-流媒体协议：如何在直播里看到美女帅哥？',
                        src:
                            './趣谈网络协议/html/第16讲-流媒体协议：如何在直播里看到美女帅哥？.html'
                    },
                    {
                        id: '2w856dn3kqt',
                        title: '第17讲-P2P协议：我下小电影，99%急死你',
                        src: './趣谈网络协议/html/p2p.html'
                    }
                ]
            },
            {
                id: 'kz4n0bz5gv6',
                title: '第二模块底层网络知识详解：陌生的数据中心',
                subList: [
                    {
                        id: 'np6ox0n4ibf',
                        title: '第18讲-DNS协议：网络世界的地址簿',
                        src:
                            './趣谈网络协议/html/第18讲-DNS协议：网络世界的地址簿.html'
                    },
                    {
                        id: 'onynblhdn0b',
                        title: '第19讲-HttpDNS：网络世界的地址簿也会指错路',
                        src:
                            './趣谈网络协议/html/第19讲-HTTPDNS：网络世界的地址簿也会指错路.html'
                    },
                    {
                        id: 'wsuoewqghes',
                        title: '第20讲-CDN：你去小卖部取过快递么？',
                        src:
                            './趣谈网络协议/html/第20讲-CDN：你去小卖部取过快递么？.html'
                    },
                    {
                        id: 'h6swtc3c6rt',
                        title: '第21讲-数据中心：我是开发商，自己拿地盖别墅',
                        src:
                            './趣谈网络协议/html/第21讲-数据中心：我是开发商，自己拿地盖别墅.html'
                    },
                    {
                        id: 'c7sdovuv66j',
                        title: '第22讲-VPN：朝中有人好做官',
                        src:
                            './趣谈网络协议/html/第22讲-VPN：朝中有人好做官.html'
                    },
                    {
                        id: '8ugf4ynitxj',
                        title: '第23讲-移动网络：去巴塞罗那，手机也上不了脸书',
                        src:
                            './趣谈网络协议/html/第23讲-移动网络：去巴塞罗那，手机也上不了脸书.html'
                    }
                ]
            },
            {
                id: 'ebkdsoed8p3',
                title: '第三模块热门技术中的应用：云计算中的网络',
                subList: [
                    {
                        id: '8xkbqozolcc',
                        title:
                            '第24讲-云中网络：自己拿地成本高，购买公寓更灵活',
                        src:
                            './趣谈网络协议/html/第24讲-云中网络：自己拿地成本高，购买公寓更灵活.html'
                    },
                    {
                        id: '5eo0utuxuxl',
                        title:
                            '第25讲-软件定义网络：共享基础设施的小区物业管理办法',
                        src:
                            './趣谈网络协议/html/第25讲-软件定义网络：共享基础设施的小区物业管理办法.html'
                    },
                    {
                        id: '9dbxeows1hr',
                        title:
                            '第26讲-云中的网络安全：虽然不是土豪，也需要基本安全和保障',
                        src:
                            './趣谈网络协议/html/第26讲-云中的网络安全：虽然不是土豪，也需要基本安全和保障.html'
                    },
                    {
                        id: 'lbks2m8kfq9',
                        title:
                            '第27讲-云中的网络QoS：邻居疯狂下电影，我该怎么办？',
                        src:
                            './趣谈网络协议/html/第27讲-云中的网络QoS：邻居疯狂下电影，我该怎么办？.html'
                    },
                    {
                        id: 'hif6m5tpbt2',
                        title:
                            '第28讲-云中网络的隔离GRE、VXLAN：虽然住一个小区，也要保护隐私',
                        src:
                            './趣谈网络协议/html/第28讲-云中网络的隔离GRE、VXLAN：虽然住一个小区，也要保护隐私.html'
                    }
                ]
            },
            {
                id: '78ed3hsgwei',
                title: '第三模块热门技术中的应用：容器技术中的网络',
                subList: [
                    {
                        id: 'n44wrpxzjcb',
                        title:
                            '第29讲-容器网络：来去自由的日子，不买公寓去合租',
                        src:
                            './趣谈网络协议/html/第29讲-容器网络：来去自由的日子，不买公寓去合租.html'
                    },
                    {
                        id: 'beddmje01f6',
                        title: '第30讲-容器网络之Flannel：每人一亩三分地',
                        src:
                            './趣谈网络协议/html/第30讲-容器网络之Flannel：每人一亩三分地.html'
                    },
                    {
                        id: 'p9ej9hfxj9i',
                        title: '第31讲-容器网络之Calico：为高效说出善意的谎言',
                        src:
                            './趣谈网络协议/html/第31讲-容器网络之Calico：为高效说出善意的谎言.html'
                    }
                ]
            },
            {
                id: 'vsdmez9jzbv',
                title: '第三模块热门技术中的应用：微服务相关协议',
                subList: [
                    {
                        id: 'epqjep625h0',
                        title: '第32讲-RPC协议综述：远在天边，近在眼前',
                        src:
                            './趣谈网络协议/html/第32讲-RPC协议综述：远在天边，近在眼前.html'
                    },
                    {
                        id: 'yxdjy4hpwcr',
                        title:
                            '第33讲-基于XML的SOAP协议：不要说NBA，请说美国职业篮球联赛',
                        src:
                            './趣谈网络协议/html/第33讲-基于XML的SOAP协议：不要说NBA，请说美国职业篮球联赛.html'
                    },
                    {
                        id: 'azyq2mcm450',
                        title:
                            '第34讲-基于JSON的RESTful接口协议：我不关心过程，请给我结果',
                        src:
                            './趣谈网络协议/html/第34讲-基于JSON的RESTful接口协议：我不关心过程，请给我结果.html'
                    },
                    {
                        id: 'jd6nkq32hbp',
                        title:
                            '第35讲-二进制类RPC协议：还是叫NBA吧，总说全称多费劲',
                        src:
                            './趣谈网络协议/html/第35讲-二进制类RPC协议：还是叫NBA吧，总说全称多费劲.html'
                    },
                    {
                        id: 'bwb9sern9ps',
                        title:
                            '第36讲-跨语言类RPC协议：交流之前，双方先来个专业术语表',
                        src:
                            './趣谈网络协议/html/第36讲-跨语言类RPC协议：交流之前，双方先来个专业术语表.html'
                    }
                ]
            },
            {
                id: 't2rr4utg2r8',
                title: '第四模块网络协议知识串讲',
                subList: [
                    {
                        id: 'k061e6hs8sm',
                        title:
                            '第37讲-知识串讲：用双十一的故事串起碎片的网络协议（上）',
                        src:
                            './趣谈网络协议/html/第37讲-知识串讲：用双十一的故事串起碎片的网络协议（上）.html'
                    },
                    {
                        id: 'g6v3l289mnv',
                        title:
                            '第38讲-知识串讲：用双十一的故事串起碎片的网络协议（中）',
                        src:
                            './趣谈网络协议/html/第38讲-知识串讲：用双十一的故事串起碎片的网络协议（中）.html'
                    },
                    {
                        id: '1vc65y8gxj2',
                        title:
                            '第39讲-知识串讲：用双十一的故事串起碎片的网络协议（下）',
                        src:
                            './趣谈网络协议/html/第39讲-知识串讲：用双十一的故事串起碎片的网络协议（下）.html'
                    },
                    {
                        id: 'gnhvg7iqt8g',
                        title:
                            '第40讲-搭建一个网络实验环境：授人以鱼不如授人以渔',
                        src:
                            './趣谈网络协议/html/第40讲-搭建一个网络实验环境：授人以鱼不如授人以渔.html'
                    }
                ]
            },
            {
                id: 'i9d3rvtsd8p',
                title: '答疑与加餐',
                subList: [
                    {
                        id: '7j9slwn99mv',
                        title: '协议专栏特别福利-答疑解惑第一期',
                        src: ''
                    },
                    {
                        id: 'mabdt37dgb6',
                        title: '协议专栏特别福利-答疑解惑第二期',
                        src: ''
                    },
                    {
                        id: 'yoky2hlxjox',
                        title: '协议专栏特别福利-答疑解惑第三期',
                        src: ''
                    },
                    {
                        id: 'lghjtn52vs3',
                        title: '协议专栏特别福利-答疑解惑第四期',
                        src: ''
                    },
                    {
                        id: 'rxb7ejgz2q4',
                        title: '协议专栏特别福利-答疑解惑第五期',
                        src: ''
                    },
                    {
                        id: 'd25lg5mn7yz',
                        title: '加餐1-测一测：这些网络协议你都掌握了吗？',
                        src: ''
                    },
                    {
                        id: 'k01xzcqt4l0',
                        title:
                            '加餐2-创作故事：我是如何创作“趣谈网络协议”专栏的？',
                        src: ''
                    },
                    {
                        id: 'u7nn8w6fg1v',
                        title: '加餐3-“趣谈网络协议”专栏食用指南',
                        src: ''
                    },
                    {
                        id: 'naik3afrqzq',
                        title: '第2季回归-这次我们来“趣谈Linux操作系统”',
                        src: ''
                    }
                ]
            },
            {
                id: '32q2jr237s4',
                title: '结束语',
                subList: [
                    {
                        id: 'btes9wpl13w',
                        title:
                            '结束语-放弃完美主义，执行力就是限时限量认真完成',
                        src: ''
                    }
                ]
            }
        ]
    },
    //透视HTTP协议
    {
        title: '透视HTTP协议',
        id: 'mxprfcgr030',
        type: 'cs',
        cid: '100029001',
        subTitle: '深入理解HTTP协议本质与应用',
        authorName: '罗剑锋（Chrono）',
        authorInfo: '奇虎360技术专家，Nginx/OpenResty开源项目贡献者',
        contents: [
            {
                id: 'pig49ddwg0u',
                title: '开篇词',
                subList: [
                    {
                        id: 'cndvu2wd5h9',
                        title: '开篇词｜To Be a HTTP Hero',
                        src: './透视HTTP协议/html/开篇词ToBeaHTTPHero.html'
                    }
                ]
            },
            {
                id: 'xf6i6awjbpj',
                title: '破冰篇',
                subList: [
                    {
                        id: 'ftsi2xsicgq',
                        title: '01 | 时势与英雄：HTTP的前世今生',
                        src:
                            './透视HTTP协议/html/01时势与英雄HTTP的前世今生.html'
                    },
                    {
                        id: 'tmqvd3zd44p',
                        title: '02 | HTTP是什么？HTTP又不是什么？',
                        src:
                            './透视HTTP协议/html/02HTTP是什么HTTP又不是什么.html'
                    },
                    {
                        id: 'ahwq95u7x3p',
                        title: '03 | HTTP世界全览（上）：与HTTP相关的各种概念',
                        src:
                            './透视HTTP协议/html/03HTTP世界全览上与HTTP相关的各种概念.html'
                    },
                    {
                        id: 'qz7ic0lxfgk',
                        title: '04 | HTTP世界全览（下）：与HTTP相关的各种协议',
                        src:
                            './透视HTTP协议/html/04HTTP世界全览下与HTTP相关的各种协议.html'
                    },
                    {
                        id: '6wbj6m5ih89',
                        title:
                            '05 | 常说的“四层”和“七层”到底是什么？“五层”“六层”哪去了？',
                        src:
                            './透视HTTP协议/html/05常说的四层和七层到底是什么五层六层哪去了.html'
                    },
                    {
                        id: 'eaymrox43no',
                        title: '06 | 域名里有哪些门道？',
                        src: './透视HTTP协议/html/06域名里有哪些门道.html'
                    },
                    {
                        id: '6mu6rxpwpoc',
                        title: '07 | 自己动手，搭建HTTP实验环境',
                        src:
                            './透视HTTP协议/html/07自己动手搭建HTTP实验环境.html'
                    }
                ]
            },
            {
                id: 'bor6o0y5i26',
                title: '基础篇',
                subList: [
                    {
                        id: 'kvaawhgbba0',
                        title: '08 | 键入网址再按下回车，后面究竟发生了什么？',
                        src:
                            './透视HTTP协议/html/08键入网址再按下回车后面究竟发生了什么.html'
                    },
                    {
                        id: '0v1afj2udrq',
                        title: '09 | HTTP报文是什么样子的？',
                        src: './透视HTTP协议/html/09HTTP报文是什么样子的.html'
                    },
                    {
                        id: 'wf1lld6lf9u',
                        title: '10 | 应该如何理解请求方法？',
                        src: './透视HTTP协议/html/10应该如何理解请求方法.html'
                    },
                    {
                        id: 'zi2k634ynhz',
                        title: '11 | 你能写出正确的网址吗？',
                        src: './透视HTTP协议/html/11你能写出正确的网址吗.html'
                    },
                    {
                        id: '69w1a134ulz',
                        title: '12 | 响应状态码该怎么用？',
                        src: './透视HTTP协议/html/12响应状态码该怎么用.html'
                    },
                    {
                        id: '4vwl5l41afs',
                        title: '13 | HTTP有哪些特点？',
                        src: './透视HTTP协议/html/13HTTP有哪些特点.html'
                    },
                    {
                        id: '39pd6rii0zr',
                        title: '14 | HTTP有哪些优点？又有哪些缺点？',
                        src:
                            './透视HTTP协议/html/14HTTP有哪些优点又有哪些缺点.html'
                    }
                ]
            },
            {
                id: 'fb9bb7e3678',
                title: '进阶篇',
                subList: [
                    {
                        id: '5lzme9g1841',
                        title: '15 | 海纳百川：HTTP的实体数据',
                        src: './透视HTTP协议/html/15海纳百川HTTP的实体数据.html'
                    },
                    {
                        id: 'tr4nyceyx2z',
                        title: '16 | 把大象装进冰箱：HTTP传输大文件的方法',
                        src:
                            './透视HTTP协议/html/16把大象装进冰箱HTTP传输大文件的方法.html'
                    },
                    {
                        id: 'j4ad2ikr2ao',
                        title: '17 | 排队也要讲效率：HTTP的连接管理',
                        src:
                            './透视HTTP协议/html/17排队也要讲效率HTTP的连接管理.html'
                    },
                    {
                        id: 'ru0jffp4mrt',
                        title: '18 | 四通八达：HTTP的重定向和跳转',
                        src:
                            './透视HTTP协议/html/18四通八达HTTP的重定向和跳转.html'
                    },
                    {
                        id: 'adrtb5266ez',
                        title: '19 | 让我知道你是谁：HTTP的Cookie机制',
                        src:
                            './透视HTTP协议/html/19让我知道你是谁HTTP的Cookie机制.html'
                    },
                    {
                        id: 'jzpqgnelm4m',
                        title: '20 | 生鲜速递：HTTP的缓存控制',
                        src: './透视HTTP协议/html/20生鲜速递HTTP的缓存控制.html'
                    },
                    {
                        id: 't1q9rn410q7',
                        title: '21 | 良心中间商：HTTP的代理服务',
                        src:
                            './透视HTTP协议/html/21良心中间商HTTP的代理服务.html'
                    },
                    {
                        id: 'w2kvc573k01',
                        title: '22 | 冷链周转：HTTP的缓存代理',
                        src: './透视HTTP协议/html/22冷链周转HTTP的缓存代理.html'
                    }
                ]
            },
            {
                id: '7s2wqn57pru',
                title: '安全篇',
                subList: [
                    {
                        id: '1g4fo3e5slv',
                        title: '23 | HTTPS是什么？SSL/TLS又是什么？',
                        src:
                            './透视HTTP协议/html/23HTTPS是什么SSLTLS又是什么.html'
                    },
                    {
                        id: 'blfp4zvlqz4',
                        title:
                            '24 | 固若金汤的根本（上）：对称加密与非对称加密',
                        src:
                            './透视HTTP协议/html/24固若金汤的根本上对称加密与非对称加密.html'
                    },
                    {
                        id: 'mcd4xmjs0ne',
                        title: '25 | 固若金汤的根本（下）：数字签名与证书',
                        src:
                            './透视HTTP协议/html/25固若金汤的根本下数字签名与证书.html'
                    },
                    {
                        id: 'e3qhfqgjkkr',
                        title: '26 | 信任始于握手：TLS1.2连接过程解析',
                        src:
                            './透视HTTP协议/html/26信任始于握手TLS1.2连接过程解析.html'
                    },
                    {
                        id: '3yvb2iwpd14',
                        title: '27 | 更好更快的握手：TLS1.3特性解析',
                        src:
                            './透视HTTP协议/html/27更好更快的握手TLS1.3特性解析.html'
                    },
                    {
                        id: 'juddhigmtrl',
                        title: '28 | 连接太慢该怎么办：HTTPS的优化',
                        src:
                            './透视HTTP协议/html/28连接太慢该怎么办HTTPS的优化.html'
                    },
                    {
                        id: 'b6xho3btsxu',
                        title: '29 | 我应该迁移到HTTPS吗？',
                        src: './透视HTTP协议/html/29我应该迁移到HTTPS吗.html'
                    }
                ]
            },
            {
                id: 'vs2q8fxvlui',
                title: '飞翔篇',
                subList: [
                    {
                        id: 'ttu3z2e59xj',
                        title: '30 | 时代之风（上）：HTTP/2特性概览',
                        src:
                            './透视HTTP协议/html/30时代之风上HTTP2特性概览.html'
                    },
                    {
                        id: 'mtnbbm39cuo',
                        title: '31 | 时代之风（下）：HTTP/2内核剖析',
                        src:
                            './透视HTTP协议/html/31时代之风下HTTP2内核剖析.html'
                    },
                    {
                        id: 'c96j1ihsgap',
                        title: '32 | 未来之路：HTTP/3展望',
                        src: './透视HTTP协议/html/32未来之路HTTP3展望.html'
                    },
                    {
                        id: '5t6rzgq4cky',
                        title: '33 | 我应该迁移到HTTP/2吗？',
                        src: './透视HTTP协议/html/33我应该迁移到HTTP2吗.html'
                    }
                ]
            },
            {
                id: '99fuwo533oe',
                title: '探索篇',
                subList: [
                    {
                        id: 'q5uvbe0abh6',
                        title: '34 | Nginx：高性能的Web服务器',
                        src: './透视HTTP协议/html/34Nginx高性能的Web服务器.html'
                    },
                    {
                        id: 'qfs94zigawq',
                        title: '35 | OpenResty：更灵活的Web服务器',
                        src:
                            './透视HTTP协议/html/35OpenResty更灵活的Web服务器.html'
                    },
                    {
                        id: 'xarfeihmjto',
                        title: '36 | WAF：保护我们的网络服务',
                        src: './透视HTTP协议/html/36WAF保护我们的网络服务.html'
                    },
                    {
                        id: 'gwdny8w4znw',
                        title: '37 | CDN：加速我们的网络服务',
                        src: './透视HTTP协议/html/37CDN加速我们的网络服务.html'
                    },
                    {
                        id: 'ir3kw07tmln',
                        title: '38 | WebSocket：沙盒里的TCP',
                        src: './透视HTTP协议/html/38WebSocket沙盒里的TCP.html'
                    }
                ]
            },
            {
                id: '2fwiszvo6ex',
                title: '总结篇',
                subList: [
                    {
                        id: 'hh2ho0mlwgn',
                        title: '39 | HTTP性能优化面面观（上）',
                        src: './透视HTTP协议/html/39HTTP性能优化面面观上.html'
                    },
                    {
                        id: '5w92ybgf5nn',
                        title: '40 | HTTP性能优化面面观（下）',
                        src: './透视HTTP协议/html/40HTTP性能优化面面观下.html'
                    }
                ]
            },
            {
                id: 'oqefne7dw6e',
                title: '答疑篇',
                subList: [
                    {
                        id: 'ohz74zqwd7i',
                        title: '41 | Linux/Mac实验环境搭建与URI查询参数',
                        src: ''
                    },
                    {
                        id: 'hscutx43pml',
                        title: '42 | DHE/ECDHE算法的原理',
                        src: ''
                    }
                ]
            },
            {
                id: 'uh073j17v7u',
                title: '结束语',
                subList: [
                    {
                        id: 'yr7f983s7su',
                        title: '结束语 | 做兴趣使然的Hero',
                        src: './透视HTTP协议/html/结束语做兴趣使然的Hero.html'
                    },
                    {
                        id: 'yd72ezgomum',
                        title: '结课测试 | 这些HTTP协议知识，你真的掌握了吗？',
                        src: ''
                    }
                ]
            }
        ]
    },
    //程序员的数学基础课
    {
        title: '程序员的数学基础课',
        id: 'ermqorb2wfz',
        type: 'cs',
        cid: '100021201',
        subTitle: '在实战中重新理解数学',
        authorName: '黄申',
        authorInfo: 'LinkedIn资深数据科学家',
        contents: [
            {
                id: 'f0arctjs9lk',
                title: '开篇词',
                subList: [
                    {
                        id: 'btd7rced95l',
                        title: '开篇词作为程序员，为什么你应该学好数学',
                        src:
                            './程序员的数学基础课/html/开篇词作为程序员，为什么你应该学好数学？.html'
                    }
                ]
            },
            {
                id: '0r1v07v2lkl',
                title: '导读',
                subList: [
                    {
                        id: '4njrda2xlga',
                        title: '导读：程序员应该怎么学数学',
                        src:
                            './程序员的数学基础课/html/导读：程序员应该怎么学数学？.html'
                    }
                ]
            },
            {
                id: '4zbhawdlchr',
                title: '基础思想篇',
                subList: [
                    {
                        id: 'vzyktzcddai',
                        title: '01二进制：不了解计算机的源头，你学什么编程',
                        src:
                            './程序员的数学基础课/html/01二进制：不了解计算机的源头，你学什么编程.html'
                    },
                    {
                        id: 'emar9w7md7h',
                        title: '02余数：原来取余操作本身就是个哈希函数',
                        src:
                            './程序员的数学基础课/html/02余数：原来取余操作本身就是个哈希函数.html'
                    },
                    {
                        id: '1r40hhj48x6',
                        title:
                            '03迭代法：不用编程语言的自带函数，你会如何计算平方根',
                        src:
                            './程序员的数学基础课/html/03迭代法：不用编程语言的自带函数，你会如何计算平方根？.html'
                    },
                    {
                        id: '8gp64eumim2',
                        title: '04数学归纳法：如何用数学归纳提升代码的运行效率',
                        src:
                            './程序员的数学基础课/html/04数学归纳法：如何用数学归纳提升代码的运行效率？.html'
                    },
                    {
                        id: '3rppi57b4gh',
                        title:
                            '05递归（上）：泛化数学归纳，如何将复杂问题简单化',
                        src:
                            './程序员的数学基础课/html/05递归（上）：泛化数学归纳，如何将复杂问题简单化？.html'
                    },
                    {
                        id: '3jx994axhyz',
                        title: '06递归（下）：分而治之，从归并排序到MapReduce',
                        src:
                            './程序员的数学基础课/html/06递归（下）：分而治之，从归并排序到MapReduce.html'
                    },
                    {
                        id: 'gy29g3ry8wn',
                        title: '07排列：如何让计算机学会“田忌赛马”',
                        src:
                            './程序员的数学基础课/html/07排列：如何让计算机学会“田忌赛马”？.html'
                    },
                    {
                        id: 'o397ydum0yk',
                        title: '08组合：如何让计算机安排世界杯的赛程',
                        src:
                            './程序员的数学基础课/html/08组合：如何让计算机安排世界杯的赛程？.html'
                    },
                    {
                        id: 'qw0k112bmuw',
                        title:
                            '09动态规划（上）：如何实现基于编辑距离的查询推荐',
                        src:
                            './程序员的数学基础课/html/09动态规划（上）：如何实现基于编辑距离的查询推荐？.html'
                    },
                    {
                        id: 'od2fjabstw6',
                        title:
                            '10动态规划（下）：如何求得状态转移方程并进行编程实现',
                        src:
                            './程序员的数学基础课/html/10动态规划（下）：如何求得状态转移方程并进行编程实现？.html'
                    },
                    {
                        id: 'hkp8p20ljz1',
                        title:
                            '11树的深度优先搜索（上）：如何才能高效率地查字典',
                        src:
                            './程序员的数学基础课/html/11树的深度优先搜索（上）：如何才能高效率地查字典？.html'
                    },
                    {
                        id: 'twq7optfi02',
                        title:
                            '12树的深度优先搜索（下）：如何才能高效率地查字典',
                        src:
                            './程序员的数学基础课/html/12树的深度优先搜索（下）：如何才能高效率地查字典？.html'
                    },
                    {
                        id: 'wvnnlts2fmf',
                        title:
                            '13树的广度优先搜索（上）：人际关系的六度理论是真的吗',
                        src:
                            './程序员的数学基础课/html/13树的广度优先搜索（上）：人际关系的六度理论是真的吗？.html'
                    },
                    {
                        id: 'k8jl69ap8r0',
                        title:
                            '14树的广度优先搜索（下）：为什么双向广度优先搜索的效率更高',
                        src:
                            './程序员的数学基础课/html/14树的广度优先搜索（下）：为什么双向广度优先搜索的效率更高.html'
                    },
                    {
                        id: '2hypvuf0lsg',
                        title: '15从树到图：如何让计算机学会看地图',
                        src:
                            './程序员的数学基础课/html/15从树到图：如何让计算机学会看地图？.html'
                    },
                    {
                        id: '0g0yu1nib8n',
                        title:
                            '16时间和空间复杂度（上）：优化性能是否只是“纸上谈兵”',
                        src:
                            './程序员的数学基础课/html/16时间和空间复杂度（上）：优化性能是否只是“纸上谈兵”？.html'
                    },
                    {
                        id: 'ck4vog9ee41',
                        title:
                            '17时间和空间复杂度（下）：如何使用六个法则进行复杂度分析',
                        src:
                            './程序员的数学基础课/html/17时间和空间复杂度（下）：如何使用六个法则进行复杂度分析？.html'
                    },
                    {
                        id: 'c4nsek0ory5',
                        title:
                            '18总结课：数据结构、编程语句和基础算法体现了哪些数学思想',
                        src:
                            './程序员的数学基础课/html/18总结课：数据结构、编程语句和基础算法体现了哪些数学思想？.html'
                    }
                ]
            },
            {
                id: 'euakzgdi0d0',
                title: '概率统计篇',
                subList: [
                    {
                        id: 'oqoz9cg91ov',
                        title: '19概率和统计：编程为什么需要概率和统计',
                        src:
                            './程序员的数学基础课/html/19概率和统计：编程为什么需要概率和统计？.html'
                    },
                    {
                        id: '0ozoop3pcex',
                        title:
                            '20概率基础（上）：一篇文章帮你理解随机变量、概率分布和期望值',
                        src:
                            './程序员的数学基础课/html/20概率基础（上）：一篇文章帮你理解随机变量、概率分布和期望值.html'
                    },
                    {
                        id: 'c1e560mct3p',
                        title:
                            '21概率基础（下）：联合概率、条件概率和贝叶斯法则，这些概率公式究竟能做什么',
                        src:
                            './程序员的数学基础课/html/21概率基础（下）：联合概率、条件概率和贝叶斯法则，这些概率公式究竟能做什么？.html'
                    },
                    {
                        id: '4hn71surhfn',
                        title: '22朴素贝叶斯：如何让计算机学会自动分类',
                        src:
                            './程序员的数学基础课/html/22朴素贝叶斯：如何让计算机学会自动分类？.html'
                    },
                    {
                        id: '3jst7e5tu2j',
                        title: '23文本分类：如何区分特定类型的新闻',
                        src:
                            './程序员的数学基础课/html/23文本分类：如何区分特定类型的新闻？.html'
                    },
                    {
                        id: 'b2el3l4qdza',
                        title:
                            '24语言模型：如何使用链式法则和马尔科夫假设简化概率模型',
                        src:
                            './程序员的数学基础课/html/24语言模型：如何使用链式法则和马尔科夫假设简化概率模型？.html'
                    },
                    {
                        id: 't9u77lrb9ig',
                        title:
                            '25马尔科夫模型：从PageRank到语音识别，背后是什么模型在支撑',
                        src:
                            './程序员的数学基础课/html/25马尔科夫模型：从PageRank到语音识别，背后是什么模型在支撑？.html'
                    },
                    {
                        id: 'p5t5ygg6r81',
                        title:
                            '26信息熵：如何通过几个问题，测出你对应的武侠人物',
                        src:
                            './程序员的数学基础课/html/26信息熵：如何通过几个问题，测出你对应的武侠人物？.html'
                    },
                    {
                        id: 'gw3pd43bq71',
                        title: '27决策树：信息增益、增益比率和基尼指数的运用',
                        src:
                            './程序员的数学基础课/html/27决策树：信息增益、增益比率和基尼指数的运用.html'
                    },
                    {
                        id: 'iwh98lagt0k',
                        title: '28熵、信息增益和卡方：如何寻找关键特征',
                        src:
                            './程序员的数学基础课/html/28熵、信息增益和卡方：如何寻找关键特征？.html'
                    },
                    {
                        id: 'p84dq6gj642',
                        title: '29归一化和标准化：各种特征如何综合才是最合理的',
                        src:
                            './程序员的数学基础课/html/29归一化和标准化：各种特征如何综合才是最合理的？.html'
                    },
                    {
                        id: '9b5aojrk2fv',
                        title:
                            '30统计意义（上）：如何通过显著性检验，判断你的A/B测试结果是不是巧合',
                        src: ''
                    },
                    {
                        id: 'jyttighkxkr',
                        title:
                            '31统计意义（下）：如何通过显著性检验，判断你的A/B测试结果是不是巧合',
                        src: ''
                    },
                    {
                        id: '8m1cftkkwm9',
                        title:
                            '32概率统计篇答疑和总结：为什么会有欠拟合和过拟合',
                        src:
                            './程序员的数学基础课/html/32概率统计篇答疑和总结：为什么会有欠拟合和过拟合？.html'
                    }
                ]
            },
            {
                id: 'tlf8yx110wb',
                title: '线性代数篇',
                subList: [
                    {
                        id: 'iwiadixqke4',
                        title: '33线性代数：线性代数到底都讲了些什么',
                        src:
                            './程序员的数学基础课/html/33线性代数：线性代数到底都讲了些什么？.html'
                    },
                    {
                        id: '96ux917mxoz',
                        title:
                            '34向量空间模型：如何让计算机理解现实事物之间的关系',
                        src:
                            './程序员的数学基础课/html/34向量空间模型：如何让计算机理解现实事物之间的关系？.html'
                    },
                    {
                        id: 'qh455zlf19k',
                        title: '35文本检索：如何让计算机处理自然语言',
                        src:
                            './程序员的数学基础课/html/35文本检索：如何让计算机处理自然语言？(2019-03-06.html'
                    },
                    {
                        id: '6el4axvhrog',
                        title: '36文本聚类：如何过滤冗余的新闻',
                        src:
                            './程序员的数学基础课/html/36文本聚类：如何过滤冗余的新闻？.html'
                    },
                    {
                        id: 'ecj8yom1x0d',
                        title: '37矩阵（上）：如何使用矩阵操作进行PageRank计算',
                        src:
                            './程序员的数学基础课/html/37矩阵（上）：如何使用矩阵操作进行PageRank计算？.html'
                    },
                    {
                        id: 'ybgk7axk06u',
                        title: '38矩阵（下）：如何使用矩阵操作进行协同过滤推荐',
                        src:
                            './程序员的数学基础课/html/38矩阵（下）：如何使用矩阵操作进行协同过滤推荐？.html'
                    },
                    {
                        id: '58dx9bp1ylu',
                        title:
                            '39线性回归（上）：如何使用高斯消元求解线性方程组',
                        src:
                            './程序员的数学基础课/html/39线性回归（上）：如何使用高斯消元求解线性方程组？.html'
                    },
                    {
                        id: '4rg0fjufzfj',
                        title:
                            '40线性回归（中）：如何使用最小二乘法进行直线拟合',
                        src:
                            './程序员的数学基础课/html/40线性回归（中）：如何使用最小二乘法进行直线拟合？.html'
                    },
                    {
                        id: 'rwduvk7a0xc',
                        title:
                            '41线性回归（下）：如何使用最小二乘法进行效果验证',
                        src:
                            './程序员的数学基础课/html/41线性回归（下）：如何使用最小二乘法进行效果验证？.html'
                    },
                    {
                        id: 'qkzx902uv4s',
                        title:
                            '42PCA主成分分析（上）：如何利用协方差矩阵来降维',
                        src:
                            './程序员的数学基础课/html/42PCA主成分分析（上）：如何利用协方差矩阵来降维？.html'
                    },
                    {
                        id: 'l6sje6zlfyu',
                        title:
                            '43PCA主成分分析（下）：为什么要计算协方差矩阵的特征值和特征向量',
                        src:
                            './程序员的数学基础课/html/43PCA主成分分析（下）：为什么要计算协方差矩阵的特征值和特征向量？.html'
                    },
                    {
                        id: 'rfbxehqvvaf',
                        title: '44奇异值分解：如何挖掘潜在的语义关系',
                        src:
                            './程序员的数学基础课/html/44奇异值分解：如何挖掘潜在的语义关系？.html'
                    },
                    {
                        id: 'xb1hf2tww9u',
                        title:
                            '45线性代数篇答疑和总结：矩阵乘法的几何意义是什么',
                        src:
                            './程序员的数学基础课/html/45线性代数篇答疑和总结：矩阵乘法的几何意义是什么？.html'
                    }
                ]
            },
            {
                id: 'fgwvd392n2t',
                title: '综合应用篇',
                subList: [
                    {
                        id: '2xbun0cra7s',
                        title: '46缓存系统：如何通过哈希表和队列实现高效访问',
                        src:
                            './程序员的数学基础课/html/46缓存系统：如何通过哈希表和队列实现高效访问？.html'
                    },
                    {
                        id: '8fmaei0hdlk',
                        title:
                            '47搜索引擎（上）：如何通过倒排索引和向量空间模型，打造一个简单的搜索引擎',
                        src:
                            './程序员的数学基础课/html/47搜索引擎（上）：如何通过倒排索引和向量空间模型，打造一个简单的搜索引擎？.html'
                    },
                    {
                        id: '6102csg9sda',
                        title:
                            '48搜索引擎（下）：如何通过查询的分类，让电商平台的搜索结果更相关',
                        src:
                            './程序员的数学基础课/html/48搜索引擎（下）：如何通过查询的分类，让电商平台的搜索结果更相关？.html'
                    },
                    {
                        id: '99ci8yukyh5',
                        title: '49推荐系统（上）：如何实现基于相似度的协同过滤',
                        src:
                            './程序员的数学基础课/html/49推荐系统（上）：如何实现基于相似度的协同过滤？.html'
                    },
                    {
                        id: 'nphjs5wli7f',
                        title:
                            '50推荐系统（下）：如何通过SVD分析用户和物品的矩阵',
                        src:
                            './程序员的数学基础课/html/50推荐系统（下）：如何通过SVD分析用户和物品的矩阵？.html'
                    },
                    {
                        id: 'ntjcmpk7q70',
                        title:
                            '51综合应用篇答疑和总结：如何进行个性化用户画像的设计',
                        src:
                            './程序员的数学基础课/html/51综合应用篇答疑和总结：如何进行个性化用户画像的设计？.html'
                    }
                ]
            },
            {
                id: 'nzb2rjlp23u',
                title: '加餐',
                subList: [
                    {
                        id: '2xd8erm6htp',
                        title: '数学专栏课外加餐（一）我们为什么需要反码和补码',
                        src:
                            './程序员的数学基础课/html/数学专栏课外加餐（一）我们为什么需要反码和补码？.html'
                    },
                    {
                        id: 'f3x5qw4nmvt',
                        title: '数学专栏课外加餐（二）位操作的三个应用实例',
                        src:
                            './程序员的数学基础课/html/数学专栏课外加餐（二）位操作的三个应用实例.html'
                    },
                    {
                        id: 'sxvsvnte5q8',
                        title: '数学专栏课外加餐（三）：程序员需要读哪些数学书',
                        src:
                            './程序员的数学基础课/html/数学专栏课外加餐（三）：程序员需要读哪些数学书？.html'
                    }
                ]
            },
            {
                id: '54m4v1nnm2x',
                title: '结束语',
                subList: [
                    {
                        id: 't2wobw4jfu9',
                        title: '结束语从数学到编程，本身就是一个很长的链条',
                        src:
                            './程序员的数学基础课/html/结束语从数学到编程，本身就是一个很长的链条.html'
                    },
                    {
                        id: '04a3kj27zf0',
                        title: '结课测试这些数学知识你都掌握了吗',
                        src: ''
                    }
                ]
            }
        ]
    },
    //重学线性代数
    {
        id: '7wruzyq4m8q',
        type: 'cs',
        cid: '327',
        title: '重学线性代数',
        subTitle: '掌握工程应用中的线代知识',
        authorName: '朱维刚',
        authorInfo: '前阿里云资深技术专家，日世集团数字化事业部总经理',
        contents: [
            {
                id: 'vzq2nznoj00',
                title: '开篇词',
                subList: [
                    {
                        id: 'hhbvlwqeluq',
                        title: '开篇词 | 从今天起，学会线性代数',
                        src:
                            '重学线性代数/html/__265230__开篇词 _ 从今天起，学会线性代数.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'zv37xrugizb',
                title: '基础篇',
                subList: [
                    {
                        id: 'wsk1miifds0',
                        title: '01 | 导读：如何在机器学习中运用线性代数工具？',
                        src:
                            '重学线性代数/html/__265757__01 _ 导读：如何在机器学习中运用线性代数工具？.html',
                        audio: ''
                    },
                    {
                        id: 'n0phm1uzqqt',
                        title: '02 | 基本概念：线性代数研究的到底是什么问题？',
                        src:
                            '重学线性代数/html/__265296__02 _ 基本概念：线性代数研究的到底是什么问题？.html',
                        audio: ''
                    },
                    {
                        id: 't3ogvn7g1b5',
                        title:
                            '03 | 矩阵：为什么说矩阵是线性方程组的另一种表达？',
                        src:
                            '重学线性代数/html/__268296__03 _ 矩阵：为什么说矩阵是线性方程组的另一种表达？.html',
                        audio: ''
                    },
                    {
                        id: '71x08eiqjyc',
                        title:
                            '04 | 解线性方程组：为什么用矩阵求解的效率这么高？',
                        src:
                            '重学线性代数/html/__269448__04 _ 解线性方程组：为什么用矩阵求解的效率这么高？.html',
                        audio: ''
                    },
                    {
                        id: 'ymqq2gkpuis',
                        title:
                            '05 | 线性空间：如何通过向量的结构化空间在机器学习中做降维处理？',
                        src:
                            '重学线性代数/html/__270329__05 _ 线性空间：如何通过向量的结构化空间在机器学习中做降维处理？.html',
                        audio: ''
                    },
                    {
                        id: 'l66sepkrl8v',
                        title:
                            '06 | 线性无关：如何理解向量在N维空间的几何意义？',
                        src:
                            '重学线性代数/html/__270884__06 _ 线性无关：如何理解向量在N维空间的几何意义？.html',
                        audio: ''
                    },
                    {
                        id: 'm6jvo57vo6l',
                        title:
                            '07 | 基和秩：为什么说它表达了向量空间中“有用”的向量个数？',
                        src:
                            '重学线性代数/html/__271943__07 _ 基和秩：为什么说它表达了向量空间中“有用”的向量个数？.html',
                        audio: ''
                    },
                    {
                        id: 'vj4xkkn53sh',
                        title:
                            '08 | 线性映射：如何从坐标系角度理解两个向量空间之间的函数？',
                        src:
                            '重学线性代数/html/__272815__08 _ 线性映射：如何从坐标系角度理解两个向量空间之间的函数？.html',
                        audio: ''
                    },
                    {
                        id: '3s3cx50j821',
                        title:
                            '09 | 仿射空间：如何在图形的平移操作中大显身手？',
                        src:
                            '重学线性代数/html/__274222__09 _ 仿射空间：如何在图形的平移操作中大显身手？.html',
                        audio: ''
                    },
                    {
                        id: 's4rz91oedb3',
                        title:
                            '10 | 解析几何：为什么说它是向量从抽象到具象的表达？',
                        src:
                            '重学线性代数/html/__274958__10 _ 解析几何：为什么说它是向量从抽象到具象的表达？.html',
                        audio: ''
                    },
                    {
                        id: 'evwi5wauh6i',
                        title: '基础通关 | 线性代数5道典型例题及解析',
                        src:
                            '重学线性代数/html/__275700__基础通关 _ 线性代数5道典型例题及解析.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '0s6kdervcvi',
                title: '应用篇',
                subList: [
                    {
                        id: 'rjd1xn4oj5k',
                        title: '11 | 如何运用线性代数方法解决图论问题？',
                        src:
                            '重学线性代数/html/__276274__11 _ 如何运用线性代数方法解决图论问题？.html',
                        audio: ''
                    },
                    {
                        id: 'm7ohyb4hsrq',
                        title:
                            '12 | 如何通过矩阵转换让3D图形显示到二维屏幕上？',
                        src:
                            '重学线性代数/html/__277606__12 _ 如何通过矩阵转换让3D图形显示到二维屏幕上？.html',
                        audio: ''
                    },
                    {
                        id: 'd2qn7rnaqfj',
                        title:
                            '13 | 如何通过有限向量空间加持的希尔密码，提高密码被破译的难度？',
                        src:
                            '重学线性代数/html/__278373__13 _ 如何通过有限向量空间加持的希尔密码，提高密码被破译的难度？.html',
                        audio: ''
                    },
                    {
                        id: 'akfwq4msjc5',
                        title:
                            '14 | 如何在深度学习中运用数值代数的迭代法做训练？',
                        src:
                            '重学线性代数/html/__279476__14 _ 如何在深度学习中运用数值代数的迭代法做训练？.html',
                        audio: ''
                    },
                    {
                        id: 'td3muab32ma',
                        title: '15 | 如何从计算机的角度来理解线性代数？',
                        src:
                            '重学线性代数/html/__280657__15 _ 如何从计算机的角度来理解线性代数？.html',
                        audio: ''
                    },
                    {
                        id: 'kzdjepo8ho9',
                        title: '强化通关 | 线性代数水平测试20题',
                        src:
                            '重学线性代数/html/__281200__强化通关 _ 线性代数水平测试20题.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '23xwzubrkq8',
                title: '结束语',
                subList: [
                    {
                        id: 'hwitagrf8bg',
                        title: '结束语 | 和数学打交道这么多年，我的三点感悟',
                        src:
                            '重学线性代数/html/__281646__结束语 _ 和数学打交道这么多年，我的三点感悟.html',
                        audio: ''
                    }
                ]
            }
        ]
    },

    //编译原理之美
    {
        title: '编译原理之美',
        id: 'whis7d21y7r',
        type: 'cs',
        cid: '100034101',
        subTitle: '手把手教你实现一个编译器',
        authorName: '宫文学',
        authorInfo: '北京物演科技CEO',
        divided: true,
        contents: [
            {
                id: 't2lqg21gdt3',
                title: '开篇词',
                subList: [
                    {
                        id: 'fen94n4wxdg',
                        title: '开篇词-为什么你要学习编译原理？',
                        src:
                            './编译原理之美/html/开篇词-为什么你要学习编译原理？.html'
                    }
                ]
            },
            {
                id: 'r05efu7xwyg',
                title: '实现一门脚本语言·原理篇',
                subList: [
                    {
                        id: 'mosr9aon3cu',
                        title: '01-理解代码：编译器的前端技术',
                        src:
                            './编译原理之美/html/01-理解代码：编译器的前端技术.html'
                    },
                    {
                        id: 'yyql8uhwjdv',
                        title: '02-正则文法和有限自动机：纯手工打造词法分析器',
                        src:
                            './编译原理之美/html/02-正则文法和有限自动机：纯手工打造词法分析器.html'
                    },
                    {
                        id: '62lshm4ra3c',
                        title: '03-语法分析（一）：纯手工打造公式计算器',
                        src:
                            './编译原理之美/html/03-语法分析（一）：纯手工打造公式计算器.html'
                    },
                    {
                        id: 'dk5ljsfan1y',
                        title: '04-语法分析（二）：解决二元表达式中的难点',
                        src:
                            './编译原理之美/html/04-语法分析（二）：解决二元表达式中的难点.html'
                    },
                    {
                        id: '2yp81yoo61f',
                        title: '05-语法分析（三）：实现一门简单的脚本语言',
                        src:
                            './编译原理之美/html/05-语法分析（三）：实现一门简单的脚本语言.html'
                    },
                    {
                        id: 'ozyrnxwjsx0',
                        title:
                            '06-编译器前端工具（一）：用Antlr生成词法、语法分析器',
                        src:
                            './编译原理之美/html/06-编译器前端工具（一）：用Antlr生成词法、语法分析器.html'
                    },
                    {
                        id: '0dwzvn6nmah',
                        title: '07-编译器前端工具（二）：用Antlr重构脚本语言',
                        src:
                            './编译原理之美/html/07-编译器前端工具（二）：用Antlr重构脚本语言.html'
                    },
                    {
                        id: '9tpxtyw60yw',
                        title: '08-作用域和生存期：实现块作用域和函数',
                        src:
                            './编译原理之美/html/08-作用域和生存期：实现块作用域和函数.html'
                    },
                    {
                        id: 'ef0i102kyhl',
                        title: '09-面向对象：实现数据和方法的封装',
                        src:
                            './编译原理之美/html/09-面向对象：实现数据和方法的封装.html'
                    },
                    {
                        id: '4bd1ehnrh0z',
                        title: '10-闭包：理解了原理，它就不反直觉了',
                        src:
                            './编译原理之美/html/10-闭包：理解了原理，它就不反直觉了.html'
                    },
                    {
                        id: 'cgpyfwpyold',
                        title:
                            '11-语义分析（上）：如何建立一个完善的类型系统？',
                        src:
                            './编译原理之美/html/11-语义分析（上）：如何建立一个完善的类型系统？.html'
                    },
                    {
                        id: 'oxz43zl0o7n',
                        title:
                            '12-语义分析（下）：如何做上下文相关情况的处理？',
                        src:
                            './编译原理之美/html/12-语义分析（下）：如何做上下文相关情况的处理？.html'
                    },
                    {
                        id: 'mwy9dlqd9y4',
                        title: '13-继承和多态：面向对象运行期的动态特性',
                        src:
                            './编译原理之美/html/13-继承和多态：面向对象运行期的动态特性.html'
                    }
                ]
            },
            {
                id: 'rtztyca07j4',
                title: '实现一门脚本语言·应用篇',
                subList: [
                    {
                        id: 'hizc7mapive',
                        title:
                            '14-前端技术应用（一）：如何透明地支持数据库分库分表？',
                        src:
                            './编译原理之美/html/14-前端技术应用（一）：如何透明地支持数据库分库分表？.html'
                    },
                    {
                        id: 'k6v9tqnalsq',
                        title: '15-前端技术应用（二）：如何设计一个报表工具？',
                        src:
                            './编译原理之美/html/15-前端技术应用（二）：如何设计一个报表工具？.html'
                    }
                ]
            },
            {
                id: 'cpsg5ebdta7',
                title: '实现一门脚本语言·算法篇',
                subList: [
                    {
                        id: 'bsjdym368ca',
                        title: '16-NFA和DFA：如何自己实现一个正则表达式工具？',
                        src:
                            './编译原理之美/html/16-NFA和DFA：如何自己实现一个正则表达式工具？.html'
                    },
                    {
                        id: 'fjtd1xsgeoj',
                        title: '17-First和Follow集合：用LL算法推演一个实例',
                        src:
                            './编译原理之美/html/17-First和Follow集合：用LL算法推演一个实例.html'
                    },
                    {
                        id: 'oe6wuqtrus2',
                        title: '18-移进和规约：用LR算法推演一个实例',
                        src:
                            './编译原理之美/html/18-移进和规约：用LR算法推演一个实例.html'
                    }
                ]
            },
            {
                id: 'szhlmhdz7av',
                title: '实现一门脚本语言·热点答疑与用户故事',
                subList: [
                    {
                        id: 'v2jqvs79lgi',
                        title:
                            '19-案例总结与热点问题答疑：对于左递归的语法，为什么我的推导不是左递归的？',
                        src:
                            './编译原理之美/html/19-案例总结与热点问题答疑：对于左递归的语法，为什么我的推导不是左递归的？.html'
                    },
                    {
                        id: 'dp2uxermj7i',
                        title: '用户故事-因为热爱，所以坚持',
                        src:
                            './编译原理之美/html/用户故事-因为热爱，所以坚持.html'
                    }
                ]
            },
            {
                id: '15nsby9j4pt',
                title: '编译原理·期中考试周',
                subList: [
                    {
                        id: 'mymx0bti7d4',
                        title: '期中考试-来赴一场100分的约定吧！',
                        src:
                            './编译原理之美/html/期中考试-来赴一场100分的约定吧！.html'
                    }
                ]
            },
            {
                id: '4dnjc0xujxu',
                title: '实现一门编译型语言·原理篇',
                subList: [
                    {
                        id: 'ad6v1cr3ln4',
                        title: '20-高效运行：编译器的后端技术',
                        src:
                            './编译原理之美/html/20-高效运行：编译器的后端技术.html'
                    },
                    {
                        id: 'gv89es2ehkg',
                        title:
                            '21-运行时机制：突破现象看本质，透过语法看运行时',
                        src:
                            './编译原理之美/html/21-运行时机制：突破现象看本质，透过语法看运行时.html'
                    },
                    {
                        id: 'dxlu0xiv447',
                        title: '22-生成汇编代码（一）：汇编语言其实不难学',
                        src:
                            './编译原理之美/html/22-生成汇编代码（一）：汇编语言其实不难学.html'
                    },
                    {
                        id: 'izpix3gsn4y',
                        title: '加餐-汇编代码编程与栈帧管理',
                        src:
                            './编译原理之美/html/加餐-汇编代码编程与栈帧管理.html'
                    },
                    {
                        id: 'z66ixh21lw9',
                        title: '23-生成汇编代码（二）：把脚本编译成可执行文件',
                        src:
                            './编译原理之美/html/23-生成汇编代码（二）：把脚本编译成可执行文件.html'
                    },
                    {
                        id: 'q0jwt4a9igo',
                        title: '24-中间代码：兼容不同的语言和硬件',
                        src:
                            './编译原理之美/html/24-中间代码：兼容不同的语言和硬件.html'
                    },
                    {
                        id: 'pu6gyn9s8o2',
                        title: '25-后端技术的重用：LLVM不仅仅让你高效',
                        src:
                            './编译原理之美/html/25-后端技术的重用：LLVM不仅仅让你高效.html'
                    },
                    {
                        id: 'nui9r5iouic',
                        title: '26-生成IR：实现静态编译的语言',
                        src:
                            './编译原理之美/html/26-生成IR：实现静态编译的语言.html'
                    },
                    {
                        id: 'irel5xmuf2i',
                        title: '27-代码优化：为什么你的代码比他的更高效？',
                        src:
                            './编译原理之美/html/27-代码优化：为什么你的代码比他的更高效？.html'
                    },
                    {
                        id: 'rjeip37a91v',
                        title: '28-数据流分析：你写的程序，它更懂',
                        src:
                            './编译原理之美/html/28-数据流分析：你写的程序，它更懂.html'
                    },
                    {
                        id: 'm38avsbu7aq',
                        title:
                            '29-目标代码的生成和优化（一）：如何适应各种硬件架构？',
                        src:
                            './编译原理之美/html/29-目标代码的生成和优化（一）：如何适应各种硬件架构？.html'
                    },
                    {
                        id: 'ptr63wme0mf',
                        title:
                            '30-目标代码的生成和优化（二）：如何适应各种硬件架构？',
                        src:
                            './编译原理之美/html/30-目标代码的生成和优化（二）：如何适应各种硬件架构？.html'
                    }
                ]
            },
            {
                id: '9aopiqp2378',
                title: '实现一门编译型语言·应用篇',
                subList: [
                    {
                        id: 'nxcnqcvm9h6',
                        title:
                            '31-内存计算：对海量数据做计算，到底可以有多快？',
                        src:
                            './编译原理之美/html/31-内存计算：对海量数据做计算，到底可以有多快？.html'
                    },
                    {
                        id: 'd07uh0sjtiq',
                        title: '32-字节码生成：为什么Spring技术很强大？',
                        src:
                            './编译原理之美/html/32-字节码生成：为什么Spring技术很强大？.html'
                    }
                ]
            },
            {
                id: '6auy91mnf0l',
                title: '实现一门编译型语言·扩展篇',
                subList: [
                    {
                        id: 'h4jvqs97an5',
                        title: '33-垃圾收集：能否不停下整个世界？',
                        src:
                            './编译原理之美/html/33-垃圾收集：能否不停下整个世界？.html'
                    },
                    {
                        id: 'ih92oo56lgs',
                        title: '34-运行时优化：即时编译的原理和作用',
                        src:
                            './编译原理之美/html/34-运行时优化：即时编译的原理和作用.html'
                    },
                    {
                        id: 'pmj5mqm0acl',
                        title:
                            '35-案例总结与热点问题答疑：后端部分真的比前端部分难吗？',
                        src:
                            './编译原理之美/html/35-案例总结与热点问题答疑：后端部分真的比前端部分难吗？.html'
                    }
                ]
            },
            {
                id: 'qmn1iisqdlx',
                title: '面向未来的编程语言',
                subList: [
                    {
                        id: 'plm6jw7nz05',
                        title: '36-当前技术的发展趋势以及其对编译技术的影响',
                        src:
                            './编译原理之美/html/36-当前技术的发展趋势以及其对编译技术的影响.html'
                    },
                    {
                        id: 'qc3f421qmsr',
                        title: '37-云编程：云计算会如何改变编程模式？',
                        src:
                            './编译原理之美/html/37-云编程：云计算会如何改变编程模式？.html'
                    },
                    {
                        id: 'nvuxd9eisjb',
                        title: '38-元编程：一边写程序，一边写语言',
                        src:
                            './编译原理之美/html/38-元编程：一边写程序，一边写语言.html'
                    }
                ]
            },
            {
                id: 'k3n9rokwzdx',
                title: '结束语',
                subList: [
                    {
                        id: 'z3327sz3q2e',
                        title: '结束语-用程序语言，推动这个世界的演化',
                        src: ''
                    }
                ]
            }
        ]
    },
    //编译原理实战课
    {
        id: '70o67t2312u',
        type: 'cs',
        cid: '314',
        title: '编译原理实战课',
        subTitle: '带你吃透编译技术核心概念与算法',
        authorName: '宫文学',
        authorInfo: '北京原点代码CEO',
        contents: [
            {
                id: '93ua3ojhx40',
                title: '课前必读',
                subList: [
                    {
                        id: 'w1wp3bwnr27',
                        title: '开篇词 | 在真实世界的编译器中游历',
                        src:
                            '编译原理实战课/html/__242308__开篇词 _ 在真实世界的编译器中游历.html',
                        audio: ''
                    },
                    {
                        id: 't3e2mwxgadf',
                        title: '学习指南 | 如何学习这门编译原理实战课？',
                        src:
                            '编译原理实战课/html/__242577__学习指南 _ 如何学习这门编译原理实战课？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'bt76f0l3yl4',
                title: '预备知识篇',
                subList: [
                    {
                        id: '8p649v8bq7m',
                        title: '01 | 编译的全过程都悄悄做了哪些事情？',
                        src:
                            '编译原理实战课/html/__242479__01 _ 编译的全过程都悄悄做了哪些事情？.html',
                        audio: ''
                    },
                    {
                        id: 'iksuu5xcf4u',
                        title: '02 | 词法分析：用两种方式构造有限自动机',
                        src:
                            '编译原理实战课/html/__243685__02 _ 词法分析：用两种方式构造有限自动机.html',
                        audio: ''
                    },
                    {
                        id: 'wu2raf2ec3h',
                        title: '03 | 语法分析：两个基本功和两种算法思路',
                        src:
                            '编译原理实战课/html/__244906__03 _ 语法分析：两个基本功和两种算法思路.html',
                        audio: ''
                    },
                    {
                        id: 'jfwz9x7onk6',
                        title: '04 | 语义分析：让程序符合语义规则',
                        src:
                            '编译原理实战课/html/__245754__04 _ 语义分析：让程序符合语义规则.html',
                        audio: ''
                    },
                    {
                        id: 'ome6kcegr8c',
                        title: '05 | 运行时机制：程序如何运行，你有发言权',
                        src:
                            '编译原理实战课/html/__246281__05 _ 运行时机制：程序如何运行，你有发言权.html',
                        audio: ''
                    },
                    {
                        id: '6nz1abd4wmx',
                        title: '06 | 中间代码：不是只有一副面孔',
                        src:
                            '编译原理实战课/html/__247700__06 _ 中间代码：不是只有一副面孔.html',
                        audio: ''
                    },
                    {
                        id: 'ny9v9n7izt3',
                        title:
                            '07 | 代码优化：跟编译器做朋友，让你的代码飞起来',
                        src:
                            '编译原理实战课/html/__248770__07 _ 代码优化：跟编译器做朋友，让你的代码飞起来.html',
                        audio: ''
                    },
                    {
                        id: 'dycco3uotew',
                        title: '08 | 代码生成：如何实现机器相关的优化？',
                        src:
                            '编译原理实战课/html/__249261__08 _ 代码生成：如何实现机器相关的优化？.html',
                        audio: ''
                    },
                    {
                        id: 'x71k65hrjcs',
                        title: '知识地图 | 一起来复习编译技术核心概念与算法',
                        src:
                            '编译原理实战课/html/__250604__知识地图 _ 一起来复习编译技术核心概念与算法.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'j9pk9k5xb12',
                title: '真实编译器解析篇',
                subList: [
                    {
                        id: 'lzrqbui3pnt',
                        title:
                            '09 | Java编译器（一）：手写的编译器有什么优势？',
                        src:
                            '编译原理实战课/html/__251937__09 _ Java编译器（一）：手写的编译器有什么优势？.html',
                        audio: ''
                    },
                    {
                        id: '9tfyuokgapq',
                        title:
                            '10 | Java编译器（二）：语法分析之后，还要做些什么？',
                        src:
                            '编译原理实战课/html/__252828__10 _ Java编译器（二）：语法分析之后，还要做些什么？.html',
                        audio: ''
                    },
                    {
                        id: 'rmec3z2lyfw',
                        title: '11 | Java编译器（三）：属性分析和数据流分析',
                        src:
                            '编译原理实战课/html/__253750__11 _ Java编译器（三）：属性分析和数据流分析.html',
                        audio: ''
                    },
                    {
                        id: 'll7zdpv6dso',
                        title: '12 | Java编译器（四）：去除语法糖和生成字节码',
                        src:
                            '编译原理实战课/html/__255034__12 _ Java编译器（四）：去除语法糖和生成字节码.html',
                        audio: ''
                    },
                    {
                        id: 'fcifggzedeg',
                        title: '13 | Java JIT编译器（一）：动手修改Graal编译器',
                        src:
                            '编译原理实战课/html/__255730__13 _ Java JIT编译器（一）：动手修改Graal编译器.html',
                        audio: ''
                    },
                    {
                        id: 'rqdcktkqh07',
                        title:
                            '14 | Java JIT编译器（二）：Sea of Nodes为何如此强大？',
                        src:
                            '编译原理实战课/html/__256914__14 _ Java JIT编译器（二）：Sea of Nodes为何如此强大？.html',
                        audio: ''
                    },
                    {
                        id: 'qswu0gc697w',
                        title:
                            '15 | Java JIT编译器（三）：探究内联和逃逸分析的算法原理',
                        src:
                            '编译原理实战课/html/__257504__15 _ Java JIT编译器（三）：探究内联和逃逸分析的算法原理.html',
                        audio: ''
                    },
                    {
                        id: 'aql8jjxhar8',
                        title:
                            '16 | Java JIT编译器（四）：Graal的后端是如何工作的？',
                        src:
                            '编译原理实战课/html/__258162__16 _ Java JIT编译器（四）：Graal的后端是如何工作的？.html',
                        audio: ''
                    },
                    {
                        id: 'ts9j5ebbk2i',
                        title:
                            '17 | Python编译器（一）：如何用工具生成编译器？',
                        src:
                            '编译原理实战课/html/__259465__17 _ Python编译器（一）：如何用工具生成编译器？.html',
                        audio: ''
                    },
                    {
                        id: '4lpeeb1noka',
                        title: '18 | Python编译器（二）：从AST到字节码',
                        src:
                            '编译原理实战课/html/__260354__18 _ Python编译器（二）：从AST到字节码.html',
                        audio: ''
                    },
                    {
                        id: 'oxxi5n4rc4k',
                        title: '19 | Python编译器（三）：运行时机制',
                        src:
                            '编译原理实战课/html/__261063__19 _ Python编译器（三）：运行时机制.html',
                        audio: ''
                    },
                    {
                        id: 'qcmqjxbu25w',
                        title:
                            '20 | JavaScript编译器（一）：V8的解析和编译过程',
                        src:
                            '编译原理实战课/html/__262041__20 _ JavaScript编译器（一）：V8的解析和编译过程.html',
                        audio: ''
                    },
                    {
                        id: 'uoyh5tybi56',
                        title:
                            '21 | JavaScript编译器（二）：V8的解释器和优化编译器',
                        src:
                            '编译原理实战课/html/__263523__21 _ JavaScript编译器（二）：V8的解释器和优化编译器.html',
                        audio: ''
                    },
                    {
                        id: '855eo9mwtn6',
                        title:
                            '22 | Julia编译器（一）：如何让动态语言性能很高？',
                        src:
                            '编译原理实战课/html/__264333__22 _ Julia编译器（一）：如何让动态语言性能很高？.html',
                        audio: ''
                    },
                    {
                        id: 'keyzpkbaraq',
                        title:
                            '23 | Julia编译器（二）：如何利用LLVM的优化和后端功能？',
                        src:
                            '编译原理实战课/html/__264643__23 _ Julia编译器（二）：如何利用LLVM的优化和后端功能？.html',
                        audio: ''
                    },
                    {
                        id: 'eq4ql1gproc',
                        title: '24 | Go语言编译器：把它当作教科书吧',
                        src:
                            '编译原理实战课/html/__266379__24 _ Go语言编译器：把它当作教科书吧.html',
                        audio: ''
                    },
                    {
                        id: 'fg8asuu0u7h',
                        title:
                            '25 | MySQL编译器（一）：解析一条SQL语句的执行过程',
                        src:
                            '编译原理实战课/html/__266790__25 _ MySQL编译器（一）：解析一条SQL语句的执行过程.html',
                        audio: ''
                    },
                    {
                        id: '9ra09y8o64c',
                        title:
                            '26 | MySQL编译器（二）：编译技术如何帮你提升数据库性能？',
                        src:
                            '编译原理实战课/html/__267917__26 _ MySQL编译器（二）：编译技术如何帮你提升数据库性能？.html',
                        audio: ''
                    },
                    {
                        id: 'u3aqj377p12',
                        title: '热点问题答疑 | 如何吃透7种真实的编译器？',
                        src:
                            '编译原理实战课/html/__268852__热点问题答疑 _ 如何吃透7种真实的编译器？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'idwla10eei6',
                title: '期中复习周',
                subList: [
                    {
                        id: '7j47ae1xrlp',
                        title: '划重点 | 7种编译器的核心概念与算法',
                        src:
                            '编译原理实战课/html/__270368__划重点 _ 7种编译器的核心概念与算法.html',
                        audio: ''
                    },
                    {
                        id: 'cupzeburs4r',
                        title: '期中考试 | 这些编译原理知识，你都掌握了吗？',
                        src:
                            '编译原理实战课/html/__270456__期中考试 _ 这些编译原理知识，你都掌握了吗？.html',
                        audio: ''
                    },
                    {
                        id: 'pga655anwi0',
                        title:
                            '用户故事 | 易昊：程序员不止有Bug和加班，还有诗和远方',
                        src:
                            '编译原理实战课/html/__270504__用户故事 _ 易昊：程序员不止有Bug和加班，还有诗和远方.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'rwihfr8i579',
                title: '现代语言设计篇',
                subList: [
                    {
                        id: '3g7hjr2n4qn',
                        title: '27 | 课前导读：学习现代语言设计的正确姿势',
                        src:
                            '编译原理实战课/html/__273094__27 _ 课前导读：学习现代语言设计的正确姿势.html',
                        audio: ''
                    },
                    {
                        id: '5tif11p88d4',
                        title: '28 | 前端总结：语言设计也有人机工程学',
                        src:
                            '编译原理实战课/html/__273418__28 _ 前端总结：语言设计也有人机工程学.html',
                        audio: ''
                    },
                    {
                        id: '2naw4lcgzxg',
                        title: '29 | 中端总结：不遗余力地进行代码优化',
                        src:
                            '编译原理实战课/html/__273433__29 _ 中端总结：不遗余力地进行代码优化.html',
                        audio: ''
                    },
                    {
                        id: 'x6lqglpvrgf',
                        title: '30 | 后端总结：充分发挥硬件的能力',
                        src:
                            '编译原理实战课/html/__274909__30 _ 后端总结：充分发挥硬件的能力.html',
                        audio: ''
                    },
                    {
                        id: '2kuj4ws8ljo',
                        title: '31 | 运行时（一）：从0到语言级的虚拟化',
                        src:
                            '编译原理实战课/html/__275601__31 _ 运行时（一）：从0到语言级的虚拟化.html',
                        audio: ''
                    },
                    {
                        id: 'o9fqvkno3a2',
                        title:
                            '32 | 运行时（二）：垃圾收集与语言的特性有关吗？',
                        src:
                            '编译原理实战课/html/__277707__32 _ 运行时（二）：垃圾收集与语言的特性有关吗？.html',
                        audio: ''
                    },
                    {
                        id: '5mry6jactnt',
                        title:
                            '33 | 并发中的编译技术（一）：如何从语言层面支持线程？',
                        src:
                            '编译原理实战课/html/__279019__33 _ 并发中的编译技术（一）：如何从语言层面支持线程？.html',
                        audio: ''
                    },
                    {
                        id: 'gx4cxpoq7q4',
                        title:
                            '34 | 并发中的编译技术（二）：如何从语言层面支持协程？',
                        src:
                            '编译原理实战课/html/__280269__34 _ 并发中的编译技术（二）：如何从语言层面支持协程？.html',
                        audio: ''
                    },
                    {
                        id: 't20wacxcgye',
                        title:
                            '35 | 并发中的编译技术（三）：Erlang语言厉害在哪里？',
                        src:
                            '编译原理实战课/html/__280663__35 _ 并发中的编译技术（三）：Erlang语言厉害在哪里？.html',
                        audio: ''
                    },
                    {
                        id: 'lj59wj89qc8',
                        title: '36 | 高级特性（一）：揭秘元编程的实现机制',
                        src:
                            '编译原理实战课/html/__282919__36 _ 高级特性（一）：揭秘元编程的实现机制.html',
                        audio: ''
                    },
                    {
                        id: 'z00o1dqeqxm',
                        title: '37 | 高级特性（二）：揭秘泛型编程的实现机制',
                        src:
                            '编译原理实战课/html/__283229__37 _ 高级特性（二）：揭秘泛型编程的实现机制.html',
                        audio: ''
                    },
                    {
                        id: '4vnaqrhhmva',
                        title: '38 | 综合实现（一）：如何实现面向对象编程？',
                        src:
                            '编译原理实战课/html/__284443__38 _ 综合实现（一）：如何实现面向对象编程？.html',
                        audio: ''
                    },
                    {
                        id: '6s92xefb2dk',
                        title: '39 | 综合实现（二）：如何实现函数式编程？',
                        src:
                            '编译原理实战课/html/__285636__39 _ 综合实现（二）：如何实现函数式编程？.html',
                        audio: ''
                    },
                    {
                        id: 'lsl869u1m3f',
                        title: '40 | 成果检验：方舟编译器的优势在哪里？',
                        src:
                            '编译原理实战课/html/__286097__40 _ 成果检验：方舟编译器的优势在哪里？.html',
                        audio: ''
                    },
                    {
                        id: 'lrc6zb1hdxa',
                        title: '期末答疑与总结 | 再次审视学习编译原理的作用',
                        src:
                            '编译原理实战课/html/__286931__期末答疑与总结 _ 再次审视学习编译原理的作用.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'ot0eaf9lb57',
                title: '结束语',
                subList: [
                    {
                        id: '342m14vox4s',
                        title: '结束语 | 实战是唯一标准！',
                        src:
                            '编译原理实战课/html/__289262__结束语 _ 实战是唯一标准！.html',
                        audio: ''
                    },
                    {
                        id: 'o4ut1b79n9k',
                        title:
                            '期末考试 | “编译原理实战课”100分试卷等你来挑战！',
                        src:
                            '编译原理实战课/html/__289675__期末考试 _ “编译原理实战课”100分试卷等你来挑战！.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'qbcsfzo1qio',
                title: '不定期加餐',
                subList: [
                    {
                        id: 'd0rdtavu9ce',
                        title:
                            '不定期加餐1 | 远程办公，需要你我具备什么样的素质？',
                        src:
                            '编译原理实战课/html/__251164__不定期加餐1 _ 远程办公，需要你我具备什么样的素质？.html',
                        audio: ''
                    },
                    {
                        id: 'wzt4e14n341',
                        title:
                            '不定期加餐2 | 学习技术的过程，其实是训练心理素质的过程',
                        src:
                            '编译原理实战课/html/__269322__不定期加餐2 _ 学习技术的过程，其实是训练心理素质的过程.html',
                        audio: ''
                    },
                    {
                        id: 'kao3w2em0cx',
                        title: '不定期加餐3 | 这几年，打动我的两本好书',
                        src:
                            '编译原理实战课/html/__281269__不定期加餐3 _ 这几年，打动我的两本好书.html',
                        audio: ''
                    },
                    {
                        id: 'esipd4vp0w3',
                        title:
                            '不定期加餐4 | 从身边的牛人身上，我学到的一些优秀品质',
                        src:
                            '编译原理实战课/html/__288798__不定期加餐4 _ 从身边的牛人身上，我学到的一些优秀品质.html',
                        audio: ''
                    },
                    {
                        id: '1dzqvvk56xd',
                        title:
                            '不定期加餐5 | 借助实例，探究C++编译器的内部机制',
                        src:
                            '编译原理实战课/html/__309549__不定期加餐5 _ 借助实例，探究C++编译器的内部机制.html',
                        audio: ''
                    }
                ]
            }
        ]
    },

    //软件工程之美
    {
        id: 'bgnr51757dh',
        type: 'cs',
        cid: '100023701',
        title: '软件工程之美',
        subTitle: '重新理解软件工程',
        authorName: '宝玉',
        authorInfo: 'Groupon资深工程师，微软最有价值专家',
        contents: [
            {
                id: 'lwamfygwyto',
                title: '课前必读',
                subList: [
                    {
                        id: '05zy21140b8',
                        title: '开篇词 | 你为什么应该学好软件工程？',
                        src:
                            './软件工程之美/html/00开篇词你为什么应该学好软件工程.html',
                        audio:
                            './软件工程之美/audio/00开篇词你为什么应该学好软件工程.mp3'
                    },
                    {
                        id: 'im8o77lpyn0',
                        title:
                            '特别放送 | 从软件工程的角度解读任正非的新年公开信',
                        src:
                            './软件工程之美/html/特别放送从软件工程的角度解读任正非的新年公开信.html',
                        audio:
                            './软件工程之美/audio/特别放送从软件工程的角度解读任正非的新年公开信.mp3'
                    },
                    {
                        id: 'zijzs17erfk',
                        title: '学习攻略 | 怎样学好软件工程？',
                        src:
                            './软件工程之美/html/学习攻略怎样学好软件工程.html',
                        audio:
                            './软件工程之美/audio/学习攻略怎样学好软件工程.mp3'
                    }
                ]
            },
            {
                id: 'pmz8q4bo2tg',
                title: '基础理论',
                subList: [
                    {
                        id: '71hii914zej',
                        title: '01 | 到底应该怎样理解软件工程？',
                        src:
                            './软件工程之美/html/01到底应该怎样理解软件工程.html',
                        audio:
                            './软件工程之美/audio/01到底应该怎样理解软件工程.mp3'
                    },
                    {
                        id: 'tazerh10l0q',
                        title: '02 | 工程思维：把每件事都当作一个项目来推进',
                        src:
                            './软件工程之美/html/02工程思维把每件事都当作一个项目来推进.html',
                        audio:
                            './软件工程之美/audio/02工程思维把每件事都当作一个项目来推进.mp3'
                    },
                    {
                        id: '6s04ofqo3ef',
                        title:
                            '03 | 瀑布模型：像工厂流水线一样把软件开发分层化',
                        src:
                            './软件工程之美/html/03瀑布模型像工厂流水线一样把软件开发分层化.html',
                        audio:
                            './软件工程之美/audio/03瀑布模型像工厂流水线一样把软件开发分层化.mp3'
                    },
                    {
                        id: 'rcspmj679kk',
                        title: '04 | 瀑布模型之外，还有哪些开发模型？',
                        src:
                            './软件工程之美/html/04瀑布模型之外还有哪些开发模型.html',
                        audio:
                            './软件工程之美/audio/04瀑布模型之外还有哪些开发模型.mp3'
                    },
                    {
                        id: 'bw2tukt66vp',
                        title: '05 | 敏捷开发到底是想解决什么问题？',
                        src:
                            './软件工程之美/html/05敏捷开发到底是想解决什么问题.html',
                        audio:
                            './软件工程之美/audio/05敏捷开发到底是想解决什么问题.mp3'
                    },
                    {
                        id: '1umjtns5wiq',
                        title: '06 | 大厂都在用哪些敏捷方法？（上）',
                        src:
                            './软件工程之美/html/06大厂都在用哪些敏捷方法上.html',
                        audio:
                            './软件工程之美/audio/06大厂都在用哪些敏捷方法上.mp3'
                    },
                    {
                        id: 'nv3t95wwryk',
                        title: '07 | 大厂都在用哪些敏捷方法？（下）',
                        src:
                            './软件工程之美/html/07大厂都在用哪些敏捷方法下.html',
                        audio:
                            './软件工程之美/audio/07大厂都在用哪些敏捷方法下.mp3'
                    },
                    {
                        id: '4q5grjx945y',
                        title: '08 | 怎样平衡软件质量与时间成本范围的关系？',
                        src:
                            './软件工程之美/html/08怎样平衡软件质量与时间成本范围的关系.html',
                        audio:
                            './软件工程之美/audio/08怎样平衡软件质量与时间成本范围的关系.mp3'
                    },
                    {
                        id: 'fe579fcj2iu',
                        title: '“一问一答”第1期 | 30个软件开发常见问题解决策略',
                        src:
                            './软件工程之美/html/一问一答第1期30个软件开发常见问题解决策略.html',
                        audio:
                            './软件工程之美/audio/一问一答第1期30个软件开发常见问题解决策略.mp3'
                    }
                ]
            },
            {
                id: '82l8hann9gy',
                title: '项目规划篇',
                subList: [
                    {
                        id: 'rzkncmz3o6f',
                        title: '09 | 为什么软件工程项目普遍不重视可行性分析？',
                        src:
                            './软件工程之美/html/09为什么软件工程项目普遍不重视可行性分析.html',
                        audio:
                            './软件工程之美/audio/09为什么软件工程项目普遍不重视可行性分析.mp3'
                    },
                    {
                        id: 'shme5hn5o6w',
                        title: '10 | 如果你想技术转管理，先来试试管好一个项目',
                        src:
                            './软件工程之美/html/10如果你想技术转管理先来试试管好一个项目.html',
                        audio:
                            './软件工程之美/audio/10如果你想技术转管理先来试试管好一个项目.mp3'
                    },
                    {
                        id: '5mllt458a9l',
                        title: '11 | 项目计划：代码未动，计划先行',
                        src:
                            './软件工程之美/html/11项目计划代码未动计划先行.html',
                        audio:
                            './软件工程之美/audio/11项目计划代码未动计划先行.mp3'
                    },
                    {
                        id: 'dsdl12x25wq',
                        title:
                            '12 | 流程和规范：红绿灯不是约束，而是用来提高效率',
                        src:
                            './软件工程之美/html/12流程和规范红绿灯不是约束而是用来提高效率.html',
                        audio:
                            './软件工程之美/audio/12流程和规范红绿灯不是约束而是用来提高效率.mp3'
                    },
                    {
                        id: 'n52l80czkdp',
                        title: '13 | 白天开会，加班写代码的节奏怎么破？',
                        src:
                            './软件工程之美/html/13白天开会加班写代码的节奏怎么破.html',
                        audio:
                            './软件工程之美/audio/13白天开会加班写代码的节奏怎么破.mp3'
                    },
                    {
                        id: 'tv2ih6f84pg',
                        title:
                            '14 | 项目管理工具：一切管理问题，都应思考能否通过工具解决',
                        src:
                            './软件工程之美/html/14项目管理工具一切管理问题都应思考能否通过工具解决.html',
                        audio:
                            './软件工程之美/audio/14项目管理工具一切管理问题都应思考能否通过工具解决.mp3'
                    },
                    {
                        id: '341alg8u5p7',
                        title: '15 | 风险管理：不能盲目乐观，凡事都应该有B计划',
                        src:
                            './软件工程之美/html/15风险管理不能盲目乐观凡事都应该有B计划.html',
                        audio:
                            './软件工程之美/audio/15风险管理不能盲目乐观凡事都应该有B计划.mp3'
                    },
                    {
                        id: '1zpdvjloxse',
                        title: '16 | 怎样才能写好项目文档？',
                        src: './软件工程之美/html/16怎样才能写好项目文档.html',
                        audio: './软件工程之美/audio/16怎样才能写好项目文档.mp3'
                    }
                ]
            },
            {
                id: 'vdjbding4g7',
                title: '需求分析篇',
                subList: [
                    {
                        id: 'lnmbdkfqdlt',
                        title: '17 | 需求分析到底要分析什么？怎么分析？',
                        src:
                            './软件工程之美/html/17需求分析到底要分析什么怎么分析.html',
                        audio:
                            './软件工程之美/audio/17需求分析到底要分析什么怎么分析.mp3'
                    },
                    {
                        id: 'mkk59bns6np',
                        title: '18 | 原型设计：如何用最小的代价完成产品特性？',
                        src:
                            './软件工程之美/html/18原型设计如何用最小的代价完成产品特性.html',
                        audio:
                            './软件工程之美/audio/18原型设计如何用最小的代价完成产品特性.mp3'
                    },
                    {
                        id: 'jgnr1usd4gz',
                        title: '19 | 作为程序员，你应该有产品意识',
                        src:
                            './软件工程之美/html/19作为程序员你应该有产品意识.html',
                        audio:
                            './软件工程之美/audio/19作为程序员你应该有产品意识.mp3'
                    },
                    {
                        id: '3dcesto4htz',
                        title: '20 | 如何应对让人头疼的需求变更问题？',
                        src:
                            './软件工程之美/html/20如何应对让人头疼的需求变更问题.html',
                        audio:
                            './软件工程之美/audio/20如何应对让人头疼的需求变更问题.mp3'
                    },
                    {
                        id: 'q6mjykws80e',
                        title: '“一问一答”第2期 | 30个软件开发常见问题解决策略',
                        src:
                            './软件工程之美/html/一问一答第2期30个软件开发常见问题解决策略.html',
                        audio:
                            './软件工程之美/audio/一问一答第2期30个软件开发常见问题解决策略.mp3'
                    }
                ]
            },
            {
                id: 'n97urlujitt',
                title: '系统设计篇',
                subList: [
                    {
                        id: '5c2l1sy1s7q',
                        title: '21 | 架构设计：普通程序员也能实现复杂系统？',
                        src:
                            './软件工程之美/html/21架构设计普通程序员也能实现复杂系统.html',
                        audio:
                            './软件工程之美/audio/21架构设计普通程序员也能实现复杂系统.mp3'
                    },
                    {
                        id: 'iri94jr3ndi',
                        title: '22 | 如何为项目做好技术选型？',
                        src:
                            './软件工程之美/html/22如何为项目做好技术选型.html',
                        audio:
                            './软件工程之美/audio/22如何为项目做好技术选型.mp3'
                    },
                    {
                        id: 'e764es767mq',
                        title: '23 | 架构师：不想当架构师的程序员不是好程序员',
                        src:
                            './软件工程之美/html/23架构师不想当架构师的程序员不是好程序员.html',
                        audio:
                            './软件工程之美/audio/23架构师不想当架构师的程序员不是好程序员.mp3'
                    },
                    {
                        id: 'lb9n76y7hau',
                        title:
                            '24 | 技术债务：是继续修修补补凑合着用，还是推翻重来？',
                        src:
                            './软件工程之美/html/24技术债务是继续修修补补凑合着用还是推翻重来.html',
                        audio:
                            './软件工程之美/audio/24技术债务是继续修修补补凑合着用还是推翻重来.mp3'
                    }
                ]
            },
            {
                id: '1gj9jknl8oy',
                title: '开发编码篇',
                subList: [
                    {
                        id: 'hv63em5ndr5',
                        title: '25 | 有哪些方法可以提高开发效率？',
                        src:
                            './软件工程之美/html/25有哪些方法可以提高开发效率.html',
                        audio:
                            './软件工程之美/audio/25有哪些方法可以提高开发效率.mp3'
                    },
                    {
                        id: 'arai6u5mpjg',
                        title:
                            '26 | 持续交付：如何做到随时发布新版本到生产环境？',
                        src:
                            './软件工程之美/html/26持续交付如何做到随时发布新版本到生产环境.html',
                        audio:
                            './软件工程之美/audio/26持续交付如何做到随时发布新版本到生产环境.mp3'
                    },
                    {
                        id: 'o1wdq1pf4qd',
                        title: '27 | 软件工程师的核心竞争力是什么？（上）',
                        src:
                            './软件工程之美/html/27软件工程师的核心竞争力是什么上.html',
                        audio:
                            './软件工程之美/audio/27软件工程师的核心竞争力是什么上.mp3'
                    },
                    {
                        id: 'c8o94ha50pe',
                        title: '28 | 软件工程师的核心竞争力是什么？（下）',
                        src:
                            './软件工程之美/html/28软件工程师的核心竞争力是什么下.html',
                        audio:
                            './软件工程之美/audio/28软件工程师的核心竞争力是什么下.mp3'
                    },
                    {
                        id: 'z96l43b6ncy',
                        title: '29 | 自动化测试：如何把Bug杀死在摇篮里？',
                        src:
                            './软件工程之美/html/29自动化测试如何把Bug杀死在摇篮里.html',
                        audio:
                            './软件工程之美/audio/29自动化测试如何把Bug杀死在摇篮里.mp3'
                    },
                    {
                        id: 'qbmjij3u4fp',
                        title: '30 | 用好源代码管理工具，让你的协作更高效',
                        src:
                            './软件工程之美/html/30用好源代码管理工具让你的协作更高效.html',
                        audio:
                            './软件工程之美/audio/30用好源代码管理工具让你的协作更高效.mp3'
                    },
                    {
                        id: 'uq86fmy92qr',
                        title: '“一问一答”第3期 | 18个软件开发常见问题解决策略',
                        src:
                            './软件工程之美/html/一问一答第3期18个软件开发常见问题解决策略.html',
                        audio:
                            './软件工程之美/audio/一问一答第3期18个软件开发常见问题解决策略.mp3'
                    }
                ]
            },
            {
                id: 'fsqq7vt5hzm',
                title: '软件测试篇',
                subList: [
                    {
                        id: 'tgyygkxpux3',
                        title: '31 | 软件测试要为产品质量负责吗？',
                        src:
                            './软件工程之美/html/31软件测试要为产品质量负责吗.html',
                        audio:
                            './软件工程之美/audio/31软件测试要为产品质量负责吗.mp3'
                    },
                    {
                        id: 'f6hnw5hyfqf',
                        title: '32 | 软件测试：什么样的公司需要专职测试？',
                        src:
                            './软件工程之美/html/32软件测试什么样的公司需要专职测试.html',
                        audio:
                            './软件工程之美/audio/32软件测试什么样的公司需要专职测试.mp3'
                    },
                    {
                        id: '7hgezbdnqc4',
                        title:
                            '33 | 测试工具：为什么不应该通过QQ/微信/邮件报Bug？',
                        src:
                            './软件工程之美/html/33测试工具为什么不应该通过QQ微信邮件报Bug.html',
                        audio:
                            './软件工程之美/audio/33测试工具为什么不应该通过QQ微信邮件报Bug.mp3'
                    },
                    {
                        id: '6fb9ywvrk7c',
                        title: '34 | 账号密码泄露成灾，应该怎样预防？',
                        src:
                            './软件工程之美/html/34账号密码泄露成灾应该怎样预防.html',
                        audio:
                            './软件工程之美/audio/账号密码泄露成灾应该怎样预防.mp3'
                    }
                ]
            },
            {
                id: 'ks4swp6awao',
                title: '运行维护篇',
                subList: [
                    {
                        id: 'hdvseus8yg5',
                        title: '35 | 版本发布：软件上线只是新的开始',
                        src:
                            './软件工程之美/html/35版本发布软件上线只是新的开始.html',
                        audio:
                            './软件工程之美/audio/35版本发布软件上线只是新的开始.mp3'
                    },
                    {
                        id: '1w710r1185a',
                        title: '36 | DevOps工程师到底要做什么事情？',
                        src:
                            './软件工程之美/html/36DevOps工程师到底要做什么事情.html',
                        audio:
                            './软件工程之美/audio/36DevOps工程师到底要做什么事情.mp3'
                    },
                    {
                        id: 'f199wfkeqbj',
                        title: '37 | 遇到线上故障，你和高手的差距在哪里？',
                        src:
                            './软件工程之美/html/37遇到线上故障你和高手的差距在哪里.html',
                        audio:
                            './软件工程之美/audio/37遇到线上故障你和高手的差距在哪里.mp3'
                    },
                    {
                        id: 'qujau0ioc2k',
                        title:
                            '38 | 日志管理：如何借助工具快速发现和定位产品问题 ？',
                        src:
                            './软件工程之美/html/38日志管理如何借助工具快速发现和定位产品问题.html',
                        audio:
                            './软件工程之美/audio/38日志管理如何借助工具快速发现和定位产品问题.mp3'
                    },
                    {
                        id: '541rouh4orh',
                        title: '39 | 项目总结：做好项目复盘，把经验变成能力',
                        src:
                            './软件工程之美/html/39项目总结做好项目复盘把经验变成能力.html',
                        audio:
                            './软件工程之美/audio/39项目总结做好项目复盘把经验变成能力.mp3'
                    },
                    {
                        id: '7vba8nxx6yj',
                        title: '“一问一答”第4期 | 14个软件开发常见问题解决策略',
                        src:
                            './软件工程之美/html/一问一答第4期14个软件开发常见问题解决策略.html',
                        audio:
                            './软件工程之美/audio/一问一答第4期14个软件开发常见问题解决策略.mp3'
                    }
                ]
            },
            {
                id: '9d9m8lz3mdu',
                title: '经典案例解析篇',
                subList: [
                    {
                        id: 'j1vwzt5jawa',
                        title: '40 | 最佳实践：小团队如何应用软件工程？',
                        src:
                            './软件工程之美/html/40最佳实践小团队如何应用软件工程.html',
                        audio:
                            './软件工程之美/audio/40最佳实践小团队如何应用软件工程.mp3'
                    },
                    {
                        id: 'gsbh41g6rbb',
                        title: '41 | 为什么程序员的业余项目大多都死了？',
                        src:
                            './软件工程之美/html/41为什么程序员的业余项目大多都死了.html',
                        audio:
                            './软件工程之美/audio/41为什么程序员的业余项目大多都死了.mp3'
                    },
                    {
                        id: '9dk1uig6wth',
                        title: '42 | 反面案例：盘点那些失败的软件项目',
                        src:
                            './软件工程之美/html/42反面案例盘点那些失败的软件项目.html',
                        audio:
                            './软件工程之美/audio/42反面案例盘点那些失败的软件项目.mp3'
                    },
                    {
                        id: 'ii7zb98ijab',
                        title:
                            '43 | 以VS Code为例，看大型开源项目是如何应用软件工程的？',
                        src:
                            './软件工程之美/html/43以VSCode为例看大型开源项目是如何应用软件工程的.html',
                        audio:
                            './软件工程之美/audio/43以VSCode为例看大型开源项目是如何应用软件工程的.mp3'
                    },
                    {
                        id: 'rw8i44ohrmw',
                        title:
                            '44 | 微软、谷歌、阿里巴巴等大厂是怎样应用软件工程的？',
                        src:
                            './软件工程之美/html/44微软谷歌阿里巴巴等大厂是怎样应用软件工程的.html',
                        audio:
                            './软件工程之美/audio/44微软谷歌阿里巴巴等大厂是怎样应用软件工程的.mp3'
                    },
                    {
                        id: 'jcgegqrwcbf',
                        title:
                            '45 | 从软件工程的角度看微服务、云计算、人工智能这些新技术',
                        src:
                            './软件工程之美/html/45从软件工程的角度看微服务云计算人工智能这些新技术.html',
                        audio:
                            './软件工程之美/audio/45从软件工程的角度看微服务云计算人工智能这些新技术.mp3'
                    },
                    {
                        id: 'z0ryf2qzr9f',
                        title:
                            '“一问一答”第5期（内含彩蛋） | 22个软件开发常见问题解决策略',
                        src:
                            './软件工程之美/html/一问一答第5期内含彩蛋22个软件开发常见问题解决策略.html',
                        audio:
                            './软件工程之美/audio/一问一答第5期内含彩蛋22个软件开发常见问题解决策略.mp3'
                    }
                ]
            },
            {
                id: 't1r8oyiwxcy',
                title: '结束语',
                subList: [
                    {
                        id: 'izcere328a6',
                        title: '结束语 | 万事皆项目，软件工程无处不在',
                        src:
                            './软件工程之美/html/结束语万事皆项目软件工程无处不在.html',
                        audio:
                            './软件工程之美/audio/结束语万事皆项目软件工程无处不在.mp3'
                    }
                ]
            },
            {
                id: '0oecl4ei8n2',
                title: '结课测试',
                subList: [
                    {
                        id: 'gwl5gn4kr54',
                        title: '结课测试 | 这些软件工程知识，你都掌握了吗？',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ]
    }
]
const SKILL_LIST = [
    {
        id: 'wfj906fh8aj',
        type: 'cs',
        cid: '316',
        title: '正则表达式入门课',
        subTitle: '教你轻松学习正则',
        authorName: '涂伟忠',
        authorInfo: '高级研发工程师',
        contents: [
            {
                id: 'y0rvt1bj556',
                title: '开篇词',
                subList: [
                    {
                        id: 'v8ir0mhlo0e',
                        title: '开篇词丨学习正则，我们到底要学什么？',
                        src:
                            '正则表达式入门课/html/__245166__开篇词丨学习正则，我们到底要学什么？.html',
                        audio: ''
                    },
                    {
                        id: 'lujfe4k5lsk',
                        title: '导读 | 余晟：我是怎么学习和使用正则的？',
                        src:
                            '正则表达式入门课/html/__245256__导读 _ 余晟：我是怎么学习和使用正则的？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '758xg8kqe5d',
                title: '基础篇',
                subList: [
                    {
                        id: '7qbz04u8bk1',
                        title:
                            '01 | 元字符：如何巧妙记忆正则表达式的基本元件？',
                        src:
                            '正则表达式入门课/html/__245214__01 _ 元字符：如何巧妙记忆正则表达式的基本元件？.html',
                        audio: ''
                    },
                    {
                        id: 'oct9alvjza8',
                        title: '02丨量词与贪婪：小小的正则，也可能把CPU拖垮！',
                        src:
                            '正则表达式入门课/html/__248408__02丨量词与贪婪：小小的正则，也可能把CPU拖垮！.html',
                        audio: ''
                    },
                    {
                        id: '6p348pmk9on',
                        title:
                            '03 | 分组与引用：如何用正则实现更复杂的查找和替换操作？',
                        src:
                            '正则表达式入门课/html/__249507__03 _ 分组与引用：如何用正则实现更复杂的查找和替换操作？.html',
                        audio: ''
                    },
                    {
                        id: 'f2mpd21gpyb',
                        title:
                            '04 | 匹配模式：一次性掌握正则中常见的4种匹配模式',
                        src:
                            '正则表达式入门课/html/__250629__04 _ 匹配模式：一次性掌握正则中常见的4种匹配模式.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '8jqzw91gh2n',
                title: '应用篇',
                subList: [
                    {
                        id: 'azmfcwul7ha',
                        title:
                            '05 | 断言：如何用断言更好地实现替换重复出现的单词？',
                        src:
                            '正则表达式入门课/html/__251972__05 _ 断言：如何用断言更好地实现替换重复出现的单词？.html',
                        audio: ''
                    },
                    {
                        id: 'cos6q2kkton',
                        title: '06 | 转义：正则中转义需要注意哪些问题？',
                        src:
                            '正则表达式入门课/html/__252887__06 _ 转义：正则中转义需要注意哪些问题？.html',
                        audio: ''
                    },
                    {
                        id: 'p3rcqs31ljf',
                        title: '07 | 正则有哪些常见的流派及其特性？',
                        src:
                            '正则表达式入门课/html/__254156__07 _ 正则有哪些常见的流派及其特性？.html',
                        audio: ''
                    },
                    {
                        id: '1lk620rpvl3',
                        title: '08 | 应用1：正则如何处理 Unicode 编码的文本？',
                        src:
                            '正则表达式入门课/html/__254642__08 _ 应用1：正则如何处理 Unicode 编码的文本？.html',
                        audio: ''
                    },
                    {
                        id: 'bjla2d85jb7',
                        title: '09 | 应用2：如何在编辑器中使用正则完成工作？',
                        src:
                            '正则表达式入门课/html/__255795__09 _ 应用2：如何在编辑器中使用正则完成工作？.html',
                        audio: ''
                    },
                    {
                        id: 'wb9f1lmqa58',
                        title:
                            '10 | 应用3：如何在语言中用正则让文本处理能力上一个台阶？',
                        src:
                            '正则表达式入门课/html/__257533__10 _ 应用3：如何在语言中用正则让文本处理能力上一个台阶？.html',
                        audio: ''
                    },
                    {
                        id: 'zoz2py72pf1',
                        title: '11 | 如何理解正则的匹配原理以及优化原则？',
                        src:
                            '正则表达式入门课/html/__258191__11 _ 如何理解正则的匹配原理以及优化原则？.html',
                        audio: ''
                    },
                    {
                        id: 'i1tjs40sof7',
                        title: '12 | 问题集锦：详解正则常见问题及解决方案',
                        src:
                            '正则表达式入门课/html/__259437__12 _ 问题集锦：详解正则常见问题及解决方案.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '8nwbbh6vrbn',
                title: '加餐',
                subList: [
                    {
                        id: 'b57zuhzg2qb',
                        title: '加餐 | 从编程语言的角度来理解正则表达式',
                        src:
                            '正则表达式入门课/html/__256880__加餐 _ 从编程语言的角度来理解正则表达式.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'n94fg2gkt46',
                title: '结束语',
                subList: [
                    {
                        id: 'lyi9f0ftxm9',
                        title: '结束语 | 使用正则提高你的人生效率',
                        src:
                            '正则表达式入门课/html/__260176__结束语 _ 使用正则提高你的人生效率.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'xvm5luo4zlc',
                title: '测试题',
                subList: [
                    {
                        id: 'qkwpr6z2t9d',
                        title: '结课测试 | 这些正则知识，你都掌握了吗？',
                        src:
                            '正则表达式入门课/html/__262354__结课测试 _ 这些正则知识，你都掌握了吗？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'fsyjrm8pxfe',
        type: 'skill',
        cid: '403',
        title: '技术面试官识人手册',
        subTitle: '辨识精英，打造高效能团队',
        authorName: '熊燚（四火）',
        authorInfo: 'Oracle首席软件工程师',
        contents: [
            {
                id: '39mokvuq97r',
                title: '开篇词',
                subList: [
                    {
                        id: 'tihr0t6euze',
                        title:
                            '开篇词 | 世事洞明皆学问，人情练达即文章：小面试，大道理',
                        src:
                            '技术面试官识人手册/html/__359007__开篇词 _ 世事洞明皆学问，人情练达即文章：小面试，大道理.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'z9peqmhkihr',
                title: '面试准备/计划篇',
                subList: [
                    {
                        id: '1ryvm7pulix',
                        title:
                            '01 | 评估体系：公司和团队到底需要怎样的技术人才？',
                        src:
                            '技术面试官识人手册/html/__359015__01 _ 评估体系：公司和团队到底需要怎样的技术人才？.html',
                        audio: ''
                    },
                    {
                        id: 'iwtgreae1t1',
                        title: '02 | 制定计划：好的计划是成功的一半',
                        src:
                            '技术面试官识人手册/html/__360268__02 _ 制定计划：好的计划是成功的一半.html',
                        audio: ''
                    },
                    {
                        id: 'byio9oxmtel',
                        title: '03 | 问题设计（上）：三大原则理清面试考察方向',
                        src:
                            '技术面试官识人手册/html/__361420__03 _ 问题设计（上）：三大原则理清面试考察方向.html',
                        audio: ''
                    },
                    {
                        id: 'rd3onmdfsw1',
                        title: '04 | 问题设计（下）：五个技巧助攻技术问题设计',
                        src:
                            '技术面试官识人手册/html/__362407__04 _ 问题设计（下）：五个技巧助攻技术问题设计.html',
                        audio: ''
                    },
                    {
                        id: '8qaqmo7x166',
                        title: '答疑课堂01：面试计划篇热点问题解答',
                        src:
                            '技术面试官识人手册/html/__366279__答疑课堂01：面试计划篇热点问题解答.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'qtkkgedi4ds',
                title: '面试进行/实践篇',
                subList: [
                    {
                        id: '9vvl3ckiugp',
                        title: '05 | 流程把控：控好流程，让面试进程高效有温度',
                        src:
                            '技术面试官识人手册/html/__363067__05 _ 流程把控：控好流程，让面试进程高效有温度.html',
                        audio: ''
                    },
                    {
                        id: '6xk884nbp74',
                        title:
                            '06 | 算法和数据结构考察：怎样有层次地驾驭算法考察？',
                        src:
                            '技术面试官识人手册/html/__363972__06 _ 算法和数据结构考察：怎样有层次地驾驭算法考察？.html',
                        audio: ''
                    },
                    {
                        id: 'hcc35bi3x6q',
                        title:
                            '07 | 系统设计能力考察：系统设计内功到底怎么考？',
                        src:
                            '技术面试官识人手册/html/__364712__07 _ 系统设计能力考察：系统设计内功到底怎么考？.html',
                        audio: ''
                    },
                    {
                        id: 'rs145n1w1d4',
                        title:
                            '08 | 其它技能考察：见微知著，不可忽略的其它考察点',
                        src:
                            '技术面试官识人手册/html/__365541__08 _ 其它技能考察：见微知著，不可忽略的其它考察点.html',
                        audio: ''
                    },
                    {
                        id: 'tl57c057ljk',
                        title: '答疑课堂02：面试实践篇热点问题解答',
                        src:
                            '技术面试官识人手册/html/__370184__答疑课堂02：面试实践篇热点问题解答.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'jr1ke9xqph9',
                title: '面试反馈/决策篇',
                subList: [
                    {
                        id: 'uuxr8t8t1q5',
                        title:
                            '09 | 决策会准备：怎样全面收集事实，有效提炼数据？',
                        src:
                            '技术面试官识人手册/html/__367483__09 _ 决策会准备：怎样全面收集事实，有效提炼数据？.html',
                        audio: ''
                    },
                    {
                        id: 'xerrf7wnes4',
                        title:
                            '10 | 决策会开展（上）：怎样引导争辩，达成共识？',
                        src:
                            '技术面试官识人手册/html/__368204__10 _ 决策会开展（上）：怎样引导争辩，达成共识？.html',
                        audio: ''
                    },
                    {
                        id: 'gwqsbv69mu9',
                        title:
                            '11 | 决策会开展（下）：怎样确保评估全面且有深度？',
                        src:
                            '技术面试官识人手册/html/__368604__11 _ 决策会开展（下）：怎样确保评估全面且有深度？.html',
                        audio: ''
                    },
                    {
                        id: '3miuoug1bkg',
                        title: '答疑课堂03：面试决策篇热点问题解答',
                        src:
                            '技术面试官识人手册/html/__372556__答疑课堂03：面试决策篇热点问题解答.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '7xoklyja6g6',
                title: '场景再现',
                subList: [
                    {
                        id: 'kka9veogrj3',
                        title: '12 | 线上面试：隔屏对话，交流依然畅通',
                        src:
                            '技术面试官识人手册/html/__370788__12 _ 线上面试：隔屏对话，交流依然畅通.html',
                        audio: ''
                    },
                    {
                        id: '70z3k90w732',
                        title:
                            '13 | 简历识人：洞悉简历背后信息，动态调节面试策略',
                        src:
                            '技术面试官识人手册/html/__371546__13 _ 简历识人：洞悉简历背后信息，动态调节面试策略.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'b9scb218nlc',
                title: '结束语',
                subList: [
                    {
                        id: '1yrvydmni1d',
                        title: '结束语 | 操千曲而后晓声，观千剑而后识器',
                        src:
                            '技术面试官识人手册/html/__373572__结束语 _ 操千曲而后晓声，观千剑而后识器.html',
                        audio: ''
                    },
                    {
                        id: 'kvt9vjae1cc',
                        title: '结课测试｜这些面试问题，你都掌握了么？',
                        src:
                            '技术面试官识人手册/html/__374414__结课测试｜这些面试问题，你都掌握了么？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: '8ia3vc3kwc2',
        type: 'skill',
        cid: '245',
        title: '项目管理实战20讲',
        subTitle: '网易内部项目管理心法',
        authorName: '雷蓓蓓',
        authorInfo: '网易杭研项目管理部总监，《网易一千零一夜》核心作者',
        contents: [
            {
                id: 'bjt0alyabg2',
                title: '开篇词',
                subList: [
                    {
                        id: '1jwifwllcf4',
                        title: '开篇词 | 为什么说项目管理是每个人的底层能力？',
                        src:
                            '项目管理实战20讲/html/__156852__开篇词 _ 为什么说项目管理是每个人的底层能力？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '2j1armtmpx9',
                title: '常识篇',
                subList: [
                    {
                        id: '7oczps0me1m',
                        title: '01 | 角色转换：程序员做项目管理的三大误区',
                        src:
                            '项目管理实战20讲/html/__156858__01 _ 角色转换：程序员做项目管理的三大误区.html',
                        audio: ''
                    },
                    {
                        id: 'f490nrlh9hs',
                        title:
                            '02 | 十大领域五大过程组（上）：程序员必须要了解的项目管理常识',
                        src:
                            '项目管理实战20讲/html/__158846__02 _ 十大领域五大过程组（上）：程序员必须要了解的项目管理常识.html',
                        audio: ''
                    },
                    {
                        id: 'aprtvf0451h',
                        title:
                            '03 | 十大领域五大过程组（下）：程序员必须要了解的项目管理常识',
                        src:
                            '项目管理实战20讲/html/__160448__03 _ 十大领域五大过程组（下）：程序员必须要了解的项目管理常识.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'k593a6w7azi',
                title: '硬技能篇',
                subList: [
                    {
                        id: 'ob0tov5mfze',
                        title: '04 | 启动：识别项目中的四类干系人',
                        src:
                            '项目管理实战20讲/html/__161108__04 _ 启动：识别项目中的四类干系人.html',
                        audio: ''
                    },
                    {
                        id: 'mb1b5pbnvk7',
                        title: '05 | 规划：排除计划中的“延期地雷”',
                        src:
                            '项目管理实战20讲/html/__162272__05 _ 规划：排除计划中的“延期地雷”.html',
                        audio: ''
                    },
                    {
                        id: '1cqt298v34y',
                        title: '06 | 执行：打造品质，要从头开始“闭环”',
                        src:
                            '项目管理实战20讲/html/__163362__06 _ 执行：打造品质，要从头开始“闭环”.html',
                        audio: ''
                    },
                    {
                        id: 'myberjexejy',
                        title: '07 | 监控：进展“巧”汇报，学会用数据说话',
                        src:
                            '项目管理实战20讲/html/__164235__07 _ 监控：进展“巧”汇报，学会用数据说话.html',
                        audio: ''
                    },
                    {
                        id: 'b86mrxvys6a',
                        title: '08 | 收尾：项目复盘，小团队也要持续改进',
                        src:
                            '项目管理实战20讲/html/__165476__08 _ 收尾：项目复盘，小团队也要持续改进.html',
                        audio: ''
                    },
                    {
                        id: 'px5n7qsf5kf',
                        title: '09 | 需求变更：化解程序员的“头号噩梦”',
                        src:
                            '项目管理实战20讲/html/__166284__09 _ 需求变更：化解程序员的“头号噩梦”.html',
                        audio: ''
                    },
                    {
                        id: 'i5ygafspm5v',
                        title: '10 | 风险管理：如何系统化应对风险？',
                        src:
                            '项目管理实战20讲/html/__167290__10 _ 风险管理：如何系统化应对风险？.html',
                        audio: ''
                    },
                    {
                        id: '06xgribuy4v',
                        title: '11 | 质量管理：一次把事情做对！',
                        src:
                            '项目管理实战20讲/html/__168318__11 _ 质量管理：一次把事情做对！.html',
                        audio: ''
                    },
                    {
                        id: 'mrpna2m8yi2',
                        title: '12 | 高效会议：项目中要开好哪些会？',
                        src:
                            '项目管理实战20讲/html/__169433__12 _ 高效会议：项目中要开好哪些会？.html',
                        audio: ''
                    },
                    {
                        id: 'nuk5obzpe0r',
                        title: '13 | 故事案例（上）：新手上路，如何引入变化？',
                        src:
                            '项目管理实战20讲/html/__170693__13 _ 故事案例（上）：新手上路，如何引入变化？.html',
                        audio: ''
                    },
                    {
                        id: '33934ak4yy3',
                        title: '14 | 故事案例（下）：小步快跑，小而美的敏捷',
                        src:
                            '项目管理实战20讲/html/__171550__14 _ 故事案例（下）：小步快跑，小而美的敏捷.html',
                        audio: ''
                    },
                    {
                        id: 'c73pmdqy4or',
                        title: '15 | 工具方法串讲：手把手教你高效管理',
                        src:
                            '项目管理实战20讲/html/__172781__15 _ 工具方法串讲：手把手教你高效管理.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'qjew3asz244',
                title: '特别加餐',
                subList: [
                    {
                        id: 'xhhc6v79ot0',
                        title: '特别加餐 ：“学习”到“实战”的距离，到底有多远？',
                        src:
                            '项目管理实战20讲/html/__173747__特别加餐 ：“学习”到“实战”的距离，到底有多远？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '3s73q04jysv',
                title: '软实力篇',
                subList: [
                    {
                        id: 'vqsiedp6158',
                        title: '16 | 向上沟通：你必须要注意的三个误区',
                        src:
                            '项目管理实战20讲/html/__174729__16 _ 向上沟通：你必须要注意的三个误区.html',
                        audio: ''
                    },
                    {
                        id: 'ql4lv18dbgq',
                        title:
                            '17 | 跨部门沟通：怎么让不归你管的人积极配合你？',
                        src:
                            '项目管理实战20讲/html/__175508__17 _ 跨部门沟通：怎么让不归你管的人积极配合你？.html',
                        audio: ''
                    },
                    {
                        id: 's5ttpwp6it0',
                        title:
                            '18 | 向下沟通（上）：无权无势，他们不听你的怎么办？',
                        src:
                            '项目管理实战20讲/html/__176618__18 _ 向下沟通（上）：无权无势，他们不听你的怎么办？.html',
                        audio: ''
                    },
                    {
                        id: '47yvlwjwesj',
                        title:
                            '19 | 向下沟通（下）：无权无势，他们不听你的怎么办？',
                        src:
                            '项目管理实战20讲/html/__177369__19 _ 向下沟通（下）：无权无势，他们不听你的怎么办？.html',
                        audio: ''
                    },
                    {
                        id: '1nqcbzn3iff',
                        title: '20 | 进阶之路：项目经理预备战之PMP认证攻略',
                        src:
                            '项目管理实战20讲/html/__178194__20 _ 进阶之路：项目经理预备战之PMP认证攻略.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'rlz6ycegob6',
                title: '结束语',
                subList: [
                    {
                        id: '9ekbxkuo6oc',
                        title: '结束语 | 如果我可以，你也一定行！',
                        src:
                            '项目管理实战20讲/html/__178805__结束语 _ 如果我可以，你也一定行！.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'akigmbl5mkb',
                title: '结课测试',
                subList: [
                    {
                        id: '6cahxk3xo2z',
                        title: '结课测试｜这些项目管理知识你都掌握了吗？',
                        src:
                            '项目管理实战20讲/html/__215652__结课测试｜这些项目管理知识你都掌握了吗？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'b413xakg9u0',
                title: '用户故事',
                subList: [
                    {
                        id: 'ymiu05zaap2',
                        title: '用户故事 | 小文同学：我想从头到尾把事情做成',
                        src:
                            '项目管理实战20讲/html/__204421__用户故事 _ 小文同学：我想从头到尾把事情做成.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    //vim
    {
        id: 'rq0o1hssahl',
        type: 'cs',
        cid: '324',
        title: 'Vim实用技巧必知必会',
        subTitle: '让编程效率神器为我所用',
        authorName: '吴咏炜',
        authorInfo: '前 Intel 资深软件架构师',
        contents: [
            {
                id: '400c60s2d9w',
                title: '课前必读',
                subList: [
                    {
                        id: 'oe8ub3nxzew',
                        title: '开篇词｜我们为什么要学 Vim？',
                        src:
                            'Vim实用技巧必知必会/html/__262132__开篇词｜我们为什么要学 Vim？.html',
                        audio: ''
                    },
                    {
                        id: 'pnpv3j619hp',
                        title: '导读｜池建强：Vim 就是四个字“唯快不破”',
                        src:
                            'Vim实用技巧必知必会/html/__262707__导读｜池建强：Vim 就是四个字“唯快不破”.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'yy3glhhv8pt',
                title: '基础篇',
                subList: [
                    {
                        id: 'y8m9n2v0rdl',
                        title:
                            '01｜各平台下的 Vim 安装方法：上路前准备好你的宝马',
                        src:
                            'Vim实用技巧必知必会/html/__262520__01｜各平台下的 Vim 安装方法：上路前准备好你的宝马.html',
                        audio: ''
                    },
                    {
                        id: '2arod3wgklz',
                        title: '02｜基本概念和基础命令：应对简单的编辑任务',
                        src:
                            'Vim实用技巧必知必会/html/__266193__02｜基本概念和基础命令：应对简单的编辑任务.html',
                        audio: ''
                    },
                    {
                        id: '6heybkq0x0p',
                        title: '03｜更多常用命令：应对稍复杂的编辑任务',
                        src:
                            'Vim实用技巧必知必会/html/__266754__03｜更多常用命令：应对稍复杂的编辑任务.html',
                        audio: ''
                    },
                    {
                        id: '6kch7o2xese',
                        title: '04｜初步定制：让你的 Vim 更顺手',
                        src:
                            'Vim实用技巧必知必会/html/__267765__04｜初步定制：让你的 Vim 更顺手.html',
                        audio: ''
                    },
                    {
                        id: 'poo9rpiqu24',
                        title: '05｜多文件打开与缓冲区：复制粘贴的正确姿势',
                        src:
                            'Vim实用技巧必知必会/html/__268754__05｜多文件打开与缓冲区：复制粘贴的正确姿势.html',
                        audio: ''
                    },
                    {
                        id: 'dn71o983flo',
                        title: '06｜窗口和标签页：修改、对比多个文件的正确姿势',
                        src:
                            'Vim实用技巧必知必会/html/__269473__06｜窗口和标签页：修改、对比多个文件的正确姿势.html',
                        audio: ''
                    },
                    {
                        id: 'rahphumgspq',
                        title: '07｜正则表达式：实现文件内容的搜索和替换',
                        src:
                            'Vim实用技巧必知必会/html/__270380__07｜正则表达式：实现文件内容的搜索和替换.html',
                        audio: ''
                    },
                    {
                        id: 'dpy4a9qmg3n',
                        title: '08｜基本编程支持：规避、解决编程时的常见问题',
                        src:
                            'Vim实用技巧必知必会/html/__271208__08｜基本编程支持：规避、解决编程时的常见问题.html',
                        audio: ''
                    },
                    {
                        id: '8in1oloi2wq',
                        title: '09｜七大常用技巧：让编辑效率再上一个台阶',
                        src:
                            'Vim实用技巧必知必会/html/__272121__09｜七大常用技巧：让编辑效率再上一个台阶.html',
                        audio: ''
                    },
                    {
                        id: '34z764mmnh7',
                        title: '10｜代码重构实验：在实战中提高编辑熟练度',
                        src:
                            'Vim实用技巧必知必会/html/__272988__10｜代码重构实验：在实战中提高编辑熟练度.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '1la51ryo1sq',
                title: '提高篇',
                subList: [
                    {
                        id: 'ru6duo3gao9',
                        title:
                            '11｜文本的细节：关于字符、编码、行你所需要知道的一切',
                        src:
                            'Vim实用技巧必知必会/html/__274287__11｜文本的细节：关于字符、编码、行你所需要知道的一切.html',
                        audio: ''
                    },
                    {
                        id: 'cub3pnqh7ye',
                        title: '12｜语法加亮和配色方案：颜即正义',
                        src:
                            'Vim实用技巧必知必会/html/__275752__12｜语法加亮和配色方案：颜即正义.html',
                        audio: ''
                    },
                    {
                        id: 'c6b7wci8lxa',
                        title: '13｜YouCompleteMe：Vim 里的自动完成',
                        src:
                            'Vim实用技巧必知必会/html/__277715__13｜YouCompleteMe：Vim 里的自动完成.html',
                        audio: ''
                    },
                    {
                        id: 'vj79mztxsln',
                        title: '14｜Vim 脚本简介：开始你的深度定制',
                        src:
                            'Vim实用技巧必知必会/html/__280172__14｜Vim 脚本简介：开始你的深度定制.html',
                        audio: ''
                    },
                    {
                        id: 'pdt25p2r32d',
                        title: '15｜插件荟萃：不可或缺的插件',
                        src:
                            'Vim实用技巧必知必会/html/__281754__15｜插件荟萃：不可或缺的插件.html',
                        audio: ''
                    },
                    {
                        id: '2lty6cdio7o',
                        title: '16｜终端和 GDB 支持：不离开 Vim 完成开发任务',
                        src:
                            'Vim实用技巧必知必会/html/__283355__16｜终端和 GDB 支持：不离开 Vim 完成开发任务.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'ccv1zkwgzeh',
                title: '拓展篇',
                subList: [
                    {
                        id: 'woa9oc63g34',
                        title: '拓展1｜纯文本编辑：使用 Vim 书写中英文文档',
                        src:
                            'Vim实用技巧必知必会/html/__274954__拓展1｜纯文本编辑：使用 Vim 书写中英文文档.html',
                        audio: ''
                    },
                    {
                        id: 'j7ukkofxa7a',
                        title:
                            '拓展2｜C 程序员的 Vim 工作环境：C 代码的搜索、提示和自动完成',
                        src:
                            'Vim实用技巧必知必会/html/__277058__拓展2｜C 程序员的 Vim 工作环境：C 代码的搜索、提示和自动完成.html',
                        audio: ''
                    },
                    {
                        id: '787fdwe11fd',
                        title:
                            '拓展3｜Python 程序员的 Vim 工作环境：完整的 Python 开发环境',
                        src:
                            'Vim实用技巧必知必会/html/__278870__拓展3｜Python 程序员的 Vim 工作环境：完整的 Python 开发环境.html',
                        audio: ''
                    },
                    {
                        id: '4hlwk2xw861',
                        title: '拓展4 | 插件样例分析：自己动手改进插件',
                        src:
                            'Vim实用技巧必知必会/html/__280731__拓展4 _ 插件样例分析：自己动手改进插件.html',
                        audio: ''
                    },
                    {
                        id: '82hpzan95bm',
                        title: '拓展5 | 其他插件和技巧：吴咏炜的箱底私藏',
                        src:
                            'Vim实用技巧必知必会/html/__282412__拓展5 _ 其他插件和技巧：吴咏炜的箱底私藏.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'd9ohwlxrxe1',
                title: '结束语',
                subList: [
                    {
                        id: 'qog29rxd4xy',
                        title: '结束语｜Vim 森林探秘，一切才刚刚开始',
                        src:
                            'Vim实用技巧必知必会/html/__284528__结束语｜Vim 森林探秘，一切才刚刚开始.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'iad8ff7kp95',
                title: '测试题',
                subList: [
                    {
                        id: '8zwsx28uszl',
                        title: '结课测试｜这些 Vim 的知识你都掌握了吗？',
                        src:
                            'Vim实用技巧必知必会/html/__295597__结课测试｜这些 Vim 的知识你都掌握了吗？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'f50q394ucoo',
        type: 'skill',
        cid: '100064501',
        title: '大厂晋升指南',
        subTitle: '前阿里P9技术专家的升职心法',
        authorName: '李运华',
        authorInfo: '前阿里资深技术专家（P9）',
        contents: [
            {
                id: 'xkic8x0u96r',
                title: '开篇词',
                subList: [
                    {
                        id: 'itzqn888q2b',
                        title: '开篇词 | 重新理解晋升',
                        src:
                            '大厂晋升指南/html/__311288__开篇词 _ 重新理解晋升.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'ixmr2p82mgv',
                title: '晋升体系',
                subList: [
                    {
                        id: '2v1byv0z895',
                        title: '01 | 职级体系：你意识到级别鸿沟了吗？',
                        src:
                            '大厂晋升指南/html/__312905__01 _ 职级体系：你意识到级别鸿沟了吗？.html',
                        audio: ''
                    },
                    {
                        id: 'k0jt90rtw3f',
                        title: '02｜晋升流程：你需要通过多少“关卡”才能晋升？',
                        src:
                            '大厂晋升指南/html/__313540__02｜晋升流程：你需要通过多少“关卡”才能晋升？.html',
                        audio: ''
                    },
                    {
                        id: '6xc0xd8ils7',
                        title: '03 | 晋升原则：什么样的人更容易晋升？',
                        src:
                            '大厂晋升指南/html/__314649__03 _ 晋升原则：什么样的人更容易晋升？.html',
                        audio: ''
                    },
                    {
                        id: 'uh21y56qspu',
                        title:
                            '04 | 晋升逻辑：别人怎么判断你有没有达到晋升要求？',
                        src:
                            '大厂晋升指南/html/__314659__04 _ 晋升逻辑：别人怎么判断你有没有达到晋升要求？.html',
                        audio: ''
                    },
                    {
                        id: 'e684qfpbsi5',
                        title:
                            '05 | COMD能力模型：怎么把抽象的能力要求具体化？',
                        src:
                            '大厂晋升指南/html/__317086__05 _ COMD能力模型：怎么把抽象的能力要求具体化？.html',
                        audio: ''
                    },
                    {
                        id: 'buwhrjzgdpl',
                        title:
                            '06 | 职级档次：你现在应该具备的核心能力是什么？',
                        src:
                            '大厂晋升指南/html/__317813__06 _ 职级档次：你现在应该具备的核心能力是什么？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'xu14hvsi81c',
                title: '职级详解',
                subList: [
                    {
                        id: 'z4ts0cuhpxz',
                        title:
                            '07 | P5提升攻略：怎么快速从学生转变为“打工人”？',
                        src:
                            '大厂晋升指南/html/__319262__07 _ P5提升攻略：怎么快速从学生转变为“打工人”？.html',
                        audio: ''
                    },
                    {
                        id: 'xmxl3fs5sgo',
                        title:
                            '08 | P6提升攻略：怎么成为独立自主的“项目能手”？',
                        src:
                            '大厂晋升指南/html/__320569__08 _ P6提升攻略：怎么成为独立自主的“项目能手”？.html',
                        audio: ''
                    },
                    {
                        id: 'zo1u9ipdqka',
                        title:
                            '09 |  P7提升攻略：怎么成为让人信服的“团队专家”？',
                        src:
                            '大厂晋升指南/html/__321599__09 _ P7提升攻略：怎么成为让人信服的“团队专家”？.html',
                        audio: ''
                    },
                    {
                        id: 'yxeddpfsb5z',
                        title:
                            '10 | P8提升攻略：怎么成为有影响力的“领域专家”？',
                        src:
                            '大厂晋升指南/html/__322511__10 _ P8提升攻略：怎么成为有影响力的“领域专家”？.html',
                        audio: ''
                    },
                    {
                        id: '5m9gqwuhtqe',
                        title:
                            '11 | P9提升攻略：怎么成为跨域整合的“业务导演”？',
                        src:
                            '大厂晋升指南/html/__323388__11 _ P9提升攻略：怎么成为跨域整合的“业务导演”？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'v3whrp1kehn',
                title: '面评技巧',
                subList: [
                    {
                        id: 'nsgsbz9e5m2',
                        title: '12 | PPT框架：标准的晋升PPT长什么样子？',
                        src:
                            '大厂晋升指南/html/__325157__12 _ PPT框架：标准的晋升PPT长什么样子？.html',
                        audio: ''
                    },
                    {
                        id: 'xl5pngexgsw',
                        title: '13 | PPT写作：怎么写才能展现自己真正的实力？',
                        src:
                            '大厂晋升指南/html/__326143__13 _ PPT写作：怎么写才能展现自己真正的实力？.html',
                        audio: ''
                    },
                    {
                        id: 'l87v0fp8om3',
                        title: '14 | PPT讲解：怎么讲才能让评委印象深刻？',
                        src:
                            '大厂晋升指南/html/__326581__14 _ PPT讲解：怎么讲才能让评委印象深刻？.html',
                        audio: ''
                    },
                    {
                        id: 'eh0bd4gjsra',
                        title: '15 | 答辩技巧：回答评委提问有哪些技巧？',
                        src:
                            '大厂晋升指南/html/__326641__15 _ 答辩技巧：回答评委提问有哪些技巧？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'j5tvq8a2w1d',
                title: '学习方法',
                subList: [
                    {
                        id: 'z4y406m8xqw',
                        title: '16 | 导学：你应该掌握哪些学习方法？',
                        src:
                            '大厂晋升指南/html/__328359__16 _ 导学：你应该掌握哪些学习方法？.html',
                        audio: ''
                    },
                    {
                        id: '0c2jklcfgwb',
                        title: '17 | 海绵学习法：怎么找到你的10000小时？',
                        audio: ''
                    },
                    {
                        id: '56qitfsfiqb',
                        title: '18 | 三段分解法：怎么利用10000小时成为大牛？',
                        src:
                            '大厂晋升指南/html/__330110__18 _ 三段分解法：怎么利用10000小时成为大牛？.html',
                        audio: ''
                    },
                    {
                        id: 'vq0ph598e30',
                        title:
                            '19 | 链式 & 比较 & 环式学习法：怎么多维度提升技术能力？',
                        src:
                            '大厂晋升指南/html/__331463__19 _ 链式 & 比较 & 环式学习法：怎么多维度提升技术能力？.html',
                        audio: ''
                    },
                    {
                        id: 'ltb4pektgwh',
                        title:
                            '20 | Play & Teach：怎么摆脱“从入门到忘记”的学习困境？',
                        src:
                            '大厂晋升指南/html/__332362__20 _ Play & Teach：怎么摆脱“从入门到忘记”的学习困境？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'c4a28wh19tt',
                title: '做事方法',
                subList: [
                    {
                        id: 'gohshjunzyo',
                        title: '21 | 导学：你应该掌握哪些做事方法？',
                        src:
                            '大厂晋升指南/html/__334169__21 _ 导学：你应该掌握哪些做事方法？.html',
                        audio: ''
                    },
                    {
                        id: '4g0wj6gvmdf',
                        title:
                            '22 | OKR的优势：为什么要用OKR来取代KPI做团队规划？',
                        src:
                            '大厂晋升指南/html/__334826__22 _ OKR的优势：为什么要用OKR来取代KPI做团队规划？.html',
                        audio: ''
                    },
                    {
                        id: 'ax51v6svqiq',
                        title: '23 | OKR规划法：Team Leader 怎么做团队规划？',
                        src:
                            '大厂晋升指南/html/__335873__23 _ OKR规划法：Team Leader 怎么做团队规划？.html',
                        audio: ''
                    },
                    {
                        id: '6n39qlzgpnz',
                        title: '24 | 3C方案设计法：怎么让你的方案有理有据？',
                        src:
                            '大厂晋升指南/html/__336582__24 _ 3C方案设计法：怎么让你的方案有理有据？.html',
                        audio: ''
                    },
                    {
                        id: '7tekizp7hr1',
                        title: '25 | PDCA执行法：怎么推动落地才能“步步为赢”？',
                        src:
                            '大厂晋升指南/html/__337348__25 _ PDCA执行法：怎么推动落地才能“步步为赢”？.html',
                        audio: ''
                    },
                    {
                        id: '14onwdmq3vw',
                        title:
                            '26 | 5W根因分析法：怎么找准问题源头才能治标又治本？',
                        src:
                            '大厂晋升指南/html/__338320__26 _ 5W根因分析法：怎么找准问题源头才能治标又治本？.html',
                        audio: ''
                    },
                    {
                        id: 'jdr9vchod9v',
                        title: '27 | 5S问题处理法：怎么应对问题才能转危为机？',
                        src:
                            '大厂晋升指南/html/__339308__27 _ 5S问题处理法：怎么应对问题才能转危为机？.html',
                        audio: ''
                    },
                    {
                        id: 'y7bcyb8tczs',
                        title: '28 | 4D总结法：怎么展示你的工作亮点？',
                        src:
                            '大厂晋升指南/html/__339981__28 _ 4D总结法：怎么展示你的工作亮点？.html',
                        audio: ''
                    },
                    {
                        id: '5ncweo4z70x',
                        title:
                            '29 | 金字塔汇报法：怎么汇报才能让领导认可你的成果？',
                        src:
                            '大厂晋升指南/html/__340918__29 _ 金字塔汇报法：怎么汇报才能让领导认可你的成果？.html',
                        audio: ''
                    },
                    {
                        id: 'kaatd2su09v',
                        title: '30 | 四线复盘法：怎么避免成为背锅侠？',
                        src:
                            '大厂晋升指南/html/__341937__30 _ 四线复盘法：怎么避免成为背锅侠？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'ya2wuvkhoyq',
                title: '专项提升',
                subList: [
                    {
                        id: 'ku3n6jtfovb',
                        title:
                            '31 | 导学：为什么业务和管理是晋升高级别的基石？',
                        src:
                            '大厂晋升指南/html/__342453__31 _ 导学：为什么业务和管理是晋升高级别的基石？.html',
                        audio: ''
                    },
                    {
                        id: 'gd2yzux58e4',
                        title: '32 | 5W1H8C1D分析法：P5/P6怎么理解业务功能？',
                        src:
                            '大厂晋升指南/html/__342904__32 _ 5W1H8C1D分析法：P5_P6怎么理解业务功能？.html',
                        audio: ''
                    },
                    {
                        id: '2pqose7x9a8',
                        title: '33 | AARRR漏斗模型：P7/P8怎么掌握业务领域？',
                        src:
                            '大厂晋升指南/html/__343120__33 _ AARRR漏斗模型：P7_P8怎么掌握业务领域？.html',
                        audio: ''
                    },
                    {
                        id: 'onukx0iilhh',
                        title: '34 | 宝洁战略模型：P8+/P9怎么看懂业务战略？',
                        src:
                            '大厂晋升指南/html/__343332__34 _ 宝洁战略模型：P8+_P9怎么看懂业务战略？.html',
                        audio: ''
                    },
                    {
                        id: 'on9qo0gx936',
                        title: '35 | 管理四象限：小白要怎么快速入门带团队？',
                        src:
                            '大厂晋升指南/html/__343681__35 _ 管理四象限：小白要怎么快速入门带团队？.html',
                        audio: ''
                    },
                    {
                        id: 'rz6soiwbzok',
                        title: '36 | 管理五模式：高手常用的管理模式有哪些？',
                        src:
                            '大厂晋升指南/html/__344514__36 _ 管理五模式：高手常用的管理模式有哪些？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'r516hh0blew',
                title: '结束语',
                subList: [
                    {
                        id: '8k30qk0olyn',
                        title: '结束语 | 晋升也是一种修行',
                        src:
                            '大厂晋升指南/html/__345445__结束语 _ 晋升也是一种修行.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '6qi4o1c6az6',
                title: '结课测试题',
                subList: [
                    {
                        id: '5r3uiipks1r',
                        title: '结课测试题｜这些晋升的知识，你都掌握了吗？',
                        src:
                            '大厂晋升指南/html/__346275__结课测试题｜这些晋升的知识，你都掌握了吗？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'cy39sxuegc8',
                title: '加餐',
                subList: [
                    {
                        id: '26p5kc66qnj',
                        title: '加餐一 | 晋升等级：不同的职级体系如何对标？',
                        src:
                            '大厂晋升指南/html/__318457__加餐一 _ 晋升等级：不同的职级体系如何对标？.html',
                        audio: ''
                    },
                    {
                        id: 'z763j72ebxp',
                        title: '加餐二 | 提名词：怎么夸自己才最加分？',
                        src:
                            '大厂晋升指南/html/__324116__加餐二 _ 提名词：怎么夸自己才最加分？.html',
                        audio: ''
                    },
                    {
                        id: 'fky5e7i5386',
                        title: '加餐三 | 10000小时定律：成为大牛的秘密是什么？',
                        src:
                            '大厂晋升指南/html/__328694__加餐三 _ 10000小时定律：成为大牛的秘密是什么？.html',
                        audio: ''
                    },
                    {
                        id: 'wcaqrzsm54v',
                        title:
                            '加餐四 | 学习基础技术：你对“基础”的理解准确吗？',
                        src:
                            '大厂晋升指南/html/__332956__加餐四 _ 学习基础技术：你对“基础”的理解准确吗？.html',
                        audio: ''
                    },
                    {
                        id: '7qolfpof6ea',
                        title: '放学别走 | 如何画好领域分层图？',
                        src:
                            '大厂晋升指南/html/__334176__放学别走 _ 如何画好领域分层图？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'qarzy5yfqpk',
        type: 'skill',
        cid: '426',
        title: '程序员的个人财富课',
        subTitle: '用更少的时间产生更多的收益',
        authorName: '王喆',
        authorInfo: '璞元科技高级顾问，Roku推荐系统架构负责人',
        contents: [
            {
                id: 'v5syfxpbul9',
                title: '开篇词',
                subList: [
                    {
                        id: 'yx6id7aa7c6',
                        title: '开篇词｜为什么说程序员最适合学财富管理？',
                        src:
                            '程序员的个人财富课/html/__394241__开篇词为什么说程序员最适合学财富管理.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'yq8x72gpaa1',
                title: '财富框架篇',
                subList: [
                    {
                        id: 'tudxmpkqk62',
                        title: '01 | 财富框架：建立属于你自己的财富双塔',
                        src:
                            '程序员的个人财富课/html/__394326__01_财富框架建立属于你自己的财富双塔.html',
                        audio: ''
                    },
                    {
                        id: '17qxb9fnwy3',
                        title: '02｜个人发展：你自己的发展才是最大的财富源泉',
                        src:
                            '程序员的个人财富课/html/__394973__02个人发展你自己的发展才是最大的财富源泉.html',
                        audio: ''
                    },
                    {
                        id: '7krg2889xad',
                        title: '03｜理财金字塔：如何建立稳固的投资理财结构？',
                        src:
                            '程序员的个人财富课/html/__395874__03理财金字塔如何建立稳固的投资理财结构.html',
                        audio: ''
                    },
                    {
                        id: 'i50lc7z0qct',
                        title:
                            '04｜实战知识：有哪些收益稳健的经典资产配置组合？',
                        src:
                            '程序员的个人财富课/html/__396931__04实战知识有哪些收益稳健的经典资产配置组合.html',
                        audio: ''
                    },
                    {
                        id: 'fcozts9n83r',
                        title: '05｜支点投资法：主动投资是讲逻辑的！',
                        src:
                            '程序员的个人财富课/html/__398076__05支点投资法主动投资是讲逻辑的.html',
                        audio: ''
                    },
                    {
                        id: '8ljwqm8fxtq',
                        title:
                            '06｜不当韭菜：在财富管理的过程中摆正心态，知己知彼',
                        src:
                            '程序员的个人财富课/html/__398936__06不当韭菜在财富管理的过程中摆正心态知己知彼.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'hirlaifvehl',
                title: '个人发展篇',
                subList: [
                    {
                        id: 'blr74m1ad1i',
                        title: '07｜职业方向：如何选择一个有前景的职业方向？',
                        src:
                            '程序员的个人财富课/html/__399771__07职业方向如何选择一个有前景的职业方向.html',
                        audio: ''
                    },
                    {
                        id: 'sew27b94hzo',
                        title:
                            '08｜职业规划：大公司VS小公司，怎样选择更有前途？',
                        src:
                            '程序员的个人财富课/html/__400581__08职业规划大公司VS小公司怎样选择更有前途.html',
                        audio: ''
                    },
                    {
                        id: 'e9gi8t9paz3',
                        title: '09｜期权股权：如何正确处理公司的期权、股权？',
                        src:
                            '程序员的个人财富课/html/__401733__09期权股权如何正确处理公司的期权股权.html',
                        audio: ''
                    },
                    {
                        id: 'ge933x8cb2f',
                        title: '10｜跳槽涨薪：如何规划一条合理的职业道路？',
                        src:
                            '程序员的个人财富课/html/__402957__10跳槽涨薪如何规划一条合理的职业道路.html',
                        audio: ''
                    },
                    {
                        id: '264bq0khdbb',
                        title:
                            '11 | 财富拓展：35岁失业？程序员如何拓宽财富渠道？',
                        src:
                            '程序员的个人财富课/html/__404119__11_财富拓展35岁失业程序员如何拓宽财富渠道.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'uytchr4sqjs',
                title: '投资实战篇',
                subList: [
                    {
                        id: 'lm2u2735lyo',
                        title: '12｜房产投资：如何做出理性的买房决策？',
                        src:
                            '程序员的个人财富课/html/__404958__12房产投资如何做出理性的买房决策.html',
                        audio: ''
                    },
                    {
                        id: '67230f1r2iy',
                        title: '13｜实战知识：让我们编程计算下怎么还房贷最合适',
                        src:
                            '程序员的个人财富课/html/__405898__13实战知识让我们编程计算下怎么还房贷最合适.html',
                        audio: ''
                    },
                    {
                        id: 'od075jkjkmo',
                        title: '14｜基金投资：如何让专业人士帮你赚钱？',
                        src:
                            '程序员的个人财富课/html/__406509__14基金投资如何让专业人士帮你赚钱.html',
                        audio: ''
                    },
                    {
                        id: 'turf1e0osia',
                        title: '15｜实战知识：如何选出一只优质的基金？',
                        src:
                            '程序员的个人财富课/html/__407489__15实战知识如何选出一只优质的基金.html',
                        audio: ''
                    },
                    {
                        id: 'ijw5rep5vgp',
                        title: '16｜股票投资：最适合散户的股票投资方法是什么？',
                        src:
                            '程序员的个人财富课/html/__408224__16｜股票投资：最适合散户的股票投资方法是什么？.html',
                        audio: ''
                    },
                    {
                        id: 'tpvkaodp757',
                        title: '17｜投资闭环：如何成为越来越专业的投资者？',
                        src:
                            '程序员的个人财富课/html/__408993__17｜投资闭环：如何成为越来越专业的投资者？.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'x1mjv4sv0gl',
        type: 'skill',
        cid: '420',
        title: '如何成为学习高手',
        subTitle: '北大学霸带你10倍提升学习效率',
        authorName: '高冷冷',
        authorInfo: '北大硕士、知乎64万关注大V',
        contents: [
            {
                id: 'h5iftolkstp',
                title: '模块一底层思维',
                subList: [
                    {
                        id: '2g1unrism6c',
                        title:
                            '01｜如何减少对学习的排斥和厌恶心理，使其变得相对愉悦？',
                        src:
                            '如何成为学习高手/html/__385003__01如何减少对学习的排斥和厌恶心理使其变得相对愉悦.html',
                        audio: ''
                    },
                    {
                        id: 'd1qxliq2fol',
                        title: '02｜学会这 4 点，你也可以告别伪勤奋',
                        src:
                            '如何成为学习高手/html/__385021__02｜学会这 4 点，你也可以告别伪勤奋.html',
                        audio: ''
                    },
                    {
                        id: 'i37a64t1fm6',
                        title: '03｜掌握考试思维：成为一个特别会考试的人',
                        src:
                            '如何成为学习高手/html/__385066__03掌握考试思维成为一个特别会考试的人.html',
                        audio: ''
                    },
                    {
                        id: 'ig9sj0kfcoz',
                        title: '04｜用科学原理告诉你如何在考场上超常发挥',
                        src:
                            '如何成为学习高手/html/__385072__04用科学原理告诉你如何在考场上超常发挥.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '7983pddzi19',
                title: '模块二高效学习',
                subList: [
                    {
                        id: 'vpfe1ua9rtr',
                        title: '05｜教你全面提升专注力，学习时不再走神',
                        src:
                            '如何成为学习高手/html/__385077__05教你全面提升专注力学习时不再走神.html',
                        audio: ''
                    },
                    {
                        id: 'i0hcyr9x3o7',
                        title: '06｜教你高效复习：巧用学习神器取得好成绩',
                        src:
                            '如何成为学习高手/html/__385082__06教你高效复习巧用学习神器取得好成绩.html',
                        audio: ''
                    },
                    {
                        id: 'hil8lettkyh',
                        title:
                            '07｜我考北大中文系时，15 天背下 10 门专业课的连点成线法',
                        src:
                            '如何成为学习高手/html/__385085__07我考北大中文系时15天背下10门专业课的连点成线法.html',
                        audio: ''
                    },
                    {
                        id: '6z0od52abyi',
                        title:
                            '08｜高效记忆的根本方法：主动思考和加工 & 组块化记忆',
                        src:
                            '如何成为学习高手/html/__385088__08高效记忆的根本方法主动思考和加工',
                        audio: ''
                    },
                    {
                        id: 'y7rjrg7s7ec',
                        title: '09｜如何高效读书？如何记住读过的每一本书？',
                        src:
                            '如何成为学习高手/html/__385090__09如何高效读书如何记住读过的每一本书.html',
                        audio: ''
                    },
                    {
                        id: 'dj0m2cf303w',
                        title: '10｜如何快速入门新领域？论述题如何答出高分？',
                        src:
                            '如何成为学习高手/html/__385092__10如何快速入门新领域论述题如何答出高分.html',
                        audio: ''
                    },
                    {
                        id: 's9luu302z2v',
                        title:
                            '11｜如何快速完成学习和工作任务，以及快速学会新技能？',
                        src:
                            '如何成为学习高手/html/__385096__11如何快速完成学习和工作任务以及快速学会新技能.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'rt9uuypxdfs',
                title: '模块三高度自律',
                subList: [
                    {
                        id: 'jk9ude75hfj',
                        title: '12｜每个人都能学会：5 分钟克服拖延症的方法',
                        src:
                            '如何成为学习高手/html/__385109__12每个人都能学会5分钟克服拖延症的方法.html',
                        audio: ''
                    },
                    {
                        id: 'c6slt6ny0ko',
                        title: '13｜3 个思路，让你成为一个真正自律的人',
                        src:
                            '如何成为学习高手/html/__385111__133个思路让你成为一个真正自律的人.html',
                        audio: ''
                    },
                    {
                        id: 'qtsj2p1isxs',
                        title: '14｜通过选择环境，来提高学习和工作效率',
                        src:
                            '如何成为学习高手/html/__385114__14通过选择环境来提高学习和工作效率.html',
                        audio: ''
                    },
                    {
                        id: 'fn2zcbu0917',
                        title: '15｜一个人在家如何做到高度自律？',
                        src:
                            '如何成为学习高手/html/__385116__15一个人在家如何做到高度自律.html',
                        audio: ''
                    },
                    {
                        id: '1xoxd5nrvk4',
                        title: '16｜一玩手机就停不下来？教你如何戒手机',
                        src:
                            '如何成为学习高手/html/__385118__16一玩手机就停不下来教你如何戒手机.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'b3bne5ykqmm',
                title: '模块四时间管理',
                subList: [
                    {
                        id: 'zc3oic3956a',
                        title: '17｜如何合理地制订计划？',
                        src:
                            '如何成为学习高手/html/__385120__17如何合理地制订计划.html',
                        audio: ''
                    },
                    {
                        id: '4xkp59gs837',
                        title: '18｜如何保证100%完成你制订的计划？',
                        src:
                            '如何成为学习高手/html/__385122__18如何保证100%完成你制订的计划.html',
                        audio: ''
                    },
                    {
                        id: 'iwxryl1lcd4',
                        title: '19｜如何高效完成复杂艰难的、不喜欢的任务？',
                        src:
                            '如何成为学习高手/html/__385124__19如何高效完成复杂艰难的不喜欢的任务.html',
                        audio: ''
                    },
                    {
                        id: 'zflken182q8',
                        title: '20｜如何做到每天高效学习 12 小时？',
                        src:
                            '如何成为学习高手/html/__385126__20如何做到每天高效学习12小时.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'b5e03gkru0x',
                title: '模块五学霸养成',
                subList: [
                    {
                        id: '2yeqkkwfjj0',
                        title:
                            '21｜学霸为什么学什么都快？有哪些可以借鉴的方法论？',
                        src:
                            '如何成为学习高手/html/__385128__21学霸为什么学什么都快有哪些可以借鉴的方法论.html',
                        audio: ''
                    },
                    {
                        id: 'rxyxn34yb48',
                        title: '22｜如何通过练习，让自己变得更聪明？',
                        src:
                            '如何成为学习高手/html/__385133__22如何通过练习让自己变得更聪明.html',
                        audio: ''
                    },
                    {
                        id: 'svl514e4150',
                        title: '23｜教你利用“双加工理论”，有效提高学习能力',
                        src:
                            '如何成为学习高手/html/__385136__23教你利用双加工理论有效提高学习能力.html',
                        audio: ''
                    },
                    {
                        id: 's8coc4649k4',
                        title: '24｜重要：别再去找更好的学习方法了',
                        src:
                            '如何成为学习高手/html/__385137__24重要别再去找更好的学习方法了.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'lpkpjtea8sf',
        type: 'skill',
        cid: '100052201',
        title: '职场求生攻略',
        subTitle: '会工作也是个技术活儿',
        authorName: '臧萌',
        authorInfo: 'PayPal 数据处理组技术负责人，《Java 入门 1 2 3》作者',
        contents: [
            {
                id: 'nn02ea5zyjw',
                title: '开篇词',
                subList: [
                    {
                        id: 'q8eqp47cpqt',
                        title: '开篇词 | 学会如何工作，和学习技术同等重要',
                        src:
                            './职场求生攻略/html/开篇词学会如何工作和学习技术同等重要【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/开篇词学会如何工作和学习技术同等重要【更多IT资源www.cong0sousuo.top】.mp3'
                    }
                ]
            },
            {
                id: 't52l9rtutbo',
                title: '职业素养篇',
                subList: [
                    {
                        id: 'nt3lh56d2yk',
                        title:
                            '01丨优先级：工作中那么多事情，我要如何安排优先级？',
                        src:
                            './职场求生攻略/html/01优先级工作中那么多事情我要如何安排优先级【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/01优先级工作中那么多事情我要如何安排优先级【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'hkr8n5iqu28',
                        title: '02丨沟通：邮件那么重要，你还在轻视邮件吗？',
                        src:
                            './职场求生攻略/html/02沟通邮件那么重要你还在轻视邮件吗【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/02沟通邮件那么重要你还在轻视邮件吗【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'iuzooc7uk1g',
                        title: '03丨沟通：程序员为什么应该爱上交流？',
                        src:
                            './职场求生攻略/html/03沟通程序员为什么应该爱上交流【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/03沟通程序员为什么应该爱上交流【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'ajx42tor6ni',
                        title:
                            '04丨主观能动性：为什么程序员，需要发挥主观能动性？',
                        src:
                            './职场求生攻略/html/04主观能动性为什么程序员需要发挥主观能动性【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/04主观能动性为什么程序员需要发挥主观能动性【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'puvpxckxel0',
                        title:
                            '05丨责任的边界：程序员的职责范围仅仅只是被安排的任务吗？',
                        src:
                            './职场求生攻略/html/05责任的边界程序员的职责范围仅仅只是被安排的任务吗【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/05责任的边界程序员的职责范围仅仅只是被安排的任务吗【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'lp65gb4bq28',
                        title: '06 | 职业素养篇热点问题答疑',
                        src:
                            './职场求生攻略/html/06职业素养篇热点问题答疑【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/06职业素养篇热点问题答疑【更多IT资源www.cong0sousuo.top】.mp3'
                    }
                ]
            },
            {
                id: 'jies587aimn',
                title: '职业选择篇',
                subList: [
                    {
                        id: '277mwqvtut4',
                        title: '07 | 职业规划：如何选择一个公司？',
                        src:
                            './职场求生攻略/html/07职业规划如何选择一个公司【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/07职业规划如何选择一个公司【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'gcespt543w0',
                        title: '08丨管理者关系：怎么才叫“跟对人”？',
                        src:
                            './职场求生攻略/html/08管理者关系怎么才叫跟对人【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/08管理者关系怎么才叫跟对人【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'et5vok1fk8c',
                        title: '09丨管理者关系：跟对人和做对事哪个更重要？',
                        src:
                            './职场求生攻略/html/09管理者关系跟对人和做对事哪个更重要【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/09管理者关系跟对人和做对事哪个更重要【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: '0fdfta1ipin',
                        title: '10丨职业规划： 跳槽之前你想清楚这些事情了吗？',
                        src:
                            './职场求生攻略/html/10职业规划跳槽之前你想清楚这些事情了吗【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/10职业规划跳槽之前你想清楚这些事情了吗【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'uvtufgmez91',
                        title: '11丨面试：如何准备简历和面试？',
                        src:
                            './职场求生攻略/html/11面试如何准备简历和面试【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/11面试如何准备简历和面试【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'n7v7261apep',
                        title: '12丨外包：外包不也是写程序吗？有什么不一样的？',
                        src:
                            './职场求生攻略/html/12外包外包不也是写程序吗有什么不一样的【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/12外包外包不也是写程序吗有什么不一样的【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'pe0kb5czoun',
                        title:
                            '13 | 外派：大家都在一个办公室工作，有什么不一样？',
                        src:
                            './职场求生攻略/html/13外派大家都在一个办公室工作有什么不一样【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/13外派大家都在一个办公室工作有什么不一样【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'n4i2l0xir2r',
                        title: '14 | 职业规划 ：转管理是程序员的终极选择吗？',
                        src:
                            './职场求生攻略/html/14职业规划转管理是程序员的终极选择吗【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/14职业规划转管理是程序员的终极选择吗【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'tfmw4mpxy8s',
                        title:
                            '15 | 职业规划 ：程序员加入创业公司，这些事情你想清楚了吗？',
                        src:
                            './职场求生攻略/html/15职业规划程序员加入创业公司这些事情你想清楚了吗【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/15职业规划程序员加入创业公司这些事情你想清楚了吗【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'ov20fel5j4q',
                        title: '16 | 答疑篇：为啥你工作八年，只抵别人一年？',
                        src:
                            './职场求生攻略/html/16答疑篇为啥你工作八年只抵别人一年【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/16答疑篇为啥你工作八年只抵别人一年【更多IT资源www.cong0sousuo.top】.mp3'
                    }
                ]
            },
            {
                id: '898fxn01ryy',
                title: '职场情商篇',
                subList: [
                    {
                        id: 'tx2iijhhpa2',
                        title:
                            '17 | 升职：看着周围的人都升职了，我什么时候才能升职？',
                        src:
                            './职场求生攻略/html/17升职看着周围的人都升职了我什么时候才能升职【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/17升职看着周围的人都升职了我什么时候才能升职【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'nfunl769p40',
                        title:
                            '18 | 职场政治：我只想好好干活，职场政治和我有什么关系？',
                        src:
                            './职场求生攻略/html/18职场政治我只想好好干活职场政治和我有什么关系【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/18职场政治我只想好好干活职场政治和我有什么关系【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'z9fu7uufz2a',
                        title:
                            '19 | 职场政治：面对公司自上而下的技术更新，我该怎么办？',
                        src:
                            './职场求生攻略/html/19职场政治面对公司自上而下的技术更新我该怎么办【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/19职场政治面对公司自上而下的技术更新我该怎么办【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: '0ggcchcfqlx',
                        title: '20 | 沟通技巧：如何跟自己的同事请教问题？',
                        src:
                            './职场求生攻略/html/20沟通技巧如何跟自己的同事请教问题【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/20沟通技巧如何跟自己的同事请教问题【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: '2smkpln2k3t',
                        title: '21 | 答疑篇：想升职，我该准备些什么？',
                        src:
                            './职场求生攻略/html/21答疑篇想升职我该准备些什么【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/21答疑篇想升职我该准备些什么【更多IT资源www.cong0sousuo.top】.mp3'
                    }
                ]
            },
            {
                id: 'x13jz1o39l7',
                title: '技术成长篇',
                subList: [
                    {
                        id: 'rhw5nw8qcd0',
                        title: '22 | 学习观：程序员如何定义自己的技术舒适区？',
                        src:
                            './职场求生攻略/html/22学习观程序员如何定义自己的技术舒适区【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/22学习观程序员如何定义自己的技术舒适区【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'tlxldj9gs5p',
                        title: '23丨技术观：做程序员，技术观为何如此重要？',
                        src:
                            './职场求生攻略/html/23技术观做程序员技术观为何如此重要【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/23技术观做程序员技术观为何如此重要【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'ne396a6r7w2',
                        title:
                            '24丨技术观：程序员在技术的成长之路上，有哪些陷阱？',
                        src:
                            './职场求生攻略/html/24技术观程序员在技术的成长之路上有哪些陷阱【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/24技术观程序员在技术的成长之路上有哪些陷阱【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'ef49pzwhnwk',
                        title:
                            '25 | 系统架构：如何从写代码的程序员，成长为软件系统架构师？',
                        src:
                            './职场求生攻略/html/25系统架构如何从写代码的程序员成长为软件系统架构师【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/25系统架构如何从写代码的程序员成长为软件系统架构师【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'l2va3h4pcl5',
                        title:
                            '26 | 系统集成：为什么最容易出问题的是系统集成？',
                        src:
                            './职场求生攻略/html/26系统集成为什么最容易出问题的是系统集成【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/26系统集成为什么最容易出问题的是系统集成【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: 'cqrwtf39a8g',
                        title: '27 | 答疑篇：什么样的技术观能够更快成长？',
                        src:
                            './职场求生攻略/html/27答疑篇什么样的技术观能够更快成长【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/27答疑篇什么样的技术观能够更快成长【更多IT资源www.cong0sousuo.top】.mp3'
                    }
                ]
            },
            {
                id: '90nvufs5tnf',
                title: '加餐',
                subList: [
                    {
                        id: '1owb0xrav4j',
                        title:
                            '28 | 沟通中的冲突：什么时候应该妥协，什么时候应该坚持？',
                        src:
                            './职场求生攻略/html/28沟通原则什么时候应该妥协什么时候应该坚持.html',
                        audio: ''
                    },
                    {
                        id: '94a4ubqt2y5',
                        title: '29 | 加班：加班逃不过，如何用正确姿势加班？',
                        src:
                            './职场求生攻略/html/29加班加班逃不过如何用正确姿势加班【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/29加班加班逃不过如何用正确姿势加班【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: '9kfu2i66ozn',
                        title: '30 | 焦虑：程序员怎样才能越干越给力？',
                        src:
                            './职场求生攻略/html/30焦虑程序员怎样才能越干越给力【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/30焦虑程序员怎样才能越干越给力【更多IT资源www.cong0sousuo.top】.mp3'
                    },
                    {
                        id: '156jr4eyl9y',
                        title: '31 | 数据观：在你眼里，数据到底是什么？',
                        src:
                            './职场求生攻略/html/31数据观在你眼里数据到底是什么【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/31数据观在你眼里数据到底是什么【更多IT资源www.cong0sousuo.top】.mp3'
                    }
                ]
            },
            {
                id: '74a4c4y4hiz',
                title: '结束语',
                subList: [
                    {
                        id: 'jqyjr51or3r',
                        title: '结束语 | 职场的攀岩之路',
                        src:
                            './职场求生攻略/html/结束语职场的攀岩之路【更多IT资源www.cong0sousuo.top】.html',
                        audio:
                            './职场求生攻略/audio/结束语职场的攀岩之路【更多IT资源www.cong0sousuo.top】.mp3'
                    }
                ]
            },
            {
                id: 'djxv8iptm0t',
                title: '测试题',
                subList: [
                    {
                        id: '9a59vjnlkdx',
                        title: '结课测试 | 这些职场相关问题，你能答对多少？',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: '5d7omkp0jd6',
        type: 'skill',
        cid: '100051901',
        subTitle: '让你快速提升英语阅读能力 ',
        authorName: '陈亦峰',
        authorInfo: '原北外高级翻译学院同声传译讲师',
        contents: [
            {
                id: 'z38bfwe05dy',
                title: '课前必读',
                subList: [
                    {
                        id: 'c1mln7ojyv6',
                        title: '开篇词 | 把技能当知识，是学英语最大的坑',
                        src:
                            './互联网人的英语私教课/html/00开篇词把技能当知识是学英语最大的坑.html',
                        audio:
                            './互联网人的英语私教课/audio/00开篇词把技能当知识是学英语最大的坑.mp3'
                    },
                    {
                        id: '6ro046q6l0q',
                        title: '学习指南 | 我想和你交代下这门课的设计思路',
                        src:
                            './互联网人的英语私教课/html/00学习指南我想和你交代下这门课的设计思路.html',
                        audio:
                            './互联网人的英语私教课/audio/00学习指南我想和你交代下这门课的设计思路.mp3'
                    }
                ]
            },
            {
                id: 'fadxd8qb6jx',
                title: 'Article1：TheProduct-MindedSoftwareEngineer',
                subList: [
                    {
                        id: 'lksy49wc080',
                        title: '01｜导读：背景知识对于理解文章究竟有多重要？',
                        src:
                            './互联网人的英语私教课/html/01导读背景知识对于理解文章究竟有多重要.html',
                        audio:
                            './互联网人的英语私教课/audio/01导读背景知识对于理解文章究竟有多重要.mp3'
                    },
                    {
                        id: 'wmoxvgmva5y',
                        title: '02 | 什么时候适合用“词根词缀法”来背单词？',
                        src:
                            './互联网人的英语私教课/html/02什么时候适合用词根词缀法来背单词.html',
                        audio:
                            './互联网人的英语私教课/audio/02什么时候适合用词根词缀法来背单词.mp3'
                    },
                    {
                        id: 'nyd757wyls3',
                        title: '03｜到底要不要学语法？什么时候学比较好？',
                        src:
                            './互联网人的英语私教课/html/03到底要不要学语法什么时候学比较好.html',
                        audio:
                            './互联网人的英语私教课/audio/03到底要不要学语法什么时候学比较好.mp3'
                    },
                    {
                        id: 'bhkje5obcwg',
                        title: '每周一起背10句 | week 01',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week01.html',
                        audio: ''
                    },
                    {
                        id: 'd9qyplu66k1',
                        title: '04 | 从那些不规范的表达中，我们可以学到什么？',
                        src:
                            './互联网人的英语私教课/html/04从那些不规范的表达中我们可以学到什么.html',
                        audio:
                            './互联网人的英语私教课/audio/04从那些不规范的表达中我们可以学到什么.mp3'
                    },
                    {
                        id: 'p1tb6k9oav1',
                        title:
                            '05｜tradeoff 还是 trade-off？用连字符到底对不对？',
                        src:
                            './互联网人的英语私教课/html/05tradeoff还是tradeoff用连字符到底对不对.html',
                        audio:
                            './互联网人的英语私教课/audio/05tradeoff还是tradeoff用连字符到底对不对.mp3'
                    },
                    {
                        id: 'bqqus4w9t74',
                        title: '06｜小心那些平淡无奇、人畜无害的简单小词！',
                        src:
                            './互联网人的英语私教课/html/06小心那些平淡无奇人畜无害的简单小词.html',
                        audio:
                            './互联网人的英语私教课/audio/06小心那些平淡无奇人畜无害的简单小词.mp3'
                    },
                    {
                        id: '7wid768blen',
                        title: '每周一起背10句 | week 02',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week02.html',
                        audio: ''
                    },
                    {
                        id: 'z1cakw31try',
                        title: '07｜为什么虚拟语气一看就懂、一用就忘？',
                        src:
                            './互联网人的英语私教课/html/07为什么虚拟语气一看就懂一用就忘下.html',
                        audio:
                            './互联网人的英语私教课/audio/07为什么虚拟语气一看就懂一用就忘下.mp3'
                    },
                    {
                        id: '2rhr5fyrbp7',
                        title: '08｜带你一次性搞懂非限定性和限定性定语从句',
                        src:
                            './互联网人的英语私教课/html/08带你一次性搞懂非限定性和限定性定语从句.html',
                        audio:
                            './互联网人的英语私教课/audio/08带你一次性搞懂非限定性和限定性定语从句.mp3'
                    }
                ]
            },
            {
                id: 'vp8piq1q8m9',
                title: 'Article2：OpenSourceBenefitstoInnovationand…',
                subList: [
                    {
                        id: 'r5zqyo2072a',
                        title: '09 | 导读：通过阅读序言段了解文章的背景知识',
                        src:
                            './互联网人的英语私教课/html/09导读通过阅读序言段了解文章的背景知识.html',
                        audio:
                            './互联网人的英语私教课/audio/09导读通过阅读序言段了解文章的背景知识.mp3'
                    },
                    {
                        id: 'wisb8o4yscj',
                        title: '每周一起背10句 | week 03',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week03.html',
                        audio: ''
                    },
                    {
                        id: 'ycigqwkgkpp',
                        title: '10｜一切始于“主干”，万变不离其宗',
                        src:
                            './互联网人的英语私教课/html/10一切始于主干万变不离其宗.html',
                        audio:
                            './互联网人的英语私教课/audio/10一切始于主干万变不离其宗.mp3'
                    },
                    {
                        id: 'xjczrabzuri',
                        title: '11｜并列句 = 简单句 + 并列连词 + 简单句',
                        src:
                            './互联网人的英语私教课/html/11并列句=简单句+并列连词+简单句.html',
                        audio:
                            './互联网人的英语私教课/audio/11并列句=简单句+并列连词+简单句.mp3'
                    },
                    {
                        id: 'ysbu2qtthuc',
                        title: '12 | 谓语动词永远是英语句子的核心',
                        src:
                            './互联网人的英语私教课/html/12谓语动词永远是英语句子的核心.html',
                        audio:
                            './互联网人的英语私教课/audio/12谓语动词永远是英语句子的核心.mp3'
                    },
                    {
                        id: '1od4j29dc5u',
                        title: '每周一起背10句 | week 04',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week04.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '8f3zu1v9x40',
                title: 'Article3：SuccessfulRemoteWorking',
                subList: [
                    {
                        id: 'pn7q7b2dria',
                        title:
                            '13 | 导读：如何逐渐培养阅读习惯，快速抓住文章大意？',
                        src:
                            './互联网人的英语私教课/html/13导读如何逐渐培养阅读习惯快速抓住文章大意.html',
                        audio:
                            './互联网人的英语私教课/audio/13导读如何逐渐培养阅读习惯快速抓住文章大意.mp3'
                    },
                    {
                        id: '9u5osnlc3uu',
                        title: '14｜为什么介词如此“烦人”？',
                        src:
                            './互联网人的英语私教课/html/14为什么介词如此烦人.html',
                        audio:
                            './互联网人的英语私教课/audio/14为什么介词如此烦人.mp3'
                    },
                    {
                        id: '1p8m3rfhg8c',
                        title: '15｜同位语的两个重要作用',
                        src:
                            './互联网人的英语私教课/html/15同位语的两个重要作用.html',
                        audio:
                            './互联网人的英语私教课/audio/15同位语的两个重要作用.mp3'
                    },
                    {
                        id: '39aaxfs9c8d',
                        title: '每周一起背10句 | week 05',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week05.html',
                        audio: ''
                    },
                    {
                        id: '5offbd0nu52',
                        title: '16｜动词：英语宇宙的中心',
                        src:
                            './互联网人的英语私教课/html/16动词英语宇宙的中心.html',
                        audio:
                            './互联网人的英语私教课/audio/16动词英语宇宙的中心.mp3'
                    },
                    {
                        id: '38ul4wc22m7',
                        title: '17｜参透“主从分明”的树状结构，即可“庖丁解牛”',
                        src:
                            './互联网人的英语私教课/html/17参透主从分明的树状结构即可庖丁解牛.html',
                        audio:
                            './互联网人的英语私教课/audio/17参透主从分明的树状结构即可庖丁解牛.mp3'
                    }
                ]
            },
            {
                id: 'q3fi0qyyi2f',
                title: 'Aritcle4：BreakingthroughThreeCommon…',
                subList: [
                    {
                        id: 'qpurs3ev4lf',
                        title:
                            '18｜全篇通读（上）：从读懂一句话慢慢转向读懂一篇文章',
                        src:
                            './互联网人的英语私教课/html/18全篇通读上从读懂一句话慢慢转向读懂一篇文章.html',
                        audio:
                            './互联网人的英语私教课/audio/18全篇通读上从读懂一句话慢慢转向读懂一篇文章.mp3'
                    },
                    {
                        id: 'codyou1fnfk',
                        title: '每周一起背10句 | week 06',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week06.html',
                        audio: ''
                    },
                    {
                        id: '52izx5revo5',
                        title:
                            '19｜全篇通读（下）：不是所有的文章和书籍都值得读完',
                        src:
                            './互联网人的英语私教课/html/19全篇通读下不是所有的文章和书籍都值得读完.html',
                        audio:
                            './互联网人的英语私教课/audio/19全篇通读下不是所有的文章和书籍都值得读完.mp3'
                    },
                    {
                        id: 'mcmla68di9t',
                        title:
                            '20｜英语词汇学习的唯一有效途径：阅读、阅读、阅读',
                        src:
                            './互联网人的英语私教课/html/20英语词汇学习的唯一有效途径阅读阅读阅读.html',
                        audio:
                            './互联网人的英语私教课/audio/20英语词汇学习的唯一有效途径阅读阅读阅读.mp3'
                    },
                    {
                        id: 'jyso1g620wz',
                        title:
                            '21｜你和所有见过的单词或短语都只是加了“好友”而已',
                        src:
                            './互联网人的英语私教课/html/21你和所有见过的单词或短语都只是加了好友而已.html',
                        audio:
                            './互联网人的英语私教课/audio/21你和所有见过的单词或短语都只是加了好友而已.mp3'
                    },
                    {
                        id: 'x6efva256c5',
                        title: '每周一起背10句 | week 07',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week07.html',
                        audio: ''
                    },
                    {
                        id: '4ahq93xfsmw',
                        title: '22｜paraphrase：跨越阅读和写作两项技能的练习法',
                        src:
                            './互联网人的英语私教课/html/22paraphrase跨越阅读和写作两项技能的练习法.html',
                        audio:
                            './互联网人的英语私教课/audio/22paraphrase跨越阅读和写作两项技能的练习法.mp3'
                    },
                    {
                        id: 'dtrbezgt7f9',
                        title:
                            '23｜练习paraphrase的最终目的，是有一天可以不再需要它',
                        src:
                            './互联网人的英语私教课/html/23练习paraphrase的最终目的是有一天可以不再需要它.html',
                        audio:
                            './互联网人的英语私教课/audio/23练习paraphrase的最终目的是有一天可以不再需要它.mp3'
                    },
                    {
                        id: 'fu1t69s5gpn',
                        title: '24｜如何用“金字塔原理”来练习阅读和写作？',
                        src:
                            './互联网人的英语私教课/html/24如何用金字塔原理来练习阅读和写作.html',
                        audio:
                            './互联网人的英语私教课/audio/24如何用金字塔原理来练习阅读和写作.mp3'
                    },
                    {
                        id: '19y499ufgih',
                        title: '每周一起背10句 | week 08',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week08.html',
                        audio: ''
                    },
                    {
                        id: '0oyu7clzpcb',
                        title:
                            '25｜如何利用“30秒电梯原则”写出言简意赅的读书总结？',
                        src:
                            './互联网人的英语私教课/html/25如何利用30秒电梯原则写出言简意赅的读书总结.html',
                        audio:
                            './互联网人的英语私教课/audio/25如何利用30秒电梯原则写出言简意赅的读书总结.mp3'
                    }
                ]
            },
            {
                id: 'x0lrijtt1x3',
                title: "Article5：InfoQ's2019,andSoftwarePredictions…",
                subList: [
                    {
                        id: 't10wztpqcqy',
                        title:
                            '26 | 阅读准备：当我们谈论快速阅读时，我们究竟在谈论什么？',
                        src:
                            './互联网人的英语私教课/html/26阅读准备当我们谈论快速阅读时我们究竟在谈论什么.html',
                        audio:
                            './互联网人的英语私教课/audio/26阅读准备当我们谈论快速阅读时我们究竟在谈论什么.mp3'
                    },
                    {
                        id: 'ic3wp1lnesc',
                        title: '27 | 行业预测类文章，动词就是它的全部',
                        src:
                            './互联网人的英语私教课/html/27行业预测类文章动词就是它的全部.html',
                        audio:
                            './互联网人的英语私教课/audio/27行业预测类文章动词就是它的全部.mp3'
                    },
                    {
                        id: 'stfccx7uxsf',
                        title: '每周一起背10句 | week 09',
                        src:
                            './互联网人的英语私教课/html/每周一起背10句week09.html',
                        audio: ''
                    },
                    {
                        id: 'jbd1or41ibl',
                        title:
                            '28 | 没有经过相关专业训练，如何自学新的专业知识？',
                        src:
                            './互联网人的英语私教课/html/28没有经过相关专业训练如何自学新的专业知识.html',
                        audio:
                            './互联网人的英语私教课/audio/28没有经过相关专业训练如何自学新的专业知识.mp3'
                    },
                    {
                        id: 'q7ji3nwmc6i',
                        title:
                            '29 | 如何通过定期的主题阅读计划，个性化定制专属的语料库？',
                        src:
                            './互联网人的英语私教课/html/29如何通过定期的主题阅读计划个性化定制专属的语料库.html',
                        audio:
                            './互联网人的英语私教课/audio/29如何通过定期的主题阅读计划个性化定制专属的语料库.mp3'
                    },
                    {
                        id: '59j6rexfm3n',
                        title:
                            '30 | 突破实用型、技术类阅读，外面还有另一片星辰大海',
                        src:
                            './互联网人的英语私教课/html/30突破实用型技术类阅读外面还有另一片星辰大海.html',
                        audio:
                            './互联网人的英语私教课/audio/30突破实用型技术类阅读外面还有另一片星辰大海.mp3'
                    }
                ]
            },
            {
                id: 'e47l4tq345j',
                title: '加餐',
                subList: [
                    {
                        id: '9d6faxsgnj1',
                        title: '开学直播回顾 | 程序员如何阅读英语资料？',
                        src:
                            './互联网人的英语私教课/html/开学直播回顾程序员如何阅读英语资料.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'f1ue8ax35pq',
                title: '结束语',
                subList: [
                    {
                        id: '20qsj42nd4i',
                        title: '结束语 | 学英语也是修行',
                        src:
                            './互联网人的英语私教课/html/结束语学英语也是修行.html',
                        audio:
                            './互联网人的英语私教课/audio/结束语学英语也是修行.mp3'
                    }
                ]
            }
        ],
        title: '互联网人的英语私教课'
    },
    {
        id: 'k77ub3hrkje',
        type: 'skill',
        cid: '100002201',
        title: '左耳听风',
        subTitle: '洞悉技术的本质，享受科技的乐趣',
        authorName: '陈皓',
        authorInfo: '网名“左耳朵耗子”，资深技术专家，骨灰级程序员',
        contents: [
            {
                id: 'ynvxzztkwv6',
                title: '技术基础',
                subList: [
                    {
                        id: 'sbqmorq5zl6',
                        title: '开篇词  |  洞悉技术的本质，享受科技的乐趣',
                        src:
                            '左耳听风/html/__181__开篇词 _ 洞悉技术的本质，享受科技的乐趣.html',
                        audio: ''
                    },
                    {
                        id: 'n730yeadexz',
                        title: '01 | 程序员如何用技术变现（上）',
                        src:
                            '左耳听风/html/__183__01 _ 程序员如何用技术变现（上）.html',
                        audio: ''
                    },
                    {
                        id: '1y7ufcpi8nw',
                        title: '02 | 程序员如何用技术变现（下）',
                        src:
                            '左耳听风/html/__185__02 _ 程序员如何用技术变现（下）.html',
                        audio: ''
                    },
                    {
                        id: 'cja8e0au431',
                        title: '03 | Equifax信息泄露始末',
                        src:
                            '左耳听风/html/__281__03 _ Equifax信息泄露始末.html',
                        audio: ''
                    },
                    {
                        id: 'jt41aetsbpk',
                        title: '04 | 从Equifax信息泄露看数据安全',
                        src:
                            '左耳听风/html/__285__04 _ 从Equifax信息泄露看数据安全.html',
                        audio: ''
                    },
                    {
                        id: 'olga9ou4tqr',
                        title: '05 | 何为技术领导力？',
                        src: '左耳听风/html/__288__05 _ 何为技术领导力？.html',
                        audio: ''
                    },
                    {
                        id: '3ricnebadw7',
                        title: '06 | 如何才能拥有技术领导力？',
                        src:
                            '左耳听风/html/__291__06 _ 如何才能拥有技术领导力？.html',
                        audio: ''
                    },
                    {
                        id: 'ebzxz0jg3vo',
                        title: '07 | 推荐阅读：每个程序员都该知道的知识',
                        src:
                            '左耳听风/html/__471__07 _ 推荐阅读：每个程序员都该知道的知识.html',
                        audio: ''
                    },
                    {
                        id: 'w35d0imsq3o',
                        title: '08 | Go语言，Docker和新技术',
                        src:
                            '左耳听风/html/__294__08 _ Go语言，Docker和新技术.html',
                        audio: ''
                    },
                    {
                        id: 'axor8ejexp7',
                        title: '09 | 答疑解惑：渴望、热情和选择',
                        src:
                            '左耳听风/html/__540__09 _ 答疑解惑：渴望、热情和选择.html',
                        audio: ''
                    },
                    {
                        id: '44iw8xc95vt',
                        title: '10 | 如何成为一个大家愿意追随的Leader？',
                        src:
                            '左耳听风/html/__297__10 _ 如何成为一个大家愿意追随的Leader？.html',
                        audio: ''
                    },
                    {
                        id: '3h96ywhdgcc',
                        title: '11 | 程序中的错误处理：错误返回码和异常捕捉',
                        src:
                            '左耳听风/html/__675__11 _ 程序中的错误处理：错误返回码和异常捕捉.html',
                        audio: ''
                    },
                    {
                        id: 'tjonhb341og',
                        title:
                            '12 | 程序中的错误处理：异步编程以及我的最佳实践',
                        src:
                            '左耳听风/html/__693__12 _ 程序中的错误处理：异步编程以及我的最佳实践.html',
                        audio: ''
                    },
                    {
                        id: 'eihahmavvjs',
                        title: '13 | 魔数 0x5f3759df',
                        src: '左耳听风/html/__730__13 _ 魔数 0x5f3759df.html',
                        audio: ''
                    },
                    {
                        id: 'mjr9crv0thr',
                        title: '14 | 推荐阅读：机器学习101',
                        src:
                            '左耳听风/html/__862__14 _ 推荐阅读：机器学习101.html',
                        audio: ''
                    },
                    {
                        id: 'nhmj5v2a1ko',
                        title: '15 | 时间管理：同扭曲时间的事儿抗争',
                        src:
                            '左耳听风/html/__995__15 _ 时间管理：同扭曲时间的事儿抗争.html',
                        audio: ''
                    },
                    {
                        id: '6ywg3vkl5kn',
                        title: '16 | 时间管理：如何利用好自己的时间？',
                        src:
                            '左耳听风/html/__997__16 _ 时间管理：如何利用好自己的时间？.html',
                        audio: ''
                    },
                    {
                        id: '0xsu4hcfukd',
                        title: '17 | 故障处理最佳实践：应对故障',
                        src:
                            '左耳听风/html/__1059__17 _ 故障处理最佳实践：应对故障.html',
                        audio: ''
                    },
                    {
                        id: 'bdtqjzu3hf6',
                        title: '18 | 故障处理最佳实践：故障改进',
                        src:
                            '左耳听风/html/__1064__18 _ 故障处理最佳实践：故障改进.html',
                        audio: ''
                    },
                    {
                        id: 'id6qx7xqcdv',
                        title: '19 | 答疑解惑：我们应该能够识别的表象和本质',
                        src:
                            '左耳听风/html/__865__19 _ 答疑解惑：我们应该能够识别的表象和本质.html',
                        audio: ''
                    },
                    {
                        id: 'y4e3hv5f4r2',
                        title: '20 | Git协同工作流，你该怎么选？',
                        src:
                            '左耳听风/html/__2440__20 _ Git协同工作流，你该怎么选？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'w5d45ha4tvd',
                title: '分布式架构',
                subList: [
                    {
                        id: 'vcl55v9ms91',
                        title: '21 | 分布式系统架构的冰与火',
                        src:
                            '左耳听风/html/__1411__21 _ 分布式系统架构的冰与火.html',
                        audio: ''
                    },
                    {
                        id: 'g3bkso4nt2a',
                        title: '22 | 从亚马逊的实践，谈分布式系统的难点',
                        src:
                            '左耳听风/html/__1505__22 _ 从亚马逊的实践，谈分布式系统的难点.html',
                        audio: ''
                    },
                    {
                        id: '8cnuq254kgd',
                        title: '23 | 分布式系统的技术栈',
                        src:
                            '左耳听风/html/__1512__23 _ 分布式系统的技术栈.html',
                        audio: ''
                    },
                    {
                        id: 'lb46taagedp',
                        title: '24 | 分布式系统关键技术：全栈监控',
                        src:
                            '左耳听风/html/__1513__24 _ 分布式系统关键技术：全栈监控.html',
                        audio: ''
                    },
                    {
                        id: 'onfxcvnn05s',
                        title: '25 | 分布式系统关键技术：服务调度',
                        src:
                            '左耳听风/html/__1604__25 _ 分布式系统关键技术：服务调度.html',
                        audio: ''
                    },
                    {
                        id: 'uxuy7n9cter',
                        title: '26 | 分布式系统关键技术：流量与数据调度',
                        src:
                            '左耳听风/html/__1609__26 _ 分布式系统关键技术：流量与数据调度.html',
                        audio: ''
                    },
                    {
                        id: '39gsui41kiw',
                        title: '27 | 洞悉PaaS平台的本质',
                        src:
                            '左耳听风/html/__1610__27 _ 洞悉PaaS平台的本质.html',
                        audio: ''
                    },
                    {
                        id: 'w7wmg2qa129',
                        title: '28 | 推荐阅读：分布式系统架构经典资料',
                        src:
                            '左耳听风/html/__2080__28 _ 推荐阅读：分布式系统架构经典资料.html',
                        audio: ''
                    },
                    {
                        id: 'nez3kv58o85',
                        title: '29 | 推荐阅读：分布式数据调度相关论文',
                        src:
                            '左耳听风/html/__2421__29 _ 推荐阅读：分布式数据调度相关论文.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'a2df7xbvo8s',
                title: '编程范式',
                subList: [
                    {
                        id: 'a6wt7g5ktcq',
                        title: '30 | 编程范式游记（1）- 起源',
                        src:
                            '左耳听风/html/__301__30 _ 编程范式游记（1）- 起源.html',
                        audio: ''
                    },
                    {
                        id: 'qfvebh5943c',
                        title: '31 | 编程范式游记（2）- 泛型编程',
                        src:
                            '左耳听风/html/__303__31 _ 编程范式游记（2）- 泛型编程.html',
                        audio: ''
                    },
                    {
                        id: 'o76mvpkegql',
                        title: '32 | 编程范式游记（3） - 类型系统和泛型的本质',
                        src:
                            '左耳听风/html/__2017__32 _ 编程范式游记（3） - 类型系统和泛型的本质.html',
                        audio: ''
                    },
                    {
                        id: 'w67x47g34yk',
                        title: '33 | 编程范式游记（4）- 函数式编程',
                        src:
                            '左耳听风/html/__2711__33 _ 编程范式游记（4）- 函数式编程.html',
                        audio: ''
                    },
                    {
                        id: 'h16dpnbkrj4',
                        title: '34 | 编程范式游记（5）- 修饰器模式',
                        src:
                            '左耳听风/html/__2723__34 _ 编程范式游记（5）- 修饰器模式.html',
                        audio: ''
                    },
                    {
                        id: 'n1jevxh996l',
                        title: '35 | 编程范式游记（6）- 面向对象编程',
                        src:
                            '左耳听风/html/__2729__35 _ 编程范式游记（6）- 面向对象编程.html',
                        audio: ''
                    },
                    {
                        id: 'vz6a5zt1gfm',
                        title: '36 | 编程范式游记（7）- 基于原型的编程范式',
                        src:
                            '左耳听风/html/__2741__36 _ 编程范式游记（7）- 基于原型的编程范式.html',
                        audio: ''
                    },
                    {
                        id: 'qjbpsbxqkk3',
                        title: '37 | 编程范式游记（8）- Go 语言的委托模式',
                        src:
                            '左耳听风/html/__2748__37 _ 编程范式游记（8）- Go 语言的委托模式.html',
                        audio: ''
                    },
                    {
                        id: 'ojdlbhskpg7',
                        title: '38 | 编程范式游记（9）- 编程的本质',
                        src:
                            '左耳听风/html/__2751__38 _ 编程范式游记（9）- 编程的本质.html',
                        audio: ''
                    },
                    {
                        id: 'r3b52oifcx1',
                        title: '39 | 编程范式游记（10）- 逻辑编程范式',
                        src:
                            '左耳听风/html/__2752__39 _ 编程范式游记（10）- 逻辑编程范式.html',
                        audio: ''
                    },
                    {
                        id: '2wdez29jjnm',
                        title: '40 | 编程范式游记（11）- 程序世界里的编程范式',
                        src:
                            '左耳听风/html/__2754__40 _ 编程范式游记（11）- 程序世界里的编程范式.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'zh6vu46jw9i',
                title: '弹力设计',
                subList: [
                    {
                        id: 'n9aggsntia1',
                        title: '41 | 弹力设计篇之“认识故障和弹力设计”',
                        src:
                            '左耳听风/html/__3912__41 _ 弹力设计篇之“认识故障和弹力设计”.html',
                        audio: ''
                    },
                    {
                        id: 'jsihduw33b5',
                        title: '42 | 弹力设计篇之“隔离设计”',
                        src:
                            '左耳听风/html/__3917__42 _ 弹力设计篇之“隔离设计”.html',
                        audio: ''
                    },
                    {
                        id: 'y0bbloinfag',
                        title: '43 | 弹力设计篇之“异步通讯设计”',
                        src:
                            '左耳听风/html/__3926__43 _ 弹力设计篇之“异步通讯设计”.html',
                        audio: ''
                    },
                    {
                        id: 'hll4roukdtg',
                        title: '44 | 弹力设计篇之“幂等性设计”',
                        src:
                            '左耳听风/html/__4050__44 _ 弹力设计篇之“幂等性设计”.html',
                        audio: ''
                    },
                    {
                        id: '2lv76wbmram',
                        title: '45 | 弹力设计篇之“服务的状态”',
                        src:
                            '左耳听风/html/__4086__45 _ 弹力设计篇之“服务的状态”.html',
                        audio: ''
                    },
                    {
                        id: '2faafp1ldku',
                        title: '46 | 弹力设计篇之“补偿事务”',
                        src:
                            '左耳听风/html/__4087__46 _ 弹力设计篇之“补偿事务”.html',
                        audio: ''
                    },
                    {
                        id: '0tljloyka1p',
                        title: '47 | 弹力设计篇之“重试设计”',
                        src:
                            '左耳听风/html/__4121__47 _ 弹力设计篇之“重试设计”.html',
                        audio: ''
                    },
                    {
                        id: 'a30pz8aqdx6',
                        title: '48 | 弹力设计篇之“熔断设计”',
                        src:
                            '左耳听风/html/__4241__48 _ 弹力设计篇之“熔断设计”.html',
                        audio: ''
                    },
                    {
                        id: '38kbtmydu6g',
                        title: '49 | 弹力设计篇之“限流设计”',
                        src:
                            '左耳听风/html/__4245__49 _ 弹力设计篇之“限流设计”.html',
                        audio: ''
                    },
                    {
                        id: 'txjw9u61uzj',
                        title: '50 | 弹力设计篇之“降级设计”',
                        src:
                            '左耳听风/html/__4252__50 _ 弹力设计篇之“降级设计”.html',
                        audio: ''
                    },
                    {
                        id: '6f8hbb1usub',
                        title: '51 | 弹力设计篇之“弹力设计总结”',
                        src:
                            '左耳听风/html/__4253__51 _ 弹力设计篇之“弹力设计总结”.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'm8un762jidy',
                title: '管理设计',
                subList: [
                    {
                        id: '8zbrjc1akw2',
                        title: '52 | 管理设计篇之“分布式锁”',
                        src:
                            '左耳听风/html/__5175__52 _ 管理设计篇之“分布式锁”.html',
                        audio: ''
                    },
                    {
                        id: 'esim03t3bz2',
                        title: '53 | 管理设计篇之“配置中心”',
                        src:
                            '左耳听风/html/__5819__53 _ 管理设计篇之“配置中心”.html',
                        audio: ''
                    },
                    {
                        id: 'byyyq31n5s7',
                        title: '54 | 管理设计篇之“边车模式”',
                        src:
                            '左耳听风/html/__5909__54 _ 管理设计篇之“边车模式”.html',
                        audio: ''
                    },
                    {
                        id: 'je9ykbrwbe0',
                        title: '55 | 管理设计篇之“服务网格”',
                        src:
                            '左耳听风/html/__5920__55 _ 管理设计篇之“服务网格”.html',
                        audio: ''
                    },
                    {
                        id: 'vk8cl0omskl',
                        title: '56 | 管理设计篇之“网关模式”',
                        src:
                            '左耳听风/html/__6086__56 _ 管理设计篇之“网关模式”.html',
                        audio: ''
                    },
                    {
                        id: 'ov93fil5s0y',
                        title: '57 | 管理设计篇之“部署升级策略”',
                        src:
                            '左耳听风/html/__6283__57 _ 管理设计篇之“部署升级策略”.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '95rjp4eyn9l',
                title: '性能设计',
                subList: [
                    {
                        id: '8ef8ptto4iw',
                        title: '58 | 性能设计篇之“缓存”',
                        src:
                            '左耳听风/html/__6282__58 _ 性能设计篇之“缓存”.html',
                        audio: ''
                    },
                    {
                        id: '2sghqt0w0qv',
                        title: '59 | 性能设计篇之“异步处理”',
                        src:
                            '左耳听风/html/__7036__59 _ 性能设计篇之“异步处理”.html',
                        audio: ''
                    },
                    {
                        id: 'x0872p41zbf',
                        title: '60 | 性能设计篇之“数据库扩展”',
                        src:
                            '左耳听风/html/__7045__60 _ 性能设计篇之“数据库扩展”.html',
                        audio: ''
                    },
                    {
                        id: 't019wmjrj94',
                        title: '61 | 性能设计篇之“秒杀”',
                        src:
                            '左耳听风/html/__7047__61 _ 性能设计篇之“秒杀”.html',
                        audio: ''
                    },
                    {
                        id: 'fxs0g9hljpi',
                        title: '62 | 性能设计篇之“边缘计算”',
                        src:
                            '左耳听风/html/__7086__62 _ 性能设计篇之“边缘计算”.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'ftemgh2bskn',
                title: '区块链',
                subList: [
                    {
                        id: 'o6d689g8be1',
                        title: '63 | 区块链技术的本质',
                        src: '左耳听风/html/__5197__63 _ 区块链技术的本质.html',
                        audio: ''
                    },
                    {
                        id: 'wrr7o3ekvhj',
                        title: '64 | 区块链技术细节：哈希算法',
                        src:
                            '左耳听风/html/__5363__64 _ 区块链技术细节：哈希算法.html',
                        audio: ''
                    },
                    {
                        id: 'ijo54zh70y0',
                        title: '65 |  区块链技术细节：加密和挖矿',
                        src:
                            '左耳听风/html/__5438__65 _ 区块链技术细节：加密和挖矿.html',
                        audio: ''
                    },
                    {
                        id: 's2kcmov0ml6',
                        title: '66 | 区块链技术细节：去中心化的共识机制',
                        src:
                            '左耳听风/html/__5612__66 _ 区块链技术细节：去中心化的共识机制.html',
                        audio: ''
                    },
                    {
                        id: '4ffrlk1y4eg',
                        title: '67 | 区块链技术细节：智能合约',
                        src:
                            '左耳听风/html/__5623__67 _ 区块链技术细节：智能合约.html',
                        audio: ''
                    },
                    {
                        id: '34qm3295747',
                        title: '68 | 区块链技术 - 传统金融和虚拟货币',
                        src:
                            '左耳听风/html/__5636__68 _ 区块链技术 - 传统金融和虚拟货币.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'eg42ogcq3ki',
                title: '程序员练级攻略',
                subList: [
                    {
                        id: 'rqxur1bfyrz',
                        title: '69 | 程序员练级攻略：开篇词',
                        src:
                            '左耳听风/html/__8136__69 _ 程序员练级攻略：开篇词.html',
                        audio: ''
                    },
                    {
                        id: '1eiqykeutpj',
                        title: '70 | 程序员练级攻略：零基础启蒙',
                        src:
                            '左耳听风/html/__8216__70 _ 程序员练级攻略：零基础启蒙.html',
                        audio: ''
                    },
                    {
                        id: 'feh4jaohi0p',
                        title: '71 | 程序员练级攻略：正式入门',
                        src:
                            '左耳听风/html/__8217__71 _ 程序员练级攻略：正式入门.html',
                        audio: ''
                    },
                    {
                        id: '0018a9xo7u0',
                        title: '72 | 程序员练级攻略：程序员修养',
                        src:
                            '左耳听风/html/__8700__72 _ 程序员练级攻略：程序员修养.html',
                        audio: ''
                    },
                    {
                        id: 'cncajpib0ya',
                        title: '73 | 程序员练级攻略：编程语言',
                        src:
                            '左耳听风/html/__8701__73 _ 程序员练级攻略：编程语言.html',
                        audio: ''
                    },
                    {
                        id: '34w5tsbe4nj',
                        title: '74 | 程序员练级攻略：理论学科',
                        src:
                            '左耳听风/html/__8887__74 _ 程序员练级攻略：理论学科.html',
                        audio: ''
                    },
                    {
                        id: '7amh6q02ivq',
                        title: '75 | 程序员练级攻略：系统知识',
                        src:
                            '左耳听风/html/__8888__75 _ 程序员练级攻略：系统知识.html',
                        audio: ''
                    },
                    {
                        id: '6wgy7xkzo05',
                        title: '76 | 程序员练级攻略：软件设计',
                        src:
                            '左耳听风/html/__9369__76 _ 程序员练级攻略：软件设计.html',
                        audio: ''
                    },
                    {
                        id: 'u4h70emvh0u',
                        title: '77 | 程序员练级攻略：Linux系统、内存和网络',
                        src:
                            '左耳听风/html/__9759__77 _ 程序员练级攻略：Linux系统、内存和网络.html',
                        audio: ''
                    },
                    {
                        id: 'a5rp73id741',
                        title:
                            '78 | 程序员练级攻略：异步I/O模型和Lock-Free编程',
                        src:
                            '左耳听风/html/__9851__78 _ 程序员练级攻略：异步I_O模型和Lock-Free编程.html',
                        audio: ''
                    },
                    {
                        id: '5d0r35tjhvu',
                        title: '79 | 程序员练级攻略：Java底层知识',
                        src:
                            '左耳听风/html/__10216__79 _ 程序员练级攻略：Java底层知识.html',
                        audio: ''
                    },
                    {
                        id: 'y71icrtmqkm',
                        title: '80 | 程序员练级攻略：数据库',
                        src:
                            '左耳听风/html/__10301__80 _ 程序员练级攻略：数据库.html',
                        audio: ''
                    },
                    {
                        id: '31damzr330i',
                        title: '81 | 程序员练级攻略：分布式架构入门',
                        src:
                            '左耳听风/html/__10603__81 _ 程序员练级攻略：分布式架构入门.html',
                        audio: ''
                    },
                    {
                        id: '2k6opf66e4j',
                        title: '82 | 程序员练级攻略：分布式架构经典图书和论文',
                        src:
                            '左耳听风/html/__10604__82 _ 程序员练级攻略：分布式架构经典图书和论文.html',
                        audio: ''
                    },
                    {
                        id: 'fvqtnyjqmlw',
                        title: '83 | 程序员练级攻略：分布式架构工程设计',
                        src:
                            '左耳听风/html/__11232__83 _ 程序员练级攻略：分布式架构工程设计.html',
                        audio: ''
                    },
                    {
                        id: '7vnaqihp2yb',
                        title: '84 | 程序员练级攻略：微服务',
                        src:
                            '左耳听风/html/__11116__84 _ 程序员练级攻略：微服务.html',
                        audio: ''
                    },
                    {
                        id: 'nzdisfg1dir',
                        title: '85 | 程序员练级攻略：容器化和自动化运维',
                        src:
                            '左耳听风/html/__11665__85 _ 程序员练级攻略：容器化和自动化运维.html',
                        audio: ''
                    },
                    {
                        id: 'xpce42vir0a',
                        title: '86 | 程序员练级攻略：机器学习和人工智能',
                        src:
                            '左耳听风/html/__11669__86 _ 程序员练级攻略：机器学习和人工智能.html',
                        audio: ''
                    },
                    {
                        id: '0attlhdo2bx',
                        title: '87 | 程序员练级攻略：前端基础和底层原理',
                        src:
                            '左耳听风/html/__12271__87 _ 程序员练级攻略：前端基础和底层原理.html',
                        audio: ''
                    },
                    {
                        id: 'pk7b1m1cqfk',
                        title: '88 | 程序员练级攻略：前端性能优化和框架',
                        src:
                            '左耳听风/html/__12389__88 _ 程序员练级攻略：前端性能优化和框架.html',
                        audio: ''
                    },
                    {
                        id: 'qr6twnmvgen',
                        title: '89 | 程序员练级攻略：UI/UX设计',
                        src:
                            '左耳听风/html/__12486__89 _ 程序员练级攻略：UI_UX设计.html',
                        audio: ''
                    },
                    {
                        id: 'byndic41sz8',
                        title: '90 | 程序员练级攻略：技术资源集散地',
                        src:
                            '左耳听风/html/__12561__90 _ 程序员练级攻略：技术资源集散地.html',
                        audio: ''
                    },
                    {
                        id: '6livrookul8',
                        title: '91 | 程序员练级攻略的正确打开方式',
                        src:
                            '左耳听风/html/__242946__91 _ 程序员练级攻略的正确打开方式.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'blahvexv46a',
                title: '程序员面试攻略',
                subList: [
                    {
                        id: '3f3ghscfivz',
                        title: '92 | 程序员面试攻略：面试前的准备',
                        src:
                            '左耳听风/html/__13067__92 _ 程序员面试攻略：面试前的准备.html',
                        audio: ''
                    },
                    {
                        id: 'y14bg88sbrf',
                        title: '93 | 程序员面试攻略：面试中的技巧',
                        src:
                            '左耳听风/html/__13069__93 _ 程序员面试攻略：面试中的技巧.html',
                        audio: ''
                    },
                    {
                        id: '3n4y5jzqxt5',
                        title: '94 | 程序员面试攻略：面试风格',
                        src:
                            '左耳听风/html/__13191__94 _ 程序员面试攻略：面试风格.html',
                        audio: ''
                    },
                    {
                        id: 'wpjie8yvkww',
                        title: '95 | 程序员面试攻略：实力才是王中王',
                        src:
                            '左耳听风/html/__13192__95 _ 程序员面试攻略：实力才是王中王.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'gitycfl05el',
                title: '高效学习',
                subList: [
                    {
                        id: 'ixk3t2sl7xu',
                        title: '96 | 高效学习：端正学习态度',
                        src:
                            '左耳听风/html/__14271__96 _ 高效学习：端正学习态度.html',
                        audio: ''
                    },
                    {
                        id: '5kr31w8t2xm',
                        title: '97 | 高效学习：源头、原理和知识地图',
                        src:
                            '左耳听风/html/__14321__97 _ 高效学习：源头、原理和知识地图.html',
                        audio: ''
                    },
                    {
                        id: 'avisxbzyhap',
                        title: '98 | 高效学习：深度，归纳和坚持实践',
                        src:
                            '左耳听风/html/__14360__98 _ 高效学习：深度，归纳和坚持实践.html',
                        audio: ''
                    },
                    {
                        id: '8aux6itp8jo',
                        title: '99 | 高效学习：如何学习和阅读代码',
                        src:
                            '左耳听风/html/__14380__99 _ 高效学习：如何学习和阅读代码.html',
                        audio: ''
                    },
                    {
                        id: 'ne1oks7zk41',
                        title: '100 | 高效学习：面对枯燥和量大的知识',
                        src:
                            '左耳听风/html/__14389__100 _ 高效学习：面对枯燥和量大的知识.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'g3kb8hb9u86',
                title: '高效沟通',
                subList: [
                    {
                        id: 'vdjrwfntwu8',
                        title: '101 | 高效沟通：Talk和Code同等重要',
                        src:
                            '左耳听风/html/__28550__101 _ 高效沟通：Talk和Code同等重要.html',
                        audio: ''
                    },
                    {
                        id: 'm5wyp9299pt',
                        title: '102 | 高效沟通：沟通阻碍和应对方法',
                        src:
                            '左耳听风/html/__32619__102 _ 高效沟通：沟通阻碍和应对方法.html',
                        audio: ''
                    },
                    {
                        id: 'mspnym6n9r2',
                        title: '103 | 高效沟通：沟通方式及技巧',
                        src:
                            '左耳听风/html/__32796__103 _ 高效沟通：沟通方式及技巧.html',
                        audio: ''
                    },
                    {
                        id: 'rjk3zofjp2k',
                        title: '104 | 高效沟通：沟通技术',
                        src:
                            '左耳听风/html/__32902__104 _ 高效沟通：沟通技术.html',
                        audio: ''
                    },
                    {
                        id: '4uvktosckp4',
                        title: '105 | 高效沟通：好老板要善于提问',
                        src:
                            '左耳听风/html/__33112__105 _ 高效沟通：好老板要善于提问.html',
                        audio: ''
                    },
                    {
                        id: 'ttwml5yeb48',
                        title: '106 | 高效沟通：好好说话的艺术',
                        src:
                            '左耳听风/html/__41008__106 _ 高效沟通：好好说话的艺术.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'axjyscikwks',
                title: 'Go语言编程模式',
                subList: [
                    {
                        id: 'tyk41f2cps7',
                        title: '107 | Go编程模式：切片、接口、时间和性能',
                        src:
                            '左耳听风/html/__332600__107 _ Go编程模式：切片、接口、时间和性能.html',
                        audio: ''
                    },
                    {
                        id: 'kdh5fu7elk4',
                        title: '108 | Go 编程模式：错误处理',
                        src:
                            '左耳听风/html/__332602__108 _ Go 编程模式：错误处理.html',
                        audio: ''
                    },
                    {
                        id: 'sutjecka1fc',
                        title: '109 | Go 编程模式：Functional Options',
                        src:
                            '左耳听风/html/__332603__109 _ Go 编程模式：Functional Options.html',
                        audio: ''
                    },
                    {
                        id: 'txh6oh3busb',
                        title: '110 | Go编程模式：委托和反转控制',
                        src:
                            '左耳听风/html/__332605__110 _ Go编程模式：委托和反转控制.html',
                        audio: ''
                    },
                    {
                        id: '3n9085levjw',
                        title: '111 | Go 编程模式：Map-Reduce',
                        src:
                            '左耳听风/html/__332606__111 _ Go 编程模式：Map-Reduce.html',
                        audio: ''
                    },
                    {
                        id: 'vwojlr0p009',
                        title: '112 | Go 编程模式：Go Generation',
                        src:
                            '左耳听风/html/__332607__112 _ Go 编程模式：Go Generation.html',
                        audio: ''
                    },
                    {
                        id: '44t9my1k0ro',
                        title: '113 | Go编程模式：修饰器',
                        src:
                            '左耳听风/html/__332608__113 _ Go编程模式：修饰器.html',
                        audio: ''
                    },
                    {
                        id: 'ptbpb86k987',
                        title: '114 | Go编程模式：Pipeline',
                        src:
                            '左耳听风/html/__332610__114 _ Go编程模式：Pipeline.html',
                        audio: ''
                    },
                    {
                        id: 'niifj36sotj',
                        title: '115 | Go 编程模式：Kubernetes Visitor模式',
                        src:
                            '左耳听风/html/__332612__115 _ Go 编程模式：Kubernetes Visitor模式.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'cj9zddvz2jx',
                title: '尾声&加餐',
                subList: [
                    {
                        id: 'u7piyy0f5aw',
                        title: '结束语 | 业精于勤，行成于思',
                        src:
                            '左耳听风/html/__41118__结束语 _ 业精于勤，行成于思.html',
                        audio: ''
                    },
                    {
                        id: '02h4fnpb3bw',
                        title: '加餐 | 谈谈我的“三观”',
                        src:
                            '左耳听风/html/__84603__加餐 _ 谈谈我的“三观”.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        title: '白话法律',
        id: 'm0tm2gazgkb',
        type: 'skill',
        cid: '100020001',
        subTitle: '为程序员打造的专属法律武器',
        authorName: '周甲德',
        authorInfo: '京师律师事务所合伙人，资深律师',
        contents: [
            {
                id: 'b5560awq7bl',
                title: '认知篇',
                subList: [
                    {
                        id: '6ng4fv0l7ii',
                        title: '01 “老周，我想知道” | 常见法律认知盲区（一）',
                        src:
                            './白话法律/html/01“老周，我想知道”讲常见法律认知盲区（一）.html'
                    },
                    {
                        id: 'v4m14dk8zhq',
                        title: '02 “老周，我想知道” | 律师就在你身边（二）',
                        src:
                            './白话法律/html/02“老周，我想知道”讲律师就在你身边（二）.html'
                    },
                    {
                        id: 'gv8d27zbhcl',
                        title: '03 “老周，我想知道” | 律师就在你身边（三）',
                        src:
                            './白话法律/html/03“老周，我想知道”讲律师就在你身边（三）.html'
                    },
                    {
                        id: 'ukn1twg60r9',
                        title: '04 “老周，我想知道” | 律师就在你身边（四）',
                        src:
                            './白话法律/html/04“老周，我想知道”讲律师就在你身边（四）.html'
                    }
                ]
            },
            {
                id: 'dsro49c2o4h',
                title: '职场篇',
                subList: [
                    {
                        id: '976nglgwbw9',
                        title: '05 | 创业未捷老板跑，社保工资哪里讨？',
                        src:
                            './白话法律/html/05讲创业未捷老板跑，社保工资哪里讨.html'
                    },
                    {
                        id: 'plge28fdltw',
                        title: '06 | 保密还是“卖身”，霸王条款怎么看？',
                        src:
                            './白话法律/html/06讲保密还是“卖身”，霸王条款怎么看.html'
                    },
                    {
                        id: 'n4c8ob7b3tp',
                        title: '07 | 编造流言蹭热度？看守所里降温度！',
                        src:
                            './白话法律/html/07讲编造流言蹭热度看守所里降温度！.html'
                    },
                    {
                        id: 'vqojzasmq10',
                        title: '08 | 合同在手欠款难收，报警有用吗？',
                        src:
                            './白话法律/html/08讲合同在手欠款难收，报警有用吗.html'
                    },
                    {
                        id: 'sa5imqxe7fg',
                        title: '09 | 致创业：谁动了我的股权？',
                        src: './白话法律/html/09讲致创业：谁动了我的股权.html'
                    },
                    {
                        id: 'owx500o0qxe',
                        title: '10 | 又见猝死！工“殇”究竟是不是工伤？',
                        src:
                            './白话法律/html/10讲又见猝死！工“殇”究竟是不是工伤.html'
                    },
                    {
                        id: 'ntw41uqmlwu',
                        title: '11 | 期权的“前世今生”',
                        src: './白话法律/html/11讲期权的“前世今生”.html'
                    },
                    {
                        id: 'scmahkumxat',
                        title: '12 | 裁员面前，你能做的还有什么？',
                        src:
                            './白话法律/html/12讲裁员面前，你能做的还有什么.html'
                    },
                    {
                        id: '9omofku3416',
                        title: '13 | 抄袭、盗图为什么做不得？',
                        src: './白话法律/html/13讲抄袭、盗图为什么做不得.html'
                    },
                    {
                        id: '7rx11srl21g',
                        title: '14 | 加班、工资、休假，你知道多少？',
                        src:
                            './白话法律/html/14讲加班、工资、休假，你知道多少.html'
                    },
                    {
                        id: 'lkonllzdl0x',
                        title: '15 | 受贿原来这么“容易”',
                        src: './白话法律/html/15讲受贿原来这么“容易”.html'
                    }
                ]
            },
            {
                id: 'qyzhwskhe9l',
                title: '技术篇',
                subList: [
                    {
                        id: '5emneu9676c',
                        title: '16 | 今天你用“VPN”了吗？',
                        src: './白话法律/html/16讲今天你用“VPN”了吗.html'
                    },
                    {
                        id: '1z6lveu6xhk',
                        title: '17 | 漏洞在眼前，可以悄悄破解吗？',
                        src:
                            './白话法律/html/17讲漏洞在眼前，可以悄悄破解吗.html'
                    },
                    {
                        id: 'yvpy59qv78o',
                        title: '18 | “爬虫”真的合法吗？',
                        src: './白话法律/html/18讲“爬虫”真的合法吗.html'
                    },
                    {
                        id: 'lygqx7a6gfr',
                        title: '19 | 非法集资到底是个啥？',
                        src: './白话法律/html/19讲非法集资到底是个啥.html'
                    },
                    {
                        id: 'zlgqtburlap',
                        title: '20 | 黄色网站？不仅仅是“黄色”罪名',
                        src:
                            './白话法律/html/20讲黄色网站不仅仅是“黄色”罪名.html'
                    },
                    {
                        id: '6b88x7u1pqg',
                        title: '21 | 谁修改了我的积分资产？',
                        src: './白话法律/html/21讲谁修改了我的积分资产.html'
                    },
                    {
                        id: 'ab26sa6mwa1',
                        title: '22 | 外挂真能大吉大利吗？',
                        src: './白话法律/html/22讲外挂真能大吉大利吗.html'
                    },
                    {
                        id: '12v2h7o2a4k',
                        title: '23 | 如何看待“从删库到跑路”？',
                        src: './白话法律/html/23讲如何看待“从删库到跑路”.html'
                    },
                    {
                        id: '18ctvo47umv',
                        title: '24 | “伪基站”是你的避风港吗？',
                        src: './白话法律/html/24讲“伪基站”是你的避风港吗.html'
                    },
                    {
                        id: 'n5ap793dmsq',
                        title: '25 | “网络诈骗”真的离你很远吗？',
                        src: './白话法律/html/25讲“网络诈骗”真的离你很远吗.html'
                    }
                ]
            },
            {
                id: '0vzcvn8njt9',
                title: '生活篇',
                subList: [
                    {
                        id: 'ap0lrim5wia',
                        title: '26 | 智斗中介：“北上广”租房图鉴',
                        src:
                            './白话法律/html/26讲智斗中介：“北上广”租房图鉴.html'
                    },
                    {
                        id: 'iasyhaflezm',
                        title: '27 | 买买买！买房的“避坑”指南',
                        src: './白话法律/html/27讲买买买！买房的“避坑”指南.html'
                    },
                    {
                        id: 'h37uoy2v67z',
                        title: '28 | 闪婚又闪离，彩礼怎么理？',
                        src: './白话法律/html/28讲闪婚又闪离，彩礼怎么理.html'
                    },
                    {
                        id: 'cl94pxvi3k5',
                        title: '29 | 离婚还想和平？你要这么做',
                        src: './白话法律/html/29讲离婚还想和平你要这么做.html'
                    },
                    {
                        id: 'lh99agt4ie4',
                        title: '30 | 遗产继承的爱恨情仇',
                        src: './白话法律/html/30讲遗产继承的爱恨情仇.html'
                    },
                    {
                        id: 'vn8p1wewa17',
                        title: '31 | 骗术升级？假结婚、假离婚的那些事儿',
                        src:
                            './白话法律/html/31讲骗术升级假结婚、假离婚的那些事儿.html'
                    },
                    {
                        id: 'utezxfj1idg',
                        title: '32 | 孩子学校受伤，谁之过？',
                        src: './白话法律/html/32讲孩子学校受伤，谁之过.html'
                    },
                    {
                        id: 'bravgr42vn0',
                        title: '33 | 如何让欠债还钱真正“天经地义”？',
                        src:
                            './白话法律/html/33讲如何让欠债还钱真正“天经地义”.html'
                    },
                    {
                        id: 'vr0rxc6dmub',
                        title: '34 | 从透支到盗刷：人人须知的银行卡纠纷',
                        src:
                            './白话法律/html/34讲从透支到盗刷：人人须知的银行卡纠纷.html'
                    },
                    {
                        id: 'as17c319pv0',
                        title: '35 | 远离“套路贷”的套路大全',
                        src: './白话法律/html/35讲远离“套路贷”的套路大全.html'
                    },
                    {
                        id: '90wqxmpfhgx',
                        title: '36 | 危险！酒驾为什么被罚那么重？',
                        src:
                            './白话法律/html/36讲危险！酒驾为什么被罚那么重.html'
                    },
                    {
                        id: 'p59l3ynzkei',
                        title: '37 | 老人倒地，“扶”“不服”？',
                        src: './白话法律/html/37讲老人倒地，“扶”“不服”.html'
                    },
                    {
                        id: 'lsbdzrlhrnv',
                        title: '38 | “能动手就别吵吵”，代价你真的知道吗？',
                        src:
                            './白话法律/html/38讲“能动手就别吵吵”，代价你真的知道吗.html'
                    },
                    {
                        id: '651d8b293hu',
                        title: '39 | 发生交通事故，如何处理？',
                        src: './白话法律/html/39讲发生交通事故，如何处理.html'
                    },
                    {
                        id: '7cw1btwgxri',
                        title: '40 | 交通事故综合法宝',
                        src: './白话法律/html/40讲交通事故综合法宝.html'
                    },
                    {
                        id: '5yo8cwtpvcf',
                        title: '41 | 婚姻家庭综合法宝',
                        src: './白话法律/html/41讲婚姻家庭综合法宝.html'
                    },
                    {
                        id: '399bf9if3v0',
                        title: '42 | 买卖房屋综合法宝',
                        src: './白话法律/html/42讲买卖房屋综合法宝.html'
                    }
                ]
            }
        ]
    },
    {
        title: '面试现场',
        type: 'skill',
        id: 'zh82axor9hz',
        cid: '100023401',
        subTitle: '面试只是起点，能力才是终局',
        authorName: '白海飞',
        authorInfo: 'IBM软件商务系统经理',
        contents: [
            {
                id: 'xdy7q62sbbj',
                title: '开篇词',
                subList: [
                    {
                        id: 'nx8axzldoey',
                        title: '开篇词 | 面试，这样做会功到自然成',
                        src:
                            './面试现场/html/00开篇词面试这样做会功到自然成.html'
                    }
                ]
            },
            {
                id: 'wye7gzo83v2',
                title: '基础：知彼篇',
                subList: [
                    {
                        id: 'jd0evck8jy1',
                        title: '01 | 公司到底想要什么样的人？',
                        src: './面试现场/html/01公司到底想要什么样的人.html'
                    },
                    {
                        id: 'riumbln5gq4',
                        title: '02 | 想要成功面试，先要弄懂面试过程',
                        src:
                            './面试现场/html/02想要成功面试先要弄懂面试过程.html'
                    },
                    {
                        id: '1gfb2lonhvc',
                        title: '03 | 面试官的面试逻辑是什么？',
                        src: './面试现场/html/03面试官的面试逻辑是什么.html'
                    }
                ]
            },
            {
                id: 'n7iasstizv0',
                title: '基础：知己篇',
                subList: [
                    {
                        id: 'xxk7v51u3q5',
                        title: '04 | 现在的你，到底该不该换工作',
                        src: './面试现场/html/04现在的你到底该不该换工作.html'
                    },
                    {
                        id: 'ptkw132x9r7',
                        title: '05 | 喜欢或擅长的工作，你该选哪一个？',
                        src:
                            './面试现场/html/06喜欢或擅长的工作你该选哪一个.html'
                    },
                    {
                        id: 'jftt240ep9w',
                        title: '06 | 职业规划一：你真的想好要怎么发展了吗？',
                        src:
                            './面试现场/html/07职业规划一你真的想好要怎么发展了吗.html'
                    },
                    {
                        id: 'udb05t0ebmh',
                        title: '07 | 职业规划二：程序员后来都去干啥了？',
                        src:
                            './面试现场/html/09职业规划二程序员后来都去干啥了.html'
                    },
                    {
                        id: 'gqxf4qzkiln',
                        title: '08 | 如何让你的简历更受青睐',
                        src: './面试现场/html/10如何让你的简历更受青睐.html'
                    },
                    {
                        id: '6r1par4hr1y',
                        title: '09 | 经历没有亮点可讲？你需要做份“详历”',
                        src:
                            './面试现场/html/12经历没有亮点可讲你需要做份详历.html'
                    },
                    {
                        id: '5s9end7adxm',
                        title: '10 | 面试紧张怎么办？',
                        src: './面试现场/html/13面试紧张怎么办.html'
                    },
                    {
                        id: 'gt9pzx2axma',
                        title: '11 | 面试答疑（一）：说说你面试中的一些困惑',
                        src:
                            './面试现场/html/14面试答疑一说说你面试中的一些困惑.html'
                    }
                ]
            },
            {
                id: 'he8q0zeg4hl',
                title: '问答篇',
                subList: [
                    {
                        id: 'ceimwng5uj3',
                        title: '12 |  如何做好开场：给自我介绍加“特效”',
                        src:
                            './面试现场/html/15如何做好开场给自我介绍加特效.html'
                    },
                    {
                        id: 'ub72t2bk9q3',
                        title: '13 | 你真能讲明白技术吗?',
                        src: './面试现场/html/16你真能讲明白技术吗.html'
                    },
                    {
                        id: 'atjxx857dyq',
                        title: '14 | 怎样展示你在项目中的重要性？',
                        src: './面试现场/html/18怎样展示你在项目中的重要性.html'
                    },
                    {
                        id: 'snmwhp2eqaw',
                        title: '15 | 如何认识自己的优缺点？',
                        src: './面试现场/html/19如何认识自己的优缺点.html'
                    },
                    {
                        id: '8e6m5u1ajna',
                        title: '16 | 透过兴趣爱好，面试官可以看出什么？',
                        src:
                            './面试现场/html/21透过兴趣爱好面试官可以看出什么.html'
                    },
                    {
                        id: 'z71hxpcebeh',
                        title: '17 | 如何让你的回答更到位？',
                        src: './面试现场/html/22如何让你的回答更到位.html'
                    },
                    {
                        id: 'dk75zv6avb5',
                        title: '18 | 被面试官问住了怎么办？',
                        src: './面试现场/html/24被面试官问住了怎么办.html'
                    },
                    {
                        id: '6kj9bfqvlp0',
                        title: '19 | 应该如何向面试官提问？',
                        src: './面试现场/html/25应该如何向面试官提问.html'
                    },
                    {
                        id: 'pi0f5y2vf2h',
                        title: '20 | 怎么谈薪水比较好？',
                        src: './面试现场/html/26怎么谈薪水比较好.html'
                    },
                    {
                        id: 'wf6ynj2xfhs',
                        title: '21 | 面试答疑（二）：面试问答环节的一些思考',
                        src:
                            './面试现场/html/27面试答疑二面试问答环节的一些思考.html'
                    }
                ]
            },
            {
                id: 'ilkzqia2oth',
                title: '贯通篇',
                subList: [
                    {
                        id: '4o25lslwrz9',
                        title: '22 | 怎样体现你的学习能力强？',
                        src: './面试现场/html/28怎样体现你的学习能力强.html'
                    },
                    {
                        id: 'virrbo13ykl',
                        title: '23 | 怎么体现你能把工作越做越好？',
                        src: './面试现场/html/30怎么体现你能把工作越做越好.html'
                    },
                    {
                        id: 'piegmku0t9u',
                        title: '24 | 怎样体现你的协作能力强？',
                        src: './面试现场/html/31怎样体现你的协作能力强.html'
                    },
                    {
                        id: 'fz2kn2go5s4',
                        title: '25 | 不是领导，怎么体现你的领导力？',
                        src: './面试现场/html/32不是领导怎么体现你的领导力.html'
                    },
                    {
                        id: 'ncr6x5t5o06',
                        title: '26 | 你解决问题的能力有多强？',
                        src: './面试现场/html/33你解决问题的能力有多强.html'
                    }
                ]
            },
            {
                id: 'pvz0oomiiyg',
                title: '综合篇',
                subList: [
                    {
                        id: 'd1esv39gd0t',
                        title: '27 | 盘点面试官和应聘者的认知差异',
                        src:
                            './面试现场/html/34盘点面试官和应聘者的认知差异.html'
                    },
                    {
                        id: 'vf6n2o01r9q',
                        title: '28 | 通过面试，你能了解这个团队多少？',
                        src:
                            './面试现场/html/35通过面试你能了解这个团队多少.html'
                    },
                    {
                        id: 'ihfuhquf64a',
                        title: '29 | 合同都签了，老板却不放你走，怎么办？',
                        src:
                            './面试现场/html/36合同都签了老板却不放你走怎么办.html'
                    },
                    {
                        id: 'sxm3roce0no',
                        title: '30 | 面试答疑（三）：如何更好地体现你的能力？',
                        src:
                            './面试现场/html/37面试答疑三如何更好地体现你的能力.html'
                    }
                ]
            },
            {
                id: '1f11f7cy7j0',
                title: '考官面对面',
                subList: [
                    {
                        id: 'gzjtk20iso0',
                        title: '01 | 考官面对面：程序员择业时常碰到的几个疑惑',
                        src:
                            './面试现场/html/05考官面对面程序员择业时常碰到的几个疑惑.html'
                    },
                    {
                        id: 'qr74go4nrok',
                        title: '02 | 考官面对面：如何有效地准备一场面试？',
                        src:
                            './面试现场/html/08考官面对面如何有效地准备一场面试.html'
                    },
                    {
                        id: 'u0bbuurp78s',
                        title:
                            '03 | 考官面对面：面试注意事项及面试官常见的思维模式',
                        src:
                            './面试现场/html/11考官面对面面试注意事项及面试官们常见的思维模式.html'
                    },
                    {
                        id: 'fuwqpns1bd0',
                        title:
                            '04 | 考官面对面：面试与应聘，如何站在对方的角度考虑问题？',
                        src:
                            './面试现场/html/17考官面对面面试与应聘如何站在对方的角度考虑问题.html'
                    },
                    {
                        id: '80nujc1urbt',
                        title: '05 | 考官面对面：我是如何面试程序员的？',
                        src:
                            './面试现场/html/20考官面对面我是如何面试程序员的.html'
                    },
                    {
                        id: 'g9f841n6aoa',
                        title: '06 | 考官面对面：我们是如何面试架构师的？',
                        src:
                            './面试现场/html/23考官面对面我们是如何面试架构师的.html'
                    },
                    {
                        id: '9spzjw04krp',
                        title: '07 | 考官面对面：面试经验谈之校招与社招',
                        src:
                            './面试现场/html/29考官面对面面试经验谈之校招与社招.html'
                    }
                ]
            },
            {
                id: 'bfvu9d6sw2b',
                title: '结束语',
                subList: [
                    {
                        id: '9k4p68jdwnx',
                        title: '结束语 | 以终为始，闭环迭代，持续提高',
                        src:
                            './面试现场/html/结束语以终为始闭环迭代持续提高.html'
                    }
                ]
            }
        ]
    },
    {
        title: '10x程序员工作法',
        id: 'ts4ebp02jx0',
        type: 'skill',
        cid: '100022301',
        subTitle: '掌握主动权，忙到点子上',
        authorName: '郑晔',
        authorInfo:
            '火币网首席架构师，前ThoughtWorks首席咨询师 ，TGO鲲鹏会会员',
        contents: [
            {
                id: 'ww7gx5q0pw7',
                title: '开篇词',
                subList: [
                    {
                        id: 'm7yk6iatjwb',
                        title: '开篇词 | 程序员解决的问题，大多不是程序问题',
                        src:
                            './10x程序员工作法/html/开篇词程序员解决的问题大多不是程序问题.html'
                    }
                ]
            },
            {
                id: 'l42m12rfjly',
                title: '思考框架',
                subList: [
                    {
                        id: 'g6178j9lqf6',
                        title: '01 | 10x程序员是如何思考的？',
                        src:
                            './10x程序员工作法/html/0110x程序员是如何思考的.html'
                    }
                ]
            },
            {
                id: '09jegwc757e',
                title: '以终为始',
                subList: [
                    {
                        id: 'dz190vr8qha',
                        title: '02 | 以终为始：如何让你的努力不白费？',
                        src:
                            './10x程序员工作法/html/02以终为始如何让你的努力不白费.html'
                    },
                    {
                        id: 'q0fkd5e1k40',
                        title:
                            '03 | DoD的价值：你完成了工作，为什么他们还不满意？',
                        src:
                            './10x程序员工作法/html/03DoD的价值你完成了工作为什么他们还不满意.html'
                    },
                    {
                        id: 'ag9q0vcr4jl',
                        title: '04 | 接到需求任务，你要先做哪件事？',
                        src:
                            './10x程序员工作法/html/04接到需求任务你要先做哪件事.html'
                    },
                    {
                        id: 'xi7vei34ska',
                        title: '05 | 持续集成：集成本身就是写代码的一个环节',
                        src:
                            './10x程序员工作法/html/05持续集成集成本身就是写代码的一个环节.html'
                    },
                    {
                        id: 'ueunguin3ys',
                        title: '06 | 精益创业：产品经理不靠谱，你该怎么办？',
                        src:
                            './10x程序员工作法/html/06精益创业产品经理不靠谱你该怎么办.html'
                    },
                    {
                        id: '0yrafsv4ily',
                        title:
                            '07 | 解决了很多技术问题，为什么你依然在“坑”里？',
                        src:
                            './10x程序员工作法/html/07解决了很多技术问题为什么你依然在坑里.html'
                    },
                    {
                        id: 'mopr7d1hb7o',
                        title: '08 | 为什么说做事之前要先进行推演？',
                        src:
                            './10x程序员工作法/html/08为什么说做事之前要先进行推演.html'
                    },
                    {
                        id: 'ua4vcuv7yl3',
                        title: '09 | 你的工作可以用数字衡量吗？',
                        src:
                            './10x程序员工作法/html/09你的工作可以用数字衡量吗.html'
                    },
                    {
                        id: 'zonkc5b5vbd',
                        title: '10 | 迭代0: 启动开发之前，你应该准备什么？',
                        src:
                            './10x程序员工作法/html/10迭代0启动开发之前你应该准备什么.html'
                    },
                    {
                        id: 'drprptk35pl',
                        title: '答疑解惑 | 如何管理你的上级？',
                        src:
                            './10x程序员工作法/html/答疑解惑如何管理你的上级.html'
                    },
                    {
                        id: 'v0pasnvx0uf',
                        title: '划重点 | 关于“以终为始”，你要记住的9句话',
                        src:
                            './10x程序员工作法/html/划重点关于以终为始你要记住的9句话.html'
                    }
                ]
            },
            {
                id: 'kppw9lx7qqc',
                title: '任务分解',
                subList: [
                    {
                        id: 'etn8zk6de2c',
                        title: '11 | 向埃隆·马斯克学习任务分解',
                        src:
                            './10x程序员工作法/html/11向埃隆·马斯克学习任务分解.html'
                    },
                    {
                        id: 'r04u4cmwmzb',
                        title: '12 | 测试也是程序员的事吗？',
                        src:
                            './10x程序员工作法/html/12测试也是程序员的事吗.html'
                    },
                    {
                        id: '9aw9pu93fzc',
                        title: '13 | 先写测试，就是测试驱动开发吗？',
                        src:
                            './10x程序员工作法/html/13先写测试就是测试驱动开发吗.html'
                    },
                    {
                        id: 'pjeye1wax1h',
                        title: '14 | 大师级程序员的工作秘笈',
                        src:
                            './10x程序员工作法/html/14大师级程序员的工作秘笈.html'
                    },
                    {
                        id: 'b8woh3tm9z0',
                        title: '15 | 一起练习：手把手带你分解任务',
                        src:
                            './10x程序员工作法/html/15一起练习手把手带你分解任务.html'
                    },
                    {
                        id: '3ouh1cp7pac',
                        title: '16 | 为什么你的测试不够好？',
                        src:
                            './10x程序员工作法/html/16为什么你的测试不够好.html'
                    },
                    {
                        id: 'f1vgnjbmtjm',
                        title: '17 | 程序员也可以“砍”需求吗？',
                        src:
                            './10x程序员工作法/html/17程序员也可以砍需求吗.html'
                    },
                    {
                        id: 'cxavdpgd5ih',
                        title: '18 | 需求管理：太多人给你安排任务，怎么办？',
                        src:
                            './10x程序员工作法/html/18需求管理太多人给你安排任务怎么办.html'
                    },
                    {
                        id: 'e9uuhnuw9cj',
                        title: '19 | 如何用最小的代价做产品？',
                        src:
                            './10x程序员工作法/html/19如何用最小的代价做产品.html'
                    },
                    {
                        id: 'y2qjqcyysc1',
                        title: '答疑解惑 | 如何分解一个你不了解的技术任务？',
                        src:
                            './10x程序员工作法/html/答疑解惑如何分解一个你不了解的技术任务.html'
                    },
                    {
                        id: '7aztgu8a0ww',
                        title: '划重点 | 关于“任务分解”，你要重点掌握哪些事？',
                        src:
                            './10x程序员工作法/html/划重点关于任务分解你要重点掌握哪些事.html'
                    }
                ]
            },
            {
                id: 'ykn482t0xs7',
                title: '沟通反馈',
                subList: [
                    {
                        id: 'e11xs67jcc2',
                        title: '20 | 为什么世界和你的理解不一样',
                        src:
                            './10x程序员工作法/html/20为什么世界和你的理解不一样.html'
                    },
                    {
                        id: 'ajj5tovuk9y',
                        title: '21 | 你的代码为谁而写？',
                        src: './10x程序员工作法/html/21你的代码为谁而写.html'
                    },
                    {
                        id: 'f3y06w0r0jh',
                        title: '22 | 轻量级沟通：你总是在开会吗？',
                        src:
                            './10x程序员工作法/html/22轻量级沟通你总是在开会吗.html'
                    },
                    {
                        id: 'dqwj8z4brcx',
                        title: '23 | 可视化：一种更为直观的沟通方式',
                        src:
                            './10x程序员工作法/html/23可视化一种更为直观的沟通方式.html'
                    },
                    {
                        id: 'lxvpbc9deru',
                        title:
                            '24 | 快速反馈：为什么你们公司总是做不好持续集成？',
                        src:
                            './10x程序员工作法/html/24快速反馈为什么你们公司总是做不好持续集成.html'
                    },
                    {
                        id: '8lt59esl7bn',
                        title: '25 | 开发中的问题一再出现，应该怎么办？',
                        src:
                            './10x程序员工作法/html/25开发中的问题一再出现应该怎么办.html'
                    },
                    {
                        id: 'isea6f76g4s',
                        title: '26 | 作为程序员，你也应该聆听用户声音',
                        src:
                            './10x程序员工作法/html/26作为程序员你也应该聆听用户声音.html'
                    },
                    {
                        id: 'd2pmuvjncbn',
                        title:
                            '用户故事 | 站在前人的肩膀上，领取属于你的高效工作秘籍',
                        src:
                            './10x程序员工作法/html/用户故事站在前人的肩膀上领取属于你的高效工作秘籍.html'
                    },
                    {
                        id: 'wqrm1o8k7ve',
                        title: '27 | 尽早暴露问题： 为什么被指责的总是你？',
                        src:
                            './10x程序员工作法/html/27尽早暴露问题为什么被指责的总是你.html'
                    },
                    {
                        id: 'htnn2orbqxx',
                        title: '28 | 结构化：写文档也是一种学习方式',
                        src:
                            './10x程序员工作法/html/28结构化写文档也是一种学习方式.html'
                    },
                    {
                        id: '8sxceipno55',
                        title: '答疑解惑 | 持续集成，一条贯穿诸多实践的主线',
                        src:
                            './10x程序员工作法/html/答疑解惑持续集成一条贯穿诸多实践的主线.html'
                    },
                    {
                        id: 'v2j5w1obsat',
                        title: '划重点 | 一次关于“沟通反馈”主题内容的复盘',
                        src:
                            './10x程序员工作法/html/划重点一次关于沟通反馈主题内容的复盘.html'
                    }
                ]
            },
            {
                id: '9bvzb5i10k2',
                title: '自动化',
                subList: [
                    {
                        id: 'wbvacp4m94k',
                        title: '加餐 | 你真的了解重构吗？',
                        src: './10x程序员工作法/html/加餐你真的了解重构吗.html'
                    },
                    {
                        id: 'hmv8m1vro38',
                        title: '29 | “懒惰”应该是所有程序员的骄傲',
                        src:
                            './10x程序员工作法/html/29懒惰应该是所有程序员的骄傲.html'
                    },
                    {
                        id: '2u6t6gdpigv',
                        title: '30 | 一个好的项目自动化应该是什么样子的？',
                        src:
                            './10x程序员工作法/html/30一个好的项目自动化应该是什么样子的.html'
                    },
                    {
                        id: 'gmx540436hq',
                        title: '31 | 程序员怎么学习运维知识？',
                        src:
                            './10x程序员工作法/html/31程序员怎么学习运维知识.html'
                    },
                    {
                        id: 'lzf3gj9mp2h',
                        title: '32 | 持续交付：有持续集成就够了吗？',
                        src:
                            './10x程序员工作法/html/32持续交付有持续集成就够了吗.html'
                    },
                    {
                        id: '3vrjl48rqte',
                        title: '33 | 如何做好验收测试？',
                        src: './10x程序员工作法/html/33如何做好验收测试.html'
                    },
                    {
                        id: 'xi14h4ak0kp',
                        title: '34 | 你的代码是怎么变混乱的？',
                        src:
                            './10x程序员工作法/html/34你的代码是怎么变混乱的.html'
                    },
                    {
                        id: 'l45ci4gd84c',
                        title: '35 | 总是在说MVC分层架构，但你真的理解分层吗？',
                        src:
                            './10x程序员工作法/html/35总是在说MVC分层架构但你真的理解分层吗.html'
                    },
                    {
                        id: 'jf45qgisn69',
                        title: '36 | 为什么总有人觉得5万块钱可以做一个淘宝？',
                        src: ''
                    },
                    {
                        id: '6i49rohepl1',
                        title: '37 | 先做好DDD再谈微服务吧，那只是一种部署形式',
                        src: ''
                    },
                    {
                        id: 'pusu8s6py8k',
                        title: '答疑解惑 | 持续集成、持续交付，然后呢？',
                        src: ''
                    },
                    {
                        id: 'bbin54fj8fc',
                        title: '划重点 | “自动化”主题的重点内容回顾汇总',
                        src: ''
                    }
                ]
            },
            {
                id: 'qjd19eef9ro',
                title: '综合运用',
                subList: [
                    {
                        id: 'uyyyz21r0tq',
                        title: '38 | 新入职一家公司，怎么快速进入工作状态？',
                        src: ''
                    },
                    {
                        id: 'gc6nggmd4n0',
                        title: '39 | 面对遗留系统，你应该这样做',
                        src: ''
                    },
                    {
                        id: 'q40eynrp5ic',
                        title: '40 | 我们应该如何保持竞争力？',
                        src: ''
                    },
                    {
                        id: 'xwwesgtozpr',
                        title: '答疑解惑 | 如何在实际工作中推行新观念？',
                        src: ''
                    },
                    {
                        id: 'spu4eau75ih',
                        title: '划重点 | “综合运用”主题内容的全盘回顾',
                        src: ''
                    },
                    {
                        id: 'lnqnzrri6dp',
                        title: '总复习 | 重新审视“最佳实践”',
                        src: ''
                    },
                    {
                        id: 'uzsh9u68u89',
                        title: '总复习 | 重新来“看书”',
                        src: ''
                    }
                ]
            },
            {
                id: 'au7gqngj2da',
                title: '结束语',
                subList: [
                    {
                        id: 'njac0n2lm04',
                        title: '结束语 | 少做事，才能更有效地工作',
                        src: ''
                    }
                ]
            }
        ]
    },
    {
        title: '程序员进阶攻略',
        id: 'qwrms9zuf7v',
        type: 'skill',
        cid: '100012101',
        subTitle: '每个程序员都应该知道的成长法则',
        authorName: '胡峰',
        authorInfo: '京东成都研究院技术专家',
        contents: [
            {
                id: 'b58aqkaio3o',
                title: '开篇词',
                subList: [
                    {
                        id: '9bmjq4kunl4',
                        title:
                            '开篇词 | 程序行知：走在同样的路上，遇见自己的风景',
                        src:
                            './程序员进阶攻略/html/开篇词程序行知走在同样的路上遇见自己的风景.html'
                    }
                ]
            },
            {
                id: 'dahyv72riuw',
                title: '征途：启程之初',
                subList: [
                    {
                        id: 'gm692zdj1aa',
                        title: '01 | 初心：为什么成为一名程序员？',
                        src:
                            './程序员进阶攻略/html/01初心为什么成为一名程序员.html'
                    },
                    {
                        id: '3de0hc8wovx',
                        title: '02 | 初惑：技术方向的选择',
                        src: './程序员进阶攻略/html/02初惑技术方向的选择.html'
                    },
                    {
                        id: 'ch1aj81b9rj',
                        title: '03 | 初程：带上一份技能地图',
                        src: './程序员进阶攻略/html/03初程带上一份技能地图.html'
                    },
                    {
                        id: 'q6mxyi2qmng',
                        title: '04 | 初感：别了校园，入了江湖',
                        src: './程序员进阶攻略/html/04初感别了校园入了江湖.html'
                    }
                ]
            },
            {
                id: 'mitu0wxorxg',
                title: '修炼：程序之术',
                subList: [
                    {
                        id: 'ehx50x269uy',
                        title: '05 | 架构与实现：它们的连接与分界？',
                        src:
                            './程序员进阶攻略/html/05架构与实现它们的连接与分界.html'
                    },
                    {
                        id: 'um402nc8ylt',
                        title: '06 | 模式与框架：它们的关系与误区？',
                        src:
                            './程序员进阶攻略/html/06模式与框架它们的关系与误区.html'
                    },
                    {
                        id: 'vgau2ho3vxm',
                        title: '07 | 多维与视图：系统设计的思考维度与展现视图',
                        src:
                            './程序员进阶攻略/html/07多维与视图系统设计的思考维度与展现视图.html'
                    },
                    {
                        id: 'giqj4mxa4vo',
                        title: '08 | 代码与分类：工业级编程的代码分类与特征',
                        src:
                            './程序员进阶攻略/html/08代码与分类工业级编程的代码分类与特征.html'
                    },
                    {
                        id: '3clo5uy64aw',
                        title: '09 | 粗放与精益：编程的两种思路与方式',
                        src:
                            './程序员进阶攻略/html/09粗放与精益编程的两种思路与方式.html'
                    },
                    {
                        id: '0ywivr85yrz',
                        title: '10 | 炫技与克制：代码的两种味道与态度',
                        src:
                            './程序员进阶攻略/html/10炫技与克制代码的两种味道与态度.html'
                    },
                    {
                        id: 'puo2m8htym0',
                        title: '11 | 三阶段进化：调试，编写与运行代码',
                        src:
                            './程序员进阶攻略/html/11三阶段进化调试编写与运行代码.html'
                    },
                    {
                        id: '8jqndzsq21o',
                        title: '12 | Bug的空间属性：环境依赖与过敏反应',
                        src:
                            './程序员进阶攻略/html/12Bug的空间属性环境依赖与过敏反应.html'
                    },
                    {
                        id: 'gza2wpvlvar',
                        title: '13 | Bug的时间属性：周期特点与非规律性',
                        src:
                            './程序员进阶攻略/html/13Bug的时间属性周期特点与非规律性.html'
                    },
                    {
                        id: 'jo9fkrj98ii',
                        title: '14 | Bug的反复出现：重蹈覆辙与吸取教训',
                        src:
                            './程序员进阶攻略/html/14Bug的反复出现重蹈覆辙与吸取教训.html'
                    }
                ]
            },
            {
                id: 'elxc56ob3qa',
                title: '修行：由术入道',
                subList: [
                    {
                        id: '0slwmm0zx0c',
                        title: '15 | 根源：计划的愿景——仰望星空',
                        src:
                            './程序员进阶攻略/html/15根源计划的愿景仰望星空.html'
                    },
                    {
                        id: 'k3ds05joff0',
                        title: '16 | 方式：计划的方法——脚踏实地',
                        src:
                            './程序员进阶攻略/html/16方式计划的方法脚踏实地.html'
                    },
                    {
                        id: 'vlgoy7y40uh',
                        title: '17 | 检视：计划的可行——时间与承诺',
                        src:
                            './程序员进阶攻略/html/17检视计划的可行时间与承诺.html'
                    },
                    {
                        id: '4sfg7vw3z7w',
                        title: '18 | 评估：计划的收获——成本与收益',
                        src:
                            './程序员进阶攻略/html/18评估计划的收获成本与收益.html'
                    },
                    {
                        id: '2ut2285ajal',
                        title: '19 | 障碍：从计划到坚持，再到坚持不下去的时候',
                        src:
                            './程序员进阶攻略/html/19障碍从计划到坚持再到坚持不下去的时候.html'
                    },
                    {
                        id: 'h3l7wgqfv9g',
                        title: '20 | 执行：从坚持到持续，再到形成自己的节奏',
                        src:
                            './程序员进阶攻略/html/20执行从坚持到持续再到形成自己的节奏.html'
                    },
                    {
                        id: 'y9cb57f54t9',
                        title: '21 | 信息：过载与有效',
                        src: './程序员进阶攻略/html/21信息过载与有效.html'
                    },
                    {
                        id: '6lv3hrxy8kf',
                        title: '22 | 领域：知识与体系',
                        src: './程序员进阶攻略/html/22领域知识与体系.html'
                    },
                    {
                        id: 'gs5anpjylwa',
                        title: '23 | 转化：能力与输出',
                        src: './程序员进阶攻略/html/23转化能力与输出.html'
                    },
                    {
                        id: '8llm3b3a5wq',
                        title: '24 | 并行：工作与学习',
                        src: './程序员进阶攻略/html/24并行工作与学习.html'
                    },
                    {
                        id: 'bqt8qugrg30',
                        title: '25 | 时间：塑造基石习惯（上）——感知与测量',
                        src:
                            './程序员进阶攻略/html/25时间塑造基石习惯上感知与测量.html'
                    },
                    {
                        id: 'bge115tu23h',
                        title: '26 | 时间：塑造基石习惯（下）——切割与构建',
                        src:
                            './程序员进阶攻略/html/26时间塑造基石习惯下切割与构建.html'
                    },
                    {
                        id: 'owyh4fkuddw',
                        title: '27 | 试试：一种“坏”习惯',
                        src: './程序员进阶攻略/html/27试试一种坏习惯.html'
                    },
                    {
                        id: 'ovfh9hhw2ai',
                        title: '28 | 提问：从技术到人生的习惯',
                        src:
                            './程序员进阶攻略/html/28提问从技术到人生的习惯.html'
                    },
                    {
                        id: '2gjn4l38bkn',
                        title: '29 | 偏好：个人习惯的局限与反思',
                        src:
                            './程序员进阶攻略/html/29偏好个人习惯的局限与反思.html'
                    },
                    {
                        id: 'h5f6gp7xnv0',
                        title: '30 | 写作：写字如编码',
                        src: './程序员进阶攻略/html/30写作写字如编码.html'
                    },
                    {
                        id: '7rj35265dvg',
                        title: '31 | 画图：一图胜千言',
                        src: './程序员进阶攻略/html/31画图一图胜千言.html'
                    },
                    {
                        id: 'ywwc2b68g4m',
                        title: '32 | 演讲：表达的技术',
                        src: './程序员进阶攻略/html/32演讲表达的技术.html'
                    },
                    {
                        id: 'ojf7halps00',
                        title: '33 | 定义：阶梯与级别',
                        src: './程序员进阶攻略/html/33定义阶梯与级别.html'
                    },
                    {
                        id: '2oxjlud7xjw',
                        title: '34 | 晋升：评定与博弈',
                        src: './程序员进阶攻略/html/34晋升评定与博弈.html'
                    },
                    {
                        id: 'k66qsevp9cz',
                        title: '35 | 关系：学徒与导师',
                        src: './程序员进阶攻略/html/35关系学徒与导师.html'
                    },
                    {
                        id: '0ggfh1320aw',
                        title: '36 | 核心：安全与效率——工程技术的两个核心维度',
                        src:
                            './程序员进阶攻略/html/36核心安全与效率工程技术的两个核心维度.html'
                    },
                    {
                        id: 's2baxangt7f',
                        title: '37 | 过程：规模与协作——规模化的过程方法',
                        src:
                            './程序员进阶攻略/html/37过程规模与协作规模化的过程方法.html'
                    },
                    {
                        id: 'c07eaarlqsn',
                        title: '38 | 思维：科学与系统——两类问题的两种思维解法',
                        src:
                            './程序员进阶攻略/html/38思维科学与系统两类问题的两种思维解法.html'
                    }
                ]
            },
            {
                id: 'kuvfm4segnw',
                title: '徘徊：道中彷徨',
                subList: [
                    {
                        id: 'j2jg6let48j',
                        title: '39 | 职业倦怠：如何面对？',
                        src: './程序员进阶攻略/html/39职业倦怠如何面对.html'
                    },
                    {
                        id: 'n0da2la1jz7',
                        title: '40 | 局部最优：如何逃离？',
                        src: './程序员进阶攻略/html/40局部最优如何逃离.html'
                    },
                    {
                        id: 'zdwyqprusyy',
                        title: '41 | 沟通之痛：如何改变？',
                        src: './程序员进阶攻略/html/41沟通之痛如何改变.html'
                    },
                    {
                        id: 'k5x5pplsvs0',
                        title: '42 | 技术停滞：如何更新？',
                        src: './程序员进阶攻略/html/42技术停滞如何更新.html'
                    },
                    {
                        id: 'z95a9g84g5j',
                        title: '43 | 无法实现：困扰与反思',
                        src: './程序员进阶攻略/html/43无法实现困扰与反思1.html'
                    },
                    {
                        id: 'fccbg3bxfy4',
                        title: '44 | 完成作品：理想与现实',
                        src: './程序员进阶攻略/html/44完成作品理想与现实1.html'
                    },
                    {
                        id: 'jb7abz70db7',
                        title: '45 | 代码评审：寄望与哀伤',
                        src: './程序员进阶攻略/html/45代码评审寄望与哀伤1.html'
                    },
                    {
                        id: '4vpe6m87sms',
                        title: '46 | 人到中年：失业与恐惧',
                        src: './程序员进阶攻略/html/46人到中年失业与恐惧1.html'
                    },
                    {
                        id: 'wreywuw0uhe',
                        title: '47 | 该不该去创业公司？',
                        src: './程序员进阶攻略/html/47该不该去创业公司.html'
                    },
                    {
                        id: 'k0n5wtnl8r0',
                        title: '48 | 该不该接外包？',
                        src: './程序员进阶攻略/html/48该不该接外包.html'
                    },
                    {
                        id: '3b1f7heunce',
                        title: '49 | 技术干货那么多，如何选？',
                        src: './程序员进阶攻略/html/49技术干货那么多如何选.html'
                    },
                    {
                        id: 'xzw5rzzdlfh',
                        title: '50 | 技术分歧，如何决策？',
                        src: './程序员进阶攻略/html/50技术分歧如何决策.html'
                    },
                    {
                        id: 't39rdjvqoup',
                        title: '51 | 技术债务，有意或无意的选择？',
                        src:
                            './程序员进阶攻略/html/51技术债务有意或无意的选择.html'
                    },
                    {
                        id: '0aaxgx423ud',
                        title: '52 | 选择从众，还是唯一？',
                        src: './程序员进阶攻略/html/52选择从众还是唯一.html'
                    },
                    {
                        id: 'rxdoxpa3rl7',
                        title: '53 | 选择工作，还是生活？',
                        src: './程序员进阶攻略/html/53选择工作还是生活.html'
                    }
                ]
            },
            {
                id: 'po8mxghkuxh',
                title: '寻路：路在何方',
                subList: [
                    {
                        id: 'hj24q3gcif8',
                        title: '54 | 侠客行：一技压身，天下行走',
                        src:
                            './程序员进阶攻略/html/54侠客行一技压身天下行走.html'
                    },
                    {
                        id: 'hrghf7sedu0',
                        title: '55 | 江湖路：刀剑相接，战场升级',
                        src:
                            './程序员进阶攻略/html/55江湖路刀剑相接战场升级.html'
                    },
                    {
                        id: '53d2v2sttpg',
                        title: '56 | 御剑流：一击必杀，万剑归心',
                        src:
                            './程序员进阶攻略/html/56御剑流一击必杀万剑归心.html'
                    },
                    {
                        id: '0zydmfk5h10',
                        title: '57 | 三维度：专业、展现与连接',
                        src:
                            './程序员进阶攻略/html/57三维度专业、展现与连接.html'
                    },
                    {
                        id: 'ip2nsawznvp',
                        title: '58 | 三人行：前辈、平辈与后辈',
                        src:
                            './程序员进阶攻略/html/58三人行前辈、平辈与后辈.html'
                    },
                    {
                        id: 'giqrked2g2c',
                        title: '59 | 三角色：程序员、技术主管与架构师',
                        src:
                            './程序员进阶攻略/html/59三角色程序员、技术主管与架构师.html'
                    },
                    {
                        id: '0j0m6fl7qwu',
                        title: '60 | 三视角：定位、自省与多维',
                        src:
                            './程序员进阶攻略/html/60三视角定位、自省与多维.html'
                    }
                ]
            },
            {
                id: 'jdw8qomukgt',
                title: '蜕变：破茧成蝶',
                subList: [
                    {
                        id: 'k7801e6qlu7',
                        title: '61 | 工作之余，专业之外',
                        src: './程序员进阶攻略/html/61工作之余专业之外.html'
                    },
                    {
                        id: 'k45pq22rq11',
                        title: '62 | 跨越断层，突破边界',
                        src: ''
                    },
                    {
                        id: '98t8cutqiu3',
                        title: '63 | 成长蓝图，进化跃迁',
                        src: ''
                    }
                ]
            },
            {
                id: 'mcagbtqxls8',
                title: '结束语',
                subList: [
                    {
                        id: '57pkf3cn592',
                        title: '尾声 | 始于知，终于行',
                        src: ''
                    }
                ]
            }
        ]
    }
]
const BACKEND_LIST = [
    {
        id: '9ibvyefsgxd',
        type: 'backend',
        cid: '398',
        title: 'MySQL必知必会',
        subTitle: '在真实项目中玩转 MySQL',
        authorName: '朱晓峰',
        authorInfo: '前摩根大通银行技术部副总裁、系统架构师',
        contents: [
            {
                id: 'mvkoy4iyxp6',
                title: '课前准备',
                subList: [
                    {
                        id: 'zviz3xxrgpw',
                        title:
                            '开篇词 | 在实战中学习，是解锁MySQL技能的最佳方法',
                        src:
                            'MySQL必知必会/html/__349410__开篇词 _ 在实战中学习，是解锁MySQL技能的最佳方法.html',
                        audio: ''
                    },
                    {
                        id: 'oqhgma1guom',
                        title:
                            '环境准备 | 带你安装MySQL和图形化管理工具Workbench',
                        src:
                            'MySQL必知必会/html/__349438__环境准备 _ 带你安装MySQL和图形化管理工具Workbench.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '770nm1cwvzs',
                title: '实践篇',
                subList: [
                    {
                        id: 'gnmgh94x35d',
                        title: '01 | 存储：一个完整的数据存储过程是怎样的？',
                        src:
                            'MySQL必知必会/html/__349725__01 _ 存储：一个完整的数据存储过程是怎样的？.html',
                        audio: ''
                    },
                    {
                        id: 'yl36mwo04is',
                        title: '02 | 字段：这么多字段类型，该怎么定义？',
                        src:
                            'MySQL必知必会/html/__350470__02 _ 字段：这么多字段类型，该怎么定义？.html',
                        audio: ''
                    },
                    {
                        id: 'js3fz9qw68a',
                        title: '03 | 表：怎么创建和修改数据表？',
                        src:
                            'MySQL必知必会/html/__351201__03 _ 表：怎么创建和修改数据表？.html',
                        audio: ''
                    },
                    {
                        id: 'zewowdqo8cv',
                        title: '04 | 增删改查：如何操作表中的数据？',
                        src:
                            'MySQL必知必会/html/__351225__04 _ 增删改查：如何操作表中的数据？.html',
                        audio: ''
                    },
                    {
                        id: 'xwvb2bpwwhr',
                        title: '05 | 主键：如何正确设置主键？',
                        src:
                            'MySQL必知必会/html/__352255__05 _ 主键：如何正确设置主键？.html',
                        audio: ''
                    },
                    {
                        id: 'l51et8idaal',
                        title: '06 | 外键和连接：如何做关联查询？',
                        src:
                            'MySQL必知必会/html/__353464__06 _ 外键和连接：如何做关联查询？.html',
                        audio: ''
                    },
                    {
                        id: 'vcxigdl7tay',
                        title: '07 | 条件语句：WHERE 与 HAVING有什么不同?',
                        src:
                            'MySQL必知必会/html/__353853__07 _ 条件语句：WHERE 与 HAVING有什么不同_.html',
                        audio: ''
                    },
                    {
                        id: 'b2gnk3kjbdm',
                        title: '08 | 聚合函数：怎么高效地进行分组统计？',
                        src:
                            'MySQL必知必会/html/__354164__08 _ 聚合函数：怎么高效地进行分组统计？.html',
                        audio: ''
                    },
                    {
                        id: '2hym87h76ey',
                        title: '09 | 时间函数：时间类数据，MySQL是怎么处理的？',
                        src:
                            'MySQL必知必会/html/__355699__09 _ 时间函数：时间类数据，MySQL是怎么处理的？.html',
                        audio: ''
                    },
                    {
                        id: 'fhuamqhjik7',
                        title: '10 | 如何进行数学计算、字符串处理和条件判断？',
                        src:
                            'MySQL必知必会/html/__356966__10 _ 如何进行数学计算、字符串处理和条件判断？.html',
                        audio: ''
                    },
                    {
                        id: 'k7s9k0spg1q',
                        title: '11 | 索引：怎么提高查询的速度？',
                        src:
                            'MySQL必知必会/html/__357312__11 _ 索引：怎么提高查询的速度？.html',
                        audio: ''
                    },
                    {
                        id: 'bs3cfanfwq3',
                        title: '12 | 事务：怎么确保关联操作正确执行？',
                        src:
                            'MySQL必知必会/html/__357322__12 _ 事务：怎么确保关联操作正确执行？.html',
                        audio: ''
                    },
                    {
                        id: '3lgdogvkgs6',
                        title: '13 | 临时表：复杂查询，如何保存中间结果？',
                        src:
                            'MySQL必知必会/html/__358649__13 _ 临时表：复杂查询，如何保存中间结果？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'mccjdcs79yc',
                title: '进阶篇',
                subList: [
                    {
                        id: 'cjkdu60cus8',
                        title: '14 | 视图：如何简化查询？',
                        src:
                            'MySQL必知必会/html/__359702__14 _ 视图：如何简化查询？.html',
                        audio: ''
                    },
                    {
                        id: '8cd826zf3dq',
                        title: '15 | 存储过程：如何提高程序的性能和安全性？',
                        src:
                            'MySQL必知必会/html/__362230__15 _ 存储过程：如何提高程序的性能和安全性？.html',
                        audio: ''
                    },
                    {
                        id: 'wimf1bvn7dp',
                        title:
                            '16 | 游标：对于数据集中的记录，该怎么逐条处理？',
                        src:
                            'MySQL必知必会/html/__362233__16 _ 游标：对于数据集中的记录，该怎么逐条处理？.html',
                        audio: ''
                    },
                    {
                        id: 'myou1j91nul',
                        title:
                            '17 | 触发器：如何让数据修改自动触发关联操作，确保数据一致性？',
                        src:
                            'MySQL必知必会/html/__363433__17 _ 触发器：如何让数据修改自动触发关联操作，确保数据一致性？.html',
                        audio: ''
                    },
                    {
                        id: '0c2p2iywfn7',
                        title:
                            '18 | 权限管理：如何控制数据库访问，消除安全隐患？',
                        src:
                            'MySQL必知必会/html/__364695__18 _ 权限管理：如何控制数据库访问，消除安全隐患？.html',
                        audio: ''
                    },
                    {
                        id: '7pnqa2qapwv',
                        title: '19 | 日志（上）：系统出现问题，如何及时发现？',
                        src:
                            'MySQL必知必会/html/__364715__19 _ 日志（上）：系统出现问题，如何及时发现？.html',
                        audio: ''
                    },
                    {
                        id: '5sjvugy8kbh',
                        title: '20 | 日志（下）：系统故障，如何恢复数据？',
                        src:
                            'MySQL必知必会/html/__366296__20 _ 日志（下）：系统故障，如何恢复数据？.html',
                        audio: ''
                    },
                    {
                        id: 'uc2p5on8sel',
                        title: '21 | 数据备份：异常情况下，如何确保数据安全？',
                        src:
                            'MySQL必知必会/html/__366307__21 _ 数据备份：异常情况下，如何确保数据安全？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'qp3ea975vvn',
                title: '优化篇',
                subList: [
                    {
                        id: 'coujeusj5se',
                        title: '22 | 范式：如何消除冗余，实现高效存取？',
                        src:
                            'MySQL必知必会/html/__367615__22 _ 范式：如何消除冗余，实现高效存取？.html',
                        audio: ''
                    },
                    {
                        id: '9lte10md821',
                        title: '23 | ER模型：如何理清数据库设计思路？',
                        src:
                            'MySQL必知必会/html/__369434__23 _ ER模型：如何理清数据库设计思路？.html',
                        audio: ''
                    },
                    {
                        id: 'v7dbowf1thc',
                        title: '24 | 查询有点慢，语句该如何写？',
                        src:
                            'MySQL必知必会/html/__369451__24 _ 查询有点慢，语句该如何写？.html',
                        audio: ''
                    },
                    {
                        id: '16uy5yfg8vt',
                        title: '25 | 表太大了，如何设计才能提高性能？',
                        src:
                            'MySQL必知必会/html/__369476__25 _ 表太大了，如何设计才能提高性能？.html',
                        audio: ''
                    },
                    {
                        id: 's45lcg94xdc',
                        title: '26 | 如何充分利用系统资源？',
                        src:
                            'MySQL必知必会/html/__371891__26 _ 如何充分利用系统资源？.html',
                        audio: ''
                    }
                ]
            },
            {
                id: '95x2qwp7ij5',
                title: '案例篇',
                subList: [
                    {
                        id: 'cfslmb5pqr0',
                        title:
                            '27 | 手把手带你设计一个完整的连锁超市信息系统数据库（上）',
                        src:
                            'MySQL必知必会/html/__373020__27 _ 手把手带你设计一个完整的连锁超市信息系统数据库（上）.html',
                        audio: ''
                    },
                    {
                        id: 'ljpf0185xsa',
                        title:
                            '28 | 手把手带你设计一个完整的连锁超市信息系统数据库（下）',
                        src:
                            'MySQL必知必会/html/__373476__28 _ 手把手带你设计一个完整的连锁超市信息系统数据库（下）.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'hqr11yg4nq9',
                title: '特别放送',
                subList: [
                    {
                        id: 'w8xx8kt9556',
                        title: '特别发送（一） | 经典面试题讲解第一弹',
                        src:
                            'MySQL必知必会/html/__358668__特别发送（一） _ 经典面试题讲解第一弹.html',
                        audio: ''
                    },
                    {
                        id: 'bxfxa523wga',
                        title: '特别放送（二）| 经典面试题讲解第二弹',
                        src:
                            'MySQL必知必会/html/__366315__特别放送（二）_ 经典面试题讲解第二弹.html',
                        audio: ''
                    },
                    {
                        id: '9oho2ar8rkz',
                        title: '特别放送（三）| MySQL 8 都有哪些新特征？',
                        src:
                            'MySQL必知必会/html/__371914__特别放送（三）_ MySQL 8 都有哪些新特征？.html',
                        audio: ''
                    },
                    {
                        id: 'ufb2ippzql1',
                        title: '特别放送（四）| 位置信息：如何进行空间定位？',
                        src:
                            'MySQL必知必会/html/__374898__特别放送（四）_ 位置信息：如何进行空间定位？.html',
                        audio: ''
                    },
                    {
                        id: 'xvo7z3eqi2c',
                        title: '期末测试 | 一套习题，测出你的掌握程度',
                        src:
                            'MySQL必知必会/html/__374907__期末测试 _ 一套习题，测出你的掌握程度.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'ocqb1bcd988',
                title: '结束语',
                subList: [
                    {
                        id: '069sf72j7iw',
                        title: '结束语 | 不盲从于群体思维，走一条适合自己的路',
                        src:
                            'MySQL必知必会/html/__377032__结束语 _ 不盲从于群体思维，走一条适合自己的路.html',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'rt061ll7u9l',
        type: 'backend',
        cid: '100015201',
        title: '深入剖析Kubernetes',
        subTitle: 'Kubernetes原来可以如此简单',
        authorName: '张磊',
        authorInfo: 'Kubernetes社区资深成员与项目维护者',
        contents: [
            {
                id: 'tzuvh1ngsbi',
                title: '课前必读',
                subList: [
                    {
                        id: '8n825cqz97d',
                        title: '01 | 预习篇 · 小鲸鱼大事记（一）：初出茅庐',
                        src:
                            './深入剖析Kubernetes/html/01预习篇·小鲸鱼大事记一初出茅庐.html',
                        audio:
                            './深入剖析Kubernetes/audio/01预习篇·小鲸鱼大事记一初出茅庐.mp3'
                    },
                    {
                        id: 'nnvizh9ch5v',
                        title: '02 | 预习篇 · 小鲸鱼大事记（二）：崭露头角',
                        src:
                            './深入剖析Kubernetes/html/02预习篇·小鲸鱼大事记二崭露头角.html',
                        audio:
                            './深入剖析Kubernetes/audio/02预习篇·小鲸鱼大事记二崭露头角.mp3'
                    },
                    {
                        id: '4mff3epkiu4',
                        title: '03 | 预习篇 · 小鲸鱼大事记（三）：群雄并起',
                        src:
                            './深入剖析Kubernetes/html/03预习篇·小鲸鱼大事记三群雄并起.html',
                        audio:
                            './深入剖析Kubernetes/audio/03预习篇·小鲸鱼大事记三群雄并起.mp3'
                    },
                    {
                        id: '71m16tr9ups',
                        title: '04 | 预习篇 · 小鲸鱼大事记（四）：尘埃落定',
                        src:
                            './深入剖析Kubernetes/html/04预习篇·小鲸鱼大事记四尘埃落定.html',
                        audio:
                            './深入剖析Kubernetes/audio/04预习篇·小鲸鱼大事记四尘埃落定.mp3'
                    }
                ]
            },
            {
                id: '0gc76bc22sr',
                title: '容器技术概念入门篇',
                subList: [
                    {
                        id: 'd6opi06e61x',
                        title: '05 | 白话容器基础（一）：从进程说开去',
                        src:
                            './深入剖析Kubernetes/html/05白话容器基础一从进程说开去.html',
                        audio:
                            './深入剖析Kubernetes/audio/05白话容器基础一从进程说开去.mp3'
                    },
                    {
                        id: 'y7izptjenma',
                        title: '06 | 白话容器基础（二）：隔离与限制',
                        src:
                            './深入剖析Kubernetes/html/06白话容器基础二隔离与限制.html',
                        audio:
                            './深入剖析Kubernetes/audio/06白话容器基础二隔离与限制.mp3'
                    },
                    {
                        id: 'wzniv3gpiw3',
                        title: '07 | 白话容器基础（三）：深入理解容器镜像',
                        src:
                            './深入剖析Kubernetes/html/07白话容器基础三深入理解容器镜像.html',
                        audio:
                            './深入剖析Kubernetes/audio/07白话容器基础三深入理解容器镜像.mp3'
                    },
                    {
                        id: 'hciuw1gdi4e',
                        title: '08 | 白话容器基础（四）：重新认识Docker容器',
                        src:
                            './深入剖析Kubernetes/html/08白话容器基础四重新认识Docker容器.html',
                        audio:
                            './深入剖析Kubernetes/audio/08白话容器基础四重新认识Docker容器.mp3'
                    },
                    {
                        id: 'g4277josanb',
                        title: '09 | 从容器到容器云：谈谈Kubernetes的本质',
                        src:
                            './深入剖析Kubernetes/html/09从容器到容器云谈谈Kubernetes的本质.html',
                        audio:
                            './深入剖析Kubernetes/audio/09从容器到容器云谈谈Kubernetes的本质.mp3'
                    }
                ]
            },
            {
                id: '3m3877uq806',
                title: 'Kubernetes集群搭建与实践',
                subList: [
                    {
                        id: '2ypyw4hq9zx',
                        title: '10 | Kubernetes一键部署利器：kubeadm',
                        src:
                            './深入剖析Kubernetes/html/10Kubernetes一键部署利器kubeadm.html',
                        audio:
                            './深入剖析Kubernetes/audio/10Kubernetes一键部署利器kubeadm.mp3'
                    },
                    {
                        id: 'u5t5huso681',
                        title: '11 | 从0到1：搭建一个完整的Kubernetes集群',
                        src:
                            './深入剖析Kubernetes/html/11从0到1搭建一个完整的Kubernetes集群.html',
                        audio:
                            './深入剖析Kubernetes/audio/11从0到1搭建一个完整的Kubernetes集群.mp3'
                    },
                    {
                        id: '6dm57jbr5wt',
                        title: '12 | 牛刀小试：我的第一个容器化应用',
                        src:
                            './深入剖析Kubernetes/html/12牛刀小试我的第一个容器化应用.html',
                        audio:
                            './深入剖析Kubernetes/audio/12牛刀小试我的第一个容器化应用.mp3'
                    }
                ]
            },
            {
                id: 'av0if7c23zx',
                title: '容器编排与Kubernetes作业管理',
                subList: [
                    {
                        id: 'baajiagc8s3',
                        title: '13 | 为什么我们需要Pod？',
                        src:
                            './深入剖析Kubernetes/html/13为什么我们需要Pod.html',
                        audio:
                            './深入剖析Kubernetes/audio/13为什么我们需要Pod.mp3'
                    },
                    {
                        id: 'uk7w597tqkm',
                        title: '14 | 深入解析Pod对象（一）：基本概念',
                        src:
                            './深入剖析Kubernetes/html/14深入解析Pod对象一基本概念.html',
                        audio:
                            './深入剖析Kubernetes/audio/14深入解析Pod对象一基本概念.mp3'
                    },
                    {
                        id: 'jofsauu6moe',
                        title: '15 | 深入解析Pod对象（二）：使用进阶',
                        src:
                            './深入剖析Kubernetes/html/15深入解析Pod对象二使用进阶.html',
                        audio:
                            './深入剖析Kubernetes/audio/15深入解析Pod对象二使用进阶.mp3'
                    },
                    {
                        id: 'hsiqqyakhk7',
                        title: '16 | 编排其实很简单：谈谈“控制器”模型',
                        src:
                            './深入剖析Kubernetes/html/16编排其实很简单谈谈控制器模型.html',
                        audio:
                            './深入剖析Kubernetes/audio/16编排其实很简单谈谈控制器模型.mp3'
                    },
                    {
                        id: '48alcb6chdp',
                        title: '17 | 经典PaaS的记忆：作业副本与水平扩展',
                        src:
                            './深入剖析Kubernetes/html/17经典PaaS的记忆作业副本与水平扩展.html',
                        audio:
                            './深入剖析Kubernetes/audio/17经典PaaS的记忆作业副本与水平扩展.mp3'
                    },
                    {
                        id: 'ynd1oapsam3',
                        title: '18 | 深入理解StatefulSet（一）：拓扑状态',
                        src:
                            './深入剖析Kubernetes/html/18深入理解StatefulSet一拓扑状态.html',
                        audio:
                            './深入剖析Kubernetes/audio/18深入理解StatefulSet一拓扑状态.mp3'
                    },
                    {
                        id: '4jp4c4rjswm',
                        title: '19 | 深入理解StatefulSet（二）：存储状态',
                        src:
                            './深入剖析Kubernetes/html/19深入理解StatefulSet二存储状态.html',
                        audio:
                            './深入剖析Kubernetes/audio/19深入理解StatefulSet二存储状态.mp3'
                    },
                    {
                        id: 'inb5kl6xkif',
                        title: '20 | 深入理解StatefulSet（三）：有状态应用实践',
                        src:
                            './深入剖析Kubernetes/html/20深入理解StatefulSet三有状态应用实践.html',
                        audio:
                            './深入剖析Kubernetes/audio/20深入理解StatefulSet三有状态应用实践.mp3'
                    },
                    {
                        id: 'z052x6kosh9',
                        title: '21 | 容器化守护进程的意义：DaemonSet',
                        src:
                            './深入剖析Kubernetes/html/21容器化守护进程的意义DaemonSet.html',
                        audio:
                            './深入剖析Kubernetes/audio/21容器化守护进程的意义DaemonSet.mp3'
                    },
                    {
                        id: '36dpwffdbnk',
                        title: '22 | 撬动离线业务：Job与CronJob',
                        src:
                            './深入剖析Kubernetes/html/22撬动离线业务Job与CronJob.html',
                        audio:
                            './深入剖析Kubernetes/audio/22撬动离线业务Job与CronJob.mp3'
                    },
                    {
                        id: '3zzqt9v7d4y',
                        title: '23 | 声明式API与Kubernetes编程范式',
                        src:
                            './深入剖析Kubernetes/html/23声明式API与Kubernetes编程范式.html',
                        audio:
                            './深入剖析Kubernetes/audio/23声明式API与Kubernetes编程范式.mp3'
                    },
                    {
                        id: '3mqkmp52gnl',
                        title: '24 | 深入解析声明式API（一）：API对象的奥秘',
                        src:
                            './深入剖析Kubernetes/html/24深入解析声明式API一API对象的奥秘.html',
                        audio:
                            './深入剖析Kubernetes/audio/24深入解析声明式API一API对象的奥秘.mp3'
                    },
                    {
                        id: 'ldai2yrd1wb',
                        title: '25 | 深入解析声明式API（二）：编写自定义控制器',
                        src:
                            './深入剖析Kubernetes/html/25深入解析声明式API二编写自定义控制器.html',
                        audio:
                            './深入剖析Kubernetes/audio/25深入解析声明式API二编写自定义控制器.mp3'
                    },
                    {
                        id: '2sbcuj4j0ok',
                        title: '26 | 基于角色的权限控制：RBAC',
                        src:
                            './深入剖析Kubernetes/html/26基于角色的权限控制RBAC.html',
                        audio:
                            './深入剖析Kubernetes/audio/26基于角色的权限控制RBAC.mp3'
                    },
                    {
                        id: '5gvroivnvjw',
                        title: '27 | 聪明的微创新：Operator工作原理解读',
                        src:
                            './深入剖析Kubernetes/html/27聪明的微创新Operator工作原理解读.html',
                        audio:
                            './深入剖析Kubernetes/audio/27聪明的微创新Operator工作原理解读.mp3'
                    }
                ]
            },
            {
                id: '7ockvkv90rz',
                title: 'Kubernetes容器持久化存储',
                subList: [
                    {
                        id: 'ctwwyyhndmq',
                        title: '28 | PV、PVC、StorageClass，这些到底在说啥？',
                        src:
                            './深入剖析Kubernetes/html/28PVPVCStorageClass这些到底在说啥.html',
                        audio:
                            './深入剖析Kubernetes/audio/28PVPVCStorageClass这些到底在说啥.mp3'
                    },
                    {
                        id: 'oggzhi6wj97',
                        title:
                            '29 | PV、PVC体系是不是多此一举？从本地持久化卷谈起',
                        src:
                            './深入剖析Kubernetes/html/29PVPVC体系是不是多此一举从本地持久化卷谈起.html',
                        audio:
                            './深入剖析Kubernetes/audio/29PVPVC体系是不是多此一举从本地持久化卷谈起.mp3'
                    },
                    {
                        id: '7aagorgbfht',
                        title: '30 | 编写自己的存储插件：FlexVolume与CSI',
                        src:
                            './深入剖析Kubernetes/html/30编写自己的存储插件FlexVolume与CSI.html',
                        audio:
                            './深入剖析Kubernetes/audio/30编写自己的存储插件FlexVolume与CSI.mp3'
                    },
                    {
                        id: 'pkduessca7r',
                        title: '31 | 容器存储实践：CSI插件编写指南',
                        src:
                            './深入剖析Kubernetes/html/31容器存储实践CSI插件编写指南.html',
                        audio:
                            './深入剖析Kubernetes/audio/31容器存储实践CSI插件编写指南.mp3'
                    }
                ]
            },
            {
                id: 'g9paasudwto',
                title: 'Kubernetes容器网络',
                subList: [
                    {
                        id: 'llky4vpqukv',
                        title: '32 | 浅谈容器网络',
                        src: './深入剖析Kubernetes/html/32浅谈容器网络.html',
                        audio: './深入剖析Kubernetes/audio/32浅谈容器网络.mp3'
                    },
                    {
                        id: 'isblgrm9vq5',
                        title: '33 | 深入解析容器跨主机网络',
                        src:
                            './深入剖析Kubernetes/html/33深入解析容器跨主机网络.html',
                        audio:
                            './深入剖析Kubernetes/audio/33深入解析容器跨主机网络.mp3'
                    },
                    {
                        id: '0s39o5sarn5',
                        title: '34 | Kubernetes网络模型与CNI网络插件',
                        src:
                            './深入剖析Kubernetes/html/34Kubernetes网络模型与CNI网络插件.html',
                        audio:
                            './深入剖析Kubernetes/audio/34Kubernetes网络模型与CNI网络插件.mp3'
                    },
                    {
                        id: '9lzexbmqltk',
                        title: '35 | 解读Kubernetes三层网络方案',
                        src:
                            './深入剖析Kubernetes/html/35解读Kubernetes三层网络方案.html',
                        audio:
                            './深入剖析Kubernetes/audio/35解读Kubernetes三层网络方案.mp3'
                    },
                    {
                        id: 'geurov0ug09',
                        title:
                            '36 | 为什么说Kubernetes只有soft multi-tenancy？',
                        src:
                            './深入剖析Kubernetes/html/36为什么说Kubernetes只有softmultitenancy.html',
                        audio:
                            './深入剖析Kubernetes/audio/36为什么说Kubernetes只有softmultitenancy.mp3'
                    },
                    {
                        id: 'dpgpau69jlb',
                        title: '37 | 找到容器不容易：Service、DNS与服务发现',
                        src:
                            './深入剖析Kubernetes/html/37找到容器不容易ServiceDNS与服务发现.html',
                        audio:
                            './深入剖析Kubernetes/audio/37找到容器不容易ServiceDNS与服务发现.mp3'
                    },
                    {
                        id: 'dqsg3rgvch6',
                        title: '38 | 从外界连通Service与Service调试“三板斧”',
                        src:
                            './深入剖析Kubernetes/html/38从外界连通Service与Service调试三板斧.html',
                        audio:
                            './深入剖析Kubernetes/audio/38从外界连通Service与Service调试三板斧.mp3'
                    },
                    {
                        id: '9lzd233cdxz',
                        title: '39 | 谈谈Service与Ingress',
                        src:
                            './深入剖析Kubernetes/html/39谈谈Service与Ingress.html',
                        audio:
                            './深入剖析Kubernetes/audio/39谈谈Service与Ingress.mp3'
                    }
                ]
            },
            {
                id: 'pmbv25inqa1',
                title: 'Kubernetes作业调度与资源管理',
                subList: [
                    {
                        id: 's5i7sd0fidb',
                        title: '40 | Kubernetes的资源模型与资源管理',
                        src:
                            './深入剖析Kubernetes/html/40Kubernetes的资源模型与资源管理.html',
                        audio:
                            './深入剖析Kubernetes/audio/40Kubernetes的资源模型与资源管理.mp3'
                    },
                    {
                        id: 'yemygkj4x3n',
                        title: '41 | 十字路口上的Kubernetes默认调度器',
                        src:
                            './深入剖析Kubernetes/html/41十字路口上的Kubernetes默认调度器.html',
                        audio:
                            './深入剖析Kubernetes/audio/41十字路口上的Kubernetes默认调度器.mp3'
                    },
                    {
                        id: 'xshntl2zbtu',
                        title: '42 | Kubernetes默认调度器调度策略解析',
                        src:
                            './深入剖析Kubernetes/html/42Kubernetes默认调度器调度策略解析.html',
                        audio:
                            './深入剖析Kubernetes/audio/42Kubernetes默认调度器调度策略解析.mp3'
                    },
                    {
                        id: 'ei5keujayyn',
                        title: '43 | Kubernetes默认调度器的优先级与抢占机制',
                        src:
                            './深入剖析Kubernetes/html/43Kubernetes默认调度器的优先级与抢占机制.html',
                        audio:
                            './深入剖析Kubernetes/audio/43Kubernetes默认调度器的优先级与抢占机制.mp3'
                    },
                    {
                        id: 'c1u8kmhn29v',
                        title: '44 | Kubernetes GPU管理与Device Plugin机制',
                        src:
                            './深入剖析Kubernetes/html/44KubernetesGPU管理与DevicePlugin机制.html',
                        audio:
                            './深入剖析Kubernetes/audio/44KubernetesGPU管理与DevicePlugin机制.mp3'
                    }
                ]
            },
            {
                id: 'bdgnaq610bj',
                title: 'Kubernetes容器运行时',
                subList: [
                    {
                        id: '4ix0ck28ott',
                        title: '45 | 幕后英雄：SIG-Node与CRI',
                        src:
                            './深入剖析Kubernetes/html/45幕后英雄SIGNode与CRI.html',
                        audio:
                            './深入剖析Kubernetes/audio/45幕后英雄SIGNode与CRI.mp3'
                    },
                    {
                        id: '1lrx6ux2ie1',
                        title: '46 | 解读 CRI 与 容器运行时',
                        src:
                            './深入剖析Kubernetes/html/46解读CRI与容器运行时.html',
                        audio:
                            './深入剖析Kubernetes/audio/46解读CRI与容器运行时.mp3'
                    },
                    {
                        id: '0dnh82xn84k',
                        title: '47 | 绝不仅仅是安全：Kata Containers 与 gVisor',
                        src:
                            './深入剖析Kubernetes/html/47绝不仅仅是安全KataContainers与gVisor.html',
                        audio:
                            './深入剖析Kubernetes/audio/47绝不仅仅是安全KataContainers与gVisor.mp3'
                    }
                ]
            },
            {
                id: '1ov0136zeyb',
                title: 'Kubernetes容器监控与日志',
                subList: [
                    {
                        id: 'pzzljv64fui',
                        title:
                            '48 | Prometheus、Metrics Server与Kubernetes监控体系',
                        src:
                            './深入剖析Kubernetes/html/48PrometheusMetricsServer与Kubernetes监控体系.html',
                        audio:
                            './深入剖析Kubernetes/audio/48PrometheusMetricsServer与Kubernetes监控体系.mp3'
                    },
                    {
                        id: 'io3qjp915l8',
                        title:
                            '49 | Custom Metrics: 让Auto Scaling不再“食之无味”',
                        src: '',
                        audio:
                            './深入剖析Kubernetes/audio/49CustomMetrics让AutoScaling不再食之无味.mp3'
                    },
                    {
                        id: 'tga1q9zm77v',
                        title: '50 | 让日志无处可逃：容器日志收集与管理',
                        src: '',
                        audio:
                            './深入剖析Kubernetes/audio/50让日志无处可逃容器日志收集与管理.mp3'
                    }
                ]
            },
            {
                id: '10v7mceu7sh',
                title: '再谈开源与社区',
                subList: [
                    {
                        id: 'hqysy21ls3e',
                        title: '51 | 谈谈Kubernetes开源社区和未来走向',
                        src: '',
                        audio:
                            './深入剖析Kubernetes/audio/51谈谈Kubernetes开源社区和未来走向.mp3'
                    }
                ]
            },
            {
                id: 'rykf5619vba',
                title: '答疑文章',
                subList: [
                    {
                        id: 'sp5h0uyldni',
                        title: '52 | 答疑：在问题中解决问题，在思考中产生思考',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: '7url7jpdfv8',
                title: '特别放送',
                subList: [
                    {
                        id: 'bx0gpm19dd8',
                        title: '特别放送 | 2019 年，容器技术生态会发生些什么？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'w9g45xlspyt',
                        title:
                            '特别放送 | 基于 Kubernetes 的云原生应用管理，到底应该怎么做？',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: 'cfekfg3bxot',
                title: '结束语',
                subList: [
                    {
                        id: 's4ljfyzzzpu',
                        title: '结束语 | Kubernetes：赢开发者赢天下',
                        src: '',
                        audio:
                            './深入剖析Kubernetes/audio/结束语Kubernetes赢开发者赢天下.mp3'
                    }
                ]
            },
            {
                id: 'eois5yqxego',
                title: '结课测试',
                subList: [
                    {
                        id: 'cd7tnq7ukxu',
                        title:
                            '结课测试｜这些Kubernetes的相关知识，你都掌握了吗？',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'niew50p7h79',
        type: 'backend',
        cid: '100029501',
        title: 'SQL必知必会',
        subTitle: '从入门到数据实战',
        authorName: '陈旸',
        authorInfo: '清华大学计算机博士',
        contents: [
            {
                id: 'nee49708j1y',
                title: '开篇词',
                subList: [
                    {
                        id: '4usgibj3dd9',
                        title: '开篇词丨SQL可能是你掌握的最有用的技能',
                        src:
                            './SQL必知必会/html/00开篇词SQL可能是你掌握的最有用的技能.html',
                        audio:
                            './SQL必知必会/audio/00开篇词SQL可能是你掌握的最有用的技能.mp3'
                    }
                ]
            },
            {
                id: 'hhlksh1h0gq',
                title: '第一章：SQL语法基础篇',
                subList: [
                    {
                        id: 'l4pehtqw1qm',
                        title: '01丨了解SQL：一门半衰期很长的语言',
                        src:
                            './SQL必知必会/html/01了解SQL一门半衰期很长的语言.html',
                        audio:
                            './SQL必知必会/audio/01了解SQL一门半衰期很长的语言.mp3'
                    },
                    {
                        id: 'pyft5jc266v',
                        title: '02丨DBMS的前世今生',
                        src: './SQL必知必会/html/02DBMS的前世今生.html',
                        audio: './SQL必知必会/audio/02DBMS的前世今生.mp3'
                    },
                    {
                        id: 'grh0c4ug0jj',
                        title: '03丨学会用数据库的方式思考SQL是如何执行的',
                        src:
                            './SQL必知必会/html/03学会用数据库的方式思考SQL是如何执行的.html',
                        audio:
                            './SQL必知必会/audio/03学会用数据库的方式思考SQL是如何执行的.mp3'
                    },
                    {
                        id: 'hx4phyg4s1n',
                        title: '04丨使用DDL创建数据库&数据表时需要注意什么？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'd92geuoya3a',
                        title: '05丨检索数据：你还在SELECT * 么？',
                        src: './SQL必知必会/html/05检索数据你还在SELECT么.html',
                        audio:
                            './SQL必知必会/audio/05检索数据你还在SELECT么.mp3'
                    },
                    {
                        id: 'q15udpwnc4p',
                        title: '06丨数据过滤：SQL数据过滤都有哪些方法？',
                        src:
                            './SQL必知必会/html/06数据过滤SQL数据过滤都有哪些方法.html',
                        audio:
                            './SQL必知必会/audio/06数据过滤SQL数据过滤都有哪些方法.mp3'
                    },
                    {
                        id: '6bzvdk08of9',
                        title:
                            '07丨什么是SQL函数？为什么使用SQL函数可能会带来问题？',
                        src:
                            './SQL必知必会/html/07什么是SQL函数为什么使用SQL函数可能会带来问题.html',
                        audio:
                            './SQL必知必会/audio/07什么是SQL函数为什么使用SQL函数可能会带来问题.mp3'
                    },
                    {
                        id: 'z1ticsqrjn6',
                        title:
                            '08丨什么是SQL的聚集函数，如何利用它们汇总表的数据？',
                        src:
                            './SQL必知必会/html/08什么是SQL的聚集函数如何利用它们汇总表的数据.html',
                        audio:
                            './SQL必知必会/audio/08什么是SQL的聚集函数如何利用它们汇总表的数据.mp3'
                    },
                    {
                        id: 'quiup5bscj9',
                        title:
                            '09丨子查询：子查询的种类都有哪些，如何提高子查询的性能？',
                        src:
                            './SQL必知必会/html/09子查询子查询的种类都有哪些如何提高子查询的性能.html',
                        audio:
                            './SQL必知必会/audio/09子查询子查询的种类都有哪些如何提高子查询的性能.mp3'
                    },
                    {
                        id: 'usxuyb1z3l9',
                        title:
                            '10丨常用的SQL标准有哪些，在SQL92中是如何使用连接的？',
                        src:
                            './SQL必知必会/html/10常用的SQL标准有哪些在SQL92中是如何使用连接的.html',
                        audio:
                            './SQL必知必会/audio/10常用的SQL标准有哪些在SQL92中是如何使用连接的.mp3'
                    },
                    {
                        id: 'hkfaqd3qozw',
                        title:
                            '11丨SQL99是如何使用连接的，与SQL92的区别是什么？',
                        src:
                            './SQL必知必会/html/11SQL99是如何使用连接的与SQL92的区别是什么.html',
                        audio:
                            './SQL必知必会/audio/11SQL99是如何使用连接的与SQL92的区别是什么.mp3'
                    },
                    {
                        id: '9t5kc40kd7m',
                        title: '12丨视图在SQL中的作用是什么，它是怎样工作的？',
                        src:
                            './SQL必知必会/html/12视图在SQL中的作用是什么它是怎样工作的.html',
                        audio:
                            './SQL必知必会/audio/12视图在SQL中的作用是什么它是怎样工作的.mp3'
                    },
                    {
                        id: '89e6fptiu0c',
                        title: '13丨什么是存储过程，在实际项目中用得多么？',
                        src:
                            './SQL必知必会/html/13什么是存储过程在实际项目中用得多么.html',
                        audio:
                            './SQL必知必会/audio/13什么是存储过程在实际项目中用得多么.mp3'
                    },
                    {
                        id: 'v66uusriofh',
                        title:
                            '14丨什么是事务处理，如何使用COMMIT和ROLLBACK进行操作？',
                        src:
                            './SQL必知必会/html/14什么是事务处理如何使用COMMIT和ROLLBACK进行操作.html',
                        audio:
                            './SQL必知必会/audio/14什么是事务处理如何使用COMMIT和ROLLBACK进行操作.mp3'
                    },
                    {
                        id: 'w5g0rxn2wqv',
                        title:
                            '15丨初识事务隔离：隔离的级别有哪些，它们都解决了哪些异常问题？',
                        src:
                            './SQL必知必会/html/15初识事务隔离隔离的级别有哪些它们都解决了哪些异常问题.html',
                        audio:
                            './SQL必知必会/audio/15初识事务隔离隔离的级别有哪些它们都解决了哪些异常问题.mp3'
                    },
                    {
                        id: 'fyti7z1h9tu',
                        title: '16丨游标：当我们需要逐条处理数据时，该怎么做？',
                        src:
                            './SQL必知必会/html/16游标当我们需要逐条处理数据时该怎么做.html',
                        audio: ''
                    },
                    {
                        id: 'tjwwypo8b9a',
                        title: '17丨如何使用Python操作MySQL？',
                        src:
                            './SQL必知必会/html/17如何使用Python操作MySQL.html',
                        audio: ''
                    },
                    {
                        id: '0uvw1uanuvl',
                        title:
                            '18丨SQLAlchemy：如何使用Python ORM框架来操作MySQL？',
                        src:
                            './SQL必知必会/html/18SQLAlchemy如何使用PythonORM框架来操作MySQL.html',
                        audio:
                            './SQL必知必会/audio/18SQLAlchemy如何使用PythonORM框架来操作MySQL.mp3'
                    },
                    {
                        id: '7jcw5gn0m0v',
                        title:
                            '19丨基础篇总结：如何理解查询优化、通配符以及存储过程？',
                        src:
                            './SQL必知必会/html/19基础篇总结如何理解查询优化通配符以及存储过程.html',
                        audio:
                            './SQL必知必会/audio/19基础篇总结如何理解查询优化通配符以及存储过程.mp3'
                    }
                ]
            },
            {
                id: 'l1folyvb7wv',
                title: '第二章：SQL性能优化篇',
                subList: [
                    {
                        id: 'rqo1msgesyw',
                        title:
                            '20丨当我们思考数据库调优的时候，都有哪些维度可以选择？',
                        src:
                            './SQL必知必会/html/20当我们思考数据库调优的时候都有哪些维度可以选择.html',
                        audio:
                            './SQL必知必会/audio/20当我们思考数据库调优的时候都有哪些维度可以选择.mp3'
                    },
                    {
                        id: '6wym21d47yo',
                        title:
                            '21丨范式设计：数据表的范式有哪些，3NF指的是什么？',
                        src:
                            './SQL必知必会/html/21范式设计数据表的范式有哪些3NF指的是什么.html',
                        audio:
                            './SQL必知必会/audio/21范式设计数据表的范式有哪些3NF指的是什么.mp3'
                    },
                    {
                        id: 'gzvejdgj5qj',
                        title:
                            '22丨反范式设计：3NF有什么不足，为什么有时候需要反范式设计？',
                        src:
                            './SQL必知必会/html/22反范式设计3NF有什么不足为什么有时候需要反范式设计.html',
                        audio:
                            './SQL必知必会/audio/22反范式设计3NF有什么不足为什么有时候需要反范式设计.mp3'
                    },
                    {
                        id: 'g8h6jv4q0p3',
                        title: '23丨索引的概览：用还是不用索引，这是一个问题',
                        src:
                            './SQL必知必会/html/23索引的概览用还是不用索引这是一个问题.html',
                        audio:
                            './SQL必知必会/audio/23索引的概览用还是不用索引这是一个问题.mp3'
                    },
                    {
                        id: 'pd6pbenonm6',
                        title: '24丨索引的原理：我们为什么用B+树来做索引？',
                        src:
                            './SQL必知必会/html/24索引的原理我们为什么用B+树来做索引.html',
                        audio:
                            './SQL必知必会/audio/24索引的原理我们为什么用B+树来做索引.mp3'
                    },
                    {
                        id: '2dkvj3pjwye',
                        title: '25丨Hash索引的底层原理是什么？',
                        src:
                            './SQL必知必会/html/25Hash索引的底层原理是什么.html',
                        audio:
                            './SQL必知必会/audio/25Hash索引的底层原理是什么.mp3'
                    },
                    {
                        id: 'wyjkex1nmnz',
                        title:
                            '26丨索引的使用原则：如何通过索引让SQL查询效率最大化？',
                        src:
                            './SQL必知必会/html/26索引的使用原则如何通过索引让SQL查询效率最大化.html',
                        audio:
                            './SQL必知必会/audio/26索引的使用原则如何通过索引让SQL查询效率最大化.mp3'
                    },
                    {
                        id: '2jxh80kzkgk',
                        title: '27丨从数据页的角度理解B+树查询',
                        src:
                            './SQL必知必会/html/27从数据页的角度理解B+树查询.html',
                        audio:
                            './SQL必知必会/audio/27从数据页的角度理解B+树查询.mp3'
                    },
                    {
                        id: '6wxa926uiwx',
                        title: '28丨从磁盘I/O的角度理解SQL查询的成本',
                        src:
                            './SQL必知必会/html/28从磁盘IO的角度理解SQL查询的成本.html',
                        audio:
                            './SQL必知必会/audio/28从磁盘IO的角度理解SQL查询的成本.mp3'
                    },
                    {
                        id: 'mgppmwoui2h',
                        title: '29丨为什么没有理想的索引？',
                        src: './SQL必知必会/html/29为什么没有理想的索引.html',
                        audio: './SQL必知必会/audio/29为什么没有理想的索引.mp3'
                    },
                    {
                        id: 'mionnmt1xis',
                        title: '30丨锁：悲观锁和乐观锁是什么？',
                        src: './SQL必知必会/html/30锁悲观锁和乐观锁是什么.html',
                        audio:
                            './SQL必知必会/audio/30锁悲观锁和乐观锁是什么.mp3'
                    },
                    {
                        id: 't04cl5q8yqo',
                        title: '31丨为什么大部分RDBMS都会支持MVCC？',
                        src:
                            './SQL必知必会/html/31为什么大部分RDBMS都会支持MVCC.html',
                        audio:
                            './SQL必知必会/audio/31为什么大部分RDBMS都会支持MVCC.mp3'
                    },
                    {
                        id: 'pdim24tiesc',
                        title: '32丨查询优化器是如何工作的？',
                        src: './SQL必知必会/html/32查询优化器是如何工作的.html',
                        audio:
                            './SQL必知必会/audio/32查询优化器是如何工作的.mp3'
                    },
                    {
                        id: 'dlr927s2hx6',
                        title: '33丨如何使用性能分析工具定位SQL执行慢的原因？',
                        src:
                            './SQL必知必会/html/33如何使用性能分析工具定位SQL执行慢的原因.html',
                        audio:
                            './SQL必知必会/audio/33如何使用性能分析工具定位SQL执行慢的原因.mp3'
                    },
                    {
                        id: 's10816ydmgn',
                        title: '34丨答疑篇：关于索引以及缓冲池的一些解惑',
                        src:
                            './SQL必知必会/html/34答疑篇关于索引以及缓冲池的一些解惑.html',
                        audio:
                            './SQL必知必会/audio/34答疑篇关于索引以及缓冲池的一些解惑.mp3'
                    },
                    {
                        id: 'b6k73rkp6sc',
                        title:
                            '35丨数据库主从同步的作用是什么，如何解决数据不一致问题？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: '83cetda5n92',
                        title:
                            '36丨数据库没有备份，没有使用Binlog的情况下，如何恢复数据？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: '9700vnzjmy2',
                        title: '37丨SQL注入：你的SQL是如何被注入的？',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: 'stw84rrh8es',
                title: '第三章：认识DBMS',
                subList: [
                    {
                        id: 'cylcyn33i2u',
                        title: '38丨如何在Excel中使用SQL语言？',
                        src:
                            './SQL必知必会/html/35如何在Excel中使用SQL语言.html',
                        audio:
                            './SQL必知必会/audio/35如何在Excel中使用SQL语言.mp3'
                    },
                    {
                        id: '5c3hz44bl97',
                        title: '39丨WebSQL：如何在H5中存储一个本地数据库？',
                        src:
                            './SQL必知必会/html/36WebSQL如何在H5中存储一个本地数据库.html',
                        audio:
                            './SQL必知必会/audio/36WebSQL如何在H5中存储一个本地数据库.mp3'
                    },
                    {
                        id: '8hpjqbtcfwq',
                        title: '40丨SQLite：为什么微信用SQLite存储聊天记录？',
                        src:
                            './SQL必知必会/html/37SQLite为什么微信用SQLite存储聊天记录.html',
                        audio:
                            './SQL必知必会/audio/37SQLite为什么微信用SQLite存储聊天记录.mp3'
                    },
                    {
                        id: 'cn5amnhyqma',
                        title: '41丨初识Redis：Redis为什么会这么快？',
                        src:
                            './SQL必知必会/html/40初识RedisRedis为什么会这么快.html',
                        audio:
                            './SQL必知必会/audio/38初识RedisRedis为什么会这么快.mp3'
                    },
                    {
                        id: 'sprfszusw10',
                        title: '42丨如何使用Redis来实现多用户抢票问题',
                        src:
                            './SQL必知必会/html/39如何使用Redis来实现多用户抢票问题.html',
                        audio:
                            './SQL必知必会/audio/39如何使用Redis来实现多用户抢票问题.mp3'
                    },
                    {
                        id: 'lmqjgcp8hbk',
                        title: '43丨如何使用Redis搭建玩家排行榜？',
                        src:
                            './SQL必知必会/html/42如何使用Redis搭建玩家排行榜.html',
                        audio:
                            './SQL必知必会/audio/43如何使用Redis搭建玩家排行榜.mp3'
                    },
                    {
                        id: 'saurigetcl2',
                        title: '44丨DBMS篇总结和答疑：用SQLite做词云',
                        src:
                            './SQL必知必会/html/44DBMS篇总结和答疑用SQLite做词云.html',
                        audio:
                            './SQL必知必会/audio/44DBMS篇总结和答疑用SQLite做词云.mp3'
                    }
                ]
            },
            {
                id: 'iz7rvvhvz1z',
                title: '第四章：SQL项目实战',
                subList: [
                    {
                        id: 'v8nmo7tursa',
                        title: '45丨数据清洗：如何使用SQL对数据进行清洗？',
                        src:
                            './SQL必知必会/html/45数据清洗如何使用SQL对数据进行清洗.html',
                        audio:
                            './SQL必知必会/audio/45数据清洗如何使用SQL对数据进行清洗.mp3'
                    },
                    {
                        id: 'cm5y045zamm',
                        title: '46丨数据集成：如何对各种数据库进行集成和转换？',
                        src:
                            './SQL必知必会/html/46数据集成如何对各种数据库进行集成和转换.html',
                        audio:
                            './SQL必知必会/audio/46数据集成如何对各种数据库进行集成和转换.mp3'
                    },
                    {
                        id: 'cjiylt2mm3u',
                        title: '47丨如何利用SQL对零售数据进行分析？',
                        src:
                            './SQL必知必会/html/47如何利用SQL对零售数据进行分析.html',
                        audio:
                            './SQL必知必会/audio/47如何利用SQL对零售数据进行分析.mp3'
                    }
                ]
            },
            {
                id: 'fiyd9lqtpxm',
                title: '结束语',
                subList: [
                    {
                        id: 'nh79x0igjv4',
                        title: '结束语 | 互联网的下半场是数据驱动的时代',
                        src:
                            './SQL必知必会/html/结束语互联网的下半场是数据驱动的时代.html',
                        audio:
                            './SQL必知必会/audio/结束语互联网的下半场是数据驱动的时代.mp3'
                    }
                ]
            },
            {
                id: 'kb7brdvyajr',
                title: '期末考试',
                subList: [
                    {
                        id: 'kpd97ubhfl2',
                        title: '期末测试丨对于SQL的有关内容，你掌握了多少呢？',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'ltdxizwqy7s',
        type: 'backend',
        cid: '100020801',
        title: 'MySQL实战45讲',
        subTitle: '从原理到实战，丁奇带你搞懂MySQL',
        authorName: '林晓斌',
        authorInfo: '网名丁奇，前阿里资深技术专家',
        contents: [
            {
                id: 'e5gs8upndha',
                title: '开篇词',
                subList: [
                    {
                        id: '902m9m3f14x',
                        title: '开篇词 | 这一次，让我们一起来搞懂MySQL',
                        src:
                            './MySQL实战45讲/html/00开篇词这一次让我们一起来搞懂MySQL.html',
                        audio:
                            './MySQL实战45讲/audio/00开篇词这一次让我们一起来搞懂MySQL.mp3'
                    }
                ]
            },
            {
                id: 'pwgh1g7f0fb',
                title: '基础篇',
                subList: [
                    {
                        id: '9dq6wu1myeg',
                        title: '01 | 基础架构：一条SQL查询语句是如何执行的？',
                        src:
                            './MySQL实战45讲/html/01基础架构一条SQL查询语句是如何执行的.html',
                        audio:
                            './MySQL实战45讲/audio/01基础架构一条SQL查询语句是如何执行的.mp3'
                    },
                    {
                        id: '87bq6kbojxc',
                        title: '02  | 日志系统：一条SQL更新语句是如何执行的？',
                        src:
                            './MySQL实战45讲/html/02日志系统一条SQL更新语句是如何执行的.html',
                        audio:
                            './MySQL实战45讲/audio/02日志系统一条SQL更新语句是如何执行的.mp3'
                    },
                    {
                        id: '9xwiqvvoecc',
                        title: '03 | 事务隔离：为什么你改了我还看不见？',
                        src:
                            './MySQL实战45讲/html/03事务隔离为什么你改了我还看不见.html',
                        audio:
                            './MySQL实战45讲/audio/03事务隔离为什么你改了我还看不见.mp3'
                    },
                    {
                        id: 'tuj7rovl1km',
                        title: '04 | 深入浅出索引（上）',
                        src: './MySQL实战45讲/html/04深入浅出索引上.html',
                        audio: './MySQL实战45讲/audio/04深入浅出索引上.mp3'
                    },
                    {
                        id: 'h962u0csjai',
                        title: '05 | 深入浅出索引（下）',
                        src: './MySQL实战45讲/html/05深入浅出索引下.html',
                        audio: './MySQL实战45讲/audio/05深入浅出索引下.mp3'
                    },
                    {
                        id: '1vz0n5cezi7',
                        title:
                            '06 | 全局锁和表锁 ：给表加个字段怎么有这么多阻碍？',
                        src:
                            './MySQL实战45讲/html/06全局锁和表锁给表加个字段怎么有这么多阻碍.html',
                        audio:
                            './MySQL实战45讲/audio/06全局锁和表锁给表加个字段怎么有这么多阻碍.mp3'
                    },
                    {
                        id: '3dv0h1zlj5j',
                        title: '07 | 行锁功过：怎么减少行锁对性能的影响？',
                        src:
                            './MySQL实战45讲/html/07行锁功过怎么减少行锁对性能的影响.html',
                        audio:
                            './MySQL实战45讲/audio/07行锁功过怎么减少行锁对性能的影响.mp3'
                    },
                    {
                        id: 'wgtrowa10nc',
                        title: '08 | 事务到底是隔离的还是不隔离的？',
                        src:
                            './MySQL实战45讲/html/08事务到底是隔离的还是不隔离的.html',
                        audio:
                            './MySQL实战45讲/audio/08事务到底是隔离的还是不隔离的.mp3'
                    }
                ]
            },
            {
                id: 'gsspewafpqx',
                title: '实践篇',
                subList: [
                    {
                        id: '9ogkjgqv7al',
                        title: '09 | 普通索引和唯一索引，应该怎么选择？',
                        src:
                            './MySQL实战45讲/html/09普通索引和唯一索引应该怎么选择.html',
                        audio:
                            './MySQL实战45讲/audio/09普通索引和唯一索引应该怎么选择.mp3'
                    },
                    {
                        id: 'j5lqxo9k3iq',
                        title: '10 | MySQL为什么有时候会选错索引？',
                        src:
                            './MySQL实战45讲/html/10MySQL为什么有时候会选错索引.html',
                        audio:
                            './MySQL实战45讲/audio/10MySQL为什么有时候会选错索引.mp3'
                    },
                    {
                        id: '7q1z5pqj5pw',
                        title: '11 |  怎么给字符串字段加索引？',
                        src:
                            './MySQL实战45讲/html/11怎么给字符串字段加索引.html',
                        audio:
                            './MySQL实战45讲/audio/11怎么给字符串字段加索引.mp3'
                    },
                    {
                        id: 'a7s0llf6u92',
                        title: '12 | 为什么我的MySQL会“抖”一下？',
                        src:
                            './MySQL实战45讲/html/12为什么我的MySQL会抖一下.html',
                        audio:
                            './MySQL实战45讲/audio/12为什么我的MySQL会抖一下.mp3'
                    },
                    {
                        id: 'dmjw9tc7wdj',
                        title: '13 | 为什么表数据删掉一半，表文件大小不变？',
                        src:
                            './MySQL实战45讲/html/13为什么表数据删掉一半表文件大小不变.html',
                        audio:
                            './MySQL实战45讲/audio/13为什么表数据删掉一半表文件大小不变.mp3'
                    },
                    {
                        id: 'kjjn9ods6w1',
                        title: '14 | count(*)这么慢，我该怎么办？',
                        src:
                            './MySQL实战45讲/html/14count这么慢我该怎么办.html',
                        audio:
                            './MySQL实战45讲/audio/14count这么慢我该怎么办.mp3'
                    },
                    {
                        id: '7s5afibiier',
                        title: '15 | 答疑文章（一）：日志和索引相关问题',
                        src:
                            './MySQL实战45讲/html/15答疑文章一日志和索引相关问题.html',
                        audio:
                            './MySQL实战45讲/audio/15答疑文章一日志和索引相关问题.mp3'
                    },
                    {
                        id: 'eok7bq3cn60',
                        title: '16 | “order by”是怎么工作的？',
                        src: './MySQL实战45讲/html/16orderby是怎么工作的.html',
                        audio: './MySQL实战45讲/audio/16orderby是怎么工作的.mp3'
                    },
                    {
                        id: 'zwxljakwy7b',
                        title: '17 | 如何正确地显示随机消息？',
                        src:
                            './MySQL实战45讲/html/17如何正确地显示随机消息.html',
                        audio:
                            './MySQL实战45讲/audio/17如何正确地显示随机消息.mp3'
                    },
                    {
                        id: 'z0pknw1sqbo',
                        title:
                            '18 | 为什么这些SQL语句逻辑相同，性能却差异巨大？',
                        src:
                            './MySQL实战45讲/html/18为什么这些SQL语句逻辑相同性能却差异巨大.html',
                        audio:
                            './MySQL实战45讲/audio/18为什么这些SQL语句逻辑相同性能却差异巨大.mp3'
                    },
                    {
                        id: 'he9nqkzfmdt',
                        title: '19 | 为什么我只查一行的语句，也执行这么慢？',
                        src:
                            './MySQL实战45讲/html/19为什么我只查一行的语句也执行这么慢.html',
                        audio:
                            './MySQL实战45讲/audio/19为什么我只查一行的语句也执行这么慢.mp3'
                    },
                    {
                        id: '77ryu16fjtw',
                        title: '20 | 幻读是什么，幻读有什么问题？',
                        src:
                            './MySQL实战45讲/html/20幻读是什么幻读有什么问题.html',
                        audio:
                            './MySQL实战45讲/audio/20幻读是什么幻读有什么问题.mp3'
                    },
                    {
                        id: 'gglmq8q5x7g',
                        title: '21 | 为什么我只改一行的语句，锁这么多？',
                        src:
                            './MySQL实战45讲/html/21为什么我只改一行的语句锁这么多.html',
                        audio:
                            './MySQL实战45讲/audio/21为什么我只改一行的语句锁这么多.mp3'
                    },
                    {
                        id: '4i13pizrzfy',
                        title: '22 | MySQL有哪些“饮鸩止渴”提高性能的方法？',
                        src:
                            './MySQL实战45讲/html/22MySQL有哪些饮鸩止渴提高性能的方法.html',
                        audio:
                            './MySQL实战45讲/audio/22MySQL有哪些饮鸩止渴提高性能的方法.mp3'
                    },
                    {
                        id: '3t1do0z62q9',
                        title: '23 | MySQL是怎么保证数据不丢的？',
                        src:
                            './MySQL实战45讲/html/23MySQL是怎么保证数据不丢的.html',
                        audio:
                            './MySQL实战45讲/audio/23MySQL是怎么保证数据不丢的.mp3'
                    },
                    {
                        id: '8nl0jsylf54',
                        title: '24 | MySQL是怎么保证主备一致的？',
                        src:
                            './MySQL实战45讲/html/24MySQL是怎么保证主备一致的.html',
                        audio:
                            './MySQL实战45讲/audio/24MySQL是怎么保证主备一致的.mp3'
                    },
                    {
                        id: 'f2ro9xm3ba6',
                        title: '25 | MySQL是怎么保证高可用的？',
                        src:
                            './MySQL实战45讲/html/25MySQL是怎么保证高可用的.html',
                        audio:
                            './MySQL实战45讲/audio/25MySQL是怎么保证高可用的.mp3'
                    },
                    {
                        id: 'tly1d18gri1',
                        title: '26 | 备库为什么会延迟好几个小时？',
                        src:
                            './MySQL实战45讲/html/26备库为什么会延迟好几个小时.html',
                        audio:
                            './MySQL实战45讲/audio/26备库为什么会延迟好几个小时.mp3'
                    },
                    {
                        id: '5uve7e6wrbn',
                        title: '27 | 主库出问题了，从库怎么办？',
                        src:
                            './MySQL实战45讲/html/27主库出问题了从库怎么办.html',
                        audio:
                            './MySQL实战45讲/audio/27主库出问题了从库怎么办.mp3'
                    },
                    {
                        id: '468tjnvje4o',
                        title: '28 | 读写分离有哪些坑？',
                        src: './MySQL实战45讲/html/28读写分离有哪些坑.html',
                        audio: './MySQL实战45讲/audio/28读写分离有哪些坑.mp3'
                    },
                    {
                        id: 'gbnpe1x31du',
                        title: '29 | 如何判断一个数据库是不是出问题了？',
                        src:
                            './MySQL实战45讲/html/29如何判断一个数据库是不是出问题了.html',
                        audio:
                            './MySQL实战45讲/audio/29如何判断一个数据库是不是出问题了.mp3'
                    },
                    {
                        id: 'k392586vlie',
                        title: '30 | 答疑文章（二）：用动态的观点看加锁',
                        src:
                            './MySQL实战45讲/html/30答疑文章二用动态的观点看加锁.html',
                        audio:
                            './MySQL实战45讲/audio/30答疑文章二用动态的观点看加锁.mp3'
                    },
                    {
                        id: 'tfg1on4xzqb',
                        title: '31 | 误删数据后除了跑路，还能怎么办？',
                        src:
                            './MySQL实战45讲/html/31误删数据后除了跑路还能怎么办.html',
                        audio:
                            './MySQL实战45讲/audio/31误删数据后除了跑路还能怎么办.mp3'
                    },
                    {
                        id: 'ejqitndjosy',
                        title: '32 | 为什么还有kill不掉的语句？',
                        src:
                            './MySQL实战45讲/html/32为什么还有kill不掉的语句.html',
                        audio:
                            './MySQL实战45讲/audio/32为什么还有kill不掉的语句.mp3'
                    },
                    {
                        id: '16on3kcc8cv',
                        title: '33 | 我查这么多数据，会不会把数据库内存打爆？',
                        src:
                            './MySQL实战45讲/html/33我查这么多数据会不会把数据库内存打爆.html',
                        audio:
                            './MySQL实战45讲/audio/33我查这么多数据会不会把数据库内存打爆.mp3'
                    },
                    {
                        id: 'o9hw8slobj4',
                        title: '34 | 到底可不可以使用join？',
                        src: './MySQL实战45讲/html/34到底可不可以使用join.html',
                        audio:
                            './MySQL实战45讲/audio/34到底可不可以使用join.mp3'
                    },
                    {
                        id: '8h6jzwyyjyx',
                        title: '35 | join语句怎么优化？',
                        src: './MySQL实战45讲/html/35join语句怎么优化.html',
                        audio: './MySQL实战45讲/audio/35join语句怎么优化.mp3'
                    },
                    {
                        id: 'enwsq26cogl',
                        title: '36 | 为什么临时表可以重名？',
                        src: './MySQL实战45讲/html/36为什么临时表可以重名.html',
                        audio:
                            './MySQL实战45讲/audio/36为什么临时表可以重名.mp3'
                    },
                    {
                        id: 'picqzg6gx9v',
                        title: '37 | 什么时候会使用内部临时表？',
                        src:
                            './MySQL实战45讲/html/37什么时候会使用内部临时表.html',
                        audio:
                            './MySQL实战45讲/audio/37什么时候会使用内部临时表.mp3'
                    },
                    {
                        id: '94v7m7xfzg5',
                        title: '38 | 都说InnoDB好，那还要不要使用Memory引擎？',
                        src:
                            './MySQL实战45讲/html/38都说InnoDB好那还要不要使用Memory引擎.html',
                        audio:
                            './MySQL实战45讲/audio/38都说InnoDB好那还要不要使用Memory引擎.mp3'
                    },
                    {
                        id: 'wnjxsk41uhg',
                        title: '39 | 自增主键为什么不是连续的？',
                        src:
                            './MySQL实战45讲/html/39自增主键为什么不是连续的.html',
                        audio:
                            './MySQL实战45讲/audio/39自增主键为什么不是连续的.mp3'
                    },
                    {
                        id: 'mkwpq58tqhh',
                        title: '40 | insert语句的锁为什么这么多？',
                        src:
                            './MySQL实战45讲/html/40insert语句的锁为什么这么多.html',
                        audio:
                            './MySQL实战45讲/audio/40insert语句的锁为什么这么多.mp3'
                    },
                    {
                        id: '807nmktlybp',
                        title: '41 | 怎么最快地复制一张表？',
                        src: './MySQL实战45讲/html/41怎么最快地复制一张表.html',
                        audio:
                            './MySQL实战45讲/audio/41怎么最快地复制一张表.mp3'
                    },
                    {
                        id: 'sp7hz5lvv9p',
                        title: '42 | grant之后要跟着flush privileges吗？',
                        src:
                            './MySQL实战45讲/html/42grant之后要跟着flushprivileges吗.html',
                        audio:
                            './MySQL实战45讲/audio/42grant之后要跟着flushprivileges吗.mp3'
                    },
                    {
                        id: 'p0snw1zecoi',
                        title: '43 | 要不要使用分区表？',
                        src: './MySQL实战45讲/html/43要不要使用分区表.html',
                        audio: './MySQL实战45讲/audio/43要不要使用分区表.mp3'
                    },
                    {
                        id: 'q9v4zyprxsp',
                        title: '44 | 答疑文章（三）：说一说这些好问题',
                        src:
                            './MySQL实战45讲/html/44答疑文章三说一说这些好问题.html',
                        audio:
                            './MySQL实战45讲/audio/44讲答疑文章三说一说这些好问题_MP3.mp3'
                    },
                    {
                        id: '8tagn7lk8zh',
                        title: '45 | 自增id用完怎么办？',
                        src: './MySQL实战45讲/html/45自增id用完怎么办.html',
                        audio: './MySQL实战45讲/audio/45自增id用完怎么办.mp3'
                    }
                ]
            },
            {
                id: 'x53ki12179t',
                title: '特别放送',
                subList: [
                    {
                        id: '1seli6o3wsh',
                        title: '直播回顾 | 林晓斌：我的 MySQL 心路历程',
                        src:
                            './MySQL实战45讲/html/直播回顾林晓斌我的MySQL心路历程.html',
                        audio: ''
                    }
                ]
            },
            {
                id: 'ffd9hatinin',
                title: '结束语',
                subList: [
                    {
                        id: '6gktl84p2v6',
                        title: '结束语 | 点线网面，一起构建MySQL知识网络',
                        src:
                            './MySQL实战45讲/html/结束语点线网面一起构建MySQL知识网络.html',
                        audio:
                            './MySQL实战45讲/audio/结束语点线网面一起构建MySQL知识网络.mp3'
                    }
                ]
            },
            {
                id: '5mqm0gs3b38',
                title: '结课测试',
                subList: [
                    {
                        id: '5xna6zvunvc',
                        title: '结课测试｜这些MySQL知识你都掌握了吗？',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: '1fl3s2kn1fd',
        type: 'backend',
        cid: '100039001',
        subTitle: '前Google工程师手把手教你写高质量代码',
        authorName: '王争',
        authorInfo: '前Google工程师',
        contents: [
            {
                id: '6xiuvstrsoq',
                title: '开篇词',
                subList: [
                    {
                        id: '1xfkmgp9xb3',
                        title:
                            '开篇词 | 一对一的设计与编码集训，让你告别没有成长的烂代码！',
                        src:
                            './设计模式之美/html/00开篇词一对一的设计与编码集训让你告别没有成长的烂代码.html',
                        audio:
                            './设计模式之美/audio/00开篇词一对一的设计与编码集训让你告别没有成长的烂代码.mp3'
                    }
                ]
            },
            {
                id: 'me1k7q8zrsd',
                title: '设计模式学习导读',
                subList: [
                    {
                        id: '3gvxsr76ci5',
                        title:
                            '01 | 为什么说每个程序员都要尽早地学习并掌握设计模式相关知识？',
                        src:
                            './设计模式之美/html/01为什么说每个程序员都要尽早地学习并掌握设计模式相关知识.html',
                        audio:
                            './设计模式之美/audio/01为什么说每个程序员都要尽早地学习并掌握设计模式相关知识.mp3'
                    },
                    {
                        id: 'xd4bm72e23u',
                        title:
                            '02 | 从哪些维度评判代码质量的好坏？如何具备写出高质量代码的能力？',
                        src:
                            './设计模式之美/html/02从哪些维度评判代码质量的好坏如何具备写出高质量代码的能力.html',
                        audio:
                            './设计模式之美/audio/02从哪些维度评判代码质量的好坏如何具备写出高质量代码的能力.mp3'
                    },
                    {
                        id: 'nhu82wujjfq',
                        title:
                            '03 | 面向对象、设计原则、设计模式、编程规范、重构，这五者有何关系？',
                        src:
                            './设计模式之美/html/03面向对象设计原则设计模式编程规范重构这五者有何关系.html',
                        audio:
                            './设计模式之美/audio/03面向对象设计原则设计模式编程规范重构这五者有何关系.mp3'
                    }
                ]
            },
            {
                id: 'vt4he20vgk1',
                title: '设计原则与思想：面向对象',
                subList: [
                    {
                        id: 'sbtkdstby4u',
                        title:
                            '04 | 理论一：当谈论面向对象的时候，我们到底在谈论什么？',
                        src:
                            './设计模式之美/html/04理论一当谈论面向对象的时候我们到底在谈论什么.html',
                        audio:
                            './设计模式之美/audio/04理论一当谈论面向对象的时候我们到底在谈论什么.mp3'
                    },
                    {
                        id: '9wod5kba9sx',
                        title:
                            '05 | 理论二：封装、抽象、继承、多态分别可以解决哪些编程问题？',
                        src:
                            './设计模式之美/html/05理论二封装抽象继承多态分别可以解决哪些编程问题.html',
                        audio:
                            './设计模式之美/audio/05理论二封装抽象继承多态分别可以解决哪些编程问题.mp3'
                    },
                    {
                        id: 'xpvv1a5p4nf',
                        title:
                            '06 | 理论三：面向对象相比面向过程有哪些优势？面向过程真的过时了吗？',
                        src:
                            './设计模式之美/html/06理论三面向对象相比面向过程有哪些优势面向过程真的过时了吗.html',
                        audio:
                            './设计模式之美/audio/06理论三面向对象相比面向过程有哪些优势面向过程真的过时了吗.mp3'
                    },
                    {
                        id: 'f16eewqnm68',
                        title:
                            '07 | 理论四：哪些代码设计看似是面向对象，实际是面向过程的？',
                        src:
                            './设计模式之美/html/07理论四哪些代码设计看似是面向对象实际是面向过程的.html',
                        audio:
                            './设计模式之美/audio/07理论四哪些代码设计看似是面向对象实际是面向过程的.mp3'
                    },
                    {
                        id: 'm42lzcnc4o3',
                        title:
                            '08 | 理论五：接口vs抽象类的区别？如何用普通的类模拟抽象类和接口？',
                        src:
                            './设计模式之美/html/08理论五接口vs抽象类的区别如何用普通的类模拟抽象类和接口.html',
                        audio:
                            './设计模式之美/audio/08理论五接口vs抽象类的区别如何用普通的类模拟抽象类和接口.mp3'
                    },
                    {
                        id: 'c2wr2tvrned',
                        title:
                            '09 | 理论六：为什么基于接口而非实现编程？有必要为每个类都定义接口吗？',
                        src:
                            './设计模式之美/html/09理论六为什么基于接口而非实现编程有必要为每个类都定义接口吗.html',
                        audio:
                            './设计模式之美/audio/09理论六为什么基于接口而非实现编程有必要为每个类都定义接口吗.mp3'
                    },
                    {
                        id: '9q6jnpxso4n',
                        title:
                            '10 | 理论七：为何说要多用组合少用继承？如何决定该用组合还是继承？',
                        src:
                            './设计模式之美/html/10理论七为何说要多用组合少用继承如何决定该用组合还是继承.html',
                        audio:
                            './设计模式之美/audio/10理论七为何说要多用组合少用继承如何决定该用组合还是继承.mp3'
                    },
                    {
                        id: '5n5stxuterq',
                        title:
                            '11 | 实战一（上）：业务开发常用的基于贫血模型的MVC架构违背OOP吗？',
                        src:
                            './设计模式之美/html/11实战一上业务开发常用的基于贫血模型的MVC架构违背OOP吗.html',
                        audio:
                            './设计模式之美/audio/11实战一上业务开发常用的基于贫血模型的MVC架构违背OOP吗.mp3'
                    },
                    {
                        id: 'rxgjn2lsbwf',
                        title:
                            '12 | 实战一（下）：如何利用基于充血模型的DDD开发一个虚拟钱包系统？',
                        src:
                            './设计模式之美/html/12实战一下如何利用基于充血模型的DDD开发一个虚拟钱包系统.html',
                        audio:
                            './设计模式之美/audio/12实战一下如何利用基于充血模型的DDD开发一个虚拟钱包系统.mp3'
                    },
                    {
                        id: '9zes50wkwvx',
                        title:
                            '13 | 实战二（上）：如何对接口鉴权这样一个功能开发做面向对象分析？',
                        src:
                            './设计模式之美/html/13实战二上如何对接口鉴权这样一个功能开发做面向对象分析.html',
                        audio:
                            './设计模式之美/audio/13实战二上如何对接口鉴权这样一个功能开发做面向对象分析.mp3'
                    },
                    {
                        id: 'y6r2azh8nvt',
                        title:
                            '14 | 实战二（下）：如何利用面向对象设计和编程开发接口鉴权功能？',
                        src:
                            './设计模式之美/html/14实战二下如何利用面向对象设计和编程开发接口鉴权功能.html',
                        audio:
                            './设计模式之美/audio/14实战二下如何利用面向对象设计和编程开发接口鉴权功能.mp3'
                    }
                ]
            },
            {
                id: '1k6guns76w9',
                title: '设计原则与思想：设计原则',
                subList: [
                    {
                        id: 'e2fyolnwiyc',
                        title:
                            '15 | 理论一：对于单一职责原则，如何判定某个类的职责是否够“单一”？',
                        src:
                            './设计模式之美/html/15理论一对于单一职责原则如何判定某个类的职责是否够单一.html',
                        audio: ''
                    },
                    {
                        id: '31yqm1qsgul',
                        title:
                            '16 | 理论二：如何做到“对扩展开放、修改关闭”？扩展和修改各指什么？',
                        src:
                            './设计模式之美/html/16理论二如何做到对扩展开放修改关闭扩展和修改各指什么.html',
                        audio:
                            './设计模式之美/audio/16理论二如何做到对扩展开放修改关闭扩展和修改各指什么.mp3'
                    },
                    {
                        id: '1dvdbiu29ho',
                        title:
                            '17 | 理论三：里式替换（LSP）跟多态有何区别？哪些代码违背了LSP？',
                        src:
                            './设计模式之美/html/17理论三里式替换LSP跟多态有何区别哪些代码违背了LSP.html',
                        audio:
                            './设计模式之美/audio/17理论三里式替换LSP跟多态有何区别哪些代码违背了LSP.mp3'
                    },
                    {
                        id: 'bufwgwsk6wk',
                        title:
                            '18 | 理论四：接口隔离原则有哪三种应用？原则中的“接口”该如何理解？',
                        src:
                            './设计模式之美/html/18理论四接口隔离原则有哪三种应用原则中的接口该如何理解.html',
                        audio:
                            './设计模式之美/audio/18理论四接口隔离原则有哪三种应用原则中的接口该如何理解.mp3'
                    },
                    {
                        id: '6zllh2j1wh8',
                        title:
                            '19 | 理论五：控制反转、依赖反转、依赖注入，这三者有何区别和联系？',
                        src:
                            './设计模式之美/html/19理论五控制反转依赖反转依赖注入这三者有何区别和联系.html',
                        audio:
                            './设计模式之美/audio/19理论五控制反转依赖反转依赖注入这三者有何区别和联系.mp3'
                    },
                    {
                        id: '7vka8d6tvtq',
                        title:
                            '20 | 理论六：我为何说KISS、YAGNI原则看似简单，却经常被用错？',
                        src:
                            './设计模式之美/html/20理论六我为何说KISSYAGNI原则看似简单却经常被用错.html',
                        audio:
                            './设计模式之美/audio/20理论六我为何说KISSYAGNI原则看似简单却经常被用错.mp3'
                    },
                    {
                        id: 'rk1y76d192k',
                        title:
                            '21 | 理论七：重复的代码就一定违背DRY吗？如何提高代码的复用性？',
                        src:
                            './设计模式之美/html/21理论七重复的代码就一定违背DRY吗如何提高代码的复用性.html',
                        audio:
                            './设计模式之美/audio/21理论七重复的代码就一定违背DRY吗如何提高代码的复用性.mp3'
                    },
                    {
                        id: 'zc6dakknowl',
                        title:
                            '22 | 理论八：如何用迪米特法则（LOD）实现“高内聚、松耦合”？',
                        src:
                            './设计模式之美/html/22理论八如何用迪米特法则LOD实现高内聚松耦合.html',
                        audio:
                            './设计模式之美/audio/22理论八如何用迪米特法则LOD实现高内聚松耦合.mp3'
                    },
                    {
                        id: '6bztfg94mo4',
                        title:
                            '23 | 实战一（上）：针对业务系统的开发，如何做需求分析和设计？',
                        src:
                            './设计模式之美/html/23实战一上针对业务系统的开发如何做需求分析和设计.html',
                        audio:
                            './设计模式之美/audio/23实战一上针对业务系统的开发如何做需求分析和设计.mp3'
                    },
                    {
                        id: 'cawndy7isvh',
                        title:
                            '24 | 实战一（下）：如何实现一个遵从设计原则的积分兑换系统？',
                        src:
                            './设计模式之美/html/24实战一下如何实现一个遵从设计原则的积分兑换系统.html',
                        audio:
                            './设计模式之美/audio/24实战一下如何实现一个遵从设计原则的积分兑换系统.mp3'
                    },
                    {
                        id: 'waxzwy4go23',
                        title:
                            '25 | 实战二（上）：针对非业务的通用框架开发，如何做需求分析和设计？',
                        src:
                            './设计模式之美/html/25实战二上针对非业务的通用框架开发如何做需求分析和设计.html',
                        audio:
                            './设计模式之美/audio/25实战二上针对非业务的通用框架开发如何做需求分析和设计.mp3'
                    },
                    {
                        id: 'oe0hnyt0xkv',
                        title:
                            '26 | 实战二（下）：如何实现一个支持各种统计规则的性能计数器？',
                        src:
                            './设计模式之美/html/26实战二下如何实现一个支持各种统计规则的性能计数器.html',
                        audio:
                            './设计模式之美/audio/26实战二下如何实现一个支持各种统计规则的性能计数器.mp3'
                    }
                ]
            },
            {
                id: 'rprerloid63',
                title: '设计原则与思想：规范与重构',
                subList: [
                    {
                        id: 'o6jnaaw6trw',
                        title:
                            '27 | 理论一：什么情况下要重构？到底重构什么？又该如何重构？',
                        src:
                            './设计模式之美/html/27理论一什么情况下要重构到底重构什么又该如何重构.html',
                        audio:
                            './设计模式之美/audio/27理论一什么情况下要重构到底重构什么又该如何重构.mp3'
                    },
                    {
                        id: 'xjehcuwwcyj',
                        title:
                            '28 | 理论二：为了保证重构不出错，有哪些非常能落地的技术手段？',
                        src:
                            './设计模式之美/html/28理论二为了保证重构不出错有哪些非常能落地的技术手段.html',
                        audio:
                            './设计模式之美/audio/28理论二为了保证重构不出错有哪些非常能落地的技术手段.mp3'
                    },
                    {
                        id: 'w2x4n8r25ay',
                        title:
                            '29 | 理论三：什么是代码的可测试性？如何写出可测试性好的代码？',
                        src:
                            './设计模式之美/html/29理论三什么是代码的可测试性如何写出可测试性好的代码.html',
                        audio:
                            './设计模式之美/audio/29理论三什么是代码的可测试性如何写出可测试性好的代码.mp3'
                    },
                    {
                        id: '0mosc8cfcko',
                        title:
                            '30 | 理论四：如何通过封装、抽象、模块化、中间层等解耦代码？',
                        src:
                            './设计模式之美/html/30理论四如何通过封装抽象模块化中间层等解耦代码.html',
                        audio:
                            './设计模式之美/audio/30理论四如何通过封装抽象模块化中间层等解耦代码.mp3'
                    },
                    {
                        id: 'xqsrc0iofp8',
                        title:
                            '31 | 理论五：让你最快速地改善代码质量的20条编程规范（上）',
                        src:
                            './设计模式之美/html/31理论五让你最快速地改善代码质量的20条编程规范上.html',
                        audio:
                            './设计模式之美/audio/31理论五让你最快速地改善代码质量的20条编程规范上.mp3'
                    },
                    {
                        id: 't81kre4zxxh',
                        title:
                            '32 | 理论五：让你最快速地改善代码质量的20条编程规范（中）',
                        src:
                            './设计模式之美/html/32理论五让你最快速地改善代码质量的20条编程规范中.html',
                        audio:
                            './设计模式之美/audio/32理论五让你最快速地改善代码质量的20条编程规范中.mp3'
                    },
                    {
                        id: 'rbcs24p9fsm',
                        title:
                            '33 | 理论五：让你最快速地改善代码质量的20条编程规范（下）',
                        src:
                            './设计模式之美/html/33理论五让你最快速地改善代码质量的20条编程规范下.html',
                        audio:
                            './设计模式之美/audio/33理论五让你最快速地改善代码质量的20条编程规范下.mp3'
                    },
                    {
                        id: 'g6xfvpbhv0c',
                        title:
                            '34 | 实战一（上）：通过一段ID生成器代码，学习如何发现代码质量问题',
                        src:
                            './设计模式之美/html/34实战一上通过一段ID生成器代码学习如何发现代码质量问题.html',
                        audio:
                            './设计模式之美/audio/34实战一上通过一段ID生成器代码学习如何发现代码质量问题.mp3'
                    },
                    {
                        id: 'yltzdbrn91a',
                        title:
                            '35 | 实战一（下）：手把手带你将ID生成器代码从“能用”重构为“好用”',
                        src:
                            './设计模式之美/html/35实战一下手把手带你将ID生成器代码从能用重构为好用.html',
                        audio:
                            './设计模式之美/audio/35实战一下手把手带你将ID生成器代码从能用重构为好用.mp3'
                    },
                    {
                        id: 'qcfk3e8f7zt',
                        title:
                            '36 | 实战二（上）：程序出错该返回啥？NULL、异常、错误码、空对象？',
                        src:
                            './设计模式之美/html/36实战二上程序出错该返回啥NULL异常错误码空对象.html',
                        audio:
                            './设计模式之美/audio/36实战二上程序出错该返回啥NULL异常错误码空对象.mp3'
                    },
                    {
                        id: '4ymxbx6kbid',
                        title:
                            '37 | 实战二（下）：重构ID生成器项目中各函数的异常处理代码',
                        src:
                            './设计模式之美/html/37实战二下重构ID生成器项目中各函数的异常处理代码.html',
                        audio:
                            './设计模式之美/audio/37实战二下重构ID生成器项目中各函数的异常处理代码.mp3'
                    }
                ]
            },
            {
                id: '327d2zt1b3b',
                title: '设计原则与思想：总结课',
                subList: [
                    {
                        id: 'e9r3bd9ic3y',
                        title:
                            '38 | 总结回顾面向对象、设计原则、编程规范、重构技巧等知识点',
                        src:
                            './设计模式之美/html/38总结回顾面向对象设计原则编程规范重构技巧等知识点.html',
                        audio:
                            './设计模式之美/audio/38总结回顾面向对象设计原则编程规范重构技巧等知识点.mp3'
                    },
                    {
                        id: 'fjzijg5etl4',
                        title:
                            '39 | 运用学过的设计原则和思想完善之前讲的性能计数器项目（上）',
                        src:
                            './设计模式之美/html/39运用学过的设计原则和思想完善之前讲的性能计数器项目上.html',
                        audio:
                            './设计模式之美/audio/39运用学过的设计原则和思想完善之前讲的性能计数器项目上.mp3'
                    },
                    {
                        id: 'ce0b17ul3ap',
                        title:
                            '40 | 运用学过的设计原则和思想完善之前讲的性能计数器项目（下）',
                        src:
                            './设计模式之美/html/40运用学过的设计原则和思想完善之前讲的性能计数器项目下.html',
                        audio:
                            './设计模式之美/audio/40运用学过的设计原则和思想完善之前讲的性能计数器项目下.mp3'
                    }
                ]
            },
            {
                id: 'lg71vo048yu',
                title: '设计模式与范式：创建型',
                subList: [
                    {
                        id: 'xngz895dqyg',
                        title:
                            '41 | 单例模式（上）：为什么说支持懒加载的双重检测不比饿汉式更优？',
                        src:
                            './设计模式之美/html/41单例模式上为什么说支持懒加载的双重检测不比饿汉式更优.html',
                        audio:
                            './设计模式之美/audio/41单例模式上为什么说支持懒加载的双重检测不比饿汉式更优.mp3'
                    },
                    {
                        id: 'owz5aovh5ni',
                        title:
                            '42 | 单例模式（中）：我为什么不推荐使用单例模式？又有何替代方案？',
                        src:
                            './设计模式之美/html/42单例模式中我为什么不推荐使用单例模式又有何替代方案.html',
                        audio:
                            './设计模式之美/audio/42单例模式中我为什么不推荐使用单例模式又有何替代方案.mp3'
                    },
                    {
                        id: 'b0kh9f3imvr',
                        title:
                            '43 | 单例模式（下）：如何设计实现一个集群环境下的分布式单例模式？',
                        src:
                            './设计模式之美/html/43单例模式下如何设计实现一个集群环境下的分布式单例模式.html',
                        audio:
                            './设计模式之美/audio/43单例模式下如何设计实现一个集群环境下的分布式单例模式.mp3'
                    },
                    {
                        id: 'veemsdki6cj',
                        title:
                            '44 | 工厂模式（上）：我为什么说没事不要随便用工厂模式创建对象？',
                        src:
                            './设计模式之美/html/44工厂模式上我为什么说没事不要随便用工厂模式创建对象.html',
                        audio:
                            './设计模式之美/audio/44工厂模式上我为什么说没事不要随便用工厂模式创建对象.mp3'
                    },
                    {
                        id: 'k57bgrzg9a7',
                        title:
                            '45 | 工厂模式（下）：如何设计实现一个Dependency Injection框架？',
                        src:
                            './设计模式之美/html/45工厂模式下如何设计实现一个DependencyInjection框架.html',
                        audio:
                            './设计模式之美/audio/45工厂模式下如何设计实现一个DependencyInjection框架.mp3'
                    },
                    {
                        id: '6sjg3owxnrd',
                        title:
                            '46 | 建造者模式：详解构造函数、set方法、建造者模式三种对象创建方式',
                        src:
                            './设计模式之美/html/46建造者模式详解构造函数set方法建造者模式三种对象创建方式.html',
                        audio:
                            './设计模式之美/audio/46建造者模式详解构造函数set方法建造者模式三种对象创建方式.mp3'
                    },
                    {
                        id: '6mjdula7qvg',
                        title:
                            '47 | 原型模式：如何最快速地clone一个HashMap散列表？',
                        src:
                            './设计模式之美/html/47原型模式如何最快速地clone一个HashMap散列表.html',
                        audio:
                            './设计模式之美/audio/47原型模式如何最快速地clone一个HashMap散列表.mp3'
                    }
                ]
            },
            {
                id: 'izjj1mucvk4',
                title: '设计模式与范式：结构型',
                subList: [
                    {
                        id: '3bq7bk6v5k5',
                        title:
                            '48 | 代理模式：代理在RPC、缓存、监控等场景中的应用',
                        src:
                            './设计模式之美/html/48代理模式代理在RPC缓存监控等场景中的应用.html',
                        audio:
                            './设计模式之美/audio/48代理模式代理在RPC缓存监控等场景中的应用.mp3'
                    },
                    {
                        id: '9u6cmhd9l0t',
                        title:
                            '49 | 桥接模式：如何实现支持不同类型和渠道的消息推送系统？',
                        src:
                            './设计模式之美/html/49桥接模式如何实现支持不同类型和渠道的消息推送系统.html',
                        audio:
                            './设计模式之美/audio/49桥接模式如何实现支持不同类型和渠道的消息推送系统.mp3'
                    },
                    {
                        id: '7ycvngj201g',
                        title:
                            '50 | 装饰器模式：通过剖析Java IO类库源码学习装饰器模式',
                        src:
                            './设计模式之美/html/50装饰器模式通过剖析JavaIO类库源码学习装饰器模式.html',
                        audio:
                            './设计模式之美/audio/50装饰器模式通过剖析JavaIO类库源码学习装饰器模式.mp3'
                    },
                    {
                        id: 'b5huku5ros1',
                        title:
                            '51 | 适配器模式：代理、适配器、桥接、装饰，这四个模式有何区别？',
                        src:
                            './设计模式之美/html/51适配器模式代理适配器桥接装饰这四个模式有何区别.html',
                        audio:
                            './设计模式之美/audio/51适配器模式代理适配器桥接装饰这四个模式有何区别.mp3'
                    },
                    {
                        id: '8kvf70i139f',
                        title:
                            '52 | 门面模式：如何设计合理的接口粒度以兼顾接口的易用性和通用性？',
                        src:
                            './设计模式之美/html/52门面模式如何设计合理的接口粒度以兼顾接口的易用性和通用性.html',
                        audio:
                            './设计模式之美/audio/52门面模式如何设计合理的接口粒度以兼顾接口的易用性和通用性.mp3'
                    },
                    {
                        id: '9bl92t84fy3',
                        title:
                            '53 | 组合模式：如何设计实现支持递归遍历的文件系统目录树结构？',
                        src:
                            './设计模式之美/html/53组合模式如何设计实现支持递归遍历的文件系统目录树结构.html',
                        audio:
                            './设计模式之美/audio/53组合模式如何设计实现支持递归遍历的文件系统目录树结构.mp3'
                    },
                    {
                        id: '786ivx9p9si',
                        title:
                            '54 | 享元模式（上）：如何利用享元模式优化文本编辑器的内存占用？',
                        src:
                            './设计模式之美/html/54享元模式上如何利用享元模式优化文本编辑器的内存占用.html',
                        audio:
                            './设计模式之美/audio/54享元模式上如何利用享元模式优化文本编辑器的内存占用.mp3'
                    },
                    {
                        id: '1zd8380a4zq',
                        title:
                            '55 | 享元模式（下）：剖析享元模式在Java Integer、String中的应用',
                        src:
                            './设计模式之美/html/55享元模式下剖析享元模式在JavaIntegerString中的应用.html',
                        audio:
                            './设计模式之美/audio/55享元模式下剖析享元模式在JavaIntegerString中的应用.mp3'
                    }
                ]
            },
            {
                id: '83zaiqsmtxe',
                title: '设计模式与范式：行为型',
                subList: [
                    {
                        id: 'g66vpt3vs85',
                        title:
                            '56 | 观察者模式（上）：详解各种应用场景下观察者模式的不同实现方式',
                        src:
                            './设计模式之美/html/56观察者模式上详解各种应用场景下观察者模式的不同实现方式.html',
                        audio:
                            './设计模式之美/audio/56观察者模式上详解各种应用场景下观察者模式的不同实现方式.mp3'
                    },
                    {
                        id: 'cx8se5fmh64',
                        title:
                            '57 | 观察者模式（下）：如何实现一个异步非阻塞的EventBus框架？',
                        src:
                            './设计模式之美/html/57观察者模式下如何实现一个异步非阻塞的EventBus框架.html',
                        audio:
                            './设计模式之美/audio/57观察者模式下如何实现一个异步非阻塞的EventBus框架.mp3'
                    },
                    {
                        id: 'x0etn9nt0eb',
                        title:
                            '58 | 模板模式（上）：剖析模板模式在JDK、Servlet、JUnit等中的应用',
                        src:
                            './设计模式之美/html/58模板模式上剖析模板模式在JDKServletJUnit等中的应用.html',
                        audio:
                            './设计模式之美/audio/58模板模式上剖析模板模式在JDKServletJUnit等中的应用.mp3'
                    },
                    {
                        id: 'o6k8syebuvt',
                        title:
                            '59 | 模板模式（下）：模板模式与Callback回调函数有何区别和联系？',
                        src:
                            './设计模式之美/html/59模板模式下模板模式与Callback回调函数有何区别和联系.html',
                        audio:
                            './设计模式之美/audio/59模板模式下模板模式与Callback回调函数有何区别和联系.mp3'
                    },
                    {
                        id: 'm3p9c5vxj77',
                        title:
                            '60 | 策略模式（上）：如何避免冗长的if-else/switch分支判断代码？',
                        src:
                            './设计模式之美/html/60策略模式上如何避免冗长的ifelseswitch分支判断代码.html',
                        audio:
                            './设计模式之美/audio/60策略模式上如何避免冗长的ifelseswitch分支判断代码.mp3'
                    },
                    {
                        id: '6bx86ioxhb4',
                        title:
                            '61 | 策略模式（下）：如何实现一个支持给不同大小文件排序的小程序？',
                        src:
                            './设计模式之美/html/61策略模式下如何实现一个支持给不同大小文件排序的小程序.html',
                        audio:
                            './设计模式之美/audio/61策略模式下如何实现一个支持给不同大小文件排序的小程序.mp3'
                    },
                    {
                        id: 'o7ik75hjmn1',
                        title:
                            '62 | 职责链模式（上）：如何实现可灵活扩展算法的敏感信息过滤框架？',
                        src:
                            './设计模式之美/html/62职责链模式上如何实现可灵活扩展算法的敏感信息过滤框架.html',
                        audio:
                            './设计模式之美/audio/62职责链模式上如何实现可灵活扩展算法的敏感信息过滤框架.mp3'
                    },
                    {
                        id: 'rt5u7ygxfad',
                        title:
                            '63 | 职责链模式（下）：框架中常用的过滤器、拦截器是如何实现的？',
                        src:
                            './设计模式之美/html/63职责链模式下框架中常用的过滤器拦截器是如何实现的.html',
                        audio:
                            './设计模式之美/audio/63职责链模式下框架中常用的过滤器拦截器是如何实现的.mp3'
                    },
                    {
                        id: 'k8zusunk6q5',
                        title:
                            '64 | 状态模式：游戏、工作流引擎中常用的状态机是如何实现的？',
                        src:
                            './设计模式之美/html/64状态模式游戏工作流引擎中常用的状态机是如何实现的.html',
                        audio:
                            './设计模式之美/audio/64状态模式游戏工作流引擎中常用的状态机是如何实现的.mp3'
                    },
                    {
                        id: 't41y9eskma3',
                        title:
                            '65 | 迭代器模式（上）：相比直接遍历集合数据，使用迭代器有哪些优势？',
                        src:
                            './设计模式之美/html/65迭代器模式上相比直接遍历集合数据使用迭代器有哪些优势.html',
                        audio:
                            './设计模式之美/audio/65迭代器模式上相比直接遍历集合数据使用迭代器有哪些优势.mp3'
                    },
                    {
                        id: 'hvn5otey0qo',
                        title:
                            '66 | 迭代器模式（中）：遍历集合的同时，为什么不能增删集合元素？',
                        src:
                            './设计模式之美/html/66迭代器模式中遍历集合的同时为什么不能增删集合元素.html',
                        audio:
                            './设计模式之美/audio/66迭代器模式中遍历集合的同时为什么不能增删集合元素.mp3'
                    },
                    {
                        id: 'gojcu1egf8g',
                        title:
                            '67 | 迭代器模式（下）：如何设计实现一个支持“快照”功能的iterator？',
                        src:
                            './设计模式之美/html/67迭代器模式下如何设计实现一个支持快照功能的iterator.html',
                        audio:
                            './设计模式之美/audio/67迭代器模式下如何设计实现一个支持快照功能的iterator.mp3'
                    },
                    {
                        id: '43z0tw3onau',
                        title:
                            '68 | 访问者模式（上）：手把手带你还原访问者模式诞生的思维过程',
                        src:
                            './设计模式之美/html/68访问者模式上手把手带你还原访问者模式诞生的思维过程.html',
                        audio:
                            './设计模式之美/audio/68访问者模式上手把手带你还原访问者模式诞生的思维过程.mp3'
                    },
                    {
                        id: 'lz203t9csz4',
                        title:
                            '69 | 访问者模式（下）：为什么支持双分派的语言不需要访问者模式？',
                        src:
                            './设计模式之美/html/69访问者模式下为什么支持双分派的语言不需要访问者模式.html',
                        audio:
                            './设计模式之美/audio/69访问者模式下为什么支持双分派的语言不需要访问者模式.mp3'
                    },
                    {
                        id: '56gqfs39vex',
                        title:
                            '70 | 备忘录模式：对于大对象的备份和恢复，如何优化内存和时间的消耗？',
                        src:
                            './设计模式之美/html/70备忘录模式对于大对象的备份和恢复如何优化内存和时间的消耗.html',
                        audio:
                            './设计模式之美/audio/70备忘录模式对于大对象的备份和恢复如何优化内存和时间的消耗.mp3'
                    },
                    {
                        id: '5gkxyss95q6',
                        title:
                            '71 | 命令模式：如何利用命令模式实现一个手游后端架构？',
                        src:
                            './设计模式之美/html/71命令模式如何利用命令模式实现一个手游后端架构.html',
                        audio:
                            './设计模式之美/audio/71命令模式如何利用命令模式实现一个手游后端架构.mp3'
                    },
                    {
                        id: '9m1wnw5g9py',
                        title:
                            '72 | 解释器模式：如何设计实现一个自定义接口告警规则功能？',
                        src:
                            './设计模式之美/html/72解释器模式如何设计实现一个自定义接口告警规则功能.html',
                        audio:
                            './设计模式之美/audio/72解释器模式如何设计实现一个自定义接口告警规则功能.mp3'
                    },
                    {
                        id: '946xhaw1m03',
                        title:
                            '73 | 中介模式：什么时候用中介模式？什么时候用观察者模式？',
                        src:
                            './设计模式之美/html/73中介模式什么时候用中介模式什么时候用观察者模式.html',
                        audio:
                            './设计模式之美/audio/73中介模式什么时候用中介模式什么时候用观察者模式.mp3'
                    }
                ]
            },
            {
                id: 'yg12w1rf5z1',
                title: '设计模式与范式：总结课',
                subList: [
                    {
                        id: '6ji8ybwqkub',
                        title:
                            '74 | 总结回顾23种经典设计模式的原理、背后的思想、应用场景等',
                        src:
                            './设计模式之美/html/74总结回顾23种经典设计模式的原理背后的思想应用场景等.html',
                        audio:
                            './设计模式之美/audio/74总结回顾23种经典设计模式的原理背后的思想应用场景等.mp3'
                    },
                    {
                        id: 'z7035a3n2ty',
                        title:
                            '75 | 在实际的项目开发中，如何避免过度设计？又如何避免设计不足？',
                        src:
                            './设计模式之美/html/75在实际的项目开发中如何避免过度设计又如何避免设计不足.html',
                        audio:
                            './设计模式之美/audio/75在实际的项目开发中如何避免过度设计又如何避免设计不足.mp3'
                    }
                ]
            },
            {
                id: 'ctasz4hx11l',
                title: '开源与项目实战：开源实战',
                subList: [
                    {
                        id: 'pb5w07sr1d1',
                        title:
                            '76 |  开源实战一（上）：通过剖析Java JDK源码学习灵活应用设计模式',
                        src:
                            './设计模式之美/html/76开源实战一上通过剖析JavaJDK源码学习灵活应用设计模式.html',
                        audio:
                            './设计模式之美/audio/76开源实战一上通过剖析JavaJDK源码学习灵活应用设计模式.mp3'
                    },
                    {
                        id: 'qocvfrp8r0c',
                        title:
                            '77 | 开源实战一（下）：通过剖析Java JDK源码学习灵活应用设计模式',
                        src:
                            './设计模式之美/html/77开源实战一下通过剖析JavaJDK源码学习灵活应用设计模式.html',
                        audio:
                            './设计模式之美/audio/77开源实战一下通过剖析JavaJDK源码学习灵活应用设计模式.mp3'
                    },
                    {
                        id: 'ajzk4n30wyb',
                        title:
                            '78 | 开源实战二（上）：从Unix开源开发学习应对大型复杂项目开发',
                        src:
                            './设计模式之美/html/78开源实战二上从Unix开源开发学习应对大型复杂项目开发.html',
                        audio:
                            './设计模式之美/audio/78开源实战二上从Unix开源开发学习应对大型复杂项目开发.mp3'
                    },
                    {
                        id: 'oe2fxo359p8',
                        title:
                            '79 | 开源实战二（中）：从Unix开源开发学习应对大型复杂项目开发',
                        src:
                            './设计模式之美/html/79开源实战二中从Unix开源开发学习应对大型复杂项目开发.html',
                        audio:
                            './设计模式之美/audio/79开源实战二中从Unix开源开发学习应对大型复杂项目开发.mp3'
                    },
                    {
                        id: 'b9z1quc7jas',
                        title:
                            '80 | 开源实战二（下）：从Unix开源开发学习应对大型复杂项目开发',
                        src:
                            './设计模式之美/html/80开源实战二下从Unix开源开发学习应对大型复杂项目开发.html',
                        audio:
                            './设计模式之美/audio/80开源实战二下从Unix开源开发学习应对大型复杂项目开发.mp3'
                    },
                    {
                        id: 'qoiusw8558i',
                        title:
                            '81 | 开源实战三（上）：借Google Guava学习发现和开发通用功能模块',
                        src:
                            './设计模式之美/html/81开源实战三上借GoogleGuava学习发现和开发通用功能模块.html',
                        audio:
                            './设计模式之美/audio/81开源实战三上借GoogleGuava学习发现和开发通用功能模块.mp3'
                    },
                    {
                        id: 'uc1l9vsjcq2',
                        title:
                            '82 | 开源实战三（中）：剖析Google Guava中用到的几种设计模式',
                        src:
                            './设计模式之美/html/82开源实战三中剖析GoogleGuava中用到的几种设计模式.html',
                        audio:
                            './设计模式之美/audio/82开源实战三中剖析GoogleGuava中用到的几种设计模式.mp3'
                    },
                    {
                        id: 'kapg3q1k9cu',
                        title:
                            '83 | 开源实战三（下）：借Google Guava学习三大编程范式中的函数式编程',
                        src:
                            './设计模式之美/html/83开源实战三下借GoogleGuava学习三大编程范式中的函数式编程.html',
                        audio:
                            './设计模式之美/audio/83开源实战三下借GoogleGuava学习三大编程范式中的函数式编程.mp3'
                    },
                    {
                        id: 'an04nuhbu65',
                        title:
                            '84 | 开源实战四（上）：剖析Spring框架中蕴含的经典设计思想或原则',
                        src:
                            './设计模式之美/html/84开源实战四上剖析Spring框架中蕴含的经典设计思想或原则.html',
                        audio:
                            './设计模式之美/audio/84开源实战四上剖析Spring框架中蕴含的经典设计思想或原则.mp3'
                    },
                    {
                        id: 'f3ml85d9ys6',
                        title:
                            '85 | 开源实战四（中）：剖析Spring框架中用来支持扩展的两种设计模式',
                        src:
                            './设计模式之美/html/85开源实战四中剖析Spring框架中用来支持扩展的两种设计模式.html',
                        audio:
                            './设计模式之美/audio/85开源实战四中剖析Spring框架中用来支持扩展的两种设计模式.mp3'
                    },
                    {
                        id: 'lk7od193c61',
                        title:
                            '86 | 开源实战四（下）：总结Spring框架用到的11种设计模式',
                        src:
                            './设计模式之美/html/86开源实战四下总结Spring框架用到的11种设计模式.html',
                        audio:
                            './设计模式之美/audio/86开源实战四下总结Spring框架用到的11种设计模式.mp3'
                    },
                    {
                        id: 'rgfty6v2dum',
                        title:
                            '87 | 开源实战五（上）：MyBatis如何权衡易用性、性能和灵活性？',
                        src:
                            './设计模式之美/html/87开源实战五上MyBatis如何权衡易用性性能和灵活性.html',
                        audio:
                            './设计模式之美/audio/87开源实战五上MyBatis如何权衡易用性性能和灵活性.mp3'
                    },
                    {
                        id: 'gw65g1qk1f2',
                        title:
                            '88 | 开源实战五（中）：如何利用职责链与代理模式实现MyBatis Plugin？',
                        src:
                            './设计模式之美/html/88开源实战五中如何利用职责链与代理模式实现MyBatisPlugin.html',
                        audio:
                            './设计模式之美/audio/88开源实战五中如何利用职责链与代理模式实现MyBatisPlugin.mp3'
                    },
                    {
                        id: 'qyq2cdzxcnt',
                        title:
                            '89 | 开源实战五（下）：总结MyBatis框架中用到的10种设计模式',
                        src:
                            './设计模式之美/html/89开源实战五下总结MyBatis框架中用到的10种设计模式.html',
                        audio:
                            './设计模式之美/audio/89开源实战五下总结MyBatis框架中用到的10种设计模式.mp3'
                    }
                ]
            },
            {
                id: 'qe17p30u2wt',
                title: '开源与项目实战：项目实战',
                subList: [
                    {
                        id: 'qe2d4uy9hlc',
                        title:
                            '90 | 项目实战一：设计实现一个支持各种算法的限流框架（分析）',
                        src:
                            './设计模式之美/html/90项目实战一设计实现一个支持各种算法的限流框架分析.html',
                        audio:
                            './设计模式之美/audio/90项目实战一设计实现一个支持各种算法的限流框架分析.mp3'
                    },
                    {
                        id: 'yth02liuia8',
                        title:
                            '91 | 项目实战一：设计实现一个支持各种算法的限流框架（设计）',
                        src:
                            './设计模式之美/html/91项目实战一设计实现一个支持各种算法的限流框架设计.html',
                        audio:
                            './设计模式之美/audio/91项目实战一设计实现一个支持各种算法的限流框架设计.mp3'
                    },
                    {
                        id: 'owe07wq46r2',
                        title:
                            '92 | 项目实战一：设计实现一个支持各种算法的限流框架（实现）',
                        src:
                            './设计模式之美/html/92项目实战一设计实现一个支持各种算法的限流框架实现.html',
                        audio:
                            './设计模式之美/audio/92项目实战一设计实现一个支持各种算法的限流框架实现.mp3'
                    },
                    {
                        id: 'rcy1crfwbfj',
                        title:
                            '93 | 项目实战二：设计实现一个通用的接口幂等框架（分析）',
                        src:
                            './设计模式之美/html/93项目实战二设计实现一个通用的接口幂等框架分析.html',
                        audio:
                            './设计模式之美/audio/93项目实战二设计实现一个通用的接口幂等框架分析.mp3'
                    },
                    {
                        id: '00ahljmlwz9',
                        title:
                            '94 | 项目实战二：设计实现一个通用的接口幂等框架（设计）',
                        src:
                            './设计模式之美/html/94项目实战二设计实现一个通用的接口幂等框架设计.html',
                        audio:
                            './设计模式之美/audio/94项目实战二设计实现一个通用的接口幂等框架设计.mp3'
                    },
                    {
                        id: '4zwws04u70i',
                        title:
                            '95 | 项目实战二：设计实现一个通用的接口幂等框架（实现）',
                        src:
                            './设计模式之美/html/95项目实战二设计实现一个通用的接口幂等框架实现.html',
                        audio:
                            './设计模式之美/audio/95项目实战二设计实现一个通用的接口幂等框架实现.mp3'
                    },
                    {
                        id: 'dx1937cf3nq',
                        title:
                            '96 | 项目实战三：设计实现一个支持自定义规则的灰度发布组件（分析）',
                        src:
                            './设计模式之美/html/96项目实战三设计实现一个支持自定义规则的灰度发布组件分析.html',
                        audio:
                            './设计模式之美/audio/96项目实战三设计实现一个支持自定义规则的灰度发布组件分析.mp3'
                    },
                    {
                        id: '2rvv52ccuul',
                        title:
                            '97  | 项目实战三：设计实现一个支持自定义规则的灰度发布组件（设计）',
                        src:
                            './设计模式之美/html/97项目实战三设计实现一个支持自定义规则的灰度发布组件设计.html',
                        audio:
                            './设计模式之美/audio/97项目实战三设计实现一个支持自定义规则的灰度发布组件设计.mp3'
                    },
                    {
                        id: 'eq64pqj1rjk',
                        title:
                            '98 | 项目实战三：设计实现一个支持自定义规则的灰度发布组件（实现）',
                        src:
                            './设计模式之美/html/98项目实战三设计实现一个支持自定义规则的灰度发布组件实现.html',
                        audio:
                            './设计模式之美/audio/98项目实战三设计实现一个支持自定义规则的灰度发布组件实现.mp3'
                    }
                ]
            },
            {
                id: 'tfxrp3t99wi',
                title: '开源与项目实战：总结课',
                subList: [
                    {
                        id: '4bwojc5gdyv',
                        title:
                            '99 | 总结回顾：在实际软件开发中常用的设计思想、原则和模式',
                        src:
                            './设计模式之美/html/99总结回顾在实际软件开发中常用的设计思想原则和模式.html',
                        audio:
                            './设计模式之美/audio/99总结回顾在实际软件开发中常用的设计思想原则和模式.mp3'
                    },
                    {
                        id: 'nrju5c0bng0',
                        title:
                            '100 | 如何将设计思想、原则、模式等理论知识应用到项目中？',
                        src:
                            './设计模式之美/html/100如何将设计思想原则模式等理论知识应用到项目中.html',
                        audio:
                            './设计模式之美/audio/100如何将设计思想原则模式等理论知识应用到项目中.mp3'
                    }
                ]
            },
            {
                id: 'z1xfm6h6fwa',
                title: '不定期加餐',
                subList: [
                    {
                        id: 'n1lvz0nvjz6',
                        title:
                            '加餐一 | 用一篇文章带你了解专栏中用到的所有Java语法',
                        src:
                            './设计模式之美/html/加餐一用一篇文章带你了解专栏中用到的所有Java语法.html',
                        audio:
                            './设计模式之美/audio/加餐一用一篇文章带你了解专栏中用到的所有Java语法.mp3'
                    },
                    {
                        id: 'kznviu2yula',
                        title:
                            '加餐二 | 设计模式、重构、编程规范等相关书籍推荐',
                        src:
                            './设计模式之美/html/加餐二设计模式重构编程规范等相关书籍推荐.html',
                        audio:
                            './设计模式之美/audio/加餐二设计模式重构编程规范等相关书籍推荐.mp3'
                    },
                    {
                        id: 'vmvgoykvvq0',
                        title:
                            '春节特别加餐 | 王争：如何学习《设计模式之美》专栏？',
                        src:
                            './设计模式之美/html/春节特别加餐王争如何学习设计模式之美专栏.html',
                        audio:
                            './设计模式之美/audio/春节特别加餐王争如何学习设计模式之美专栏.mp3'
                    },
                    {
                        id: 'uh5pinuu6aa',
                        title: '加餐三 | 聊一聊Google是如何做Code Review的',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'coom40n9ol9',
                        title: '加餐四 | 聊一聊Google那些让我快速成长的地方',
                        src:
                            './设计模式之美/html/加餐四聊一聊Google那些让我快速成长的地方.html',
                        audio:
                            './设计模式之美/audio/加餐四聊一聊Google那些让我快速成长的地方.mp3'
                    },
                    {
                        id: 'xv3mrullcmw',
                        title: '加餐五 | 听一听小争哥对Google工程师文化的解读',
                        src:
                            './设计模式之美/html/加餐五听一听小争哥对Google工程师文化的解读.html',
                        audio:
                            './设计模式之美/audio/加餐五听一听小争哥对Google工程师文化的解读.mp3'
                    },
                    {
                        id: '6cw96dopfvh',
                        title:
                            '加餐六 | 什么才是所谓的编程能力？如何考察一个人的编程能力？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'kz72587ng7r',
                        title:
                            '加餐七 | 基础学科的知识如何转化成实际的技术生产力？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'ymteeivoek1',
                        title: '加餐八 | 程序员怎么才能让自己走得更高、更远？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'teffqlckg67',
                        title:
                            '加餐九 | 作为面试官或候选人，如何面试或回答设计模式问题？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'ptkj1sy6b9x',
                        title:
                            '加餐十 | 如何接手一坨烂业务代码？如何在烂业务代码中成长？',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: 'n21bsv9eqll',
                title: '结束语',
                subList: [
                    {
                        id: '1tx7eq854cc',
                        title: '结束语  | 聊一聊机遇、方向、能力、努力！',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ],
        title: '设计模式之美'
    }
]
const PM_LIST = [
    {
        id: '78goc4k0ebr',
        type: 'pm',
        cid: '100002601',
        title: '邱岳的产品手记',
        subTitle: '重构你的产品思维',
        authorName: '邱岳',
        authorInfo: '无码科技产品经理，公众号二爷鉴书作者',
        contents: [
            {
                id: '3qt6xj5aovs',
                title: '全部课程',
                subList: [
                    {
                        id: '5d1gj5d0pgp',
                        title: '开篇词 | 产品经理的世界没有对错',
                        src: '',
                        audio: ''
                    },
                    {
                        id: '6v9pfdfp66t',
                        title: '01 | 验证码是个好设计吗？',
                        src:
                            './邱岳的产品手记/html/01讲验证码是个好设计吗.html',
                        audio:
                            './邱岳的产品手记/audio/01讲验证码是个好设计吗.mp3'
                    },
                    {
                        id: 'bn154c7cd9c',
                        title: '02 | 产品经理工具指南',
                        src: './邱岳的产品手记/html/02讲产品经理工具指南.html',
                        audio: './邱岳的产品手记/audio/02讲产品经理工具指南.mp3'
                    },
                    {
                        id: 'z4v279uujph',
                        title: '03 | 产品案例分析·Trigraphy的设计哲学',
                        src:
                            './邱岳的产品手记/html/03讲产品案例分析·Trigraphy的设计哲学.html',
                        audio: ''
                    },
                    {
                        id: 'fgg47a0c8v0',
                        title: '04 | 如何当好AI时代的产品经理？（学习篇）',
                        src:
                            './邱岳的产品手记/html/04讲如何当好AI时代的产品经理学习篇.html',
                        audio:
                            './邱岳的产品手记/audio/04讲如何当好AI时代的产品经理学习篇.mp3'
                    },
                    {
                        id: '97ij1m5yj5k',
                        title: '05 | 如何当好AI时代的产品经理？（实践篇）',
                        src:
                            './邱岳的产品手记/html/05讲如何当好AI时代的产品经理实践篇.html',
                        audio:
                            './邱岳的产品手记/audio/05讲如何当好AI时代的产品经理实践篇.mp3'
                    },
                    {
                        id: '8n6jcqhmby5',
                        title: '06 | 产品案例分析 · The Guardian的文本之美',
                        src:
                            './邱岳的产品手记/html/06讲产品案例分析·TheGuardian的文本之美.html',
                        audio: ''
                    },
                    {
                        id: 'wvkz3xxp2b2',
                        title: '07 | 关于需求变更（上）：需求背后的需求',
                        src:
                            './邱岳的产品手记/html/07讲关于需求变更上需求背后的需求.html',
                        audio:
                            './邱岳的产品手记/audio/07讲关于需求变更上需求背后的需求.mp3'
                    },
                    {
                        id: 'l37mtqrmktr',
                        title: '08 | 关于需求变更（下） : 化变更于无形',
                        src:
                            './邱岳的产品手记/html/08讲关于需求变更下化变更于无形.html',
                        audio:
                            './邱岳的产品手记/audio/08讲关于需求变更下化变更于无形.mp3'
                    },
                    {
                        id: 'i6u5cfavlcj',
                        title: '09 | 产品案例分析：Hopper的“人工智能”',
                        src:
                            './邱岳的产品手记/html/09讲产品案例分析Hopper的人工智能.html',
                        audio: ''
                    },
                    {
                        id: '2ug10i8rh1w',
                        title: '10 | 产品被抄袭了，怎么办？',
                        src:
                            './邱岳的产品手记/html/10讲产品被抄袭了怎么办.html',
                        audio:
                            './邱岳的产品手记/audio/10讲产品被抄袭了怎么办.mp3'
                    },
                    {
                        id: 'jlgpee4qsyi',
                        title: '11 | 如何借鉴灵感？',
                        src: './邱岳的产品手记/html/11讲如何借鉴灵感.html',
                        audio: './邱岳的产品手记/audio/11讲如何借鉴灵感.mp3'
                    },
                    {
                        id: 'anvnuzf343k',
                        title: '12 | 产品案例分析：LabRdr的设计实验',
                        src:
                            './邱岳的产品手记/html/12讲产品案例分析LabRdr的设计实验.html',
                        audio: ''
                    },
                    {
                        id: '6g6nqjjatx3',
                        title: '13 | 无用却必要：产品规划（上）',
                        src:
                            './邱岳的产品手记/html/13讲无用却必要产品规划上.html',
                        audio:
                            './邱岳的产品手记/audio/13讲无用却必要产品规划上.mp3'
                    },
                    {
                        id: 'eyfh60nj5bb',
                        title: '14 | 留白与节奏：产品规划（下）',
                        src:
                            './邱岳的产品手记/html/14讲留白与节奏产品规划下.html',
                        audio:
                            './邱岳的产品手记/audio/14讲留白与节奏产品规划下.mp3'
                    },
                    {
                        id: '38zklor2w4a',
                        title:
                            '15 | 产品案例分析：Mimo与Learn Python的导学之趣',
                        src:
                            './邱岳的产品手记/html/15讲产品案例分析Mimo与LearnPython的导学之趣.html',
                        audio: ''
                    },
                    {
                        id: 'o6ij5sc0mu5',
                        title: '16 | 在内部产品中找到产品经理的价值',
                        src:
                            './邱岳的产品手记/html/16讲在内部产品中找到产品经理的价值.html',
                        audio:
                            './邱岳的产品手记/audio/16讲在内部产品中找到产品经理的价值.mp3'
                    },
                    {
                        id: 'i5lsmhnejfg',
                        title: '17 | 产品经理如何获得非权力性的影响力？',
                        src:
                            './邱岳的产品手记/html/17讲产品经理如何获得非权力性的影响力.html',
                        audio:
                            './邱岳的产品手记/audio/17讲产品经理如何获得非权力性的影响力.mp3'
                    },
                    {
                        id: 'pavxpzlvtv5',
                        title: '18 | 产品案例分析：WWF Together的情怀设计',
                        src:
                            './邱岳的产品手记/html/18讲产品案例分析WWFTogether的情怀设计.html',
                        audio: ''
                    },
                    {
                        id: '3f6xrn066vc',
                        title:
                            '19 | 产品经理如何与开发打交道（上）：打破思维的边界',
                        src:
                            './邱岳的产品手记/html/19讲产品经理如何与开发打交道上打破思维的边界.html',
                        audio:
                            './邱岳的产品手记/audio/19讲产品经理如何与开发打交道上打破思维的边界.mp3'
                    },
                    {
                        id: '07ai5v7dxwj',
                        title:
                            '20 | 产品经理如何与开发打交道（下）：合作与共赢',
                        src:
                            './邱岳的产品手记/html/20讲产品经理如何与开发打交道下合作与共赢.html',
                        audio:
                            './邱岳的产品手记/audio/20讲产品经理如何与开发打交道下合作与共赢.mp3'
                    },
                    {
                        id: 'l9wfic5ivih',
                        title: '21 | 产品案例分析：Fabulous的精致养成',
                        src:
                            './邱岳的产品手记/html/21讲产品案例分析Fabulous的精致养成.html',
                        audio: ''
                    },
                    {
                        id: 'b1a78xmg1uf',
                        title: '22 | 产品经理的图文基本功（上）：产品文档',
                        src:
                            './邱岳的产品手记/html/22讲产品经理的图文基本功上产品文档.html',
                        audio:
                            './邱岳的产品手记/audio/22讲产品经理的图文基本功上产品文档.mp3'
                    },
                    {
                        id: 'zjh971ibv8l',
                        title: '23 | 产品经理的图文基本功（下）：产品图例',
                        src:
                            './邱岳的产品手记/html/23讲产品经理的图文基本功下产品图例.html',
                        audio:
                            './邱岳的产品手记/audio/23讲产品经理的图文基本功下产品图例.mp3'
                    },
                    {
                        id: '2b5c9tw997h',
                        title: '24 | 产品案例分析：PathSource的混乱与直观',
                        src:
                            './邱岳的产品手记/html/24讲产品案例分析PathSource的混乱与直观.html',
                        audio: ''
                    },
                    {
                        id: 'r74r6al6sik',
                        title: '25 | 产品世界的暗黑模式：操纵的诱惑',
                        src:
                            './邱岳的产品手记/html/25讲产品世界的暗黑模式操纵的诱惑.html',
                        audio:
                            './邱岳的产品手记/audio/25讲产品世界的暗黑模式操纵的诱惑.mp3'
                    },
                    {
                        id: 'td0t06jpnej',
                        title: '26 | 写好产品文档的诀窍',
                        src:
                            './邱岳的产品手记/html/26讲写好产品文档的诀窍.html',
                        audio:
                            './邱岳的产品手记/audio/26讲写好产品文档的诀窍.mp3'
                    },
                    {
                        id: '0evngugjfmk',
                        title: '27 | 产品案例分析：Quartz&Hooked的对话式交互',
                        src: '',
                        audio: ''
                    },
                    {
                        id: '8296lk2tkr6',
                        title: '28 | 产品分析的套路（上）：谁是利益相关者？',
                        src:
                            './邱岳的产品手记/html/28讲产品分析的套路上谁是利益相关者.html',
                        audio:
                            './邱岳的产品手记/audio/28讲产品分析的套路上谁是利益相关者.mp3'
                    },
                    {
                        id: '6zx837htxy6',
                        title: '29 | 产品分析的套路（中）：解决什么问题？',
                        src:
                            './邱岳的产品手记/html/29讲产品分析的套路中解决什么问题.html',
                        audio:
                            './邱岳的产品手记/audio/29讲产品分析的套路中解决什么问题.mp3'
                    },
                    {
                        id: 'kdt4rh1w0hv',
                        title: '30 | 产品案例分析：Primer的扑克牌交互',
                        src:
                            './邱岳的产品手记/html/30讲产品案例分析Primer的扑克牌交互.html',
                        audio: ''
                    },
                    {
                        id: '3s10k3xtpv3',
                        title: '31 | 产品分析的套路（下）：如何出解决方案？',
                        src:
                            './邱岳的产品手记/html/31讲产品分析的套路下如何出解决方案.html',
                        audio:
                            './邱岳的产品手记/audio/31讲产品分析的套路下如何出解决方案.mp3'
                    },
                    {
                        id: '9ms2ffvi468',
                        title:
                            '32 | 从受众规模、需求频率和强度出发：排定需求优先级的方法（上）',
                        src:
                            './邱岳的产品手记/html/32讲从受众规模需求频率和强度出发排定需求优先级的方法上.html',
                        audio:
                            './邱岳的产品手记/audio/32讲从受众规模需求频率和强度出发排定需求优先级的方法上.mp3'
                    },
                    {
                        id: 'jom05eyh9i9',
                        title: '33 | 产品案例分析：Arts & Culture 的架构之美',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'z8yeyzchmt9',
                        title: '34 | 价值曲线分析：排定需求优先级的方法（下）',
                        src:
                            './邱岳的产品手记/html/34讲价值曲线分析排定需求优先级的方法下.html',
                        audio:
                            './邱岳的产品手记/audio/34讲价值曲线分析排定需求优先级的方法下.mp3'
                    },
                    {
                        id: 'fxw131xlvpg',
                        title: '35 | 答疑时间：关于产品经理的12个问题',
                        src:
                            './邱岳的产品手记/html/35讲答疑时间关于产品经理的12个问题.html',
                        audio:
                            './邱岳的产品手记/audio/35讲答疑时间关于产品经理的12个问题.mp3'
                    },
                    {
                        id: '8arm3t01k89',
                        title: '36 | 产品案例分析：解读知识星球',
                        src:
                            './邱岳的产品手记/html/36讲产品案例分析解读知识星球.html',
                        audio: ''
                    },
                    {
                        id: 'c17vygosccp',
                        title:
                            '37 | 如何做好需求评审（上）：需求评审不只是一次会议',
                        src:
                            './邱岳的产品手记/html/37讲如何做好需求评审上需求评审不只是一次会议.html',
                        audio:
                            './邱岳的产品手记/audio/37讲如何做好需求评审上需求评审不只是一次会议.mp3'
                    },
                    {
                        id: '1raju4m98r1',
                        title: '38 | 如何做好需求评审（下）：在评审中控住全场',
                        src:
                            './邱岳的产品手记/html/38讲如何做好需求评审下在评审中控住全场.html',
                        audio:
                            './邱岳的产品手记/audio/38讲如何做好需求评审下在评审中控住全场.mp3'
                    },
                    {
                        id: 'wgaaf7bff9o',
                        title: '39 | 产品案例分析：SeatGeek的订票设计',
                        src:
                            './邱岳的产品手记/html/39讲产品案例分析SeatGeek的订票设计.html',
                        audio: ''
                    },
                    {
                        id: 'a8tlnu4gcn0',
                        title: '40 | 新年给产品经理的几碗鸡汤',
                        src:
                            './邱岳的产品手记/html/40讲新年给产品经理的几碗鸡汤.html',
                        audio:
                            './邱岳的产品手记/audio/40讲新年给产品经理的几碗鸡汤.mp3'
                    },
                    {
                        id: 'pddap9llyvz',
                        title: '41 | 产品经理的项目管理心得',
                        src:
                            './邱岳的产品手记/html/41讲产品经理的项目管理心得.html',
                        audio:
                            './邱岳的产品手记/audio/41讲产品经理的项目管理心得.mp3'
                    },
                    {
                        id: '6u1tternno8',
                        title: '42 | 产品案例分析：Unread的阅读体验',
                        src:
                            './邱岳的产品手记/html/42讲产品案例分析Unread的阅读体验.html',
                        audio: ''
                    },
                    {
                        id: '2zwrub7bytz',
                        title:
                            '43 | “玩”的力量：从游戏设计中学习产品设计（上）',
                        src:
                            './邱岳的产品手记/html/43讲玩的力量从游戏设计中学习产品设计上.html',
                        audio:
                            './邱岳的产品手记/audio/43讲玩的力量从游戏设计中学习产品设计上.mp3'
                    },
                    {
                        id: '3q68ig5upxb',
                        title:
                            '44 | “玩”的启示：从游戏设计中学习产品设计（下）',
                        src:
                            './邱岳的产品手记/html/44讲玩的启示从游戏设计中学习产品设计下.html',
                        audio:
                            './邱岳的产品手记/audio/44讲玩的启示从游戏设计中学习产品设计下.mp3'
                    },
                    {
                        id: '1rxjt793ub6',
                        title: '45 | 产品案例分析：Chartistic的“复杂”图表',
                        src:
                            './邱岳的产品手记/html/45讲产品案例分析Chartistic的复杂图表.html',
                        audio: ''
                    },
                    {
                        id: 'qo8zcnnck4i',
                        title: '尾声：你的快乐是哪一种',
                        src: './邱岳的产品手记/html/尾声你的快乐是哪一种.html',
                        audio: './邱岳的产品手记/audio/尾声你的快乐是哪一种.mp3'
                    },
                    {
                        id: '2otowtxa3n0',
                        title: '【第二季回归】二爷归来，再次扬帆起航',
                        src:
                            './邱岳的产品手记/html/【第二季回归】二爷归来再次扬帆起航.html',
                        audio:
                            './邱岳的产品手记/audio/【第二季回归】二爷归来再次扬帆起航.mp3'
                    }
                ]
            }
        ]
    },
    {
        id: '70a9t1q1ion',
        type: 'pm',
        cid: '100012001',
        title: '邱岳的产品实战',
        subTitle: '从0到100的产品启示录',
        authorName: '邱岳',
        authorInfo: '十年资深产品人，无码科技产品经理',
        contents: [
            {
                id: 'usf3efspbqu',
                title: '开篇词',
                subList: [
                    {
                        id: 'cjs2yhe39w8',
                        title: '开篇词 | 和自己较劲，一个产品经理的实战历程',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: 'v9smg9ecnvq',
                title: '模块一：增长你的产品：一款产品的诞生与增长',
                subList: [
                    {
                        id: '4zyntmu9vcv',
                        title: '01 | 如何验证你的产品创意？',
                        src:
                            './邱岳的产品实战/html/01讲如何验证你的产品创意.html',
                        audio:
                            './邱岳的产品实战/audio/01讲如何验证你的产品创意.mp3'
                    },
                    {
                        id: '1x5eawbu7xj',
                        title: '02 | 如何锤炼你的产品创意',
                        src:
                            './邱岳的产品实战/html/02讲如何锤炼你的产品创意.html',
                        audio:
                            './邱岳的产品实战/audio/02讲如何锤炼你的产品创意.mp3'
                    },
                    {
                        id: '15bw3tnqk88',
                        title: '03 | 要不要相信你的调查问卷',
                        src:
                            './邱岳的产品实战/html/03讲要不要相信你的调查问卷.html',
                        audio:
                            './邱岳的产品实战/audio/03讲要不要相信你的调查问卷.mp3'
                    },
                    {
                        id: 'r7ksb4fbt29',
                        title: '04 | 用最少的资源给你的产品试试水',
                        src:
                            './邱岳的产品实战/html/04讲用最少的资源给你的产品试试水.html',
                        audio:
                            './邱岳的产品实战/audio/04讲用最少的资源给你的产品试试水.mp3'
                    },
                    {
                        id: '9je2br0r8mj',
                        title: '05 | 如何快速利用 MVP 思想',
                        src:
                            './邱岳的产品实战/html/05讲如何快速利用MVP思想.html',
                        audio:
                            './邱岳的产品实战/audio/05讲如何快速利用MVP思想.mp3'
                    },
                    {
                        id: '1yvh3vvte3n',
                        title: '06 | 如何做好产品立项',
                        src: './邱岳的产品实战/html/06讲如何做好产品立项.html',
                        audio: './邱岳的产品实战/audio/06讲如何做好产品立项.mp3'
                    },
                    {
                        id: 'jgzufdjavl3',
                        title: '07 | 产品发布的那些坑儿',
                        src:
                            './邱岳的产品实战/html/07讲产品发布的那些坑儿.html',
                        audio:
                            './邱岳的产品实战/audio/07讲产品发布的那些坑儿.mp3'
                    },
                    {
                        id: 'yb8jx2jhx5s',
                        title: '08 | 产品增长越来越难，到底应该怎么办？',
                        src:
                            './邱岳的产品实战/html/08讲产品增长越来越难到底应该怎么办.html',
                        audio:
                            './邱岳的产品实战/audio/08讲产品增长越来越难到底应该怎么办.mp3'
                    },
                    {
                        id: 'vm526tmhn7y',
                        title: '09 | 产品增长的核心，究竟是什么？',
                        src:
                            './邱岳的产品实战/html/09讲产品增长的核心究竟是什么.html',
                        audio:
                            './邱岳的产品实战/audio/09讲产品增长的核心究竟是什么.mp3'
                    },
                    {
                        id: 'auj3o30xvye',
                        title: '10 | 你需要组建增长团队吗，应该如何组建呢？',
                        src:
                            './邱岳的产品实战/html/10讲你需要组建增长团队吗应该如何组建呢.html',
                        audio:
                            './邱岳的产品实战/audio/10讲你需要组建增长团队吗应该如何组建呢.mp3'
                    },
                    {
                        id: 'u60ozc7g5zk',
                        title: '11 | 产品增长有哪些业务公式与关键指标？（上）',
                        src:
                            './邱岳的产品实战/html/11讲产品增长有哪些业务公式与关键指标上.html',
                        audio:
                            './邱岳的产品实战/audio/11讲产品增长有哪些业务公式与关键指标上.mp3'
                    },
                    {
                        id: 'eh2l85x1d1c',
                        title: '12 | 产品增长有哪些业务公式与关键指标？（下）',
                        src:
                            './邱岳的产品实战/html/12讲产品增长有哪些业务公式与关键指标下.html',
                        audio:
                            './邱岳的产品实战/audio/12讲产品增长有哪些业务公式与关键指标下.mp3'
                    },
                    {
                        id: 'ueb1cvwfxch',
                        title: '13 | 产品做增长的过程中，有哪些关键套路？',
                        src:
                            './邱岳的产品实战/html/13讲产品做增长的过程中有哪些关键套路.html',
                        audio:
                            './邱岳的产品实战/audio/13讲产品做增长的过程中有哪些关键套路.mp3'
                    },
                    {
                        id: 'tmnxvp4ry26',
                        title: '14 | 实战增长，我们要知道哪些事儿？',
                        src:
                            './邱岳的产品实战/html/14讲实战增长我们要知道哪些事儿.html',
                        audio:
                            './邱岳的产品实战/audio/14讲实战增长我们要知道哪些事儿.mp3'
                    },
                    {
                        id: '6y8dg1ejs63',
                        title: '15 | 增长执行时，需要哪些关键的能力?',
                        src: '',
                        audio: ''
                    },
                    {
                        id: '9b3mjgodv78',
                        title: '16 | 当钩子靠不住时，如何提高用户留存？（上）',
                        src:
                            './邱岳的产品实战/html/16讲当钩子靠不住时如何提高用户留存上.html',
                        audio:
                            './邱岳的产品实战/audio/16讲当钩子靠不住时如何提高用户留存上.mp3'
                    },
                    {
                        id: 'mphrbbsfivh',
                        title: '17 | 当钩子靠不住时，如何提高用户留存？（下）',
                        src:
                            './邱岳的产品实战/html/17讲当钩子靠不住时如何提高用户留存下.html',
                        audio:
                            './邱岳的产品实战/audio/17讲当钩子靠不住时如何提高用户留存下.mp3'
                    },
                    {
                        id: 'mcvtv5yvi56',
                        title: '18 | 如何把你的新用户转化为忠实的长期用户？',
                        src:
                            './邱岳的产品实战/html/18讲如何把你的新用户转化为忠实的长期用户.html',
                        audio:
                            './邱岳的产品实战/audio/18讲如何把你的新用户转化为忠实的长期用户.mp3'
                    },
                    {
                        id: 'ptnmsjnalmb',
                        title:
                            '19 | 满眼尽是“病毒”“裂变”，到底什么是传播和获客的正确姿势？（上）',
                        src:
                            './邱岳的产品实战/html/19讲满眼尽是病毒裂变到底什么是传播和获客的正确姿势上.html',
                        audio:
                            './邱岳的产品实战/audio/19讲满眼尽是病毒裂变到底什么是传播和获客的正确姿势上.mp3'
                    },
                    {
                        id: '5e6920a31sd',
                        title:
                            '20 | 满眼尽是“病毒”“裂变”，到底什么是传播和获客的正确姿势？（下）',
                        src:
                            './邱岳的产品实战/html/20讲满眼尽是病毒裂变到底什么是传播和获客的正确姿势下.html',
                        audio:
                            './邱岳的产品实战/audio/20讲满眼尽是病毒裂变到底什么是传播和获客的正确姿势下.mp3'
                    },
                    {
                        id: '93ko78cwrp2',
                        title: '21 | 增长黑客的阴暗面',
                        src: './邱岳的产品实战/html/21讲增长黑客的阴暗面.html',
                        audio: './邱岳的产品实战/audio/21讲增长黑客的阴暗面.mp3'
                    }
                ]
            },
            {
                id: '701ydc7pxta',
                title: '模块二：升级你的产品能力：产品经理的数据能力与商业意识',
                subList: [
                    {
                        id: 'cltnnojt7ak',
                        title:
                            '22 | 产品经理需要具备哪些基本的数据能力和意识？',
                        src:
                            './邱岳的产品实战/html/22讲产品经理需要具备哪些基本的数据能力和意识.html',
                        audio:
                            './邱岳的产品实战/audio/22讲产品经理需要具备哪些基本的数据能力和意识.mp3'
                    },
                    {
                        id: 'abggftb8k7h',
                        title:
                            '23 | 突发式流量数据暴跌，产品经理应该如何应对？【分析篇】',
                        src:
                            './邱岳的产品实战/html/23讲突发式流量数据暴跌产品经理应该如何应对【分析篇】.html',
                        audio:
                            './邱岳的产品实战/audio/23讲突发式流量数据暴跌产品经理应该如何应对【分析篇】.mp3'
                    },
                    {
                        id: 'dvel6rsw51q',
                        title:
                            '24 | 突发式流量数据暴跌，产品经理应该如何应对？【拆解篇】',
                        src:
                            './邱岳的产品实战/html/24讲突发式流量数据暴跌产品经理应该如何应对【拆解篇】.html',
                        audio:
                            './邱岳的产品实战/audio/24讲突发式流量数据暴跌产品经理应该如何应对【拆解篇】.mp3'
                    },
                    {
                        id: 'f300rf451uk',
                        title:
                            '25 | 突发式流量数据暴跌，产品经理应该如何应对？【处理篇】',
                        src:
                            './邱岳的产品实战/html/25讲突发式流量数据暴跌产品经理应该如何应对【处理篇】.html',
                        audio:
                            './邱岳的产品实战/audio/25讲突发式流量数据暴跌产品经理应该如何应对【处理篇】.mp3'
                    },
                    {
                        id: '19p60wnq7ab',
                        title: '26 | 当收集数据的前后，我们应该做什么？',
                        src:
                            './邱岳的产品实战/html/26讲当收集数据的前后我们应该做什么.html',
                        audio:
                            './邱岳的产品实战/audio/26讲当收集数据的前后我们应该做什么.mp3'
                    },
                    {
                        id: 'uy57im6rn5b',
                        title:
                            '27 | 从具体业务出发，如何利用数据辅助你的决策？',
                        src:
                            './邱岳的产品实战/html/27讲从具体业务出发如何利用数据辅助你的决策.html',
                        audio:
                            './邱岳的产品实战/audio/27讲从具体业务出发如何利用数据辅助你的决策.mp3'
                    },
                    {
                        id: 'mg2ffutoip2',
                        title:
                            '28 |  那些数据不能告诉你的事儿：尽信“数”不如无“数”',
                        src:
                            './邱岳的产品实战/html/28讲那些数据不能告诉你的事儿尽信数不如无数.html',
                        audio:
                            './邱岳的产品实战/audio/28讲那些数据不能告诉你的事儿尽信数不如无数.mp3'
                    },
                    {
                        id: 'nox5sz4bviu',
                        title:
                            '29 |  每个产品经理都要掌握的基本商业概念是什么？',
                        src:
                            './邱岳的产品实战/html/29讲每个产品经理都要掌握的基本商业概念是什么.html',
                        audio:
                            './邱岳的产品实战/audio/29讲每个产品经理都要掌握的基本商业概念是什么.mp3'
                    },
                    {
                        id: 'kvmw21nzew4',
                        title: '30 | 如何提高你的商业产品收入？（上）',
                        src:
                            './邱岳的产品实战/html/30讲如何提高你的商业产品收入上.html',
                        audio:
                            './邱岳的产品实战/audio/30讲如何提高你的商业产品收入上.mp3'
                    },
                    {
                        id: 'rh7ffnrhvgx',
                        title: '31 | 如何提高你的商业产品收入（下）',
                        src:
                            './邱岳的产品实战/html/31讲如何提高你的商业产品收入下.html',
                        audio:
                            './邱岳的产品实战/audio/31讲如何提高你的商业产品收入下.mp3'
                    },
                    {
                        id: 'obs88gvsrbu',
                        title: '32 | “烧钱获客”中有哪些值得学习的商业逻辑？',
                        src:
                            './邱岳的产品实战/html/32讲烧钱获客中有哪些值得学习的商业逻辑.html',
                        audio:
                            './邱岳的产品实战/audio/32讲烧钱获客中有哪些值得学习的商业逻辑.mp3'
                    },
                    {
                        id: '19uvcmn2dfm',
                        title: '33 | “烧钱获客”的正确姿势有哪些？',
                        src:
                            './邱岳的产品实战/html/33讲烧钱获客的正确姿势有哪些.html',
                        audio:
                            './邱岳的产品实战/audio/33讲烧钱获客的正确姿势有哪些.mp3'
                    },
                    {
                        id: 'ul02q5tbu4c',
                        title: '34 | 如何具备赚钱的意识与能力？',
                        src:
                            './邱岳的产品实战/html/34讲如何具备赚钱的意识与能力.html',
                        audio:
                            './邱岳的产品实战/audio/34讲如何具备赚钱的意识与能力.mp3'
                    }
                ]
            },
            {
                id: '8uvxyh1dhsq',
                title: '模块三：产品经典案例解析：小程序的生态与实践',
                subList: [
                    {
                        id: 'zju5vpifuy6',
                        title: '35 | 对产品经理来说，做小程序有什么价值？',
                        src:
                            './邱岳的产品实战/html/35讲对产品经理来说做小程序有什么价值.html',
                        audio:
                            './邱岳的产品实战/audio/35讲对产品经理来说做小程序有什么价值.mp3'
                    },
                    {
                        id: '1owbo0ab1rg',
                        title: '36 | 如何利用小程序去做传播？',
                        src:
                            './邱岳的产品实战/html/36讲如何利用小程序去做传播.html',
                        audio:
                            './邱岳的产品实战/audio/36讲如何利用小程序去做传播.mp3'
                    },
                    {
                        id: '2hfb5j3hrqe',
                        title: '37 | 关于小程序，一些你应该知道的事儿',
                        src:
                            './邱岳的产品实战/html/37讲关于小程序一些你应该知道的事儿.html',
                        audio:
                            './邱岳的产品实战/audio/37讲关于小程序一些你应该知道的事儿.mp3'
                    }
                ]
            },
            {
                id: 'phkkm7czggw',
                title: '模块四：产品会客厅——场景化处理你的产品疑难杂症',
                subList: [
                    {
                        id: 'fkqa3at63dy',
                        title: '产品会客厅 |  千万级用户的产品是如何打造的？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'hjtclz52cic',
                        title: '产品会客厅 | 极客时间产品规划大揭秘',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'k28ea6mh6bv',
                        title:
                            '产品会客厅 | 没有项目管理经验，如何推动团队一起完成任务？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: '3e6yfm11ssv',
                        title:
                            '产品会客厅 | 需求评审怎么做，如何区分什么是真的用户需求？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'rneccyr7xep',
                        title:
                            '产品会客厅 | 一次简洁并有效的产品分析需要怎么做？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'bms934kho52',
                        title:
                            '产品会客厅 | 从“分享有赏”案例讲起，如何做关键决策？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: '6cbhfxrtakq',
                        title:
                            '产品会客厅 |  从案例出发，如何利用数据分析来验证新功能的效果？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: '5mtvmtybx84',
                        title: '产品会客厅 | 产品经理面试究竟考什么？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'f113qc3t0j8',
                        title:
                            '产品会客厅 | 产品经理的职业发展，你在哪个阶段？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'svyjl547hsr',
                        title:
                            '产品会客厅 |  在产品的获客与传播上，“极客时间”做了些什么？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'oyxp96g9747',
                        title:
                            '产品会客厅 | 从流量型平台转到资源匮乏平台，如何应对业务变化？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'f0u02j6tr6k',
                        title:
                            '产品会客厅 | 面向大众的通用型产品VS受众面少的垂直领域，二者如何博弈？（上）',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'jvc6he4rqxf',
                        title:
                            '产品会客厅 |  面向大众的通用型产品VS受众面少的垂直领域，二者如何博弈？（下）',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'jguh5sabyv5',
                        title: '产品会客厅 | 未来的产品会有怎样的发展趋势？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'bjzh0ajif9w',
                        title:
                            '产品会客厅 | 产品经理如何上手体验一个App？（上）',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'mvlp3dn11yf',
                        title:
                            '产品会客厅 |  产品经理如何上手体验一个App （下）',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'vtykh6l3y4s',
                        title:
                            '产品会客厅 | 从“极客时间”App的信息架构上，我们能学到什么？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'joa2l07p4a1',
                        title: '产品会客厅 | 专栏销量过万是一种什么样的感受？',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: 'tpuga8eu3rd',
                title: '尾声',
                subList: [
                    {
                        id: 'ztk312hno3e',
                        title: '尾声 | 祝你胸怀远大，心狠手辣',
                        src:
                            './邱岳的产品实战/html/尾声讲祝你胸怀远大心狠手辣.html',
                        audio:
                            './邱岳的产品实战/audio/尾声讲祝你胸怀远大心狠手辣.mp3'
                    }
                ]
            },
            {
                id: 'wv427unzks2',
                title: '结课测试',
                subList: [
                    {
                        id: 'pckm413u9c8',
                        title: '结课测试 | 关于产品的这些知识，你都掌握了吗？',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'ruzz3alfp95',
        type: 'pm',
        cid: '100043001',
        title: '摄影入门课',
        subTitle: '希望人人都能拍出好照片',
        authorName: '小麥',
        authorInfo: '独立摄影师',
        contents: [
            {
                id: '888v7ido4sv',
                title: '开篇词',
                subList: [
                    {
                        id: 'yquw6k1y82m',
                        title: '开篇词 | 拍了十三年照片，我还是个小白',
                        src:
                            './摄影入门课/html/开篇词拍了十三年照片我还是个小白.html',
                        audio:
                            './摄影入门课/audio/开篇词拍了十三年照片我还是个小白.mp3'
                    }
                ]
            },
            {
                id: 'b45xntgesf1',
                title: '摄影史',
                subList: [
                    {
                        id: 'kz8l612f2sa',
                        title:
                            '01 | 影像时代的视觉语言（上）：是什么推动了摄影的发展？',
                        src:
                            './摄影入门课/html/01影像时代的视觉语言上是什么推动了摄影的发展.html',
                        audio:
                            './摄影入门课/audio/01影像时代的视觉语言上是什么推动了摄影的发展.mp3'
                    },
                    {
                        id: 'hao78r7ss3e',
                        title: '02 | 影像时代的视觉语言（下）：有图就有真相？',
                        src:
                            './摄影入门课/html/02影像时代的视觉语言下有图就有真相.html',
                        audio:
                            './摄影入门课/audio/02影像时代的视觉语言下有图就有真相.mp3'
                    }
                ]
            },
            {
                id: 'itk1kpbj7ma',
                title: '理论篇',
                subList: [
                    {
                        id: 'rg8g1he38y2',
                        title: '03 | 光圈与景深：拍照片可以不对焦？',
                        src:
                            './摄影入门课/html/03光圈与景深拍照片可以不对焦.html',
                        audio:
                            './摄影入门课/audio/03光圈与景深拍照片可以不对焦.mp3'
                    },
                    {
                        id: 'sjia8x5jrqr',
                        title:
                            '04 | 镜头焦段与实际运用：你拍到的是你看到的么？',
                        src:
                            './摄影入门课/html/04镜头焦段与实际运用你拍到的是你看到的么.html',
                        audio:
                            './摄影入门课/audio/04镜头焦段与实际运用你拍到的是你看到的么.mp3'
                    },
                    {
                        id: 'rda8cibk7ze',
                        title: '05 | 快门：你看到就能拍到么？',
                        src: './摄影入门课/html/05快门你看到就能拍到么.html',
                        audio: './摄影入门课/audio/05快门你看到就能拍到么.mp3'
                    },
                    {
                        id: '6wj8g9bviqt',
                        title:
                            '06 | 感光度 (ISO) 与其他相机参数：除了光圈和快门，你还应该知道些什么？',
                        src:
                            './摄影入门课/html/06感光度ISO与其他相机参数除了光圈和快门你还应该知道些什么.html',
                        audio:
                            './摄影入门课/audio/06感光度ISO与其他相机参数除了光圈和快门你还应该知道些什么.mp3'
                    },
                    {
                        id: 'y2e8w9kgozl',
                        title: '07 | 测光：什么才是正确曝光？',
                        src: './摄影入门课/html/07测光什么才是正确曝光.html',
                        audio: './摄影入门课/audio/07测光什么才是正确曝光.mp3'
                    },
                    {
                        id: 'h98yix1cfkd',
                        title: '08 | 拍摄设备选择（上）：都有什么相机？',
                        src:
                            './摄影入门课/html/08拍摄设备选择上都有什么相机.html',
                        audio:
                            './摄影入门课/audio/08拍摄设备选择上都有什么相机.mp3'
                    },
                    {
                        id: 'gf42vosjq4b',
                        title:
                            '09 | 拍摄设备选择（下）：什么相机才是最好的相机？',
                        src:
                            './摄影入门课/html/09拍摄设备选择下什么相机才是最好的相机.html',
                        audio:
                            './摄影入门课/audio/09拍摄设备选择下什么相机才是最好的相机.mp3'
                    },
                    {
                        id: 'l6cnpz8mq3u',
                        title: '10 | 好照片的构成因素：什么照片才是好照片？',
                        src:
                            './摄影入门课/html/10好照片的构成因素什么照片才是好照片.html',
                        audio:
                            './摄影入门课/audio/10好照片的构成因素什么照片才是好照片.mp3'
                    }
                ]
            },
            {
                id: '0urxgs327ky',
                title: '实战篇',
                subList: [
                    {
                        id: 'mf28gjt49pf',
                        title: '11 | 光（上）：摄影的“影”长什么样？',
                        src: './摄影入门课/html/11光上摄影的影长什么样.html',
                        audio: './摄影入门课/audio/11光上摄影的影长什么样.mp3'
                    },
                    {
                        id: 'i8d8p1bxhwm',
                        title: '12 | 光（中）：你真的会在阳光下拍照片么？',
                        src:
                            './摄影入门课/html/12光中你真的会在阳光下拍照片么.html',
                        audio:
                            './摄影入门课/audio/12光中你真的会在阳光下拍照片么.mp3'
                    },
                    {
                        id: 'b1az6rl2pmi',
                        title:
                            '13 | 光（下）：闪光灯是因为环境太暗所以照亮儿用的么？',
                        src:
                            './摄影入门课/html/13光下闪光灯是因为环境太暗所以照亮儿用的么.html',
                        audio:
                            './摄影入门课/audio/13光下闪光灯是因为环境太暗所以照亮儿用的么.mp3'
                    },
                    {
                        id: 'hgm2ufnwk1d',
                        title: '14 | 静物：静物是静物么？',
                        src: './摄影入门课/html/14静物静物是静物么.html',
                        audio: './摄影入门课/audio/14静物静物是静物么.mp3'
                    },
                    {
                        id: 'hh16gwntki9',
                        title: '15 | 人物：会聊天比会拍照片更重要',
                        src:
                            './摄影入门课/html/15人物会聊天比会拍照片更重要.html',
                        audio:
                            './摄影入门课/audio/15人物会聊天比会拍照片更重要.mp3'
                    },
                    {
                        id: 'yiq4ksd9eki',
                        title: '16 | 风光：你不想让别人看见什么？',
                        src:
                            './摄影入门课/html/16风光你不想让别人看见什么.html',
                        audio:
                            './摄影入门课/audio/16风光你不想让别人看见什么.mp3'
                    },
                    {
                        id: 'hd4mtdymxgl',
                        title: '17 | 街拍：艺术这场“大骗局”',
                        src: './摄影入门课/html/17街拍艺术这场大骗局.html',
                        audio: './摄影入门课/audio/17街拍艺术这场大骗局.mp3'
                    },
                    {
                        id: 'sk7dc4gysh1',
                        title:
                            '18 | 基础手机后期（上）：VSCO 完整指南（@随你们去）',
                        src:
                            './摄影入门课/html/18基础手机后期上VSCO完整指南@随你们去.html',
                        audio:
                            './摄影入门课/audio/18基础手机后期上VSCO完整指南@随你们去.mp3'
                    },
                    {
                        id: 'oy7cpdqvs0v',
                        title:
                            '19 | 基础手机后期（下）：Snapseed 使用攻略（@随你们去）',
                        src:
                            './摄影入门课/html/19基础手机后期下Snapseed使用攻略@随你们去.html',
                        audio:
                            './摄影入门课/audio/19基础手机后期下Snapseed使用攻略@随你们去.mp3'
                    },
                    {
                        id: 'exrst48yx95',
                        title: '20 | 摄影的更多可能：摄影到底是不是艺术？',
                        src:
                            './摄影入门课/html/20摄影的更多可能摄影到底是不是艺术.html',
                        audio:
                            './摄影入门课/audio/20摄影的更多可能摄影到底是不是艺术.mp3'
                    }
                ]
            },
            {
                id: 'x3k7a0e6c8h',
                title: '结束语',
                subList: [
                    {
                        id: '8nmw2mu0gd4',
                        title: '在此谢罪，结束语被迫延期了',
                        src: './摄影入门课/html/在此谢罪结束语被迫延期了.html',
                        audio: './摄影入门课/audio/在此谢罪结束语被迫延期了.mp3'
                    },
                    {
                        id: 'hc25joc4qde',
                        title: '结束语 | 过好生活本身远比把他们拍下来重要',
                        src: '',
                        audio: ''
                    }
                ]
            },
            {
                id: 'x9tbfmk6zsi',
                title: '加餐',
                subList: [
                    {
                        id: 'lh5pnvf3vnx',
                        title: '第一次社群分享半实录：怎么能问出一个好问题？',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'm2oczk99wpt',
                        title: '第二次社群分享半实录：拍照片的三个阶段',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'ya3kyshg1dt',
                        title: '第三次社群分享半实录：大型评片儿现场',
                        src: '',
                        audio: ''
                    },
                    {
                        id: 'ko4fdhpvxag',
                        title: '关于《3》这本画册',
                        src: '',
                        audio: ''
                    }
                ]
            }
        ]
    }
]

const COLUMNS = WEB_LIST.concat(CS_LIST)
    .concat(SKILL_LIST)
    .concat(BACKEND_LIST)
    .concat(PM_LIST)

COLUMNS.forEach(column => {
    column.title_pinyin = pinyin(column.title, {
        segment: true, // 启用分词
        group: true, // 启用词组
        style: pinyin.STYLE_NORMAL // 设置拼音风格设置为普通风格（不带声调），
    })
        .flat()
        .join('')

    column.searchType = 'column'

    column.contents.forEach(section => {
        section.subList.forEach(item => {
            item.searchType = 'article'
            item.title_pinyin = pinyin(item.title, {
                segment: true, // 启用分词
                group: true, // 启用词组
                style: pinyin.STYLE_NORMAL // 设置拼音风格设置为普通风格（不带声调），
            })
                .flat()
                .join('')
            item.columnId = column.id
        })
    })
})

export default COLUMNS
