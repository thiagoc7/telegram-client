module.exports = function(app) {
  var express = require('express');
  var moodRouter = express.Router();

  var fixtures = [
    {
      id: 1,
      name: 'happy'
    },
    {
      id: 2,
      name: 'sad'
    },
    {
      id: 3,
      name: 'hungry'
    }
  ];

  moodRouter.get('/', function(req, res) {
    var responseObj = {};
    responseObj.moods = fixtures;
    res.send(responseObj);
  });

  moodRouter.post('/', function(req, res) {
    if (req.body.mood.body === '') {
      res.status(404).send("no body");
    } else {
      res.send({
        mood: {
          id: 5,
          name: req.body.mood.name
        }
      });
    }
  });

  moodRouter.get('/:id', function(req, res) {
    var responseObj = {};
    if(req.params.id in fixtures){
      responseObj.mood = fixtures[req.params.id];
      res.send(responseObj);
    } else {
      res.status(404).end();
    }
  });

  moodRouter.put('/:id', function(req, res) {
    res.send({
      'mood': {
        id: req.params.id
      }
    });
  });

  moodRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/moods', moodRouter);
};
