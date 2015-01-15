import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['page', 'size', 'page', 'size'],
  page: 0,
  size: 4,
  page2: 1,
  size2: 3
});
