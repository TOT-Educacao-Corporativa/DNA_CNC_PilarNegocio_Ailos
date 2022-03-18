// Const de mudanças de estado

const displayNone = "none";
const displayGrid = "grid";
const displayFlex = "flex";
const displayBlock = "block";

// Variavel de fechamento da seta de indicação

let dnaInteraja = window.document.querySelector('.dna__interaja');

// Produto Um

// Interações de aparição

let popUpUm = window.document.querySelector('.popUpUm');

let produtoUm = window.document.querySelector('.produtoUm');

function showProdutoUm() {
    produtoUm.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
    checkUmProdutoUm.style.display = displayBlock
}

function fecharPopUpUm() {
    popUpUm.style.display = displayNone;
}

// Interações dentro do bloco

let checkUmProdutoUm = window.document.querySelector('.check__um');
let checkDoisProdutoUm = window.document.querySelector('.check__dois');
let checkTresProdutoUm = window.document.querySelector('.check__tres');

let infosUmProdutoUm = window.document.querySelector('.popUp__infos--um');
let infosDoisProdutoUm = window.document.querySelector('.popUp__infos--dois');
let infosTresProdutoUm = window.document.querySelector('.popUp__infos--tres');

function mostrarInfoUm() {
    infosUmProdutoUm.style.display = displayBlock;
    infosDoisProdutoUm.style.display = displayNone;
    infosTresProdutoUm.style.display = displayNone;
}

function mostrarInfoDois() {
    checkDoisProdutoUm.style.display = displayBlock;
    infosUmProdutoUm.style.display = displayNone;
    infosDoisProdutoUm.style.display = displayBlock;
    infosTresProdutoUm.style.display = displayNone;
}

function mostrarInfoTres() {
    checkTresProdutoUm.style.display = displayBlock;
    infosUmProdutoUm.style.display = displayNone;
    infosDoisProdutoUm.style.display = displayNone;
    infosTresProdutoUm.style.display = displayBlock;
}

// Produto Dois

// Interações de aparição

let popUpDois = window.document.querySelector('.popUpDois');

let produtoDois = window.document.querySelector(".produtoDois")

function shoProdutoDois() {
    produtoDois.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
}

function fecharPopUpDois() {
    infosUmPopUpProdutoDois.style.display = displayBlock;

    popUpDois.style.display = displayNone;
    popUpSaibaMaisProdutoDois.style.display = displayNone;
    popUpTabelaRegressivaProdutoUm.style.display = displayNone;

    blocoBotoesProdutoDois.style.display = displayGrid;

    checkUmProdutoDois.style.display = displayBlock;
    checkDoisProdutoDois.style.display = displayNone;

    imagemSaibaMaisCinzaProdutoDois.style.display = displayBlock;
    imagemSaibaMaisVerdeProdutoDois.style.display = displayNone;
    imagemTabelaRegressivaCinzaProdutoDois.style.display = displayBlock;
    imagemTabelaRegressivaVerdeProdutoDois.style.display = displayNone;
}

// Interações dentro do bloco

let checkUmProdutoDois = document.querySelector('.check__um--produtoDois');
let checkDoisProdutoDois = document.querySelector('.check__dois--produtoDois');

let infosUmPopUpProdutoDois = document.querySelector('.popUp__infos--umProdutoDois');
let infosDoisPopUpProdutoDois = document.querySelector('.popUp__infos--doisProdutoDois');

let blocoBotoesProdutoDois = document.querySelector('.popUp__botoes--produtoDois');

let popUpSaibaMaisProdutoDois = document.querySelector('.popUp__saibaMais--bloco');
let blocoInfosUmProdutoDois = document.querySelector('.blocoInfos--imagemUm');
let blocoInfosDoisProdutoDois = document.querySelector('.blocoInfos--imagemDois');
let blocoInfosTresProdutoDois = document.querySelector('.blocoInfos--imagemTres');

let popUpTabelaRegressivaProdutoUm = document.querySelector('.popUp__tabelaRegressiva--bloco');

let popUpSaibaMaisInfoUmProdutoDois = document.querySelector('.blocoInfos--imagemUm')
let popUpSaibaMaisInfoDoisProdutoDois = document.querySelector('.blocoInfos--imagemDois')
let popUpSaibaMaisInfoTresProdutoDois = document.querySelector('.blocoInfos--imagemTres')


