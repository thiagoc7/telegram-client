import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['notify'],
  notIfy: Ember.computed.alias('notify'),

  resetNotify: function () {
    var component = this;
    Ember.run.later(function(){
      component.notify.resetNotify();
    }, 2000);
  }.observes('notIfy').on('init')
});
