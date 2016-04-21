'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			author: function(User, $stateParams){
				return User.find($stateParams.userId);
			}
		}
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $state, author, Post) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	$scope.newPost = {
		name: author.username
	}

	$scope.createNewPost = function(){
		var post = {
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			author: author._id //To-Do: Should disable editing of edit author field.
		}

		Post.create(post)
		.then(function(post){
			console.log("posed 2", post)
			$state.go('main');
		})
	}
	
}) 