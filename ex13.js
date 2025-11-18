const prompt = require('prompt-sync')({ single: true })


let pv1 = Number(prompt('Digite sua nota da prova 1:  '));
let pv2 = Number(prompt('Digite sua nota da prova 2:  '));
let redacao = Number(prompt('Digite a nota da sua redação: '));
let total= pv1 + pv2 + redacao


if(total >=1500){

 console.log('Você pode estudar na UFLA!!')   

} else if(total >= 1000){

console.log('Você pode estudar na UNILAVRAS!!')

}else{

console.log('Volte ano q vem....')   

}



