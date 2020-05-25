import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  role: String,
});
