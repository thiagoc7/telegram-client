import DS from 'ember-data';

var User = DS.Model.extend({
  //name: DS.attr(),
  username: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  followedBy: DS.attr(),
  follows: DS.attr()
});

User.reopenClass({
  FIXTURES: [
    { id: 1,
      username: 'user1',
      email: 'user1@email.com',
      password: 'user1'
    },
    { id: 2,
      username: 'user2',
      email: 'user2@email.com',
      password: 'user2'
    }
  ]
});

export default User;
