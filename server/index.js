require("dotenv").config({ path: "./.env" });
const { default: db } = require("./database");

db.sync()
  .then((e) => {
    console.log("server starter:");
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });
