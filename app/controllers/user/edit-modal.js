import Ember from 'ember';

export default Ember.Controller.extend({
  avatarList: function () {
    return [
      {
        name: 'blue',
        url: 'images/avatar-blue.png'
      },
      {
        name: 'green',
        url: 'images/avatar-green.png'
      },
      {
        name: 'orange',
        url: 'images/avatar-orange.png'
      },
      {
        name: 'turquoise',
        url: 'images/avatar-turquoise.png'
      },
      {
        name: 'yellow',
        url: 'images/avatar-yellow.png'
      }
    ];
  }.property('this'),

  actions: {
    editAccount: function () {
      var controller = this;
      var model = this.get('model');
      model.save().then(function () {
        controller.notify.success('Edited!');
      }, function (error) {
        controller.notify.warning(error.responseText);
      });
      this.send('removeModal');
    },

    closeUserModal: function () {
      this.get('model').rollback();
      this.send('removeModal');
    }
  }
});
