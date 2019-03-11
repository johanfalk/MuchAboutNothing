const express = require('express');
const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');
const app = express();
const port = 1337

app.use(express.json());

mongoose.connect('mongodb://mongodb:27017/users');

const sessionSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    unique : true
  },
  access_token: {
    type: String, 
    required: true,
  }
});

sessionSchema.pre('save', function(next) {
  Session.deleteMany({ "user": this.user }).exec().then(() => { next() });
});

const Session = mongoose.model('Session', sessionSchema);

const userSchema = new mongoose.Schema({
  email: {
    type: String, 
    required: true, 
    lowercase: true,
    unique : true,
    validate: emailValidator.validate
  },
  password: { 
    type: String, 
    required: true
  }
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password);
  next();
});

const User = mongoose.model('User', userSchema);

app.get('/authorize', isAuthenticated, (req, res) => {
  const userQuery = User.findOne({
    _id: session.user
  });

  userQuery.exec().then((user) => {
    user ? res.status(200).send(user) : res.status(404).send('User not found');
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/', isAuthenticated, (req, res) => {
  User.find({}).exec().then((users) => { 
    res.send({ users });
  });
});

app.get('/:id', isAuthenticated, (req, res) => {
  User.findOne({ _id: req.params.id }).exec().then((user) => {
    user ? res.status(200).send(user) : res.status(404).send('User not found');
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.delete('/:id', isAuthenticated, (req, res) => {
  User.deleteOne({ _id: req.params.id }).exec().then(() => {
    res.status(200).send('Resource deleted successfully');
  })
  .catch((err) => {
    res.status(500).send(err);
  });
});

app.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save().then(() => {
    res.status(201).send(user);
  })
  .catch((err) => {
    res.status(400).send(err.message);
  });
});

app.post('/login', (req, res) => {
  const credentials = { 
    email: req.body.email
  };

  User.findOne(credentials, (err, user) => {
    if (err) return res.status(500).send(err.message);
    if (!user) return res.status(404).send('User not found');

    bcrypt.compare(req.body.password, user.password, function(err, isEqual) {
      if (err) return res.status(400).send(err.message);
      if (!isEqual) return res.status(401).send('Unauthorized');

      const session = new Session({
        user: user._id,
        access_token: randToken.generate(128),
      });

      session.save().then((session) => {
        res.status(200).send({ 
          access_token:  session.access_token
        });
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
    });
  });
});

function isAuthenticated(req, res, next) {
  const data = {
    access_token: req.query.access_token,
  };

  Session.findOne(data).exec().then((session) => {
    session ? next() : res.status(401).send('Unauthorized');
  })
  .catch((err) => {
    res.status(500).send(err);
  });
}

app.listen(port, () => {
  console.log('App listening on port ' + port);
});
