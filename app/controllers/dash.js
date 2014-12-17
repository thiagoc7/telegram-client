import Ember from 'ember';

export default Ember.ObjectController.extend({
  userProfile: function() {
    return this.get('session.user');
  }.property('session'),

  userAuthenticated: function() {
    return this.get('session.isAuthenticated');
  }.property('session')

});
