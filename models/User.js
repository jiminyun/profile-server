import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
UserSchema.statics.serializeUser = function() {
  return function(user, cb) {
    cb(null, user.id);
  };
};

UserSchema.statics.deserializeUser = function() {
  const self = this;
  return (id, cb) => self.findById(id, cb);
};

const model = mongoose.model("User", UserSchema);

export default model;
