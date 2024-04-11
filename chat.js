/**
 * Chatlab - Conceitos de array/object em Javascript.
 *
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

// 1.
let listaMensagens = [];

// 2.
function adicionarMensagem(apelido, mensagem) {
    listaMensagens.push({
        apelido: apelido,
        mensagem: mensagem,
    });
}

// 3.
function formatarMensagens() {
    let mensagensFormatadas = "";
    for (const iterator of listaMensagens) {
        mensagensFormatadas += `
        <div class="chat-message">
            <span class="chat-message-apelido">
                ${iterator.apelido}
            </span>
            <span class="chat-message-item">
                ${iterator.mensagem}
            </span>
        </div>
        `;
    }
    return mensagensFormatadas;
}

// 4.
function atualizarHTML() {
    document.getElementById("chat-messages").innerHTML = formatarMensagens();
}

// 5.
function commitMessageClickHandler() {
    let input = document.getElementById("message-input");
    // 6.
    if (input.value.trim().length == 0) {
        input.focus();
        return;
    }
    const apelidos = ["apelido1", "apelido2", "apelido3"];
    adicionarMensagem(apelidos[listaMensagens.length % 3], input.value.trim());
    atualizarHTML();
    input.value = "";
}


// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports = {
    listaMensagens,
    adicionarMensagem,
    formatarMensagens,
    atualizarHTML,
    commitMessageClickHandler,
};
// --------------------------------
