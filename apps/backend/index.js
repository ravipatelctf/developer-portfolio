import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json({message: "Welocome to REST API server or ravipatelctf."})
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})