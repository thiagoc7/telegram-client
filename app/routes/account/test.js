import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    page2: {
      refreshModel: true
    }
  },

  postsCache: null,
  postsPage: null,
  posts2Cache: null,
  posts2Page: null,

  model: function(params) {
    var postsPromise;
    var posts2Promise;

    if (this.get('postsPage') === params.page && this.get('postsCache') !== null) {
      var postsDeferred = Ember.RSVP.defer();
      postsDeferred.resolve(this.get('postsCache'));
      postsPromise = postsDeferred.promise;
    } else {
      this.set('postsPage', params.page);
      postsPromise = this.store.find('post', {
        userId: 'th',
        page: params.page,
        size: params.size
      });
    }

    if (this.get('posts2Page') === params.page2 && this.get('posts2Cache') !== null) {
      var posts2Deferred = Ember.RSVP.defer();
      posts2Deferred.resolve(this.get('postsCache'));
      posts2Promise = posts2Deferred.promise;
    } else {
      this.set('posts2Page', params.page2);
      posts2Promise = this.store.find('post', {
        userId: 'th',
        page: params.page2,
        size: params.size
      });
    }

    var route = this;
    return Ember.RSVP.hash({
      posts: postsPromise,
      posts2: posts2Promise
    }).then(function(results) {
      route.setProperties({
        postsCache: results.posts,
        posts2Cache: results.posts
      });
      return results;
    });
  }
});
