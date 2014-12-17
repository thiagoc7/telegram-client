import Ember from 'ember';

export default Ember.Controller.extend({
  username: '',
  password: '',

  errors: 'no erros',

  actions: {
    logIn: function () {
      var user = this.store.createRecord('user', {
        id: this.get('username'),
        password: this.get('password'),
        operation: 'login'
      });
      var controller = this;
      user.save().then(function () {
        controller.transitionToRoute('user.dash', user);
      });
      this.set('session.user', user);
    }
  }
});
