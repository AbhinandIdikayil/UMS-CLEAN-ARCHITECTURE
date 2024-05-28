import { RequestHandler } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies"
import { addUserController } from "./addUser";
import {listUserContoller} from './listUser'

interface controller {
    addUser: RequestHandler
}

export const controllers = (dependencies:IDependencies) => {
    return {
        addUser: addUserController(dependencies),
        listUsers: listUserContoller(dependencies)
    }
}