import { ObjectId } from "mongoose";


export interface userEntity {
    _id:ObjectId,
    name:string,
    email:string,
    password:string
}

export interface deleteUser {
    _id:ObjectId
}