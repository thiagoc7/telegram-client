import Ember from 'ember';

export default Ember.Component.extend({
  reposted: false, //todo bind it
  repostedBy: 'thiago', //todo find name of last repost author

  actions: {
    toggleRepost: function() {
      this.toggleProperty('isReposting');
    },

    confirmRepost: function() {
      this.sendAction('repost', this.get('model'));
      this.toggleProperty('isReposting');
    },

    deleteRepost: function() {
      this.sendAction('deletePost', this.get('model'));
    }
  }
});
