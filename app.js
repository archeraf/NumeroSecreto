let numerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = GerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    ExibirTextoNaTela('h1', 'Jogo Número Secreto');
    ExibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function GerarNumeroAleatorio(){

    let numeroGerado =  parseInt((Math.random() * numeroLimite) + 1);
    let quantidadeNumerosSorteados = numerosSorteados.length;

    if(quantidadeNumerosSorteados == numeroLimite){
        numerosSorteados = [];
    }

    if(numerosSorteados.includes(numeroGerado)){
        return GerarNumeroAleatorio();
    } else{
        if(numerosSorteados.length == quantidadeNumerosSorteados){}
            numerosSorteados.push(numeroGerado)
            console.log(numerosSorteados);
            return numeroGerado;
    }
}
function verificarChute(){
    let chute = document.querySelector('input').value;
   if(chute == numeroAleatorio){
    ExibirTextoNaTela('h1', 'Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let textoTentativas = `Você descobriu o número em ${tentativas} ${palavraTentativa}`;
    ExibirTextoNaTela('p',textoTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
        if(chute > numeroAleatorio){
        ExibirTextoNaTela('h1', 'Acima!');
        ExibirTextoNaTela('p', 'Você chutou um número maior que o número secreto!');
        } else{
            ExibirTextoNaTela('h1', 'Abaixo!');
            ExibirTextoNaTela('p', 'Você chutou um número menor que o número secreto!');
        }
   }
   tentativas++;
   limparCampo();
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    debugger
    numeroAleatorio = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.att
}