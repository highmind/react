 // mock假数据模块
var Mock = require('mockjs');
var data = Mock.mock({
    "nav": [
        {
            "link": "index/tuijian",
            "name": "\u63a8\u8350",
            "id": 0
        },
        {
            "link": "index/baijia",
            "name": "\u767e\u5bb6",
            "id": 1
        },
        {
            "link": "index/bendi",
            "name": "\u672c\u5730",
            "id": 2
        },
        {
            "link": "baijia2",
            "name": "\u56fe\u7247",
            "id": 3
        },
        {
            "link": "baijia3",
            "name": "\u5a31\u4e50",
            "id": 4
        },
        {
            "link": "baijia4",
            "name": "\u793e\u4f1a",
            "id": 5
        },
        {
            "link": "baijia5",
            "name": "\u519b\u4e8b",
            "id": 6
        },
        {
            "link": "baijia6",
            "name": "\u4e92\u8054\u7f51",
            "id": 7
        },
        {
            "link": "baijia7",
            "name": "\u79d1\u6280",
            "id": 8
        },
        {
            "link": "baijia8",
            "name": "\u5973\u4eba",
            "id": 9
        },
        {
            "link": "baijia9",
            "name": "\u751f\u6d3b",
            "id": 10
        },
        {
            "link": "baijia10",
            "name": "\u56fd\u9645",
            "id": 11
        },
        {
            "link": "baijia11",
            "name": "\u56fd\u5185",
            "id": 12
        },
        {
            "link": "baijia12",
            "name": "\u4f53\u80b2",
            "id": 13
        },
        {
            "link": "baijia13",
            "name": "\u6c7d\u8f66",
            "id": 14
        },
        {
            "link": "baijia14",
            "name": "\u8d22\u7ecf",
            "id": 15
        },
        {
            "link": "baijia15",
            "name": "\u623f\u4ea7",
            "id": 16
        },
        {
            "link": "baijia16",
            "name": "\u65f6\u5c1a",
            "id": 17
        },
        {
            "link": "baijia17",
            "name": "\u6559\u80b2",
            "id": 18
        },
        {
            "link": "baijia18",
            "name": "\u4eba\u6587",
            "id": 19
        },
        {
            "link": "baijia19",
            "name": "\u65c5\u6e38",
            "id": 20
           
        }
    ],

    "newslist" : [
         {
          "url": "http://www.baidu.com1",
          "imgUrl" : "http://localhost:8080/images/news-img1.jpg",
          "time" : "12分钟前",
          "title" : "@csentence(10,20)"
        },
        {
          "url": "http://www.baidu.com2",
          "imgUrl" : "http://localhost:8080/images/news-img2.jpg",
          "time" : "20分钟前",
          "title" : "谣言止于智者，乐视芯片被断货消息不实！-百家2"
        },
        {
          "url": "http://www.baidu.com3",
          "imgUrl" : "http://localhost:8080/images/news-img3.jpg",
          "time" : "30分钟前",
          "title" : "乔纳森不再负责苹果产品设计？究竟是怎么了-百家3"
        },
        {
          "url": "http://www.baidu.com4",
          "imgUrl" : "http://localhost:8080/images/news-img4.jpg",
          "time" : "40分钟前",
          "title" : "OPPO和vivo如何延续增长？-百家4"
        },
        {
          "url": "http://www.baidu.com5",
          "imgUrl" : "http://localhost:8080/images/news-img5.jpg",
          "time" : "50分钟前",
          "title" : "亚欧14国ATM机被攻击自动吐钱，或与东欧黑客团体有关-百家5"
        },
        {
          "url": "http://www.baidu.com6",
          "imgUrl" : "http://localhost:8080/images/news-img6.jpg",
          "time" : "60分钟前",
          "title" : "卡巴斯基：黑五金融钓鱼攻击数量激增-百家6"
        }

    ]


})

exports.data = data