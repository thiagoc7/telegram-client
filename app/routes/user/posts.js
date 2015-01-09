import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.store.find('post',
      {
        userId: this.modelFor('user').get('id'),
        page: params.page,
        size: params.size
      }
    );
  }
});
