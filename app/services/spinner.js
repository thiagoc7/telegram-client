import Ember from 'ember';

export default Ember.Object.extend({
  loading: false,

  startLoading: function () {
    this.set('loading', true);
  },

  finishLoading: function () {
    var service = this;
    Ember.run.later(function(){
      service.set('loading', false);
    }, 1000);
  }
});
