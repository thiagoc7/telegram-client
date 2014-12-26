module.exports = function(app) {
  var express = require('express');
  var avatarsRouter = express.Router();

  var AVATARS = {
    'a1': {
      id: 'a1',
      name: 'blue',
      url: 'images/avatar-blue.png'
    },
    'a2': {
      id: 'a2',
      name: 'green',
      url: 'images/avatar-green.png'
    },
    'a3': {
      id: 'a3',
      name: 'orange',
      url: 'images/avatar-orange.png'
    },
    'a4': {
      id: 'a4',
      name: 'red',
      url: 'images/avatar-red.png'
    },
    'a5': {
      id: 'a5',
      name: 'turquoise',
      url: 'images/avatar-turquoise.png'
    },
    'a6': {
      id: 'a6',
      name: 'yellow',
      url: 'images/avatar-yellow.png'
    }
  };

  var AVATARS_ALL = {
    "avatars": [
      {
        id: 'a1',
        name: 'blue',
        url: 'images/avatar-blue.png'
      },
      {
        id: 'a2',
        name: 'green',
        url: 'images/avatar-green.png'
      },
      {
        id: 'a3',
        name: 'orange',
        url: 'images/avatar-orange.png'
      },
      {
        id: 'a5',
        name: 'turquoise',
        url: 'images/avatar-turquoise.png'
      },
      {
        id: 'a6',
        name: 'yellow',
        url: 'images/avatar-yellow.png'
      }
    ]
  };

  avatarsRouter.get('/', function(req, res) {
    res.send(AVATARS_ALL);
  });

  avatarsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  avatarsRouter.get('/:id', function(req, res) {
    res.send({
      "avatar": AVATARS[req.params.id]
    });
  });

  avatarsRouter.put('/:id', function(req, res) {
    res.send({
      "avatars": {
        "id": req.params.id
      }
    });
  });

  avatarsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/avatars', avatarsRouter);
};
