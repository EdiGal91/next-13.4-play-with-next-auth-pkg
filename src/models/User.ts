import mongoose from "mongoose";

enum Roles {
  USER = "user",
  ADMIN = "admin",
}

export interface IUser extends mongoose.Document {
  _id: string;
  email: string;
  password?: string;
  role: Roles;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      index: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: Roles,
      default: Roles.USER,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
