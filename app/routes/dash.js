import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post',
      {
        dashboard: true,
        skip: 0, // means what I already have
        limit: 10 // 10 each time
      });
  }
});
