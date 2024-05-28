import { userEntity } from "../entities";


export interface IListUserUseCase {
    execute(): Promise<userEntity[] | null>
}