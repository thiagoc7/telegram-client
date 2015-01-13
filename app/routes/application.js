import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    repost: function(repost, pushArray) {
      var repostedFrom = repost;
      var original = repost.get('repostedFrom');
      if (original) { repostedFrom = original; }

      var post = this.store.createRecord('post', {
        author: this.get('session.user'),
        body: repost.get('body'),
        createdAt: new Date(),
        repostedFrom: repostedFrom
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

    showModal: function(name, model) {
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },

    logOut: function () {
      this.set('session.user', null);
      this.transitionTo('application');
    }
  }
});
