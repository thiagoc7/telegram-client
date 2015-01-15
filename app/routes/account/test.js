import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    page2: {
      refreshModel: true
    }
  },

  model: function(params) {
    var store = this.store;
    return Ember.RSVP.hash({
      posts: store.find('post',
        {
          userId: 'th',
          page: params.page,
          size: params.size
        }),
      posts2: store.find('post',
        {
          userId: 'th',
          page: params.page2,
          size: params.size2
        })
    });
  }
});
