// import { Schema, model, Document, Model } from "mongoose";

// declare interface IUserModel extends Document {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   hash_password: string;
//   role: string;
//   profile_pic: string;
//   creation_date: Date;
// }

// export interface UserModels extends Model<IUserModel> {}

// export default class User {
//   private _model: Model<IUserModel>;

//   constructor() {
//     const userSchema = new Schema({
//       firstName: { type: String, required: true, trim: true, min: 3, max: 20 },
//       lastName: { type: String, required: true, trim: true, min: 3, max: 20 },
//       username: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//         lowercase: true,
//         index: true,
//       },
//       email: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//         lowercase: true,
//       },
//       hash_password: { type: String, required: true },
//       role: { type: String, enum: ["user", "admin"], default: "user" },
//       profile_pic: { type: String },
//       creation_date: { type: Date, default: Date.now },
//     });

//     this._model = model<IUserModel>("users", userSchema);
//   }

//   public get model(): Model<IUserModel> {
//     return this._model;
//   }
// }

import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true, min: 3, max: 20 },
  lastName: { type: String, required: true, trim: true, min: 3, max: 20 },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  hash_password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  profile_pic: { type: String },
  creation_date: { type: Date, default: Date.now },
});

export default mongoose.model("User", usersSchema);
