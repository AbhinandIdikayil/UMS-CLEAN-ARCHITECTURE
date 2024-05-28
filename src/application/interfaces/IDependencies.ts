import { IRepositories } from "./IRepository";
import { IUseCases } from "./IUseCases";


export interface IDependencies {
    repositories:IRepositories,
    usecases:IUseCases
}