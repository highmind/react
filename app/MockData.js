import Mock from 'mockjs';
let ip = '192.168.0.178';
// 详情页mock数据
Mock.mock('http://mockdata/get/detail', 'get', {
  "data" : {
    "title" : "@csentence(16,24)",
    "author": "@cword(4)",
    "imgUrls" : [
        { "url" : "http://"+ ip +":8080/images/detail-img1.jpg"},
        { "url" : "http://"+ ip +":8080/images/detail-img2.jpg"},
        { "url" : "http://"+ ip +":8080/images/detail-img3.jpg"}
    ],
    "time" : "@time",
    "content" : "<p>@cparagraph(8)</p><p>@cparagraph(8)</p><p>@cparagraph(8)</p><p>@cparagraph(8)</p>" 
  }  

})

//导航mock数据
Mock.mock('http://mockdata/get/nav', 'get', {
  "data" : [
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
            "link": "index/baijia2",
            "name": "\u56fe\u7247",
            "id": 3
        },
        {
            "link": "index/baijia3",
            "name": "\u5a31\u4e50",
            "id": 4
        },
        {
            "link": "index/baijia4",
            "name": "\u793e\u4f1a",
            "id": 5
        },
        {
            "link": "index/baijia5",
            "name": "\u519b\u4e8b",
            "id": 6
        },
        {
            "link": "index/baijia6",
            "name": "\u4e92\u8054\u7f51",
            "id": 7
        },
        {
            "link": "index/baijia7",
            "name": "\u79d1\u6280",
            "id": 8
        },
        {
            "link": "index/baijia8",
            "name": "\u5973\u4eba",
            "id": 9
        },
        {
            "link": "index/baijia9",
            "name": "\u751f\u6d3b",
            "id": 10
        },
        {
            "link": "index/baijia10",
            "name": "\u56fd\u9645",
            "id": 11
        },
        {
            "link": "index/baijia11",
            "name": "\u56fd\u5185",
            "id": 12
        },
        {
            "link": "index/baijia12",
            "name": "\u4f53\u80b2",
            "id": 13
        },
        {
            "link": "index/baijia13",
            "name": "\u6c7d\u8f66",
            "id": 14
        },
        {
            "link": "index/baijia14",
            "name": "\u8d22\u7ecf",
            "id": 15
        },
        {
            "link": "index/baijia15",
            "name": "\u623f\u4ea7",
            "id": 16
        },
        {
            "link": "index/baijia16",
            "name": "\u65f6\u5c1a",
            "id": 17
        },
        {
            "link": "index/baijia17",
            "name": "\u6559\u80b2",
            "id": 18
        },
        {
            "link": "index/baijia18",
            "name": "\u4eba\u6587",
            "id": 19
        },
        {
            "link": "index/baijia19",
            "name": "\u65c5\u6e38",
            "id": 20
        }
    ]


})

//新闻列表mock数据
Mock.mock('http://mockdata/get/newslist', 'get', {
    "data" : [
        {
          "url": "#/detail/01",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img1.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(16,24)"
        },
        {
          "url": "#/detail/02",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img2.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/03",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img3.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/04",
          //"imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img4.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/05",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img5.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/06",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img6.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/07",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img1.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/08",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img2.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/09",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://"+ ip +":8080/images/news-img3.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        }



    ]

})

// 设置数据延迟时间，模拟loading
Mock.setup({
    timeout: '0'
})
