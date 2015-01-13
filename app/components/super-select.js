import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-wrapper'],
  inputIsFocused: false,

  inputText: '',
  selectedItem: null,
  activeItem: null,

  placeholder: 'select options',
  label: function () {
    if (this.get('selectedItem')) {
      return this.get('selectedItem.object.name');
    } else {
      return this.get('placeholder');
    }
  }.property('selectedItem'),

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
      this.setActiveItem(item);
      this.chooseActive();
    },

    createItem: function () {
      this.set('inputIsFocused', false);
    },

    openSelect: function () {
      this.set('inputIsFocused', true);
      this.$('.select-input').focus();
    }
  },

  selectedIndex: function() {
    var selectedItemIndex = this.get('resultList').indexOf(this.get('selectedItem'));
    var length = this.get('resultList').get('length');
    if (selectedItemIndex && length > 0 && selectedItemIndex <= length) {
      return selectedItemIndex;
    } else {
      return -1;
    }
  }.property('selectedItem', 'resultList.[]'),

  setActiveItem: function (item) {
    var originalList = this.get('formatedList');
    var cleanList = originalList.map(function(object) {
      return object.set('active', false);
    });
    this.set('formatedList', cleanList);
    item.set('active', true);
    this.set('activeItem', item);
  },

  chooseActive: function () {
    this.set('selectedItem', this.get('activeItem'));
    this.set('inputIsFocused', false);
  },

  navigateOnKeyDown: function(event) {
    switch(event.keyCode) {
      case 27: //esc
        this.set('inputIsFocused', false);
        break;

      case 38: //up-arrow
        var indexUp = this.get('selectedIndex') - 1;
        var itemUp = this.get('resultList').objectAt(indexUp);
        this.setActiveItem(itemUp);
        break;

      case 40: //down-arrow
        var indexDown = this.get('selectedIndex') + 1;
        var itemDown = this.get('resultList').objectAt(indexDown);
        this.setActiveItem(itemDown);
        break;

      case 13: //enter
        this.chooseActive();
        break;
    }
  }.on('keyDown')
});
