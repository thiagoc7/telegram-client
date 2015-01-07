import Ember from 'ember';

export default Ember.Object.extend({
  user: null,
  logIn: function () {
    var user = this.store.createRecord('user', {
      id: 'th',
      password: 'th',
      operation: 'login'
    });

    user.save();
    this.set('user', user);
  }.on('init'),

  isAuthenticated: function(){
    return this.get('user') != null;
  }.property('user')
});
