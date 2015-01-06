import Ember from 'ember';

export default Ember.Object.extend({
  isShowing: false,

  toogle: function() {
    this.toggleProperty('isShowing');
  }
});
