
const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const cors = require("cors");
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")

const morgan = require("morgan");
const routers = require("./routes/admin");
const {notFound,errorHandler} = require("./middleware/errorhandler");
const db = require("./database/database");
const app = express();

app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:3000","https://bejewelled-rabanadas-734881.netlify.app"],
  credentials:true,
}));

app.use(urlencodedParser);
app.use(jsonParser);

app.use(morgan("dev"));

app.use("/api/v1", routers);
app.use(notFound);
app.use(errorHandler);


port = 5001

app.listen(port, () => {
    db();
    console.log(`Server running on port ${port}`);
  });