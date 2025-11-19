// filtrar notas acima da média usando Arrow Function
let notas = [4.5, 8.0, 6.5, 9.0, 3.0];

let aprovados = notas.filter((nota) => {

return nota >=7;

});

//todas as notas
console.log("Todas as suas notas: ", notas);

//aprovados
console.log("Notas aprovadas", aprovados);