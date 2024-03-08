"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exphbs = require('express-handlebars');
// Criar uma nova aplicação Express
const app = (0, express_1.default)();
// Configura o motor de visualização para usar Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
// Definir uma rota que serve um arquivo HTML na raiz
app.get('/', (req, res) => {
    // Defina o caminho para o seu arquivo HTML
    let teste = {
        status: true,
        data: {},
        message: "teste"
    };
    console.log(teste.message);
    res.send;
    res.render('home', { teste });
});
// Definir a porta e iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
