var express = require('express');
var homeguardModel = require('../models/homeguard');
var WechatAPI = require('wechat-api');
var jsonfile = require('jsonfile');
var router = express.Router();
var aithinkerAPI = require('../lib/aithinker-api');


var appConfig = jsonfile.readFileSync('./config.json');

// wechat api
var api = new WechatAPI(appConfig.appid, appConfig.appsecret);

router.post('/', function(req, res, next) {
  console.log(req.body);
  var bundle = req.body;
  res.send('');
});

module.exports = router;
