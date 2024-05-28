import { userEntity } from "../../../../domain/entities";
import { UserModel } from "../model/userModel"


export const listUsers = async():Promise<userEntity[] | null> => {
    try {
        const data: userEntity[] | any = await UserModel.find();
        return data 
    } catch (error:any) {
      console.log(error)
      throw new Error(error)  
    }

}