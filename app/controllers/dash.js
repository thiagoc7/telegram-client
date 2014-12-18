import Ember from 'ember';

export default Ember.ObjectController.extend({
  userSession: function() {
    return this.get('session');
  }.property('session')

});
