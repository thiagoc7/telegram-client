import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serialize: function(record, options) {
    var data = this._super(record, options);

    data.meta = {
      dashboard: record.get('dashboard')
    };

    return data;
  }
});
