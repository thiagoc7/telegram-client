import Ember from 'ember';

export default Ember.Controller.extend({
  userSession: function() {
    return this.get('session');
  }.property('session')
});
