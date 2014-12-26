import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['notify'],
  notIfy: Ember.computed.alias('notify')
});
