import express from "express";
import "dotenv/config";
import connectDB from "./Config/mongoConfig.js";
import { productRouter } from "./Routes/productRoutes.js";
import {brandRouter} from "./Routes/brandRoutes.js"
import {categoryRouter } from "./Routes/CategoryRoutes.js";
import {subCategoryRouter} from "./Routes/subCategoryRoutes.js"
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, (error) =>{ 
    if(!error) {
        console.log("Server is Running, and App is listening on port "+ PORT) 
    } else {
        console.log("Error: ", error)
    }
} 
);
connectDB()
app.use(express.json())
app.use('/product', productRouter)
app.use('/brand',brandRouter)
app.use('/category',categoryRouter)
app.use('/subcategory',subCategoryRouter)


