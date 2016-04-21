'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			users: function(User){
				return User.filter();
			} 
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, $stateParams, Post, User, users) {

	//To-do: Implement caching
	Post.find($stateParams.postId)
	.then(function(post){
		$scope.post = post;
		User.find(post.author)
		.then(function(author){
			$scope.user = author;
		})
	})

	$scope.editMode = false;
	$scope.edit = function(body){
		if($scope.editMode){
			var newPost = {
				title: $scope.post.title,
				author: $scope.user
			};
		}

		$scope.editMode = !$scope.editMode;
	}
})