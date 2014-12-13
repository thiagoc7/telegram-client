import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:account/create', 'AccountCreateRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});
