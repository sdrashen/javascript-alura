console.log(`Trabalhando com listas`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "São Paulo";

// console.log("Destinos possíveis:");
// console.log(listaDeDestinos);

//operador lógico ou ||. Eis um exemplo de concatenação lógica.
// if(
//     idadeComprador >= 18 || estaAcompanhado == true) { //operador lógico ou ||
//     console.log("Boa viagem!!");
//     listaDeDestinos.splice(2,1); //removendo item
//     temPassagemComprada = true;
// }else{
//     console.log("Comprador não é maior de idade. Não posso vender.");
// }

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

//let contador = 0;
// while(listaDeDestinos < 3) {
//     console.log(listaDeDestinos)
// }

let contador = 0;
let destinoExiste = false;
while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!!!");
}else{
    console.log("Xiii.. Deu erro!")
}

for(let i = 0; i < 3; i++) {
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
}