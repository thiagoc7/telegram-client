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
    return this.store.find('post',
      {
        userId: 'th',
        page: params.page,
        size: params.size
      }
    );
  },

  //afterModel: function(params){
  //  var route = this;
  //  return this.store.find('post',
  //    {
  //      userId: 'th',
  //      page: params.page2,
  //      size: params.size2
  //    }
  //  ).then(function(result){
  //    route.set('test2', result);
  //  });
  //},

  afterModel: function(){
    var route = this;
    return this.store.find('post',
      {
        userId: 'th',
        page: 1,
        size: 4
      }
    ).then(function(result){
        route.set('test2', result);
      });
  },

  setupController: function(controller, model){
    controller.set('model', model);
    this.controllerFor('account/test2').set('model', this.get('test2'));
  }

});
