const jwt = require('jsonwebtoken');

// Secret key para assinar os tokens
const SECRET_KEY = 'seuSegredoSuperSecreto';

// Função para gerar um token
const generateToken = (userId) => {
  // Criando um payload que pode conter dados do usuário (como ID, email, etc.)
  const payload = {
    userId: userId
  };

  // Gerando o token com um tempo de expiração de 1h
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  return token;
};

// Função para verificar a validade de um token
const verifyToken = (token) => {
  try {
    // Verificando o token e decodificando-o
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded; // Retorna o payload do token, que contém o ID do usuário, por exemplo
  } catch (err) {
    // Caso o token seja inválido ou expirado, lança um erro
    throw new Error('Token inválido ou expirado');
  }
};

module.exports = {
  generateToken,
  verifyToken
};
