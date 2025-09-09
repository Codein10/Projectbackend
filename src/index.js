import dotenv from "dotenv"
import connectDb from "./db/index.js";

dotenv.config({
    path: './.env'
})


connectDb()




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