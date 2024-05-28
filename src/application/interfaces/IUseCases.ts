import { IDeleteUserUseCase, IListUserUseCase } from "../../domain/useCaseInterface";
import { IAddUserUseCase } from "../../domain/useCaseInterface/IAddUserUseCase";
import { IDependencies } from "./IDependencies";


export interface IUseCases {
    addUser:(dependencies: IDependencies) => IAddUserUseCase
    listUsers:(dependencies:IDependencies) => IListUserUseCase
    DeleteUser:(depedencies:IDependencies) => IDeleteUserUseCase
}