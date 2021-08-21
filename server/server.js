const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: path.join(__dirname, ".development.env") });

const PORT = process.env.PORT || 4000;
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"));

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
