import Mock from 'mockjs'


export default Mock.mock('/api/data', (req, res) => {
    return {
        activityLists: [{
                id: "1",
                title: '美国•【诠释唇色】魅可（MAC）时尚唇膏3g，爆款色号上架，诱惑无法抗拒！',
                type: 'jumei_deal',
                imgs: [
                    'http://mp6.jmstatic.com/product/001/388/1388308_std/1388308_1000_1000.jpg?v=1487312982&imageView2/2/w/800/q/90',
                    'http://p12.jmstatic.com/html_editor/201702/24/14879178041530.jpg',
                ],
                cartImg: 'http://mp5.jmstatic.com/product/001/343/1343667_std/1343667_1000_1000.jpg?v=1466486255&imageView2/2/w/800/q/90',
                nowPrice: 148,
                oldPrice: 170,
                discount: 8.6,
                buyNum: 4166,
                inventory: 1000,
                isSelf: true,
                freight: "本商品满299或2件包邮",
                detail: '外色内润，与时尚一吻定情，魅可（MAC）时尚唇膏3g（多色可选）！柔美丝绒触感加高度饱和显色，诠释唇部色彩，将性感的“唇”情本色演绎！持久唇色不沾杯，一次补妆维持一天的亮丽唇色，唇色诱惑让他无法抗拒！',
                freight: "本商品满299或2件包邮",
                imgDetail: [
                    'http://p12.jmstatic.com/html_editor/201702/24/14879178041530.jpg',
                    'http://p12.jmstatic.com/html_editor/201702/24/14879178046180.jpg',
                    'http://p12.jmstatic.com/html_editor/201702/24/14879178049232.jpg',
                    'http://p12.jmstatic.com/html_editor/201704/20/14926576172513.jpg',
                    'http://p12.jmstatic.com/html_editor/201704/12/14919923698113.jpg',
                    'http://p12.jmstatic.com/html_editor/201704/12/14919921978986.jpg',
                    'http://p12.jmstatic.com/html_editor/201706/12/14972606776257.jpg',

                ],
                comments: [{
                        id: "c1",
                        avatar: 'http://images2.jumei.com/user_avatar/102/653/102653606-64-1505009489.jpg?1505009489',
                        name: 'P***欢',
                        member: '白金会员',
                        joinTime: 567,
                        sign: '',
                        comment: '这是本菇凉的第一只M，一直想买但苦于没有色号啊，那天突然心血来潮逛了一下小美，结果发现这次货比较齐，选了一只比较缺的橘色系，以前特别爱橘色，不过现在一直用的迪奥999，也是在小美家买的，很不错哦。这次的子弹头很满意，颜色是我想要的，虽然买之前做了很大一番功课，还一度怀疑自己是不是买错了色号，拿回来不好看怎么办。不过现在心放下了，哈哈，喜欢橘色系的妹子可以考虑一下这只哦，不挑皮，而且夏天要来了，这个颜色非常有活力。第一次在聚美写这么多评论，可以看得出来我是真心喜欢，哈哈。',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1051597715-1487402343-0137_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1051597715-1487402338-8247_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1051597715-1487402337-4728_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1051597715-1487402337-4728_270_270.jpg'
                        ],
                        type: 'Lady Danger（亮珊瑚橘）/3g',
                        buyTime: '2017-02-15'
                    },
                    {
                        id: "c3",
                        avatar: 'http://images2.jumei.com/user_avatar/088/832/88832422-64.jpg?1479310530',
                        name: '泡***变',
                        member: '白金会员',
                        joinTime: 302,
                        sign: '每个人都是通过自己的努力活成自己想要的样子！',
                        comment: '第一次买MAC的口红，我个人觉得不是很惊艳，无论从它的外观，还是从它的使用上。但是也对得起它的价格，算是非常亲民的价格啦～颜色就是那种美美的西柚色，但是对于唇色较深并且化妆不爱遮盖原本唇色的我来说，真的是差强人意。我的唇色偏深，有些接近紫色。所以结果就是，明明很美的颜色，到了我的嘴上就变得没那么好看了。至于回购，应该不会再回购这个颜色，其他颜色可以试试。',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1029226278-1480927954-6811_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1029226278-1480927930-7615_270_270.jpg'
                        ],
                        type: 'See Sheer（水润西柚色）/3g',
                        buyTime: '2016-11-29'
                    },
                    {
                        id: "c3",
                        avatar: 'http://p0.jmstatic.com/product_report/default/avatar/avatar_small.png',
                        name: '5***6',
                        member: '白金会员',
                        joinTime: 769,
                        sign: '',
                        comment: '这款lady 是橘色的、夏天要来了、虽然我有很多橘色口红、但这款是最像YSL13的、最近就是爱惨了MAC、果断入了～这款比较滋润、上色很容易、强力推荐',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1051394180-1487469632-9174_270_270.jpg'
                        ],
                        type: 'Lady Danger（亮珊瑚橘）/3g',
                        buyTime: '2017-02-15'
                    },


                ],
                types: ['Flat out fabulous（哑光玫红）', 'Brick O la（经典豆沙色）', 'Red Rock',
                    'By special Order', 'Ablaze', 'Lady Bug (番茄红)', 'Retro', 'Cosmo'
                ],

            },
            {
                id: "2",
                title: '韩国•悦诗风吟控油调色矿物质散粉',
                type: 'jumei_deal',
                imgs: [
                    'http://mp5.jmstatic.com/product/003/613/3613386_std/3613386_1_1000_1000.jpg?v=1495005338&imageView2/2/w/800/q/90',
                    'http://mp5.jmstatic.com/product/003/613/3613386_std/3613386_3_1000_1000.jpg?v=1495005338&imageView2/2/w/800/q/90',
                    'http://mp5.jmstatic.com/product/003/613/3613386_std/3613386_3_1000_1000.jpg?v=1495005338&imageView2/2/w/800/q/90',
                    'http://mp6.jmstatic.com/product/003/613/3613386_std/3613386_5_1000_1000.jpg?v=1495005338&imageView2/2/w/800/q/90'
                ],
                cartImg: 'http://mp6.jmstatic.com/product/003/613/3613386_std/3613386_1000_1000.jpg?v=1495005338&imageView2/2/w/800/q/90',
                nowPrice: 50,
                oldPrice: 90,
                inventory: 990,
                discount: 2,
                buyNum: 121,
                types: ['01 柔情紫', '02 奶昔绿', '03 甜桔粉'],
                isSelf: true,
                freight: '本商品满299或2件包邮',
                detail: '韩国•打造自然提亮肤色、调节肤色效果的控油彩色散粉！悦诗风吟控油调色矿物质散粉5g，如同使用相机滤镜般，在完成妆容后，选择适合自己肤色的颜色来完成肤色调节。根据不同弧度产生的光反射效果，自然调整肤色。同时帮助调节汗液和多余皮脂分泌，演绎柔滑肌肤。',
                imgDetail: [
                    'http://p12.jmstatic.com/banner/201705/16/1494931348.9389.jpg',
                    'http://p12.jmstatic.com/banner/201705/16/1494931349.595.jpg',
                    'http://p12.jmstatic.com/banner/201705/16/1494931350.2882.jpg',
                    'http://p12.jmstatic.com/banner/201705/16/1494933297.859.jpg'
                ],
                comments: [{
                        id: "c1",
                        avatar: 'http://images2.jumei.com/user_avatar/111/742/111742682-64.jpg?1471707778',
                        name: '独***※',
                        member: '白金会员',
                        joinTime: 399,
                        sign: '',
                        comment: '这个粉含有纯净济州岛矿物质成分。即使化妆，肌肤也能自由呼吸。同时具有舒缓肌肤毛孔收敛的薄荷成分，调理毛孔的同时保持健康肌肤。修饰泛红的话，我觉得效果不佳，不知道是不是涂太少了，但是控油我觉得挺有效果的，同学们都用这个牌子的控油粉，顺便试试。',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1114715149-1504448469-1479_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1114715149-1504448451-829_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1114715149-1504448433-1061_270_270.jpg',
                        ],
                        type: '02 奶昔绿/5g',
                        buyTime: '2017-09-15'
                    },
                    {
                        id: "c2",
                        avatar: 'http://images2.jumei.com/user_avatar/050/204/50204894-64-1498672691.jpg?1498672692',
                        name: '曹***6',
                        member: '白金会员',
                        joinTime: 1177,
                        sign: '',
                        comment: '控油效果可以，但是颜色太白了，感觉拍在脸上有一层白粉，我是油性皮肤',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1110784240-1504808830-5335_270_270.jpg',
                        ],
                        type: '02 奶昔绿/5g',
                        buyTime: '2017-07-15'
                    },
                    {
                        id: "c3",
                        avatar: 'http://images2.jumei.com/user_avatar/083/689/83689116-64.jpg?1472606848',
                        name: 'D***5',
                        member: '白金会员',
                        joinTime: 885,
                        sign: '🍄',
                        comment: '控油效果可以，但是颜色太白了，感觉拍在脸上有一层白粉，我是油性皮肤',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1114264635-1504491684-9984_270_270.jpg',
                        ],
                        type: '01 柔情紫/5g',
                        buyTime: '2017-07-25'
                    },

                ],
            },
            {
                id: "3",
                title: '法国•圣罗兰黑管镜面唇釉5.5ml',
                type: 'jumei_deal',
                imgs: [
                    'http://mp5.jmstatic.com/product/003/059/3059407_std/3059407_1000_1000.jpg?v=1484041518&imageView2/2/w/800/q/90',
                ],
                cartImg: 'http://mp5.jmstatic.com/product/003/059/3059407_std/3059407_1000_1000.jpg?v=1484041518&imageView2/2/w/800/q/90',
                nowPrice: 259,
                oldPrice: 269,
                inventory: 888,
                discount: 9,
                buyNum: 233,
                types: ['408', '403', '401', '409', '404', '402', '416', ],
                isSelf: true,
                freight: '本商品满299或2件包邮',
                detail: '法国•圣罗兰 (YSL)黑管镜面唇釉5.5ml “黑管”引领 玻璃唇妆再升级！持续效果长达10个小时，黑色外观酷炫时尚，带尖头钻石型唇刷方便精细描绘。保湿感十足，上唇非常舒服，万年干燥星人的救星。日本、美国、香港等等各地代购一支难求！',
                imgDetail: [
                    'http://p12.jmstatic.com/html_editor/201707/10/1499653010390.jpg',
                    'http://p12.jmstatic.com/html_editor/201610/31/14778857703693.jpg',
                    'http://p12.jmstatic.com/html_editor/201610/31/14778857706901.jpg',
                    'http://p12.jmstatic.com/html_editor/201610/31/1477885771447.jpg',
                    'http://p12.jmstatic.com/html_editor/201610/31/14778857713686.jpg'
                ],
                comments: [{
                        id: "c1",
                        avatar: 'http://images2.jumei.com/user_avatar/100/206/100206826-64.jpg?1481512155',
                        name: '独***※',
                        member: '白金会员',
                        joinTime: 611,
                        sign: '买！买！买！',
                        comment: '双11抢的，真佩服我寄己。哈哈 每个人涂出来的效果不一样，但是都好看，特别美 有点豆沙红，特别适合秋冬的一个颜色，反正买了不会后悔',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1023354864-1480575205-5536_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1023354864-1480575193-8273_270_270.jpg',
                        ],
                        type: '407/5.5ml',
                        buyTime: '2016-11-11'
                    },
                    {
                        id: "c2",
                        avatar: 'http://images2.jumei.com/user_avatar/024/858/24858926-64.png?1461813612',
                        name: '顾***烟',
                        member: '白金会员',
                        joinTime: 1511,
                        sign: '',
                        comment: '东西超级棒。 犹犹豫豫最后买的402。 很适合自己还想买个正红色。 个人觉得很好涂哦。 不愧是圣罗兰上色度超级好。❤❤❤ 比较滋润。超级爱。',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1038928792-1483868726-3104_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1038928792-1483868718-6655_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1038928792-1483868711-6233_270_270.jpg',
                        ],
                        type: '402/5.5ml',
                        buyTime: '2017-01-14'
                    },
                ],
            },
            {
                id: "4",
                title: '法国•兰蔻Juicy Shaker 唇釉6.5ml',
                type: 'jumei_deal',
                imgs: [
                    'http://mp5.jmstatic.com/product/002/678/2678723_std/2678723_1000_1000.jpg?v=1494581694&imageView2/2/w/800/q/90',
                ],
                cartImg: 'http://mp5.jmstatic.com/product/002/678/2678723_std/2678723_1000_1000.jpg?v=1494581694&imageView2/2/w/800/q/90',
                nowPrice: 165,
                oldPrice: 240,
                inventory: 999,
                discount: 8,
                buyNum: 22,
                types: ['#352（狂想的蜜瓜）', '#252（摇滚香草）', '#102（Q弹杏子）', '#381(（芒果）'],
                isSelf: true,
                freight: '本商品满299或2件包邮',
                detail: '法国•兰蔻（Lancome)Juicy Shaker 空气轻垫唇釉，摇一摇，唇色更加多汁多彩！上妆晕染自然，触感Q弹柔软，有种被亲吻的感觉，轻盈油质，清爽不粘腻，嘭嘭水润！多种晕染方法让你的双唇更加百变。给你水当当的吻！',
                imgDetail: [
                    'http://p12.jmstatic.com/html_editor/201607/02/14674673644142.jpg',
                    'http://p12.jmstatic.com/html_editor/201607/02/14674673649305.jpg',
                    'http://p12.jmstatic.com/html_editor/201607/02/14674673652569.jpg',
                ],
                comments: [{
                        id: "c1",
                        avatar: 'http://images2.jumei.com/user_avatar/010/482/10482535-64.png?1464959905',
                        name: '3***5',
                        member: '白金会员',
                        joinTime: 1845,
                        sign: '',
                        comment: '兰蔻摇摇乐 气垫唇油，色号372，梅子传奇， 这个颜色是很显气色的粉色，很甜美。',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1044724436-1501606507-948_270_270.jpg',
                        ],
                        type: '#372（莓子传奇）/6.5ml',
                        buyTime: '2017-03-22'
                    },
                    {
                        id: "c2",
                        avatar: 'http://s0.jmstatic.com/templates/jumei/images/avatar/200_200.png?1488371144',
                        name: 'v***Q',
                        member: '黄金会员',
                        joinTime: 206,
                        sign: '',
                        comment: '还不错 就是涂上太油了 感觉冬天更适合 图片中我把油油的用纸压掉了 颜色很日常',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1079184481-1497439748-9699_270_270.jpg',
                        ],
                        type: ' #372（莓子传奇）/6.5ml',
                        buyTime: '2017-06-10'
                    },
                ],
            },
            {
                id: "5",
                title: '法国•克丽丝汀迪奥 (DIOR)魅惑润唇蜜001/魅惑润唇膏（焕彩）3.5g',
                type: 'jumei_deal',
                imgs: [
                    'http://mp5.jmstatic.com/product/001/341/1341680_std/1341680_1000_1000.jpg?v=1425959374&imageView2/2/w/800/q/90',
                    'http://mp5.jmstatic.com/product/001/341/1341680_std/1341680_1_1000_1000.jpg?v=1425959388&imageView2/2/w/800/q/90',
                    'http://mp4.jmstatic.com/product/001/341/1341680_std/1341680_3_1000_1000.jpg@base@tag=imgScale&w=800&q=90?v=1425959408'
                ],
                cartImg: 'http://mp5.jmstatic.com/product/001/341/1341680_std/1341680_1000_1000.jpg?v=1425959374&imageView2/2/w/800/q/90',
                nowPrice: 229,
                oldPrice: 300,
                inventory: 999,
                discount: 8,
                buyNum: 20,
                types: ['005', '004'],
                isSelf: true,
                freight: '本商品满299或2件包邮',
                detail: '即刻滋养、柔滑、丰盈你的双唇！每次涂抹瞬间，亦会让你对它不忍释手！克丽丝汀迪奥(DIOR)魅惑润唇蜜3.5g，让双唇得以长时间呵护，倍感软滑丰盈。要好看，要滋润，更要无伤害、不褪色。绽放迷人亮泽，无惧严酷环境与岁月流转！',
                imgDetail: [
                    'http://p12.jmstatic.com/html_editor/201707/06/14993094551748.jpg',
                    'http://p12.jmstatic.com/html_editor/201707/19/15004588614199.jpg',
                    'http://p12.jmstatic.com/html_editor/201707/19/15004589028919.jpg',
                    'http://p12.jmstatic.com/html_editor/201707/06/14993094577929.jpg',
                    'http://p12.jmstatic.com/html_editor/201707/06/14993094585400.jpg'
                ],
                comments: [{
                        id: "c1",
                        avatar: 'http://images2.jumei.com/user_avatar/100/058/100058989-64.jpg?1453120166',
                        name: '5***j',
                        member: '普通会员',
                        joinTime: 614,
                        sign: '',
                        comment: '这款和我家人一年前买的外包装不太一样，帽上的CD字样这款是两个字母连在一起的，家人那款是分开的，底部贴的标签这款是歪的标签上带嘴唇的图，家人那款是贴正的标签上没有嘴唇图。除了这两个不同，其他都一样，外包纸盒的印字，外壳的手感，膏体的味道都一样，用了一次很滋润，总体分析觉得应该正品吧。',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1038054053-1483488883-2335_270_270.jpg',
                        ],
                        type: '3.5g',
                        buyTime: '2016-12-31'
                    },
                    {
                        id: "c2",
                        avatar: 'http://images2.jumei.com/user_avatar/078/511/78511556-64.jpg?1467450329',
                        name: 's***Q',
                        member: '黄金会员',
                        joinTime: 206,
                        sign: '',
                        comment: '从来没有写过评价，一直以来梦寐以求的唇膏之一☝️，大爱啊，我一直在犹豫选择橘色还是粉色，粉色更梦幻，橘色更实用，不过适合自己的就是最好的，一波三折终于到手啦，心水的不得了，给大家看看这只新唇膏吧……喜欢的妹子不要犹豫了，剁手吧……',
                        imgs: [
                            'http://p12.jmstatic.com/comment/1004843307-1473410109-7921_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1004843307-1473410100-6992_270_270.jpg',
                            'http://p12.jmstatic.com/comment/1004843307-1473410089-3019_270_270.jpg'
                        ],
                        type: '3.5g',
                        buyTime: '2017-09-07'
                    },
                ],
            },

        ],


        goodsList: [

        ]
    }
})