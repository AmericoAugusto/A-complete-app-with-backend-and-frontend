const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Olá...bem-vindo!');
});

app.get('/backend', (req, res) => {
    res.send('<h2>Hello world</h2>');
});

// parar reconhecer os dados recebidos como sendo um objeto formado JSON
app.use(express.json());
app.post('/filmes', (req, res) => {
    const {titulo, genero} = req.body;
    res.send(`Filmes: ${titulo} - Gênero: ${genero}, recebido...`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// middleware
const log = (req, res, next) => {
    console.log(`......................Acessado em ${new Date()}`);
    next();
}
app.get('/transfere', log, (req, res) => {
    res.send("Ok! Valor transferido com sucesso...")
});