const express = require("express");
 const bodyParser = require("body-parser");


const userRoute = require("./routes/userroute");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  
app.use("/", userRoute);
const db = require("./models");
db.sequelize.sync();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
