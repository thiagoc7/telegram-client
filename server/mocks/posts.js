module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": [
        {
          id: "p1",
          author: "andreisoare",
          body: "post 1 body",
          createdAt: new Date('2014-12-08T09:30:26')
        },
        {
          id: "p2",
          author: "vladberteanu",
          body: "post 2 body",
          createdAt: new Date('2013-02-08T09:30:26')
        }
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    if (req.body.post.body.body === '') {
      res.status(404).send("no body");
    } else {
      res.send({
        post: {
          body: req.body.post.body.body,
          author: req.body.post.body.author
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
