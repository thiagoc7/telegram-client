import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: Ember.computed.alias('modalService.isShowing'),
  modal: Ember.computed.alias('modalService.modal'),
  model: Ember.computed.alias('modalService.model'),

  actions: {
    close: function () {
      this.set('isShowing', false);
    },

    modalAction: function (model) {
      this.sendAction('modalAction', model);
    }
  }
});
