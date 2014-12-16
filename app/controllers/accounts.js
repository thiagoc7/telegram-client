import Ember from 'ember';
import store from 'ember-data';

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
      var user = store.createRecord({
        username: this.get('username'),
        password: this.get('password'),
        operation: 'login'
      });

      user.save().then(function(user) {
        // Your user was saved. You can now redirect to the dashboard.
      }, function(error) {
        // Handle error
      });

    },

    resetPassword: function () {
      return false;
    }
  }

});
