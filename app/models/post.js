import DS from 'ember-data';

var Post = DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  body: DS.attr(),
  createdAt: DS.attr(),
  deleted: DS.attr('boolean'),
  repostedBy: DS.attr()
});

Post.reopenClass({
  FIXTURES: [
    { id: 1,
      author: 1,
      body: 'Body A',
      createdAt: new Date(2014, 1, 1),
      deleted: false
    },
    { id: 2,
      author: 2,
      body: 'Body B',
      createdAt: new Date(2014, 1, 1),
      deleted: false
    }
  ]
});

export default Post;
