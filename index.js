const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT;
const AUTH_HEADERS = {
    Authorization: "Token 4e15396f99ae10dd5c195d81fb6a3722c0a44a10",
    "Content-Type": "application/json",
};

app.use(cors());

// Endpoint para PDVs de J&J
app.get("/api/jyj/pdv", async (req, res) => {
    try {
        const response = await fetch(
            "https://botai.smartdataautomation.com/api_backend_ai/dinamic-db/report/119/JyJ_PDVs",
            { headers: AUTH_HEADERS }
        );
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("Error en el proxy J&J PDV:", err);
        res.status(500).json({ error: "Error al obtener datos de J&J PDV" });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
}); 
