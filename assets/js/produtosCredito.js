// Const de mudanças de estado
const displayNone = "none";
const displayGrid = "grid";
const displayFlex = "flex";
const displayBlock = "block";

// Variavel de fechamento da seta de indicação

let dnaInteraja = document.querySelector('.dna__interaja');

// Produto Um

// Interações de aparição

let popUpUm = document.querySelector('.popUpUm');

let produtoUm = document.querySelector('.produtoUm');

function showProdutoUm() {
    produtoUm.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
    checkUmProdutoUm.style.display = displayNone;
    popUpInfosTextoUmProdutoUm.style.display = displayBlock;
}

function fecharPopUpUm() {
    popUpUm.style.display = displayNone;
    popUpInfosTextoUmProdutoUm.style.display = displayNone;
    popUpInfosTextoDoisProdutoUm.style.display = displayNone;
}

// Interações dentro do bloco

let checkUmProdutoUm = document.querySelector('.check__um--produtoUm');

let popUpInfosPrincipalProdutoUm = document.querySelector('.popUp__infos--inicialProdutoUm');
let popUpInfosTextoUmProdutoUm = document.querySelector('.popUp__infos--textoUmProdutoUm');
let popUpInfosTextoDoisProdutoUm = document.querySelector('.popUp__infos--textoDoisProdutoUm');

function mostrarInfoDois() {
    checkUmProdutoUm.style.display = displayBlock;
    popUpInfosTextoUmProdutoUm.style.display = displayNone;
    popUpInfosTextoDoisProdutoUm.style.display = displayBlock;
}

// Produto Dois

// Interações de aparição

let popUpDois = document.querySelector('.popUpDois');

let produtoDois = document.querySelector('.produtoDois');

function showProdutoDois() {
    produtoDois.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
}

function fecharPopUpDois() {
    popUpDois.style.display = displayNone;
}

// Interações dentro do bloco

let popUpInfosPrincipalProdutoDois = document.querySelector ('.popUp__infos--produtoDois');

let popUpInfosTextoUmProdutoDois = document.querySelector ('.popUp__infos--descricaoUmProdutoDois')
let popUpInfosTextoDoisProdutoDois = document.querySelector ('.popUp__infos--descricaoDoisProdutoDois')
let popUpInfosTextoTresProdutoDois = document.querySelector ('.popUp__infos--descricaoTresProdutoDois')

function mostrarInfosUmProdutoDois () {
    popUpInfosTextoUmProdutoDois.style.display = displayBlock;
    popUpInfosTextoDoisProdutoDois.style.display = displayNone;
    popUpInfosTextoTresProdutoDois.style.display = displayNone;
}

function mostrarInfosDoisProdutoDois () {
    popUpInfosTextoUmProdutoDois.style.display = displayNone;
    popUpInfosTextoDoisProdutoDois.style.display = displayBlock;
    popUpInfosTextoTresProdutoDois.style.display = displayNone;
}

function mostrarInfosTresProdutoDois () {
    popUpInfosTextoUmProdutoDois.style.display = displayNone;
    popUpInfosTextoDoisProdutoDois.style.display = displayNone;
    popUpInfosTextoTresProdutoDois.style.display = displayBlock;
}

// Produto Tres

// Interações de aparição

let popUpTres = document.querySelector('.popUpTres');

let produtoTres = document.querySelector('.produtoTres');

function showProdutoTres() {
    produtoTres.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
}

function fecharPopUpTres() {
    popUpTres.style.display = displayNone;
}

// Interações dentro do bloco

let popUpImagemUmProdutoTres = document.querySelector ('.popUp__infos--imagemUmProdutosTres');
let popUpImagemDoisProdutoTres = document.querySelector ('.popUp__infos--imagemDoisProdutoTres');

let popUpDescricaoUmProdutoTres = document.querySelector ('.popUp__infos--descricaoUmProdutoTres');
let popUpDescricaoDoisProdutoTres = document.querySelector ('.popUp__infos--descricaoDoisProdutoTres');

function mostrarDescricaoUm() {
    popUpImagemUmProdutoTres.style.display = displayNone
    popUpDescricaoUmProdutoTres.style.display = displayBlock
}

// Produto Quatro

// Interações de aparição

let popUpQuatro = document.querySelector('.popUpQuatro');

let produtoQuatro = document.querySelector('.produtoQuatro');

function showProdutoQuatro() {
    produtoQuatro.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;

}

function fecharPopUpQuatro() {
    popUpQuatro.style.display = displayNone;
}

// Interações dentro do bloco

// Produto Cinco

// Interações de aparição

let popUpCinco = document.querySelector('.popUpCinco');

let produtoCinco = document.querySelector('.produtoCinco');

function showProdutoCinco() {
    produtoCinco.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;

}

function fecharPopUpCinco() {
    popUpCinco.style.display = displayNone;
}

// Interações dentro do bloco

// Produto Seis

// Interações de aparição

let popUpSeis = document.querySelector('.popUpSeis');

let produtoSeis = document.querySelector('.produtoSeis');

function showProdutoSeis() {
    produtoSeis.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;

}

function fecharPopUpSeis() {
    popUpSeis.style.display = displayNone;
}

// Interações dentro do bloco

// Produto Sete

// Interações de aparição

let popUpSete = document.querySelector('.popUpSete');

let produtoSete = document.querySelector('.produtoSete');

function showProdutoSete() {
    produtoSete.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;

}

function fecharPopUpSete() {
    popUpSete.style.display = displayNone;
}

// Interações dentro do bloco

// Produto Oito

// Interações de aparição

let popUpOito = document.querySelector('.popUpOito');

let produtoOito = document.querySelector('.produtoOito');

function showProdutoOito() {
    produtoOito.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;

}

function fecharPopUpOito() {
    popUpOito.style.display = displayNone;
}

// Interações dentro do bloco

// Produto Nove

// Interações de aparição

let popUpNove = document.querySelector('.popUpNove');

let produtoNove = document.querySelector('.produtoNove');

function showProdutoNove() {
    produtoNove.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;

}

function fecharPopUpNove() {
    popUpNove.style.display = displayNone;
}

// Interações dentro do bloco

// Produto Dez

// Interações de aparição

let popUpDez = document.querySelector('.popUpDez');

let produtoDez = document.querySelector('.produtoDez');

function showProdutoDez() {
    produtoDez.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;

}

function fecharPopUpDez() {
    popUpDez.style.display = displayNone;
}

// Interações dentro do bloco