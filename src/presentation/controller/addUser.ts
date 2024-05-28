import { NextFunction, Request, RequestHandler, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { userEntity } from "../../domain/entities";

export const addUserController =  (dependencies: IDependencies) => {

    return async (req: Request, res: Response, next: NextFunction) => {
        const { usecases: { addUser } } = dependencies
        try {
            let body = req.body
            const data: userEntity | null = await addUser(dependencies).execute(body);
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error: any) {
            console.log(error)
            next(error)
            throw new Error(error)
        }
    }
}