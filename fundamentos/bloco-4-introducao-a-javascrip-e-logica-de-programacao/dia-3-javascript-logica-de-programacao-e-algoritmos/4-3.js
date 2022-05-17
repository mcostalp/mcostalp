//Exercício 1
let fat = 10;


for (let index = 10; index > 0; index -= 1) {
    fat = fat * index
}

console.log(fat);

//Exercício 2
let str = 'trybe';
let rts = '';

for (let index = str.length - 1; index >= 0; index -= 1) {
    rts += str[index];
}

console.log(rts);

//Exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (maior.length < array[index].length) {
        maior = array[index]
    }
    if (menor.length > array[index].length) {
        menor = array[index]
    }
}

console.log('A maior é:', maior);
console.log('A menor é:', menor);

//Exercício 4 (não deu certo ainda)
let num = 0
let maior = 0

for (let index = 0; index < 50; index += 1) {
    num = index + 1
    if (num % num === 0 && ) {
        maior = num;
    }
}

console.log(maior);