const express = require('express')
const app = express()
//跨域
const cors = require('cors');
app.use(cors());
//配置路径
const path=require('path')
const hostName='168.138.134.136'
const port='8888'
app.use(express.static(path.join(__dirname,'assets')))
// 首页数据
// 发送一个请求
app.get('/home/tabs',(req,res)=>{
    const tabs=['推荐','家居生活','服饰鞋包','美食酒水','个人清洁','母婴亲子','运动旅游','数码家电','严选全球']
    res.send(tabs)
})
app.get('/home/imgurls',(req,res)=>{
    const imgurls=[
        'https://yanxuan.nosdn.127.net/18b474fa3a071033fb80ceb6fcae7a2a.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/8596035a8c8d25cc1973e52314b46132.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/116bdf06468ddc8010805dbbb69c2937.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/af9ff29c047c0346faee9c5c48a4754d.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    ]
    res.send(imgurls)
})
app.get('/home/advs',(req,res)=>{
    const advs=[
        {
            url:'https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png',
            text:'网易自营品牌'
        },
        {
            url:'https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png',
            text:'30天无忧退货'
        },
        {
            url:'https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png',
            text:'48小时快速退款'
        }
    ]
    res.send(advs)
})
app.get('/home/goods_list',(req,res)=>{
    const goods_list=[
        {
            text:'新品首发',
            url:'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
            text:'家居生活',
            url:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png'
        },
        {
            text:'服饰鞋包',
            url:'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png'
        },
        {
            text:'美食酒水',
            url:'https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png'
        },
        {
            text:'个人清洁',
            url:'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png'
        },
        {
            text:'母婴亲子',
            url:'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png'
        },
        {
            text:'运动旅游',
            url:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png'
        },
        {
            text:'数码家电',
            url:'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png'
        },
        {
            text:'全球特色',
            url:'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png'
        },
        {
            text:'好货秒底',
            url:'https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif'
        }

    ]
    res.send(goods_list)
})
// 分类
app.get('/category/items',(req,res)=>{
    const items= [{ text: '周年庆专区'}, { text: '家居生活' }, { text: '服饰鞋包' }, { text: '美食酒水' }, { text: '个人清洁' }, { text: '母婴亲子' }, { text: '运动旅游' }, { text: '数码家电' }, { text: '严选全球' }]
    res.send(items)
})
app.get('/category/swipe_url',(req,res)=>{
    const swipe_url= [
        'https://yanxuan.nosdn.127.net/3b45dad117134fc9f451e64cc1092f4f.jpg?type=webp&imageView&quality=75&thumbnail=0x196',
        'https://yanxuan.nosdn.127.net/7d77fbd5a52833b0ccc86ac1483b4ce6.jpg?type=webp&imageView&quality=75&thumbnail=0x196',
        'https://yanxuan.nosdn.127.net/3066e60cfdd901ee76d0849bbd93dbf8.jpg?type=webp&imageView&quality=75&thumbnail=0x196',
        'https://yanxuan.nosdn.127.net/b92810ae6e9af60dd000cb8eebc612cf.jpg?type=webp&imageView&quality=75&thumbnail=0x196']
    res.send(swipe_url)
})
app.get('/category/categ_list',(req,res)=>{
    const categ_list= [
        {
            url:`http://${hostName}:${port}/Category/img/1.png`,
            text:'超级爆款'
        },{
            url:`http://${hostName}:${port}/Category/img/2.png`,
            text:'重磅新品'
        },{
            url:`http://${hostName}:${port}/Category/img/3.png`,
            text:'每满99减15'
        },{
            url:`http://${hostName}:${port}/Category/img/4.png`,
            text:'省钱卡'
        },{
            url:`http://${hostName}:${port}/Category/img/5.png`,
            text:'春夏服装'
        },{
            url:`http://${hostName}:${port}/Category/img/6.png`,
            text:'换季床品'
        },{
            url:`http://${hostName}:${port}/Category/img/7.png`,
            text:'超值囤货'
        },{
            url:`http://${hostName}:${port}/Category/img/8.png`,
            text:'防嗮出行'
        },{
            url:`http://${hostName}:${port}/Category/img/9.png`,
            text:'预售盛典'
        }
    ]
    res.send(categ_list)
})
app.get('/category/categ_lift',(req,res)=>{
    const categ_lift= [
        {
            url:`http://${hostName}:${port}/Category/homeLift/1.png`,
            text:'超级爆款'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/2.png`,
            text:'重磅新品'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/3.jpg`,
            text:'每满99减15'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/4.png`,
            text:'省钱卡'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/5.jpg`,
            text:'春夏服装'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/6.png`,
            text:'换季床品'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/7.png`,
            text:'超值囤货'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/8.jpg`,
            text:'防嗮出行'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/10.jpg`,
            text:'预售盛典'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/12.png`,
            text:'预售盛典'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/11.jpg`,
            text:'预售盛典'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/1.png`,
            text:'预售盛典'
        },{
            url:`http://${hostName}:${port}/Category/homeLift/6.png`,
            text:'预售盛典'
        }
    ]
    res.send(categ_lift)
})
// 值得买WorthBuy
app.get('/WorthBuy/goods_list1',(req,res)=>{
    const goods_list1=[
        {
            url:`http://${hostName}:${port}/WorthBuy/img/list1/1.png`,
            text1:'Pro会员',
            text2:'每周专享福利'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list1/2.png`,
            text1:'植物空间',
            text2:'家居绿植指南'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list1/3.gif`,
            text1:'员工精选',
            text2:'内部推荐好货'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list1/4.png`,
            text1:'每日穿搭',
            text2:'时尚买推荐'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list1/5.png`,
            text1:'特色系列',
            text2:'发现格条好货'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list1/6.png`,
            text1:'中国风云',
            text2:'记录中国'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list1/7.png`,
            text1:'HOME',
            text2:'实景拍摄'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list1/8.png`,
            text1:'工厂考察团',
            text2:'探访严选工厂'
        }

    ]
    res.send(goods_list1)
})
app.get('/WorthBuy/goods_list2',(req,res)=>{
    const goods_list2=[
        {
            url:`http://${hostName}:${port}/WorthBuy/img/list2/1.gif`,
            text1:'Pro会员',
            text2:'每周专享福利'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list2/2.png`,
            text1:'植物空间',
            text2:'家居绿植指南'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list2/3.png`,
            text1:'员工精选',
            text2:'内部推荐好货'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list2/4.png`,
            text1:'每日穿搭',
            text2:'时尚买推荐'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list2/5.png`,
            text1:'特色系列',
            text2:'发现格条好货'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list2/6.png`,
            text1:'中国风云',
            text2:'记录中国'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list2/7.png`,
            text1:'HOME',
            text2:'实景拍摄'
        },{
            url:`http://${hostName}:${port}/WorthBuy/img/list2/8.png`,
            text1:'工厂考察团',
            text2:'探访严选工厂'
        }

    ]
    res.send(goods_list2)
})
app.get('/WorthBuy/con_list_img',(req,res)=>{
    const con_list_img=[
        {
            url:`http://${hostName}:${port}/WorthBuy/conListimg/1.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author:{
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name:'好物大赏',
                views:126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/2.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1: `http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name: '好物大赏',
                views: 126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/3.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name: '好物大赏',
                views: 126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/4.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name: '选妹',
                views: 126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/6.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/2.jpg`,
                name: '好物大赏',
                views: 126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/5.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name: '选妹',
                views: 126
            }
        }
    ]
    res.send(con_list_img)
})
app.get('/WorthBuy/con_list_img2',(req,res)=>{
    const con_list_img2=[
        {
            url:`http://${hostName}:${port}/WorthBuy/conListimg/2.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author:{
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name:'好物大赏',
                views:126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/1.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1: `http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name: '好物大赏',
                views: 126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/2.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name: '好物大赏',
                views: 126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/3.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/2.jpg`,
                name: '选妹',
                views: 126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/6.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/2.jpg`,
                name: '好物大赏',
                views: 126
            }
        },{
            url:`http://${hostName}:${port}/WorthBuy/conListimg/1.jpg`,
            discribe:'不超预算的百元级送礼请单，请速收',
            author: {
                url1:`http://${hostName}:${port}/WorthBuy/conListimg/profile/1.png`,
                name: '选妹',
                views: 126
            }
        }
    ]
    res.send(con_list_img2)
})
//全部商品
app.get('/SerachResult/all_foot_list',(req,res)=>{
    const all_foot_list=[
        {
            title:'轻弹云朵男女居家拖鞋',
            url:`http://${hostName}:${port}/SerachResult/allimg/1.png`,
            price:25
        },{
            title:'简约清爽速干居家拖鞋',
            url:`http://${hostName}:${port}/SerachResult/allimg/2.png`,
            price:12
        },
        {
            title:'三顿半，冷热萃超即溶精品咖啡 24颗',
            url:`http://${hostName}:${port}/SerachResult/allimg/coof-3.png`,
            price:21
        },
        {
            title:'口感犹如现磨 德国优质冻干速溶黑咖啡50克',
            url:`http://${hostName}:${port}/SerachResult/allimg/coof-4.png`,
            price:175
        },
        {
            title:'舒适按摩居家拖鞋',
            url:`http://${hostName}:${port}/SerachResult/allimg/3.png`,
            price:34
        },
        {
            title:'室外两穿型加厚软底拖鞋',
            url:`http://${hostName}:${port}/SerachResult/allimg/4.png`,
            price:19
        },
        {
            title:'轻弹云朵男女居家拖鞋',
            url:`http://${hostName}:${port}/SerachResult/allimg/1.png`,
            price:25
        },{
            title:'简约清爽速干居家拖鞋',
            url:`http://${hostName}:${port}/SerachResult/allimg/2.png`,
            price:12
        },
        {
            title:'舒适按摩居2222222222家拖鞋',
            url:`http://${hostName}:${port}/SerachResult/allimg/3.png`,
            price:34
        },
        {
            title:'室外两穿型加厚软底拖鞋',
            url:`http://${hostName}:${port}/SerachResult/allimg/4.png`,
            price:19
        },
        {
            title:'0脂0糖，日本制胶囊浓缩咖啡液 12粒/盒',
            url:`http://${hostName}:${port}/SerachResult/allimg/coof-1.png`,
            price:25.9
        },
        {
            title:'阿拉比卡豆，充氮保鲜，意式挂耳咖啡 10袋',
            url:`http://${hostName}:${port}/SerachResult/allimg/coof-2.png`,
            price:39
        },
        {
            title:'三顿半，冷热萃超即溶精品咖啡 24颗',
            url:`http://${hostName}:${port}/SerachResult/allimg/coof-3.png`,
            price:21
        },
        {
            title:'口感犹如现磨 德国优质冻干速溶黑咖啡50克',
            url:`http://${hostName}:${port}/SerachResult/allimg/coof-4.png`,
            price:175
        }
    ]
    res.send(all_foot_list)
})
// 监听端口
app.listen(8888,()=>{
    console.log('8888端口监听中')
})
