import { userEntity } from "../entities";
import { addUserEntity } from "../entities/addUser";

export interface IAddUserUseCase{
    execute(data:addUserEntity): Promise<userEntity | null>
}