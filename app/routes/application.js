import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    repost: function(repost) {
      var post = this.store.createRecord('post', {
        author: this.get('session.user'),
        body: repost.get('body'),
        createdAt: new Date(),
        repostedFrom: repost
      });

      var controller = this;
      post.save().then(function () {
        // ???
      }, function(error) {
        controller.set('errors', error.responseText);
          //TODO implement here this action, and send error up
      });
    },

    deletePost: function(post) {
      post.destroyRecord();
    }
  }
});
