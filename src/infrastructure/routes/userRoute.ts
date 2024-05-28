import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";


export const userRoute = (dependencies: IDependencies):Router => {

    const router =  Router()
    const { addUser } = controllers(dependencies)

    router.post('/add',addUser)
    
    return router
}