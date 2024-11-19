const { enviarEmail } = require('./src/emailService');  // Importe a função que envia o e-mail

// Dados para o teste
const destinatario = 'tt1460230@gmail.com'; // Coloque o e-mail que você quer testar
const assunto = 'Equipe Coffee';
const mensagem = 'Bem-vindo! Seu cadastro foi concluído com sucesso!';

// Testando o envio de e-mail
enviarEmail('tt1460230@gmail.com', 'Equipe Coffee', 'Bem-vindo! Seu cadastro foi concluído com sucesso!');