let imagemSaibaMaisCinzaProdutoDois = document.querySelector('.popUp__saibaMais--imagemUm')
let imagemSaibaMaisVerdeProdutoDois = document.querySelector('.popUp__saibaMais--imagemDois');
let imagemTabelaRegressivaCinzaProdutoDois = document.querySelector('.popUp__tabelaRegressiva--imagemUm');
let imagemTabelaRegressivaVerdeProdutoDois = document.querySelector('.popUp__tabelaRegressiva--imagemDois');

function mostrarInfoUmProdutoDois() {
    infosUmPopUpProdutoDois.style.display = displayBlock;
    infosDoisPopUpProdutoDois.style.display = displayNone;
    popUpSaibaMaisProdutoDois.style.display = displayNone;
    blocoInfosUmProdutoDois.style.display = displayNone;
    blocoInfosDoisProdutoDois.style.display = displayNone;
    blocoInfosTresProdutoDois.style.display = displayNone;
    popUpTabelaRegressivaProdutoUm.style.display = displayNone;
}

function mostrarInfoDoisProdutoDois() {
    checkDoisProdutoDois.style.display = displayBlock;
    infosUmPopUpProdutoDois.style.display = displayNone;
    infosDoisPopUpProdutoDois.style.display = displayBlock;
    popUpSaibaMaisProdutoDois.style.display = displayNone;
    blocoInfosUmProdutoDois.style.display = displayNone;
    blocoInfosDoisProdutoDois.style.display = displayNone;
    blocoInfosTresProdutoDois.style.display = displayNone;
    popUpTabelaRegressivaProdutoUm.style.display = displayNone;
}

function mostrarPopUpSaibaMaisProdutoDois() {
    popUpSaibaMaisProdutoDois.style.display = displayGrid;
    popUpTabelaRegressivaProdutoUm.style.display = displayNone;
    imagemSaibaMaisVerdeProdutoDois.style.display = displayBlock;
    infosUmPopUpProdutoDois.style.display = displayNone;
    infosDoisPopUpProdutoDois.style.display = displayNone;
    blocoBotoesProdutoDois.style.display = displayNone;

    blocoInfosUmProdutoDois.style.display = displayBlock;

    checkUmProdutoDois.style.display = displayNone;
    checkDoisProdutoDois.style.display = displayNone;

    imagemSaibaMaisCinzaProdutoDois.style.display = displayNone;
}

function mostrarSaibaMaisInfosUmProdutoDois() {
    popUpSaibaMaisInfoUmProdutoDois.style.display = displayBlock
    popUpSaibaMaisInfoDoisProdutoDois.style.display = displayNone
    popUpSaibaMaisInfoTresProdutoDois.style.display = displayNone
}

function mostrarSaibaMaisInfosDoisProdutoDois() {
    popUpSaibaMaisInfoUmProdutoDois.style.display = displayNone
    popUpSaibaMaisInfoDoisProdutoDois.style.display = displayBlock
    popUpSaibaMaisInfoTresProdutoDois.style.display = displayNone
}

function mostrarSaibaMaisInfosTresProdutoDois() {
    popUpSaibaMaisInfoUmProdutoDois.style.display = displayNone
    popUpSaibaMaisInfoDoisProdutoDois.style.display = displayNone
    popUpSaibaMaisInfoTresProdutoDois.style.display = displayBlock
}

function mostrarPopUpTabelaRegressivaProdutoDois() {
    popUpSaibaMaisProdutoDois.style.display = displayNone;
    popUpTabelaRegressivaProdutoUm.style.display = displayFlex;
    imagemTabelaRegressivaVerdeProdutoDois.style.display = displayBlock;
    infosUmPopUpProdutoDois.style.display = displayNone;
    infosDoisPopUpProdutoDois.style.display = displayNone;
    blocoBotoesProdutoDois.style.display = displayNone;

    blocoInfosUmProdutoDois.style.display = displayNone;
    blocoInfosDoisProdutoDois.style.display = displayNone;
    blocoInfosTresProdutoDois.style.display = displayNone;

    checkUmProdutoDois.style.display = displayNone;
    checkDoisProdutoDois.style.display = displayNone;

    imagemTabelaRegressivaCinzaProdutoDois.style.display = displayNone;
}

