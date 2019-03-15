import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
mongoose.set("debug", true);

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log("❌  Error on DB Connection" + error);

db.once("open", handleOpen);
db.on("error", handleError);
