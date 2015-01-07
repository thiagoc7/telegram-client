module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  var POSTS = [
      {
        id: "p1",
        author: "andreisoare",
        body: "post 1 body",
        createdAt: new Date('2014-12-08T09:30:26'),
        repostedFrom: null
      },
      {
        id: "p2",
        author: "vladberteanu",
        body: "post 2 body",
        createdAt: new Date('2013-02-08T09:30:26'),
        repostedFrom: null
      },
      {
        id: "p3",
        author: "th",
        body: "post 2 body",
        createdAt: new Date('2014-02-08T09:30:26'),
        repostedFrom: 'p2'
      },
      {
        id: "p4",
        author: "th",
        body: "uhuhuh",
        createdAt: new Date('2014-02-08T09:30:26'),
        repostedFrom: null
      }
  ];

  for (var idx = 5; idx <= 50; idx++) {
    POSTS.push({
      id: "p" + idx,
      author: "th",
      body: "post " + idx + " body",
      createdAt: new Date('2014-02-08T09:30:26'),
      repostedFrom: null
    });
  }

  postsRouter.get('/', function(req, res) {

    if (req.query.dashboard) {
      var limit = parseInt(req.query.limit);
      var skip = parseInt(req.query.skip);
      var posts = POSTS.slice(skip, skip + limit);
      res.send({"posts": posts});
    } else {
      var page = parseInt(req.query.page);
      var size = parseInt(req.query.size);
      var postsPg = POSTS.slice(page * size, (page + 1) * size);
      res.send({"posts": postsPg});
    }
  });

  postsRouter.post('/', function(req, res) {
    if (req.body.post.body === '') {
      res.status(404).send("no body");
    } else {
      res.send({
        post: {
          body: req.body.post.body,
          author: req.body.post.author
        }
      });
    }
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      "posts": {
        "id": req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      "posts": {
        "id": req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
