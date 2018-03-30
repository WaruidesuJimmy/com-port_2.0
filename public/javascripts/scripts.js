window.onload = function () {
   var socket = io.connect('http://localhost/');
   socket.on('msg', function (data) {
      console.log(data.msg);
      socket.emit('echo');
   });
};