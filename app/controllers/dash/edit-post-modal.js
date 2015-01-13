import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editPost: function () {
      var controller = this;
      this.get('model').save().then(function () {
        controller.notify.success('Edited!');
      }, function (error) {
        controller.notify.warning(error.responseText);
      });
      this.send('removeModal');
    },

    closeModal: function () {
      this.get('model').rollback();
      this.send('removeModal');
    }
  }
});
