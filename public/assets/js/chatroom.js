// var express = require('express');
// var socket = require('socket.io');



// var app = express();
// var server = app.listen(4000, function(){
// 	console.log('listening to request on port 4000');
// });
// app.use(express.static('public'));

// var io = socket(server);

// io.on('connection', function(socket){
// 	console.log('made socket connection', socket.id);

// 	socket.on('chat', function(data){
// 		io.sockets.emit('chat', data);
// 	});

// 	socket.on('typing', function(data){
// 		socket.broadcast.emit('typing', data)
// 	});

// });

'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const CHAT = path.join(__dirname, 'chat.html');

const server = express()
  .use((req, res) => res.sendFile(CHAT) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);