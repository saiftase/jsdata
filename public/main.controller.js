'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function(User){
				return User.findAll();
			},
			posts: function(Post, users){
				return Post.findAll();
			}
		}
	})
})

//Inject post object and use getAll method to synchronously retrieve posts cached in memory.
app.controller('MainController', function ($scope, posts) {
  $scope.allPosts = posts;
  console.log('posts: ', posts);
});
