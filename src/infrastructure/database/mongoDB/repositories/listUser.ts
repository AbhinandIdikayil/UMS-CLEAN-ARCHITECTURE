import { userEntity } from "../../../../domain/entities";
import { UserModel } from "../model/userModel"


export const listUser = async() => {
    try {
        const data: userEntity[] = await UserModel.find();
        return data 
    } catch (error:any) {
      throw new Error(error)  
    }

}