import { addUserEntity, userEntity } from "../../../../domain/entities";
import { UserModel } from "../model/userModel";


export const addUser = async(data:addUserEntity): Promise<userEntity | null> => {
    try {
        const newUser =  new UserModel(data)
        let user = await newUser.save()
        return user as userEntity
    } catch (error: any) {
        throw new Error(error)
    }
}