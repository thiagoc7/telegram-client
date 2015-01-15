import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-wrapper'],
  inputIsFocused: false,

  inputText: '',
  activeCreate: true,
  activeItem: null,
  action: 'createOption',

  attributeBindings: ['value'],

  placeholder: 'select options',

  label: function () {
    if (this.get('value') !== null) {
      var value = this.get('value');
      return value.get('id') + '- ' + value.get('name');
    } else {
      return this.get('placeholder');
    }
  }.property('value', 'placeholder'),

  formatedList: function () {
    return this.get('content').map(function(object) {
      return Ember.Object.create({
        object: object,
        active: false
      });
    });
  }.property('content.[]'),

  resultList: function () {
    var component = this;
    var text = this.get('inputText');
    return this.get('formatedList').filter(function(item) {
      if (item.object.get(component.get('contentDisplay')).search(text) >= 0) { return true; }
    });
  }.property('formatedList.[]', 'inputText'),

  activeCreation: function () {
    if (!this.get('activeCreate')) { return; }
    var text = this.get('inputText');
    var result = this.get('content').filter(function(item) {
      if (item.name === text) { return true; }
    });
    if (result.length === 0 && text !== '') {
      var object = Ember.Object.create({
        name: '+ new: ' + text,
        text: text,
        newObject: true
      });
      this.get('resultList').pushObject(
        Ember.Object.create({
          object: object,
          active: false
        })
      );
    }
  }.observes('content', 'inputText'),

  actions: {
    selectItem: function (item) {
      this.setActiveItem(item);
      this.chooseActive();
    },

    openSelect: function () {
      this.set('inputIsFocused', true);
      Ember.run.scheduleOnce('afterRender', this, this.focusInput);
    }
  },

  focusInput: function () {
    this.$().find('.select-input').focus();
  },

  activeIndex: function() {
    var activeItemIndex = this.get('resultList').indexOf(this.get('activeItem'));
    var length = this.get('resultList').get('length');
    if (activeItemIndex !== -1 && length > 0 && activeItemIndex <= length) {
      return activeItemIndex;
    } else {
      return -1;
    }
  }.property('activeItem', 'resultList.[]'),

  setActiveItem: function (item) {
    this.get('formatedList').forEach(function(object) {
      object.set('active', false);
    });
    item.set('active', true);
    this.set('activeItem', item);
  },

  chooseActive: function () {
    if (this.get('activeItem').object.newObject) {
      this.sendAction('action',
        this.get('activeItem').object.text,
        Ember.run.bind(this, this.handleCreation));
    } else {
      this.set('value', this.get('activeItem.object'));
      this.set('inputIsFocused', false);
    }
  },

  handleCreation: function (promise) {
    var component = this;
    promise.then(function (data) {
      component.set('activeItem.object', data);
      component.chooseActive();
    }, function (error) {
      component.set('activeItem', null);
      component.notify.warning(error.responseText);
    });
  },

  navigateOnKeyDown: function(event) {
    function decreaseInQueue(val, min, max) {
      val -= 1;
      if (val < min) {
        val = max;
      }
      return val;
    }

    function increaseInQueue(val, min, max) {
      val += 1;
      if (val > max) {
        val = min;
      }
      return val;
    }

    switch(event.keyCode) {
      case 27: //esc
        this.set('inputIsFocused', false);
        return false;

      case 38: //up-arrow
        var indexUp = decreaseInQueue(this.get('activeIndex'), 0, this.get('resultList.length') - 1);
        var itemUp = this.get('resultList').objectAt(indexUp);
        this.setActiveItem(itemUp);
        return false;

      case 40: //down-arrow
        var indexDown = increaseInQueue(this.get('activeIndex'), 0, this.get('resultList.length') - 1);
        var itemDown = this.get('resultList').objectAt(indexDown);
        this.setActiveItem(itemDown);
        return false;

      case 13: //enter
        event.preventDefault();
        this.chooseActive();
        return false;
    }
  }.on('keyDown')
});
