function diversao() {
    class Aluno {
        nome: String;
        email: String;
        ra: String;
    
        constructor(nome: String, email: String, ra: String) {
            this.nome = nome;
            this.email = email;
            this.ra = ra;
        }
    
        exibirAlunoJson(): object {
            let aluno = {
                "nome": this.nome,
                "email": this.email,
                "ra": this.ra,
            }
    
            return aluno
        }
    }
    
    const aluno01 = new Aluno("Felipe Kurt Pohling", "felipe@imaxis.com.br", "a2567857")
    const aluno02 = new Aluno("Dhiéssica Berlatto", "dhiessica@gmail.com", "a2543857")
    
    let sala = {
        "disciplina": "POO",
        "professor": {
            "nome": "Adair Rohling",
            "email": "adair@gmail.com"
        },
        "alunos": [
            aluno01.exibirAlunoJson(),
            aluno02.exibirAlunoJson(),
        ]
    }
    
    console.log(sala)
}

function aula() {
    let sala = {
        "sala": [
            {
                "professor": {
                    "nome": "adair",
                    "email": "adair@gmail.com",
                },
                "quadro": {
                    "cor": 'branco',
                    "tamanho": '1000x1000'
                },
                "alunos": [
                    {
                        "nome": 'Felipe Kurt Pohling',
                        "ra": 'a2567857',
                        "email": 'felipe@gmail.com'
                    },
                    {
                        "nome": 'Dhiéssica Berlatto',
                        "ra": 'a2562357',
                        "email": 'dhiessica@gmail.com'
                    },
                ]
            },

        ]
    }

    //console.log(JSON.stringify(sala, null, 2))
    console.log(sala['sala'][0]['alunos'][0]['nome'])
}

function formas() {
    let formas = [
        {
            "nome": "quadrado",
            "cor": "verde",
            "qntdLados": '4',
            "expressao": 'mais ou menos feliz'
        },
        {
            "nome": 'pentagono',
            "cor": 'rosa',
            "qntdLados": '5',
            "expressao": 'sorrindo de cantinho'
        }
    ]

    console.log(formas)
}

function aula02() {

}

//diversao()
//aula()
//formas()

aula02()