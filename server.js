// http://qiita.com/shopetan/items/58a62a366aac4f5faa20

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// POST用
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();
router.use(function(req, res, next){
  console.log(req.url + " " + req.method);
  next();
});

// アクセステスト
router.get('/', function(req,res) {
  res.json({message: 'Successfully Posted a test message.'});
});

// ユーザー
function User(name){
    this.name = name;
    this.id = "";
}

router.route('/users')
  // ユーザー作成
  .post(function(req,res){
    // dummy
    res.json({message: 'name is ' + req.body.name});
  })
  // ユーザー取得
  .get(function(req,res){
    // fake
    var user = new User("foo");
    user.id = "aa";

    res.json(user);
  });

// ルーティング登録
app.use('/api', router);

// サーバー起動
app.listen(port);
console.log('listen on port' + port);
