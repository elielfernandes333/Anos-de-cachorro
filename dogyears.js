//crie uma variavel minha idade.
let minhaIdade = prompt('qual a sua idade?');
//crie uma variavel primeiros dois anos e defina seu valor como 2
let primeirosDoisAnos = 2;
primeirosDoisAnos = primeirosDoisAnos *10.5;
let anosSeguintes = minhaIdade - 2;
//depois de subtrair 2 anos de minhaIdade que são equivalentes a 2*10.5 em anos de cachorro o resultado que sobra será chamado de anosSeguintes.
//multiplica-se os anos restantes por 4.
anosSeguintes *= 4;

console.log(primeirosDoisAnos + ' '+ anosSeguintes)
let anosEmCachorro = primeirosDoisAnos+anosSeguintes;
let meuNome = prompt('qual o seu nome?') .toLowerCase();
alert(`Meu nome é ${meuNome}. E eu tenho ${minhaIdade} em anos humanos, que é ${anosEmCachorro} anos de idade em anos caninos.`);