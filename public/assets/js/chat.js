// make connection
var socket = io.connect('http://localhost:4000');
// query the dom

var message = document.getElementById('message');
var userName = document.getElementById('userName');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// emit events 

btn.addEventListener('click', function(){
	socket.emit('chat',{
		message:message.value,
		userName: userName.value
	})
});
message.addEventListener('keypress', function(){
	socket.emit('typing', userName.value);
})
// listen for events
socket.on('chat', function(data){
	feedback.innerHTML = "";
	output.innerHTML +='<p><strong>' + data.userName + ':</strong>' + data.message + '<p>';
});

socket.on('typing', function(data){
	feedback.innerHTML = '<p><em>'+ data+ " is typing a message...</em></p>";

});