import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    if (!this.get('session.isAuthenticated'))
    {
      this.transitionTo('account');
    }
  },

  model: function() {
    return this.store.find('post',
      {
        dashboard: true,
        skip: 0, // means what I already have
        limit: 10 // 10 each time
      });
  }
});
