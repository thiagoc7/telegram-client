import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.user_id);
  },

  actions: {
    follow: function (user) {
      return user; //follow stuff
    },

    unfollow: function (user) {
      return user; //follow stuff
    }
  }
});
