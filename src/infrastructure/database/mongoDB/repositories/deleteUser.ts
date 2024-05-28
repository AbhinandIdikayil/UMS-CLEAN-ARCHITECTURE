import { IDependencies } from "../../../../application/interfaces/IDependencies";
import { dependencies } from "../../../../config/dependencies";
import { deleteUser } from "../../../../domain/entities";
import { UserModel } from "../model/userModel";


export const DeleteUser = async (data:deleteUser):Promise<deleteUser | null> => {
    try {
        const user = await UserModel.findByIdAndDelete(data)
        console.log(user)
        return user as deleteUser
    } catch (error:any) {
        console.log(error)
        throw new Error(error)
    }
}