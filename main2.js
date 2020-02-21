const numero= [1,2,3,4,5];

const numeros = numero.map( item => item*10);
console.log("2-A "+numeros);


 const nome = 'Bia';
 const idade = 20;
 const usua = (nome= 'Ana', idade = 18) => ({nome,idade});

 console.log("2-C "+usua(nome, idade));
 console.log("2-C "+usua(nome));