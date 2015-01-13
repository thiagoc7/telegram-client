import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-wrapper'],
  inputIsFocused: false,

  inputText: '',
  selected: null,

  selectedIndex: function() {
    return this.get('content').indexOf(this.get('selected'));
  }.property('selected'),

  focusIn: function () {
    this.set('inputIsFocused', true);
  },

  formatedList: function () {
    return this.get('content').map(function(object) {
      return Ember.Object.create({
        object: object,
        active: false
      });
    });
  }.property('content.[]'),

  resultList: function () {
    var text = this.get('inputText');
    return this.get('formatedList').filter(function(item) {
      if (item.object.name.search(text) >= 0) { return true; }
    });
  }.property('formatedList.[]', 'inputText'),

  activeCreation: function () {
    var text = this.get('inputText');
    var result = this.get('content').filter(function(item) {
      if (item.name === text) { return true; }
    });
    return result.length === 0 && text !== '';
  }.property('content', 'inputText'),

  actions: {
    selectItem: function (item) {
      item.set('active', true); //testing
      this.set('selected', item.object);
      this.set('inputText', item.object.name);
      this.set('inputIsFocused', false);
    },

    createItem: function () {
      this.set('inputIsFocused', false);
    }
  },

  navigateOnKeyDown: function(event) {
    var handled = false;
    switch(event.keyCode) {
      case 27: //esc
        this.set('inputIsFocused', false);
        handled = true;
        break;

      case 38: //up-arrow
        handled = true;
        break;

      case 40: //down-arrow
        var index = this.get('selectedIndex') + 1;
        this.get('formatedList').objectAt(index).$().click();
        handled = true;
        break;

      case 13: //enter
        handled = true;
        break;
    }
    if(handled) {
      event.preventDefault();
    }
  }.on('keyDown')
});
