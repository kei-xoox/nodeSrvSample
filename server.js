
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// POST用
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();
router.use(function(req, res, next){
  console.log('Something is happening.');
  next();
});

// アクセステスト
router.get('/', function(req,res) {
  res.json({message: 'Successfully Posted a test message.'});
});

// ルーティング登録
app.use('/api', router);

// サーバー起動
app.listen(port);
console.log('listen on port' + port);
