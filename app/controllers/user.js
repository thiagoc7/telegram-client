import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: "application",
  userSession: Ember.computed.alias("controllers.application.userSession"),

  ownProfile: function () {
    return (this.get('model') === this.get('session.user'));
  }.property('model')
});
