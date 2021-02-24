import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.0bqqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: Error) => {
    if (err) throw err;
    console.log("Connected to Mongo");
  }
);
