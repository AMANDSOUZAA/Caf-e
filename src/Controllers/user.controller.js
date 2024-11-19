const bcrypt = require('bcrypt');
const { enviarEmail } = require('../config/emailConfig'); // Importa a função de envio de e-mail

const saltRounds = 10;

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        // Criptografar a senha
        const senhaHash = await bcrypt.hash(senha, saltRounds);

        console.log(`Usuário salvo: Nome: ${nome}, E-mail: ${email}, Senha (Hash): ${senhaHash}`);

        // Enviar e-mail automático
        const assunto = 'Bem-vindo!';
        const mensagem = `
        Olá, ${nome}!

        Obrigado por se cadastrar em nosso site. Estamos felizes por tê-lo conosco.

        Caso tenha dúvidas, entre em contato conosco.

        Atenciosamente,
        Equipe Café.
        `;

        await enviarEmail(email, assunto, mensagem);

        res.status(201).send('Usuário cadastrado e e-mail enviado automaticamente.');
    } catch (error) {
        console.error('Erro durante o cadastro:', error);
        res.status(500).send('Erro no cadastro ou envio do e-mail.');
    }
};

module.exports = { cadastrarUsuario };
