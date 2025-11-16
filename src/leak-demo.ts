// leak-demo.ts
// Propósito: archivo de ejemplo para demostrar detección de claves hardcodeadas.
// NUNCA poner claves reales en el repo.

const DATABASE_PASSWORD = "FAKE_DB_PASSWORD_123456"; // ejemplo simple
const API_KEY_GOOGLE = "AIzaFAKE_GOOGLE_APIKEY_abcdefghijklmnop"; // imita Google API key
const AWS_ACCESS_KEY_ID = "AKIAFAKEEXAMPLEKEY1234"; // imita AWS access key (no válida)
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYFAKESECRET"; // imita AWS secret
const PRIVATE_TOKEN = "ghp_FAKE_GITHUB_TOKEN_abcdefghijklmnopqrstuv"; // imita token GH

// Uso (simulado) — no hace nada real
function printSecrets() {
  console.log("DB PASS:", DATABASE_PASSWORD);
  console.log("Google API Key:", API_KEY_GOOGLE);
  console.log("AWS ID:", AWS_ACCESS_KEY_ID);
  console.log("AWS SECRET:", AWS_SECRET_ACCESS_KEY);
  console.log("GH TOKEN:", PRIVATE_TOKEN);
}

export { DATABASE_PASSWORD, API_KEY_GOOGLE, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, PRIVATE_TOKEN,printSecrets };
