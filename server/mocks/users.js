module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var USERS = {
    'andreisoare': {
      id: 'andreisoare',
      name: 'Andrei Soare',
      email: 'andrei@email.com',
      avatar: 'a1',
      password: 'andreisoare'
    },
    'vladberteanu': {
      id: 'vladberteanu',
      name: 'Vlad Berteanu',
      email: 'vlad@email.com',
      avatar: 'a2',
      password: 'vladberteanu'
    },
    'th': {
      id: 'th',
      name: 'Thiago Correa',
      email: 'th@email.com',
      avatar: 'a3',
      password: 'th'
    }
  };

  var USERS_ALL = {
    "users": [
      {
        id: 'andreisoare',
        name: 'Andrei Soare',
        email: 'andrei@email.com',
        avatar: 'a1',
        followed: true
      },
      {
        id: 'vladberteanu',
        name: 'Vlad Berteanu',
        email: 'vlad@email.com',
        avatar: 'a2',
        followed: false
      },
      {
        id: 'th',
        name: 'Thiago Correa',
        email: 'th@email.com',
        avatar: 'a3',
        followed: false
      },
      {
        id: 'th1',
        name: 'Thiago 1',
        email: 'th1@email.com',
        avatar: 'a4',
        followed: true
      },
      {
        id: 'th2',
        name: 'Thiago 2',
        email: 'th1@email.com',
        avatar: 'a5',
        followed: false
      },
      {
        id: 'th3',
        name: 'Thiago 3',
        email: 'th1@email.com',
        avatar: 'a6',
        followed: true
      }
    ]
  };

  var FOLLOWING = {
    "users": [
      {
        id: 'andreisoare',
        name: 'Andrei Soare',
        email: 'andrei@email.com',
        avatar: 'a1',
        followed: true
      },
      {
        id: 'vladberteanu',
        name: 'Vlad Berteanu',
        email: 'vlad@email.com',
        avatar: 'a2',
        followed: true
      },
      {
        id: 'th',
        name: 'Thiago Correa',
        email: 'th@email.com',
        avatar: 'a3',
        followed: true
      },
      {
        id: 'th1',
        name: 'Thiago 1',
        email: 'th1@email.com',
        avatar: 'a4',
        followed: true
      }
    ]
  };

  var findUserByEmail = function (email) {
    var ids = Object.keys(USERS);
    var filter = ids.filter(function(id) {
      return USERS[id].email === email;
    });
    if (filter.length > 0) {
      return USERS[filter[0]];
    } else {
      return null;
    }
  };

  usersRouter.get('/', function(req, res) {
    if (req.query.following) {
      res.send(USERS_ALL);
    } else if (req.query.followed) {
      res.send(FOLLOWING);
    } else {
      res.send(USERS_ALL);
    }
  });

  usersRouter.post('/', function(req, res) {
    var findUser = USERS[req.body.user.id];
    var id = req.body.user.id;
    var name = req.body.user.name;
    var password = req.body.user.meta.password;

    if (req.body.user.meta.operation === 'create') {
      if (findUser) {
        res.status(404).send("user already exist");
      } else {
        res.send({
          user: {
            id: id,
            name: name
          }
        });
      }

    } else if (req.body.user.meta.operation === 'login') {
      if (findUser && (password == findUser.password)) {
        res.send({
          "user": findUser
        });
      } else {
        res.status(404).send("please verify username or password");
      }

    } else if (req.body.user.meta.operation === 'email') {
      var findEmail = findUserByEmail(req.body.user.email);
      if (findEmail) {
        res.send({
          "email": 'sent'
        });
      } else {
        res.status(404).send("email does not exist");
      }

    } else {
      res.status(401).end();
    }
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      "user": USERS[req.params.id]
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
