import Ember from 'ember';

export default Ember.Component.extend({
  userProfile: function() {
    return this.get('session.user');
  }.property('session'),

  userAuthenticated: function() {
    return this.get('session.isAuthenticated');
  }.property('session'),

  actions: {
    openModal: function (route, user) {
      return this.sendAction('action', route, user);
    }
  }

});
