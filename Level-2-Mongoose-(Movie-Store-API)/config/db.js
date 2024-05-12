const mongoose = require("mongoose");

function connectMongodb() {
  const url = process.env.MONGO_URL;
  mongoose
    .connect(url, {
      dbName: "movie_appF",
    })
    .then(() => {
      console.log("mognodb connected");
    })
    .catch((e) => {
      console.log("failed to connect mongodb", e);
    });
}

module.exports = {
  connectMongodb,
};
