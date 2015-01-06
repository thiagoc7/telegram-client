import Ember from 'ember';

export default Ember.ObjectController.extend({
  ownProfile: function () {
    return (this.get('model') === this.get('session.user'));
  }.property('model')
});
