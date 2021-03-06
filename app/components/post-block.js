import Ember from 'ember';

export default Ember.Component.extend({
  pushArray: 'dash',

  authorDisplay: function () {
    var post = this.get('post');
    var repost = this.get('post.repostedFrom');
    if (repost.get('content')) {
      return repost.get('author');
    } else {
      return post.get('author');
    }
  }.property('post.author', 'post.repostedFrom.author'),

  owned: function () {
    return (this.get('currentUser.id') === this.get('post.author.id'));
  }.property('currentUser', 'post.author'),

  actions: {
    toggleRepost: function() {
      this.toggleProperty('isReposting');
    },

    confirmRepost: function() {
      this.sendAction('repost', this.get('post'), this.get('pushArray'));
      this.toggleProperty('isReposting');
    },

    deletePost: function() {
      this.sendAction('deletePost', this.get('post'), this.get('pushArray'));
    },

    editPost: function () {
      this.modalService.active('modal-post-edit', this.get('post'));
    },

    showModal: function () {
      this.sendAction('showModal', 'dash/edit-post-modal', this.get('post'));
    }
  }
});
