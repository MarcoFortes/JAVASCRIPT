

const fruits = ["apple", "orange", "banana"]; // array estático

fruits.push("grape");  // agora array ficou dinâmico

let tamanho = fruits.length;



// imprimindo o Array
for (let i = 0; i < tamanho; i++){
    console.log(fruits[i]);
}