import Ember from 'ember';
//import { moment } from 'ember-moment/computed';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'text',
  attributeBindings: ['value'],

  value: new Date(),
  momentFormat: 'DD/MM/YYYY',
  pickerFormat: 'dd/mm/yyyy',
  displayDate: function() {
    var date = this.get('value'),
      format = this.get('momentFormat');
    return moment(date).format(format);
  }.property('value', 'format'),

  didInsertElement: function () {
    this.$().val(this.get('displayDate'));
    var picker = this.$().datepicker(
      {
        format: this.get('pickerFormat'),
        autoclose: true
      }
    );

    var component = this;
    picker.on('changeDate', function(event) {
      Ember.run(function () {
        component.newDate(event);
      });
    });
  },

  willDestroyElement: function () {
    this.$().datepicker('remove');
  },

  // TODO check why can' user enter key
  newDate: function (e) {
    this.set('value', e.date);
    this.$().val(this.get('displayDate'));
  }
});
