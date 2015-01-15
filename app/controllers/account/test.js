import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'account/test2',
  test2: Ember.computed.alias("controllers.account/test2"),

  queryParams: ['page', 'size', 'page', 'size'],
  page: 0,
  size: 4,
  page2: 1,
  size2: 3

});
