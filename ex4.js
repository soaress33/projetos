let numeros = [5,15,8,,25,3,18];
let contador = 0



numeros.forEach((numero, index) => {
    //percorrendo

 console.log(`${index + 1}. ${numero}`); 
 if(numero >= 10){
    contador = contador + 1


}
  

});


console.log("Números ", contador);

