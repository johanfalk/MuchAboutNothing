const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');
const queries = require('./queries');
const errorHandler = require('./errorHandler');

exports.getUser = async (req, res) => {
  try {
    const user = await queries.getUserById(req.params.id);

    if (user) {
      res.status(200).send(user);
    }
    else {
      res.status(404).send({ error: 'User not found' });
    }
  }
  catch (error) {
    errorHandler.handle(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await queries.getAllUsers();

    if (users) {
      res.status(200).send(users);
    }
    else {
      res.status(404).send({ error: 'Users not found' });
    }
  }
  catch (error) {
    errorHandler.handle(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
}

exports.getUserByAccessToken = async (req, res) => {
  try {
    const user = await queries.getUserByAccessToken(req.query.access_token);

    if (users) {
      res.status(200).send(user);
    }
    else {
      res.status(404).send({ error: 'User not found' });
    }
  }
  catch (error) {
    errorHandler.handle(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await queries.deleteUser(req.params.id);
    res.status(200).send({ error: 'Resource deleted successfully' });
  }
  catch (error) {
    errorHandler.handle(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
}

exports.loginUser = async (req, res) => {
  try {
    const user = await queries.getUserByEmail(req.body.email);

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const isEqualPassword = await new Promise((resolve, reject) => {
      bcrypt.compare(req.body.password, user.password, function (error, isEqualPassword) {
        error ? reject(error) : resolve(isEqualPassword);
      });
    });

    if (!isEqualPassword) {
      return res.status(401).send({ error: 'Unauthorized' });
    }

    const session = await queries.createSession({
      user: user._id,
      access_token: randToken.generate(128),
    });

    if (session) {
      res.status(200).send(session);
    }
    else {
      throw new Error('Failed to create session for authorized user');
    }
  }
  catch (error) {
    errorHandler.handle(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
}

exports.registerUser = async (req, res) => {
  try {
    const user = await queries.createUser(req.body);
    res.status(201).send(user);
  }
  catch (error) {
    errorHandler.handle(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
}

exports.hasValidAccessToken = async (req, res, next) => {
  try {
    const session = await queries.getSessionByAccessToken(req.query.access_token);

    if (session) {
      next();
    }
    else {
      res.status(401).send({ error: 'Unauthorized' });
    }
  }
  catch (error) {
    errorHandler.handle(error);
    res.status(500).send({ error: 'Something went wrong' });
  }
}
