import { deleteUser, userEntity } from "../../domain/entities";
import { addUserEntity } from "../../domain/entities/addUser";



export interface IRepositories {
    addUser:(data:addUserEntity) => Promise<userEntity | null>;
    listUsers:() => Promise<userEntity[] | null>;
    DeleteUser:(data:deleteUser) => Promise<deleteUser |  null>
}