import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-wrapper'],
  inputIsFocused: false,
  inputText: '',

  focusIn: function () {
    this.set('inputIsFocused', true);
  },

  resultList: function () {
    var text = this.get('inputText');
    return this.get('content').filter(function(item, index, self) {
      if (item.name.search(text) >= 0) { return true; }
    });
  }.property('content', 'inputText'),

  activeCreation: function () {
    var text = this.get('inputText');
    var result = this.get('content').filter(function(item, index, self) {
      if (item.name === text) { return true; }
    });
    return result.length === 0 && text !== '';
  }.property('content', 'inputText'),

  actions: {
    selectItem: function (item) {
      this.set('inputText', item.name);
      this.set('inputIsFocused', false);
    },

    createItem: function () {
      alert(this.get('inputText'));
      this.set('inputIsFocused', false);
    }
  }
});
