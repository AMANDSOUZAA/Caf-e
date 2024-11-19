const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./controladores/rotas'); // Caminho correto para o arquivo rotas.js


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // Para analisar os dados JSON no corpo das requisições

// Usando a rota de cadastro
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
