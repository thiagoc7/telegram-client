import Ember from 'ember';

export default Ember.Component.extend({
  reposted: false, //todo bind it

  actions: {
    toggleRepost: function() {
      this.toggleProperty('isReposting');
    },

    confirmRepost: function() {
      // TODO repost stuff
      this.toggleProperty('isReposting');
    }
  }
});
