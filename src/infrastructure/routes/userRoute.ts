import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";


export const userRoute = (dependencies: IDependencies):Router => {

    const router =  Router()
    const { addUser, listUsers} = controllers(dependencies)

    router.post('/add',addUser)

    router.get('/list',listUsers)
    
    return router
}