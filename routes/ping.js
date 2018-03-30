const express = require('express');
const router = express.Router();
const request = require('request');
const tcpp = require( 'tcp-ping' );
//const ping = require('ping');

router.post('/', function(req, res) {
    let name = req.body.name;
    tcpp.probe('192.168.88.100', 80, function(err, available) {
        console.log(available);
        res.send(available);
        /*request({
            url: 'http://192.168.151.57/net/2',
            method: "POST",
            body: {
               result: available, 
               name: name
            },
            json: true
         },
         function (error, response, body) {
            console.log(body)
            res.send({result: body});
         });*/
    });
     
   // tcpp.ping({ address: '192.168.151.56' }, function(err, data) {
     //   console.log(data);
    //});
//    let host = '192.168.88.10';
//     ping.sys.probe(host, isAlive => {
//        /*request({
//              url: '192.168.151.57/net/api',
//              method: "POST",
//              body: {
//                 ping: isAlive,
//                 name: req.body.name
//              },
//              json: true
//           },
//           function (error, response, body) {
//              console.log('error:', error);
//              console.log('body:', body);
//              res.set('Content-Type', 'text/html');
//              res.send({result: body});
//           });*/
//           let msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead'; 
//         console.log(msg); 
//     });
});

module.exports = router;