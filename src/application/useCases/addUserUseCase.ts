import { IDependencies } from "../interfaces/IDependencies";
import {addUserEntity} from '../../domain/entities/addUser'

export const addUser = (dependencies:IDependencies) => {
    const {repositories:{addUser}} = dependencies
    return {
        execute: async(data:addUserEntity) => {
            try {
                return await addUser(data)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}
