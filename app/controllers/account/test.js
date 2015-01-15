import Ember from 'ember';

export default Ember.ObjectController.extend({
  queryParams: ['page', 'size', 'page2', 'size2'],
  page: 0,
  size: 4,
  page2: 1,
  size2: 3,

  actions: {
    nextPage: function () {
      this.set('page', (this.get('page') + 1));
    },

    nextPage2: function () {
      this.set('page2', (this.get('page2') + 1));
    }
  }

});
