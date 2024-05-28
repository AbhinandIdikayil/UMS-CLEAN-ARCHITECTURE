import { IDependencies } from "../interfaces/IDependencies"



export const listUsers = async (dependencies:IDependencies) => {
    const {repositories:{listUsers}} = dependencies
    return {
        execute:async () => {
            try {
                return await listUsers()
            } catch (error:any) {
                throw new Error(error)   
            }
        }
    }
}