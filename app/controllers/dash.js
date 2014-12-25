import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: "application",
  userSession: Ember.computed.alias("controllers.application.userSession"),

  //queryParams: ['dashboard'],
  //dashboard: true,

  sortProperties: ['createdAt'],
  sortAscending: false,

  body: '',
  characters: function() {
    var lenght = this.get('body').length;
    return (140 - lenght);
  }.property('body'),

  actions: {
    savePost: function () {
      if (this.get('characters') === 140) {
        return false;
      }
      var post = this.store.createRecord('post', {
        author: this.get('userSession.user'),
        body: this.get('body'),
        createdAt: new Date()
      });

      var controller = this;
      post.save().then(function () {
        controller.set('body', '');
      }, function (error) {
        controller.set('errors', error.responseText);
        // TODO send a notify
      });
    }
  }
});
