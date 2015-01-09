import Ember from 'ember';

export default Ember.ObjectController.extend({
  userSession: Ember.computed.alias("session"),

  ownProfile: function () {
    return (this.get('model') === this.get('session.user'));
  }.property('model'),

  actions: {
    showUserModal: function () {
      this.send('showModal', 'user/modal', this.get('session.user'));
    }
  }
});
