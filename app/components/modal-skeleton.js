import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: Ember.computed.alias('modalService.isShowing')
});
