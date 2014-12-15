import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  body: DS.attr(),
  createdAt: DS.attr(),
  deleted: DS.attr('boolean'),
  repostedBy: DS.attr()
});
