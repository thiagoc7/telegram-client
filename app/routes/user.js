import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.user_id);
  },

  actions: {
    follow: function (user) {
      user.set('followed', true);
      user.save();
    },

    unfollow: function (user) {
      user.set('followed', false);
      user.save();
    },

    toogleModal: function () {
      this.modalService.active('modal-user-edit', this.get('session.user'));
    }
  }
});
