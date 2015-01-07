import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: "application",
  userSession: Ember.computed.alias("controllers.application.userSession"),

  limit: 6,
  skip: 6,
  hasMore: true,

  sortProperties: ['createdAt'],
  sortAscending: false,

  body: '',
  characters: function() {
    var lenght = this.get('body').length;
    return (140 - lenght);
  }.property('body'),

  fetchMoreItems: function () {
    return this.store.find('post',
      {
        dashboard: true,
        skip: this.get('skip'),
        limit: this.get('limit')
      });
  },

  internalCallback: function (promise) {
    var controller = this;
    promise.then(function (data) {
      if(data.content.length > 0){
        controller.set('skip', (controller.get('skip') + controller.get('limit')));
      }else{
        controller.set('hasMore', false);
      }
    }, function () {
      controller.set('hasMore', false);
    });
  },

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
        controller.notify.success('Saved!');
        controller.set('body', '');
      }, function (error) {
        controller.notify.warning(error.responseText);
      });
    },

    fetchMore: function(callback) {
      var promise = this.fetchMoreItems();
      callback(promise);
      this.internalCallback(promise);
    }
  }
});
