const mongoose = require("mongoose");
const config = require("../config/dev");
require("./models/portfolio.js");
require("./models/user");
require("./models/forumCategory");
require("./models/topic");
require('./models/post');

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

exports.connect = () => {
  mongoose.connect(
    config.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log("Connected to DB");
    }
  );
};

exports.initSessionStore = () => {
  const store = new MongoDBStore({
    uri: config.DB_URI,
    collection: "portfolio_Sessions",
  });

  return store;
};
