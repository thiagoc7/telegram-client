import Ember from 'ember';

export default Ember.Component.extend({
  authorDisplay: function () {
    if (this.get('post.repostedFrom.content') === null) {
      return this.get('post');
    } else {
      debugger;
      return this.get('post.respostedFrom.content');
    }
  }.property('post.respostedFrom'),

  actions: {
    toggleRepost: function() {
      this.toggleProperty('isReposting');
    },

    confirmRepost: function() {
      this.sendAction('action', this.get('post'));
      this.toggleProperty('isReposting');
    },

    deletePost: function() {
      this.sendAction('deletePost', this.get('post'));
    }
  }
});
