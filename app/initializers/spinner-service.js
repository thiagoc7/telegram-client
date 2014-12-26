export function initialize(container, application) {
  application.inject('route', 'spinnerService', 'service:spinner');
  application.inject('controller', 'spinnerService', 'service:spinner');
  application.inject('component', 'spinnerService', 'service:spinner');
}

export default {
  name: 'spinner-service',
  initialize: initialize
};
