// Const de mudanças de estado

const displayNone = "none";
const displayGrid = "grid";
const displayFlex = "flex";
const displayBlock = "block";

// Variavel de fechamento da seta de indicação

let dnaInteraja = window.document.querySelector('.dna__interaja');

// Produto Um

    // Interações de aparição

    let popUpUm = window.document.querySelector ('.popUpUm');

    let produtoUm = window.document.querySelector('.produtoUm');

    function showProdutoUm () {
        produtoUm.style.display = displayGrid;
        dnaInteraja.style.display = displayNone;
        checkUmProdutoUm.style.display = displayBlock
    }

    function fecharPopUpUm () {
        popUpUm.style.display = displayNone;
        checkDoisProdutoUm.style.display = displayNone;
    }

        // Interações dentro do bloco

        let checkUmProdutoUm = window.document.querySelector('.check__um');
        let checkDoisProdutoUm = window.document.querySelector('.check__dois');
        let checkTresProdutoUm = window.document.querySelector('.check__tres');

        let infosUmProdutoUm = window.document.querySelector('.popUp__infos--um');
        let infosDoisProdutoUm = window.document.querySelector('.popUp__infos--dois');
        let infosTresProdutoUm = window.document.querySelector('.popUp__infos--tres');
        
    function mostrarInfoUm () {
        infosUmProdutoUm.style.display = displayBlock
        infosDoisProdutoUm.style.display = displayNone
        infosTresProdutoUm.style.display = displayNone
    }

        function mostrarInfoDois() {
            checkDoisProdutoUm.style.display = displayBlock;
            infosUmProdutoUm.style.display = displayNone
            infosDoisProdutoUm.style.display = displayBlock;
            infosTresProdutoUm.style.display = displayNone
        }

// Produto Dois

let popUpDois = window.document.querySelector ('.popUpDois');

let produtoDois = window.document.querySelector (".produtoDois")

function shoProdutoDois () {
    produtoDois.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
}

function fecharPopUpDois () {
    popUpDois.style.display = displayNone;
}

// Produto Tres

let popUpTres = window.document.querySelector ('.popUpTres');

let produtoTres = window.document.querySelector (".produtoTres")

function shoProdutoTres () {
    produtoTres.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
}

function fecharPopUpTres () {
    popUpTres.style.display = displayNone;
}

// Produto Quatro

let popUpQuatro = window.document.querySelector ('.popUpQuatro');

let produtoQuatro = window.document.querySelector (".produtoQuatro")

function shoProdutoQuatro () {
    produtoQuatro.style.display = displayGrid;
    dnaInteraja.style.display = displayNone;
}

function fecharPopUpQuatro () {
    popUpQuatro.style.display = displayNone;
}