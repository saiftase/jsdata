'use strict';
app.factory('Post', function(DS, $state) {
  var Post = DS.defineResource({
    name: 'posts', 
    relations: {
      belongsTo: {
        users: {
        // tell js-data that the author field on a post stores the primary key of a user resource
          localKey: 'author', 
          // tell js-data to load the user object that has the primary key indicated by the localKey into a field called _author
          localField: '_author'
        }
      }
    }, 
    methods: {
      go: function(){
        $state.go('post', {
          postId: this._id, 
          authorId: this.author
        })
      }
    }
  })

  return Post; 
}).run(function (Post) {});
// If you're wondering about what this .run function does, 
// look it up in the docs: https://docs.angularjs.org/guide/module
