// Importe Express (la bibliothèque qui fabrique le serveur)
import express from "express";

// Crée l'application
const app = express();

// Le port = le "numéro de porte" sur lequel le serveur écoute
const PORT = 3000;

// Route 1 : la page d'accueil
app.get("/", (req, res) => {
  res.send("Servio fonctionne !");
});

// Route 2 : vérifier que le serveur est vivant
app.get("/health", (req, res) => {
  res.send("OK");
});

// Démarre le serveur
app.listen(PORT, () => {
  console.log(`Serveur Servio démarré sur http://localhost:${PORT}`);
});