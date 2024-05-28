import express, { Application, NextFunction } from 'express'
import { userRoute } from '../infrastructure/routes/userRoute';
import { dependencies } from '../config/dependencies';


const app: Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use(userRoute(dependencies));


app.listen(PORT, () => {
    console.log(`server is running of ${PORT}`)
})

export default app;
