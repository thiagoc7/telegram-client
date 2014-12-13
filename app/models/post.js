import DS from 'ember-data';

var Post = DS.Model.extend({
  user: DS.belongsTo('user'),
  body: DS.attr(),
  createdAt: DS.attr(),
  deleted: DS.boolean()
});

Post.reopenClass({
  FIXTURES: [
    { id: 1,
      user: [1],
      body: 'Body A',
      createdAt: Date(2014, 1, 1),
      deleted: false
    },
    { id: 2,
      user: [1],
      body: 'Body B',
      createdAt: Date(2014, 1, 1),
      deleted: false
    }
  ]
});

export default Post;
