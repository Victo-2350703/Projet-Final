import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

console.log("Mot de passe =", process.env.PG_PASSWORD, "| Type =", typeof process.env.PG_PASSWORD);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error("❌ Erreur de connexion :", err);
  } else {
    console.log("✅ Connexion réussie :", res.rows);
  }
  pool.end();
});
