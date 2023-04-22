console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
// const nome = "Ricardo";
const nome = "Ricardo";
const sobrenome = "Bugan"; 

// console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`); //maneira mais legível

nomeCompleto = nome + sobrenome; //sobreescrevendo a varível. Como já está declara ñ precisa escrever const
//Vai dar erro porque a var é uma const, assim ñ dá pra sobreescrever o valor dela.
console.log(nomeCompleto);

// NOTE: Usar uma let somente quando necessário.