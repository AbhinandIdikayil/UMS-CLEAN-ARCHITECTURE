import { Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies"
import { userEntity } from "../../domain/entities";



export const listUserContoller = (dependencies:IDependencies) => {
    return async (req:Request ,res:Response) => {
        const {usecases:{listUsers}} = dependencies;
        try {
            const users:userEntity |null = await listUsers(dependencies).execute()
            res.status(200).json(users)
        } catch (error:any) {
            throw new Error(error)
        }
    }
}