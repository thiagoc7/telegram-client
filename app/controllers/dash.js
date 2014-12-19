import Ember from 'ember';

export default Ember.ArrayController.extend({
  userSession: function() {
    return this.get('session');
  }.property('session'),

  body: '',
  erros: '',
  characters: function() {
    var lenght = this.get('body').length;
    return (140 - lenght);
  }.property('body'),

  actions: {
    savePost: function () {
      if (this.get('characters') === 140) { return false; }
      var post = this.store.createRecord('post', {
        author: this.get('userSession.user'),
        body: this.get('body'),
        createdAt: new Date()
      });

      var controller = this;
      post.save().then(function () {
        controller.set('body', '');
      }, function(error) {
        controller.set('errors', error.responseText);
      });
    },

    repost: function(repost) {
      var post = this.store.createRecord('post', {
        author: this.get('userSession.user'),
        body: repost.get('body'),
        createdAt: new Date(),
        repostedFrom: repost
      });

      var controller = this;
      post.save().then(function () {
        // ???
      }, function(error) {
        controller.set('errors', error.responseText);
      });
    },

    deletePost: function(post) {
      post.destroyRecord();
    }
  }

});
