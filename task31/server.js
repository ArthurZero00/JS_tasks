import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import prods from "./routes.js"
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/", prods);




app.listen(process.env.PORT,"0.0.0.0", () => {
    console.log(`Server listens on port ${process.env.PORT}`)
})