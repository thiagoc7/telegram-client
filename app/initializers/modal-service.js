export function initialize(container, application) {
  application.inject('route', 'modalService', 'service:modal');
  application.inject('component', 'modalService', 'service:modal');
}

export default {
  name: 'modal-service',
  initialize: initialize
};
