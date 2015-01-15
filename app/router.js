import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("account", {
    path: "/"
  }, function() {
    this.route("create", {
      path: "/"
    });

    this.route("login");
    this.route("check");
    this.route("reset");
    this.route("test");
  });

  this.resource("user", {
    path: "/user/:user_id"
  }, function() {
    this.route("posts", {
      path: "/"
    });

    this.route("following");
    this.route("followers");
  });

  this.route("dash");
});

export default Router;