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
  Session.deleteMany({ "user": this.user }).exec();
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

app.get('/sessions', (req, res) => {
  Session.find({}, (err, sessions) => {
    err ? res.send(err) : res.send(sessions);
  });
});

app.post('/login', (req, res) => {
  let credentials = { 
    "email": req.body.email
  };

  User.findOne(credentials, (err, user) => {
    if (err) return res.status(500).send(err.message);
    if (!user) return res.status(404).send('User not found');

    bcrypt.compare(req.body.password, user.password, function(err, isEqual) {
      if (err) return res.status(400).send(err.message);

      if (isEqual) {
        let session = new Session({
          user: user._id,
          access_token: randToken.generate(128),
        });

        session.save((err) => {
          if (err) return res.status(500).send(err.message);

          getAccessToken(user).then((session) => {
            return res.status(200).send({ "access_token":  session.access_token});
          });
        });
      }
      else {
        return res.status(401).send('Unauthorized');
      }
    });
  });
});

async function getAccessToken(user) {
  return await Session.findOne({ "user": user._id });
}

app.post('/register', (req, res) => {
  let user = new User(req.body);

  user.save((err) => {
    err ? res.status(400).send(err.message) : res.status(201).send({ user });
  });
});

app.listen(port, () => {
  console.log('App listening on port ' + port);
});
