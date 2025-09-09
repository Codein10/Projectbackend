import dotenv from "dotenv"
import connectDb from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})


connectDb()
.then(()=>{
app.listen(process.env.PORT||8000)
console.log(`server is running on port ${process.env.PORT}`)
})
.catch((err)=>{
    console.log("failed to connect ",err)
})


// import express from "express"

// const app = express()
//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//             app.on("error", (err) => {
//                 console.log("error", err)
//             })
//             app.listen(process.env.PORT ,()=>{
//               console.log(`server is starting on port ${process.env.PORT}`)
//             })
//         } catch (error) {
//             console.log("error", error)
//             throw error
//         }
//     })()