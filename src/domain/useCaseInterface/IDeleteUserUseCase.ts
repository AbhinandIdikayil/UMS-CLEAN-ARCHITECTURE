import { deleteUser } from "../entities";


export interface IDeleteUserUseCase {
    execute(data:deleteUser): Promise<deleteUser | null>
}  