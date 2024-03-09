import express from "express";
import Routes from "./Routes/Hallbooking.js"

const PORT=4000
const app = express();

app.use(express.json())
app.use('/',Routes)


app.listen(PORT, () => {
    console.log(PORT);
})