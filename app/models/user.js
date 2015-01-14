import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  avatar: DS.attr('string'),
  mood: DS.belongsTo('mood', {async: true}),
  followed: DS.attr('boolean')
});
