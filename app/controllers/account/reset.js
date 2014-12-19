import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  errors: '',

  actions: {
    resetPassword: function () {
      var user = this.store.createRecord('user', {
        email: this.get('email'),
        operation: 'email'
      });
      var controller = this;
      user.save().then(function () {
        controller.transitionToRoute('account.check');
      }, function(error) {
        controller.set('errors', error.responseText);
      });
    }
  }
});
