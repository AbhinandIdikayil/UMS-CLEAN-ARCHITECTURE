import { RequestHandler } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies"
import { addUserController } from "./addUser";
import {listUserContoller} from './listUser'
import {deleteUserController} from './deleteUser'


export const controllers = (dependencies:IDependencies) => {
    return {
        addUser: addUserController(dependencies),
        listUsers: listUserContoller(dependencies),
        DeleteUser:deleteUserController(dependencies)
    }
}