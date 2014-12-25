import Ember from 'ember';

export default Ember.Route.extend({
  //queryParams: {
  //  dashboard: {
  //    refreshModel: true
  //  }
  //},

  model: function() {
    return this.store.find('post');
  }
});
