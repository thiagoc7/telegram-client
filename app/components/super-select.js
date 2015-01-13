import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-wrapper'],
  inputIsFocused: false,

  inputText: '',
  selected: null,

  focusIn: function () {
    this.set('inputIsFocused', true);
  },

  focusOut: function () {
    this.set('inputIsFocused', false);
  },

  click: function () {
    this.set('inputIsFocused', true);
  },

  placeholder: 'select options',
  label: function () {
    if (this.get('selected')) {
      return this.get('selected.name');
    } else {
      return this.get('placeholder');
    }
  }.property('selected'),

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
      this.setSelected(item);
      alert(this.get('selectedIndex'));
      this.set('inputIsFocused', false);
    },

    createItem: function () {
      this.set('inputIsFocused', false);
    }
  },

  selectedIndex: function() {
    return this.get('content').indexOf(this.get('selected'));
  }.property('selected'),

  selectedIndexFiltered: function() {
    return this.get('resultList').indexOf(this.get('selected'));
  }.property('selected'),

  clearList: function () {
    var originalList = this.get('formatedList');
    var cleanList = originalList.map(function(object) {
      return object.set('active', false);
    });
    this.set('formatedList', cleanList);
  },

  setSelected: function (item) {
    this.clearList();
    item.set('active', true); //testing
    this.set('selected', item.object);
    //this.set('inputText', item.object.name);
  },

  navigateOnKeyDown: function(event) {
    switch(event.keyCode) {
      case 27: //esc
        this.set('inputIsFocused', false);
        break;

      case 38: //up-arrow
        var index = this.get('selectedIndex') - 1;
        var item = this.get('resultList').objectAt(index);
        this.setSelected(item);
        break;

      case 40: //down-arrow
        var index = this.get('selectedIndex') + 1;
        var item = this.get('resultList').objectAt(index);
        this.setSelected(item);
        break;

      case 13: //enter
        break;
    }
  }.on('keyDown')
});
