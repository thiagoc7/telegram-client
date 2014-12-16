import Ember from 'ember';

export default Ember.ObjectController.extend({
  name: '',
  username: '',
  email: '',
  password: '',

  actions: {
    signUp: function () {
      return false;
    },
    logIn: function () {
      return false;
    },
    resetPassword: function () {
      return false;
    }
  }

});
