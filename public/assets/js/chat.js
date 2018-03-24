// // make connection
// var socket = io.connect('http://localhost:4000');
// // query the dom

// var message = document.getElementById('message');
// var userName = document.getElementById('userName');
// var btn = document.getElementById('send');
// var output = document.getElementById('output');
// var feedback = document.getElementById('feedback');

// // emit events 

// btn.addEventListener('click', function(){
// 	socket.emit('chat',{
// 		message:message.value,
// 		userName: userName.value
// 	})
// });
// message.addEventListener('keypress', function(){
// 	socket.emit('typing', userName.value);
// })
// // listen for events
// socket.on('chat', function(data){
// 	feedback.innerHTML = "";
// 	output.innerHTML +='<p><strong>' + data.userName + ':</strong>' + data.message + '<p>';
// });

// socket.on('typing', function(data){
// 	feedback.innerHTML = '<p><em>'+ data+ " is typing a message...</em></p>";

// });

// Init jquery-comments 

$(function () {
	var saveComment = function (data) {

		// Convert pings to human readable format
		$(data.pings).each(function (index, id) {
			var user = usersArray.filter(function (user) { return user.id == id })[0];
			data.content = data.content.replace('@' + id, '@' + user.fullname);
		});

		return data;
	}
	$('#comments-container').comments({
		profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/user_profiles/user-icon.png',
		currentUserId: 1,
		roundProfilePictures: true,
		textareaRows: 1,
		enableAttachments: true,
		enableHashtags: true,
		enablePinging: true,
		getUsers: function (success, error) {
			setTimeout(function () {
				success(usersArray);
			}, 500);
		},
		getComments: function (success, error) {
			setTimeout(function () {
				success(commentsArray);
			}, 500);
		},
		postComment: function (data, success, error) {
			setTimeout(function () {
				success(saveComment(data));
			}, 500);
		},
		putComment: function (data, success, error) {
			setTimeout(function () {
				success(saveComment(data));
			}, 500);
		},
		deleteComment: function (data, success, error) {
			setTimeout(function () {
				success();
			}, 500);
		},
		upvoteComment: function (data, success, error) {
			setTimeout(function () {
				success(data);
			}, 500);
		},
		uploadAttachments: function (dataArray, success, error) {
			setTimeout(function () {
				success(dataArray);
			}, 500);
		},
	});
});