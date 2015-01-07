import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    close: function () {
      this.get('model').rollback();
      this.sendAction('close');
    },

    modalAction: function () {
      this.sendAction('modalAction', this.get('model'));
    }
  }
});
