import mongoose, { Schema, Document } from "mongoose";

interface User extends Document{
    nome: string;
    email: string;
    telefone: string;
    cidade: string;
    cpf: string;
    urlImage: string;
}

const UserSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefone: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    urlImage: { type: String, required: false },
  });

  export const UserModel = mongoose.model<User>("User", UserSchema);