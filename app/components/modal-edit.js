import Ember from 'ember';

export default Ember.Component.extend({
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

  }.property('this')
});
