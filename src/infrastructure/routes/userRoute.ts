import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";


export const userRoute = (dependencies: IDependencies):Router => {

    const router =  Router()
    const { addUser, listUsers , DeleteUser} = controllers(dependencies)

    router.post('/add',addUser)

    router.get('/list',listUsers)


    router.delete('/delete',DeleteUser)
    
    return router
}