import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.findQuery('post', params);
  }
});
