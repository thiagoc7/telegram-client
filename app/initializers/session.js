import Ember from 'ember';

export function initialize(container, application) {
  /* Here we define the class for the session object. */
  var Session = Ember.Object.extend({
    user: null,

    isAuthenticated: function(){
      return this.get('user') != null;
    }.property('user')
  });

  /* http://emberjs.com/api/classes/Ember.Application.html#method_register */
  application.register('session:main', Session);

  /* http://emberjs.com/api/classes/Ember.Application.html#method_inject */
  application.inject('route', 'session', 'session:main');
  application.inject('controller', 'session', 'session:main');
}

export default {
  name: 'session',
  initialize: initialize
};
