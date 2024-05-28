import * as repositories from "../infrastructure/database/mongoDB/repositories/index";
import * as usecases from '../application/useCases/index'
import { IDependencies } from "../application/interfaces/IDependencies";

export const dependencies: IDependencies = {
    usecases,
    repositories
}