const express = require('express');
const { enviarEmail } = require('./emailService');  // Importe a função de envio de e-mail
const User = require('../models/User');  // Importação do modelo de usuário
const router = express.Router();

// Rota para cadastro de novo usuário
router.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Criação de um novo usuário
    const novoUsuario = new User({ nome, email, senha });

    // Salve o novo usuário no banco de dados
    await novoUsuario.save();

    // Assunto e mensagem do e-mail
    const assunto = 'Bem-Vindo ao Nosso Site!';
    const mensagem = `Olá ${nome},\n\nSeja bem-vindo ao nosso site! Seu cadastro foi concluído com sucesso.`;

    // Envia o e-mail de boas-vindas
    await enviarEmail(email, assunto, mensagem);

    // Retorna resposta de sucesso
    res.status(201).json({ message: 'Usuário cadastrado e e-mail de boas-vindas enviado!' });
  } catch (error) {
    console.error('Erro no cadastro de usuário:', error);
    res.status(500).json({ message: 'Erro no cadastro do usuário' });
  }
});

module.exports = router;
