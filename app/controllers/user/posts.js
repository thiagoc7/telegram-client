import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    deletePost: function(post) {
      post.destroyRecord();
    }
  }
});
