const express = require("express");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const loginRouter = require("./routers/auth");
const user = require("./models/user");
const jsonParser = express.json();
const app = express();

app.use(jsonParser);

const PORT = 4000;

app.use("/users", userRouter);
app.use("/images", imageRouter);
app.use("/login", loginRouter);

app.listen(PORT, () => console.log(`Listening to port` + PORT));


