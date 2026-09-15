import dotenv from "dotenv";

dotenv.config();

export const REQUIRED_ENV_VARS = ["NODE_ENV", "PORT"];

export function validateEnv() {
  const missing = REQUIRED_ENV_VARS.filter((key) => {
    const value = process.env[key];
    return value === undefined || value === null || String(value).trim() === "";
  });

  if (missing.length > 0) {
    const missingList = missing.join(", ");
    throw new Error(
      `Faltan variables de entorno requeridas: ${missingList}. Define estas variables en tu archivo .env antes de iniciar la aplicación.`
    );
  }

  return { ...process.env };
}
