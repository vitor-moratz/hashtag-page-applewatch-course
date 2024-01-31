const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagens = [
    document.getElementById('0-imagem-miniatura'),
    document.getElementById('1-imagem-miniatura'),
    document.getElementById('2-imagem-miniatura')
];

const opcoesCores = [
    { nome: 'Verde-cipreste', pasta: 'imagens-verde-cipreste' },
    { nome: 'Azul-inverno', pasta: 'imagens-azul-inverno' },
    { nome: 'Meia-noite', pasta: 'imagens-meia-noite' },
    { nome: 'Estelar', pasta: 'imagens-estelar' },
    { nome: 'Rosa-claro', pasta: 'imagens-rosa-claro' }
];

const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = `src/images/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
}

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    const corSelecionadaObj = opcoesCores[corSelecionada];

    tituloProduto.innerText = `Pulseira loop esportiva ${corSelecionadaObj.nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    nomeCor.innerText = `Cor - ${corSelecionadaObj.nome}`;

    imagemVisualizacao.classList.toggle('caixa-pequena', opcoesTamanho[tamanhoSelecionado] === '41 mm');
}


function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);

    const corSelecionadaObj = opcoesCores[corSelecionada];

    tituloProduto.innerText = `Pulseira loop esportiva ${corSelecionadaObj.nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    nomeCor.innerText = `Cor - ${corSelecionadaObj.nome}`;

    miniaturaImagens.forEach((miniatura, index) => {
        miniatura.src = `src/images/opcoes-cores/${corSelecionadaObj.pasta}/imagem-${index}.jpeg`;
    });

    imagemVisualizacao.src = `src/images/opcoes-cores/${corSelecionadaObj.pasta}/imagem-${imagemSelecionada}.jpeg`;
}

