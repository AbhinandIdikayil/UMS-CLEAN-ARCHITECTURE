import { Request, Response } from "express"
import { IDependencies } from "../../application/interfaces/IDependencies";


export const deleteUserController = (dependencies:IDependencies) => {
    const {usecases:{DeleteUser}} = dependencies
    return async (req:Request, res:Response) => {
        try {
            const {id} = req.body;
            const user = await DeleteUser(dependencies).execute(id)
            res.status(200).json(user)
        } catch (error: any) {
           throw new Error(error) 
        }
    }
}