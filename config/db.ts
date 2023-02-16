import mongoose from "mongoose";

const URI = "mongodb://localhost/store";
const lifeUri =
  "mongodb+srv://Enyinnaya:enyinnaya2022@cluster0.8lonchc.mongodb.net/bookStore?retryWrites=true&w=majority";

mongoose.connect(lifeUri);
mongoose.connection
  .on("open", () => {
    console.log("Database Connected");
  })
  .once("error", (error) => {
    console.log("Failed to connect to the database", error);
  });
