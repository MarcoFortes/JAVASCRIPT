

const fruits = ["apple", "orange", "banana"]; // array estático

fruits.push("grape");  // agora array ficou dinâmico
fruits.pop();

let tamanho = fruits.length;



// imprimindo o Array
for (let i = 0; i < tamanho; i++){
    console.log(fruits[i]);
}


// imprime o array só usando a variável
console.log(fruits);

