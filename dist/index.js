import express from "express";
import { getMockProducts } from "./product.js";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello, Express with TypeScript!");
});
app.get("/hello", (req, res) => {
    res.send("Hello world!");
});
app.get("/products", (_req, res) => {
    res.json({ data: getMockProducts(100) });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
