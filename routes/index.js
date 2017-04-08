var express = require('express'),
    router = express.Router(),
    redis = require("redis"),
    client = redis.createClient(6379,"laundryredis");

/* GET users listing. */
router.post('/ip', function(req, res, next) {
  	  var info=req.body;
  	   if(!!info.key && !!info.value){
  	  	client.set(info.key, info.value, redis.print); 	
       }
      res.json(info);
 });
router.get('/all', function(req, res, next) {
  	 var keysArr=[];
     client.keys('*', function (err, keys) {
     if (err) return console.log(err);
    
     for(var i = 0, len = keys.length; i < len; i++) {
       keysArr.push(keys[i]);
     }
     res.json(keysArr);
   });      
});

module.exports = router;
