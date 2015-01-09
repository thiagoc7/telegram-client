import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: "application",
  userSession: Ember.computed.alias("controllers.application.userSession"),

  sortProperties: ['createdAt'],
  sortAscending: false,

  body: '',
  characters: function() {
    var lenght = this.get('body').length;
    return (140 - lenght);
  }.property('body'),

  hasMore: function() {
    var total = this.get('model.meta.total');
    var currentLength = this.get('model.length');
    return total > currentLength;
  }.property('model.meta.total', 'model.[]'),

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
      post.save().then(function (data) {
        controller.notify.success('Saved!');
        controller.get('model').pushObject(data);
        controller.set('body', '');
      }, function (error) {
        controller.notify.warning(error.responseText);
      });
    },

    fetchMore: function(callback) {
      var promise = this.store.find('post',
        {
          dashboard: true,
          skip: this.get('model.length'),
          limit: 6
        });
      callback(promise);
    }
  }
});
