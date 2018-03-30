const express = require('express');
const router = express.Router();
const SerialPort = require('serialport');
const request = require('request');


router.post('/:num', function(req, res) {
   let num = req.params.num;
   let name = req.body.name;
   console.log(num);

   const port = new SerialPort('COM7', {
      baudRate: 19200
   }, (err) =>{
      if(err)
         console.log(err);
   });

   setTimeout(function () {
      port.write((num- -1).toString());
   }, 3000);

   port.on('data', (data) => {
     
      let result = data.toString()[0]=='d' ? true: false;
      console.log(result)
      port.close((err) => { 
            console.log( 'port closed', err ) 
            });
      request({
            url: 'http://192.168.151.57/roboto/' + num,
            method: "POST",
            body: {
               result: result, 
               name: name
            },
            json: true
         },
         function (error, response, body) {
            res.send({result: body});
         });
         
   });
});

module.exports = router;