import Ember from 'ember';

export default Ember.Object.extend({
  isShowing: false,
  modal: null,
  model: null,

  active: function(modal, model) {
    this.set('modal', modal);
    if (model) { this.set('model', model); }
    this.set('isShowing', true);
  }
});