// Produto Tres

// Interações de aparição

let popUpTres = window.document.querySelector('.popUpTres');

let produtoTres = window.document.querySelector(".produtoTres")

let produtoTresConteudo = document.querySelector('.popUp__infos--inicial')

function shoProdutoTres() {
    produtoTres.style.display = displayGrid;
    produtoTresConteudo.style.display = displayFlex

    checkUmProdutoTres.style.display = displayNone;
    checkDoisProdutoTres.style.display = displayNone;

    dnaInteraja.style.display = displayNone;
}

function fecharPopUpTres() {
    popUpTres.style.display = displayNone;
    popUpInfosUmProdutoTres.style.display = displayNone;
    popUpInfosDoisProdutoTres.style.display = displayNone;


}

// Interações dentro do bloco

let checkUmProdutoTres = document.querySelector('.check__um--produtoTres');
let checkDoisProdutoTres = document.querySelector('.check__dois--produtoTres');

let popUpInfosPrincipalProdutoTres = document.querySelector('.popUp__infos--inicial')

let popUpInfosUmProdutoTres = document.querySelector('.popUp__infos--botaoUmProdutoTres')
let popUpInfosDoisProdutoTres = document.querySelector('.popUp__infos--botaoDoisProdutoTres')

function mostrarInfoUmProdutoTres() {
    checkUmProdutoTres.style.display = displayBlock;
    popUpInfosPrincipalProdutoTres.style.display = displayNone;
    popUpInfosUmProdutoTres.style.display = displayBlock;
    popUpInfosDoisProdutoTres.style.display = displayNone;

}

function mostrarInfoDoisProdutoTres() {
    checkDoisProdutoTres.style.display = displayBlock;
    popUpInfosPrincipalProdutoTres.style.display = displayNone;
    popUpInfosUmProdutoTres.style.display = displayNone;
    popUpInfosDoisProdutoTres.style.display = displayBlock;
}
// Produto Quatro

// Interações de aparição

let popUpQuatro = window.document.querySelector('.popUpQuatro');

let produtoQuatro = window.document.querySelector(".produtoQuatro")

function shoProdutoQuatro() {
    produtoQuatro.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
}

function fecharPopUpQuatro() {
    popUpQuatro.style.display = displayNone;
    popUpInfosPrincipalProdutoQuatro.style.display = displayBlock;
    popUpInfosUmProdutoQuatro.style.display = displayNone;
    popUpInfosDoisProdutoQuatro.style.display = displayNone;
    popUpInfosTresProdutoQuatro.style.display = displayNone;
}

// Interações dentro do bloco

let popUpInfosPrincipalProdutoQuatro = document.querySelector('.textoUm__produtoQuatro')
let popUpInfosUmProdutoQuatro = document.querySelector('.textoUm__produtoQuatro--botaoUm')
let popUpInfosDoisProdutoQuatro = document.querySelector('.textoUm__produtoQuatro--botaoDois')
let popUpInfosTresProdutoQuatro = document.querySelector('.textoUm__produtoQuatro--botaoTres')

function mostrarInfosUmProdutoQuatro() {
    popUpInfosPrincipalProdutoQuatro.style.display = displayNone;
    popUpInfosUmProdutoQuatro.style.display = displayBlock;
    popUpInfosDoisProdutoQuatro.style.display = displayNone;
    popUpInfosTresProdutoQuatro.style.display = displayNone;
}

function mostrarInfosDoisProdutoQuatro() {
    popUpInfosPrincipalProdutoQuatro.style.display = displayNone;
    popUpInfosUmProdutoQuatro.style.display = displayNone;
    popUpInfosDoisProdutoQuatro.style.display = displayBlock;
    popUpInfosTresProdutoQuatro.style.display = displayNone;
}

function mostrarInfosTresProdutoQuatro() {
    popUpInfosPrincipalProdutoQuatro.style.display = displayNone;
    popUpInfosUmProdutoQuatro.style.display = displayNone;
    popUpInfosDoisProdutoQuatro.style.display = displayNone;
    popUpInfosTresProdutoQuatro.style.display = displayBlock;
}