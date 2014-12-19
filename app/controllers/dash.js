import Ember from 'ember';

export default Ember.ArrayController.extend({
  userSession: function() {
    return this.get('session');
  }.property('session')

});
