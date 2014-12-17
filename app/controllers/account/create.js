import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  username: '',
  email: '',
  password: '',

  errors: 'no erros',

  actions: {
    signUp: function () {
      var user = this.store.createRecord('user', {
        name: this.get('name'),
        id: this.get('username'),
        email: this.get('email'),
        password: this.get('password'),
        operation: 'create'
      });
      var controller = this;
      user.save().then(function () {
        controller.transitionToRoute('user.dash', user);
      });
      this.set('session.user', user);
    }
  }
});
