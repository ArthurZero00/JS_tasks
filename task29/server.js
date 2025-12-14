import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cors from "cors"
import productsRoute from "./routes/products.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", productsRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is runnning on port ${process.env.PORT}`)
})