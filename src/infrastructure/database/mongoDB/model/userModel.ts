import mongoose from 'mongoose'


import { Schema, model } from 'mongoose';
import { userEntity } from '../../../../domain/entities';
// Schema
const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model<userEntity>('user', schema);