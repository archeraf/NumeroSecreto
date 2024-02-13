alert('Boas vindas ao jogo Número Secreto!');
let numeroMaximo = 1000;
let numeroSecreto = parseInt((Math.random() * numeroMaximo) + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    if(chute == numeroSecreto){
      break;
    }else{
        if(chute < numeroSecreto){
            alert(`O número secreto é maior que ${chute}`);
        } else if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }

    }
    tentativas++;
    console.log(tentativas)
}
let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';

alert(`Parabéns, você acertou o ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);

