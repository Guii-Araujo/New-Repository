var nomeGlobal;
var mensagemGlobal;

function conferirMesagemWhatsApp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    console.log(nome, mensagem)

    nomeGlobal = nome;
    mensagemGlobal = mensagem;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
}

function enviar(){
    var numeroTelefone = "5541995329248";

    var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=NOME: " + nomeGlobal + " - " + mensagemGlobal;

    window.open(linkWhatsApp, "_blank")

    

}