export function initialize(container, application) {
  /* http://emberjs.com/api/classes/Ember.Application.html#method_inject */
  application.inject('service:session', 'store', 'store:main');
  application.inject('route', 'session', 'service:session');
  application.inject('controller', 'session', 'service:session');
}

export default {
  name: 'session',
  initialize: initialize
};
