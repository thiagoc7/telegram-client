import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['spinner-container'],
  loading: Ember.computed.alias('spinnerService.loading')
});
