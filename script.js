const imagem = document.getElementById("imagemPrincipal");
const botaoTrocar = document.getElementById("trocarImagem");

let imagemAtual = 1;

botaoTrocar.addEventListener("click", () => {

    if (imagemAtual === 1) {
        imagem.src = "img/animacao.gif";
        imagemAtual = 2;
    } else {
        imagem.src = "img/foto.jpg";
        imagemAtual = 1;
    }

});

const botaoMensagem = document.getElementById("mostrarMensagem");
const mensagem = document.getElementById("mensagem");

botaoMensagem.addEventListener("click", () => {

    mensagem.innerHTML =
        "🚀 JavaScript funcionando com sucesso!";

    mensagem.style.marginTop = "20px";
    mensagem.style.fontSize = "20px";
    mensagem.style.color = "#00d4ff";

});