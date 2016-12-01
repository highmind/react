//需要安装 express  mongoose  underscore moment

var express = require('express');
var path = require('path');

var router = express.Router();
// var mongoose = require('mongoose'); //加载mongoose模块
var bodyParser = require('body-parser'); //引入body-parser，用于接收数据等

var data = require('./mock-data/data');
// var _ = require('underscore');
// var Movie =require('./models/movie'); // 加载模型
var port = process.env.PORT || 3000; //端口号
var app = express();

//连接本地数据库
// mongoose.connect('mongodb://localhost/imooc');

//连接远程数据库
//格式 mongoose.connect('mongodb://user:pwd@localhost:port/db');

// mongoose.connect('mongodb://imooc:imooc@192.168.1.99:27000/imooc');

// app.set('views','views/pages');  //模版引擎目录
// app.set('view engine', 'jade'); //模版引擎

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer());
app.use(express.static(path.join(__dirname, 'public'))); //bower 静态资源路径

app.locals.moment = require('moment'); //格式化时间模块
app.listen(port);

console.log('server is listing port ' + port);

//设置跨域访问
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); //让options请求快速返回
    }
    else {
        next();
    }
});

app.get('/', function(req, res){
 console.log(res);
 res.setHeader('Content-Type', 'application/json;charset=utf-8');
 res.send('users');
   

})




app.get('/get/navdata', function(req, res){

 res.setHeader('Content-Type', 'application/json;charset=utf-8');
 res.send(JSON.stringify(data.data.nav, null, 4));
   

})

app.get('/get/newslist', function(req, res){

 res.setHeader('Content-Type', 'application/json;charset=utf-8');
 res.send(JSON.stringify(data.data.newslist, null, 4));
   

})



app.get('/movie/:id', function(req, res){
   
    var id = req.params.id;

});

//获取post数据

app.post('/admin/movie/new', function(req, res){
  // console.log(req.body);
  // var id = req.body.movie._id;
  // var movieObj = req.body.movie;
  // var _movie;
  
  // if(id !== 'undefined'){

  //   Movie.findById(id, function(err, movie){
  //       if(err){
  //           console.log(err);
  //       }

  //       _movie = _.extend(movie, movieObj);

  //       _movie.save(function(err, movie){

  //           if(err){
  //               console.log(err);
  //           }

  //           res.redirect('/movie/' + movie._id);

  //       });

  //   });

  // }
  // else{

  //   _movie = new Movie({
  //       doctor : movieObj.doctor,
  //       title  : movieObj.title,
  //       country :movieObj.country,
  //       language:movieObj.language,
  //       year:movieObj.year,
  //       poster:movieObj.poster,
  //       summary:movieObj.summary
  //   });

  //   _movie.save(function(err, movie){
  //       if(err){
  //               console.log(err);
  //           }
  //           res.redirect('/movie/' + movie._id);
  //   });

  // }


});




