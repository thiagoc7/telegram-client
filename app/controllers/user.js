import Ember from 'ember';

export default Ember.ObjectController.extend({
  userSession: function() {
    return this.get('session');
  }.property('session'),

  actions: {
    follow: function (user) {
      return user; //follow stuff
    },

    unfollow: function (user) {
      return user; //follow stuff
    }
  }

});
