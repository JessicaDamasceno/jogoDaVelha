const endereco = "http://127.0.0.1:5501/jogo-da-velha/";
const telaBranca = `${endereco}img/tela-branca.jpg`;
const telaX = `${endereco}img/img-X.png`;
const telaO = `${endereco}img/img-O.png`;
const empateImg = "img/empate.jpg";
const vencedorX = "img/vencedor-X.png";
const vencedorO = "img/vencedor-O.png";
const enderecoImagens = [telaBranca, telaX, telaO, vencedorX, vencedorO];
const botoes = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const mostrador = document.querySelector("#mostrador-img");
const mostradorTexto = document.querySelector("#mostrador");
const placarX = document.querySelector("#placarX");
const placarO = document.querySelector("#placarO");
const restart = document.querySelector("#placar-botao");
const jogador1 = enderecoImagens[1];
const jogador2 = enderecoImagens[2];

let jogadorAtual = jogador1;
let numplayer = [];
let arrCompleto = 0;
let quemVenceu;
let numPlacarX = 0;
let numPlacarO = 0;

const imgMostrador = (imagem) => {
	mostrador.style.width = "35px";
	mostrador.src = imagem;
};
const style = (id, texto, cor, tamanho) => {
	(id.textContent = texto),
		(id.style.color = cor),
		(id.style.fontSize = tamanho);
};
const statusMostrador = (i) => {
	if (i == 0) {
		style(mostradorTexto, "Vez do jogador: ", "black", "25px");
		imgMostrador(jogadorAtual);
	} else if (i == 1) {
		style(mostradorTexto, "Vencedor ", "blue", "25px");
		imgMostrador(jogador1);
	} else if (i == 2) {
		style(mostradorTexto, "Vencedor ", "darkorange", "25px");
		imgMostrador(jogador2);
	} else if (i == 3) {
		style(mostradorTexto, "Empate ", "darkgreen", "30px");
		mostrador.style.width = "90px";
		mostrador.src = empateImg;
	}
};

const placar = () => {
	if (quemVenceu == 1) {
		numPlacarX += 1;
		style(placarX, `= ${numPlacarX}`, "blue", "30px");
	} else if (quemVenceu == 2) {
		numPlacarO += 1;
		style(placarO, `= ${numPlacarO}`, "darkorange", "30px");
	}
};

const zerarPlacar = () => {
	numPlacarX = 0;
	numPlacarO = 0;
	style(placarX, `= ${numPlacarX}`, "blue", "30px");
	style(placarO, `= ${numPlacarO}`, "darkorange", "30px");
	novoJogo();
};

const trocarJogador = () => {
	if (jogadorAtual == jogador1) {
		jogadorAtual = jogador2;
	} else {
		jogadorAtual = jogador1;
	}
	statusMostrador(0);
};

const ligarBotao = (i) => {
	if (i == "all") {
		for (i = 0; i < imagens.length; i++) {
			botoes[i].setAttribute("disabled", "disabled");
		}
	} else {
		botoes[i].removeAttribute("disabled", "disabled");
	}
};
const desligarBotao = (i) => {
	if (i == "all") {
		for (i = 0; i < imagens.length; i++) {
			botoes[i].setAttribute("disabled", "disabled");
		}
	} else {
		botoes[i].setAttribute("disabled", "disabled");
	}
};

const verificar = (i) => {
	for (i = 0; i < imagens.length; i++) {
		numplayer.splice(i, 1, imagens[i].src);
		if (numplayer[i] == enderecoImagens[1]) {
			numplayer.splice(i, 1, 1);
		} else if (numplayer[i] == enderecoImagens[2]) {
			numplayer.splice(i, 1, 2);
		} else {
			numplayer.splice(i, 1, "-");
		}
	}
	arrCompleto = numplayer.find((elem) => elem == "-");
};
const indicesIguais = (a, b, c) => {
	let valor =
		numplayer[a] == numplayer[b] &&
		numplayer[b] == numplayer[c] &&
		numplayer[(a, b, c)] != "-";
	return valor;
};
const retornarVencedor = (a) => (numplayer = numplayer[a]);

const imgVencedor = (a, b, c) => {
	verificarVencedor();
	if (quemVenceu == 1) {
		imagens[a].src = enderecoImagens[3];
		imagens[b].src = enderecoImagens[3];
		imagens[c].src = enderecoImagens[3];
	} else if (quemVenceu == 2) {
		imagens[a].src = enderecoImagens[4];
		imagens[b].src = enderecoImagens[4];
		imagens[c].src = enderecoImagens[4];
	}
};

const verificarImagens = () => {
	if (indicesIguais(0, 1, 2)) {
		retornarVencedor(0);
		imgVencedor(0, 1, 2);
	} else if (indicesIguais(3, 4, 5)) {
		retornarVencedor(3);
		imgVencedor(3, 4, 5);
	} else if (indicesIguais(6, 7, 8)) {
		retornarVencedor(6);
		imgVencedor(6, 7, 8);
	} else if (indicesIguais(0, 3, 6)) {
		retornarVencedor(0);
		imgVencedor(0, 3, 6);
	} else if (indicesIguais(1, 4, 7)) {
		retornarVencedor(1);
		imgVencedor(1, 4, 7);
	} else if (indicesIguais(2, 5, 8)) {
		retornarVencedor(2);
		imgVencedor(2, 5, 8);
	} else if (indicesIguais(0, 4, 8)) {
		retornarVencedor(0);
		imgVencedor(0, 4, 8);
	} else if (indicesIguais(2, 4, 6)) {
		retornarVencedor(2);
		imgVencedor(2, 4, 6);
	}
	verificarVencedor();
};

const verificarVencedor = () => {
	if (numplayer == 1) {
		quemVenceu = 1;
		jogadorAtual = jogador1;
		desligarBotao("all");
	} else if (numplayer == 2) {
		quemVenceu = 2;
		jogadorAtual = jogador2;
		desligarBotao("all");
	} else if (arrCompleto != "-") {
		quemVenceu = 3;
	}
};
const mostrarVencedor = () => {
	if (quemVenceu == 1) {
		statusMostrador(1);
		placar();
	} else if (quemVenceu == 2) {
		statusMostrador(2);
		placar();
	} else if (quemVenceu == 3) {
		statusMostrador(3);
	}
};
const novoJogo = () => {
	for (let i = 0; i < imagens.length; i++) {
		imagens[i].src = enderecoImagens[0];
		ligarBotao(i);
	}
	statusMostrador(0);
	numplayer = [];
	quemVenceu = "";
	arrCompleto = 0;
};
const jogar = (id) => {
	let espaco = imagens[id];
	espaco.src = jogadorAtual;
	trocarJogador();
	desligarBotao(id);
	verificar(id);
	verificarImagens();
	verificarVencedor();
	mostrarVencedor();
};
novoJogo();
