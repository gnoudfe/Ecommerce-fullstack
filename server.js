const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const initRoutes = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();

initRoutes(app);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
