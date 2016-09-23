module.exports = function(io) {
  var clients = {},
  sockets;

  io.on('connection', function(socket) {
    sockets = socket;


    socket.on('joinRoom', function(room) {
      socket.join(room);
    });


    socket.on('leaveRoom', function(room) {
      socket.leave(room);
    })


    socket.on('setUserId', function(userId) {
      var temp = '' + userId;
      clients[temp] = socket.id;

    });

    socket.on('logout', function(userId) {
      var temp = '' + userId;

      for (var x = 0; x < clients.length - 1; x++) {
        if (clients[temp] == socket.id) {
          clients.splice(x, 1);
        }
      }

      socket.emit('logmeout');
    });

  });

};
