// //  Exercício 1
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };

// // console.log('Bem vinda, ' + info.personagem);

// // Exercício 2
// // info = {recorrente: 'Sim'}

// // Exercício 3
// // for (let key in info) {
// //     console.log(key);
// // }

// // Exercício 4
// // for (let key in info) {
// //     console.log(info[key]);
// // }

// // Exercício 5 (parcial)
// let secondInfo = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

// for (let key in info, secondInfo) {
//     console.log(info[key] + ' e ' + secondInfo[key]);
// }

// Exercício 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        },
    ],
};

let property = [];
console.log('O livro favorito de '+ leitor.nome + ' ' + leitor.sobrenome + ' se chama' + leitor['livrosFavoritos'] + '.')