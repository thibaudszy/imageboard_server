const express = require("express");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const jsonParser = express.json();
const app = express();

app.use(jsonParser);

const PORT = 4000;

app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(PORT, () => console.log(`Listening to port` + PORT));
