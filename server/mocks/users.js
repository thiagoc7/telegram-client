module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      "users": []
    });
  });

  usersRouter.post('/', function(req, res) {
    res.send({
      user: {
        id: req.body.user.id,
        name: req.body.user.name
      }
    });
  });

  usersRouter.get('/:id', function(req, res) {
    var users = {
      'andreisoare': {
        id: 'andreisoare',
        name: 'Andrei Soare'
      },
      'vladberteanu': {
        id: 'vladberteanu',
        name: 'Vlad Berteanu'
      }
    };

    res.send({
      "user": users[req.params.id]
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      "users": {
        "id": req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
