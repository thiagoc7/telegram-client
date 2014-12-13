import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('account', function () {
    this.route('create', { path: "/" });
    this.route('login');
    this.route('check');
    this.route('reset');
  });

  this.resource('user', function () {
    this.route('posts');
    this.route('following');
    this.route('followers');
  });

  this.resource('dash', function () {
    this.route('new-post', { path: "/" });
    this.route('repost');
    this.route('reposted');
  });
});

export default Router;
