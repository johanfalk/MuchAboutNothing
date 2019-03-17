const User = require('./models/user');
const Session = require('./models/session');
const errorHandler = require('./errorHandler');

exports.createUser = async (data) => {
  return new User(data).save();
}

exports.getUserById = async (id) => {
  return User.findOne({ _id: id }).exec();
}

exports.getUserByEmail = async (email) => {
  return User.findOne({ email: email }).exec();
}

exports.getUserByAccessToken = async (token) => {
  try {
    const session = await exports.getSessionByAccessToken(token);

    if (session) {
      return User.findOne({ _id: session.user }).exec();
    }
    else {
      throw new Error('Session not found');
    }
  }
  catch (error) {
    errorHandler.handle(error);
  }
}

exports.getAllUsers = async () => {
  return User.find({}).exec();
}

exports.deleteUser = async (id) => {
  return User.deleteOne({ _id: id }).exec();
}

exports.createSession = async (data) => {
  return new Session(data).save();
}

exports.getSessionByAccessToken = async (token) => {
  return Session.findOne({ access_token: token }).exec();
}
