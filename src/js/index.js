
const botoes = document.querySelectorAll(".tripulacao-botao");
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        botao.classList.add("selecionado");

        desselecionarPersonagem();
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".tripulacao-botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

