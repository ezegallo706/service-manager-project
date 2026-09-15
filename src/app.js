import http from "http";
import { validateEnv } from "../config/env.config.js";

try {
  validateEnv();
} catch (error) {
  console.error("Error de configuración:", error.message);
  process.exit(1);
}

const port = Number(process.env.PORT);

const server = http.createServer(async (req, res) => {
  console.log("Petición recibida");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola mundo");
  }
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});