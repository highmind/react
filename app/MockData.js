import Mock from 'mockjs';
// 详情页mock数据
Mock.mock('http://mockdata/get/detail', 'get', {
  "data" : {
    "title" : "@csentence(16,24)",
    "author": "@cword(4)",
    "imgUrls" : [
        { "url" : "http://localhost:8080/images/detail-img1.jpg"},
        { "url" : "http://localhost:8080/images/detail-img2.jpg"},
        { "url" : "http://localhost:8080/images/detail-img3.jpg"}
    ],
    "time" : "@time",
    "content" : "<p>@cparagraph(8)</p><p>@cparagraph(8)</p><p>@cparagraph(8)</p><p>@cparagraph(8)</p>" 
  }  

})

//新闻列表mock数据
Mock.mock('http://mockdata/get/newslist', 'get', {
    "data" : [
        {
          "url": "#/detail/01",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img1.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(16,24)"
        },
        {
          "url": "#/detail/02",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img2.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/03",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img3.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/04",
          //"imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img4.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/05",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img5.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/06",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img6.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/07",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img1.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/08",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img2.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        },
        {
          "url": "#/detail/09",
          // "imgUrl" : "@image(216x148,@color,#FFF,@word)",
          "imgUrl" : "http://localhost:8080/images/news-img3.jpg",
          "time" : "@natural(10,60)" + "分钟前",
          "title" : "@csentence(20,24)"
        }



    ]

})

// 设置数据延迟时间，模拟loading
Mock.setup({
    timeout: '0'
})
