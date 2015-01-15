import Ember from 'ember';

export default Ember.Component.extend({
  close: 'removeModal',

  show: function() {
    this.$('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('close');
    }.bind(this));
  }.on('didInsertElement'),

  willDestroyElement: function () {
    this.$('.modal').modal('hide');
  }
});
