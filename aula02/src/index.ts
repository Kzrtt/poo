import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';

// Criar uma nova aplicação Express
const app = express();

// Configura o motor de visualização para usar Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views/'));
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

let teste = {
    status: true,
    data: {},
    message: "teste"
}

// Definir uma rota que serve um arquivo HTML na raiz
app.get('/', (req, res) => {
    // Defina o caminho para o seu arquivo HTM
    res.render('home', { teste })
});

app.post('/sendName', (req, res) => {
    let person = {
        "nome": req.body.name,
        "email": req.body.email,
    }
    console.log(`objeto: ${JSON.stringify(person, null, 2)}`)
    res.render('home', { teste })
})

// Definir a porta e iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
