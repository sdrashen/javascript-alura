console.log(`Trabalhando com listas`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade.");
//     listaDeDestinos.splice(1,1); //removendo item
// }else if(estaAcompanhado == true){
//         console.log("Comprador está acompanhado.");
//         listaDeDestinos.splice(1,1);
//     }else{
//          console.log("Comprador não é maior de idade. Não posso vender.");
// }

if( //operador lógico ou ||. Eis um exemplo de concatenação lógica.
    idadeComprador >= 18 || estaAcompanhado == true) { //operador lógico ou ||
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2,1); //removendo item
}else{
    console.log("Comprador não é maior de idade. Não posso vender.");
}

console.log("Embarque: \n\n") // \n pula uma linha. Nesse caso vai pular duas.
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar.");
}

console.log(listaDeDestinos);
