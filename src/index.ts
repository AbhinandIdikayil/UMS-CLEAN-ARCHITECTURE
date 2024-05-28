import { connectDB } from './infrastructure/database/dbConnection';
import server from './presentation/server'

(() => {
   try {
        server;
        connectDB()
    } catch (error: any) {
        console.log(error?.message)
        process.exit(1)
    }
})()