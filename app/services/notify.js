import Ember from 'ember';

export default Ember.Object.extend({
  typeClass: null,
  message: null,
  timeout: 3000,
  show: false,

  resetNotify: function() {
    var service = this;
    Ember.run.later(function(){
      service.set('typeClass', null);
      service.set('message', null);
      service.set('show', false);
    }, this.get('timeout'));
  }.observes('show'),

  warning: function(message) {
    this.set('typeClass', 'notify-error');
    this.set('message', message);
    this.set('show', true);
  },

  success: function(message) {
    this.set('typeClass', 'notify-msn');
    this.set('message', message);
    this.set('show', true);
  }
});
