import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  errors: 'no erros',

  actions: {
    resetPassword: function () {
      this.transitionToRoute('account.check');
    }
  }
});
