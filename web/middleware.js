module.exports = (req, res, next) => {
  // Simula verificação de token
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token mal formatado" });
  }

  // Simula verificação de token válido
  if (!token.startsWith("fake-jwt-token")) {
    return res.status(401).json({ message: "Token inválido" });
  }

  // Adiciona delay para simular latência de rede
  setTimeout(() => {
    next();
  }, 500);
};
