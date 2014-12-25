import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var userId = this.modelFor('user').get('id');
    return this.store.find('user', { following: userId });
  }
});
