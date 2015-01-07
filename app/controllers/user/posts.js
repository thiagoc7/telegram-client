import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: "application",
  userSession: Ember.computed.alias("controllers.application.userSession"),

  sortProperties: ['createdAt'],
  sortAscending: false,

  queryParams: ['dashboard', 'page', 'size'],
  dashboard: null,
  page: 0,
  size: 10,

  lastPage: function () {
    var length = this.get('model').content.length;
    if (length < this.get('size')) {
      return true;
    }
  }.property('model'),

  firstPage: function () {
    return this.get('page') === 0;
  }.property('page'),

  displayPage: function () {
    return this.get('page') + 1;
  }.property('page'),

  totalPages: function () {
    return Math.round(this.get('model.meta.total') / this.get('size'));
  }.property('model'),

  actions: {
    nextPage: function () {
      this.set('page', (this.get('page') + 1));
    },

    previousPage: function () {
      this.set('page', (this.get('page') - 1));
    }
  }
});
