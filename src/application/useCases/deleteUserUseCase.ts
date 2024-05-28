import { dependencies } from "../../config/dependencies";
import { deleteUser } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const DeleteUser = (dependencies:IDependencies) => {
    const {repositories:{DeleteUser}} = dependencies
    return {
        execute:async (id:deleteUser) => {
            try {
                return await DeleteUser(id)
            } catch (error:any) {
                throw new Error(error)
            }
        }
    }
}