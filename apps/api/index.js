import express from "express";
import pool from "./db.js";

const app = express();
const PORT = 3000;

// Page d'accueil
app.get("/", (req, res) => {
  res.send("Servio fonctionne !");
});

// Le serveur est-il vivant ?
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "servio-api" });
});

// Infos sur l'application
app.get("/api/info", (req, res) => {
  res.json({ name: "Servio", version: "0.1.0", currency: "MRU" });
});

// La base de données répond-elle ?
app.get("/health/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW() AS heure");
    res.json({ status: "ok", heure: result.rows[0].heure });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "erreur", message: "Base de données injoignable" });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur Servio démarré sur http://localhost:${PORT}`);
});