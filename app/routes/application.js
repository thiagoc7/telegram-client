import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    repost: function(repost, pushArray) {
      var post = this.store.createRecord('post', {
        author: this.get('session.user'),
        body: repost.get('body'),
        createdAt: new Date(),
        repostedFrom: repost
      });

      var route = this;
      post.save().then(function (data) {
        route.modelFor(pushArray).pushObject(data);
        route.notify.success('Reposted!');
      }, function(error) {
        route.notify.warning(error.responseText);
      });
    },

    deletePost: function(post, pushArray) {
      var route = this;
      post.destroyRecord().then(function (data) {
        route.modelFor(pushArray).removeObject(data);
        route.notify.warning('Deleted');
      }, function(error) {
        route.notify.warning(error.responseText);
      });
    },

    // spinner
    loading: function() {
      var controller = this.controllerFor('application');
      controller.spinnerService.startLoading();
      this.router.one('didTransition', function() {
        controller.spinnerService.finishLoading();
      });
    },

    modalAction: function (model) {
      var route = this;
      model.save().then(function () {
        route.set('modalService.isShowing', false);
        route.notify.success('Saved!');
      }, function(error) {
        route.notify.warning(error.responseText);
      });
    }
  }
});
