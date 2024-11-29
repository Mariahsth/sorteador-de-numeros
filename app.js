listaNumerosSorteados=[];
let contador=1;



function sortear(){
    quantidadeDeNumeros=parseInt(document.getElementById('quantidade').value);
    numeroMinimo=parseInt(document.getElementById('de').value);
    numeroMaximo=parseInt(document.getElementById('ate').value);
    if (numeroMinimo>=numeroMaximo){
        alert('O número inserido no campo "Do número" deve ser menor que o valor inserido no campo "Até o número"');
        return
    } 
    if (quantidadeDeNumeros>(numeroMaximo-numeroMinimo+1)){
        alert('A quantidade de números sorteados está maior que o intervalo  de números selecionados, verifique!');
        return
    } 
    numeroAleatorio();
}

function numeroAleatorio(){
    if (contador<=quantidadeDeNumeros){
        let numeroSorteado=Math.floor(Math.random()*(numeroMaximo-numeroMinimo+1)+numeroMinimo);
        if (listaNumerosSorteados.includes(numeroSorteado)){
            numeroAleatorio()
        } else{
            listaNumerosSorteados.push(numeroSorteado);
            contador++;
            numeroAleatorio();
        }
    }
    resultado();
}

function resultado(){
    let resultado=document.getElementById('texto-resultado');
    resultado.innerHTML='Os números sorteados são '+listaNumerosSorteados;
    alteraBotao(true);
}

function reiniciar()
{
    listaNumerosSorteados=[];
    let resultado=document.getElementById('texto-resultado');
    resultado.innerHTML='Os números sorteados são '+listaNumerosSorteados;
    contador=1;
    document.getElementById('de').value='';
    document.getElementById('ate').value='';
    document.getElementById('quantidade').value='';
    alteraBotao(false);
}

function alteraBotao(habilitar){
    let botao=document.getElementById('btn-reiniciar');
    if (habilitar){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
