const alunos = [
    {
        nome: 'Mara',
        nota: 7,
        turma: '1A',
    },
    {
        nome: 'Pedro',
        nota: 7.5,
        turma: '1A',
    },
    {
        nome: 'Maria',
        nota: 7,
        turma: '1B',
    },
    {
        nome: 'Samuel',
        nota: 9,
        turma: '5A',
    },
];

function aprovados(array, media) {
    let aprovado = [];

    for(let i = 0; i < array.length; i++) {

        const { nota, nome, turma } = array[i];

        if(nota >= media) {
            aprovado.push(nome, nota, turma);
        }
    }
    return aprovado
}
console.log(aprovados(alunos, 6));


function calculoIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade. `;
}

const pessoa1 = {
    nome: "Mara",
    idade: 30
}

const pessoa2 = {
    nome: "Maria",
    idade: 39
}

const pessoa3 = {
    nome: "Samuel",
    idade: 35
}

const pessoa4 = {
    nome: "Pedro",
    idade: 15
}

console.log(calculoIdade.call(pessoa1, 30))
console.log(calculoIdade.apply(pessoa2, [5]))
console.log(calculoIdade.call(pessoa3, 15))
console.log(calculoIdade.apply(pessoa4, [10]))