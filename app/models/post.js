import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  repostedFrom: DS.belongsTo('post', {async: true})
});
