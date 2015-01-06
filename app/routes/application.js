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

      var route = this;
      post.save().then(function () {
        route.notify.success('Reposted!');
      }, function(error) {
        route.notify.warning(error.responseText);
      });
    },

    deletePost: function(post) {
      post.destroyRecord();
      this.notify.warning('Deleted');
    },

    // spinner
    loading: function() {
      var controller = this.controllerFor('application');
      controller.spinnerService.startLoading();
      this.router.one('didTransition', function() {
        controller.spinnerService.finishLoading();
      });
    }
  }
});
