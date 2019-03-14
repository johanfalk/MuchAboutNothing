const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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

schema.pre('save', function(next) {
  Session.deleteMany({ "user": this.user }).exec().then(() => { next() });
});

const Session = mongoose.model('Session', schema);

module.exports = Session;
