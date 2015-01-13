import Ember from 'ember';

export default Ember.Component.extend({
  show: function() {
    this.$('.modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('removeModal');
    }.bind(this));
  }.on('didInsertElement')
});
