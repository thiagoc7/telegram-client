import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    close: function() {
      this.get('model').rollback();
      return this.send('closeModal');
    },

    updateUser: function () {
      this.get('model').save();
      return this.send('closeModal');
    }
  }
});
