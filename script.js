function addItem(){
    // Obter os valores dos campos de entrada
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

    //Validar se os campos estão preenchidos
    if(!nome || !valor || !quantidade){
        alert("Preencha todos os campos")
        return;
    }

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);

    //Atribuir as celulas os valores digitados.
    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;

    //Limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";

}
    function removerItem(){
        var nomeParaRemover = document.getElementById("NomeRemover").value;
        if(!nomeParaRemover){
            alert("Digite um nome")
            return;
        }

        var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
        var linhas = tabela.getElementsByTagName("tr");

        // Percorrer sobre todas as linhas da tabela
        for(var i = 0; i < linhas.length; i++){
            // Obtendo a primeira celula (td) da linha atual
            var celulaNome = linhas[i].getElementsByTagName("td")[0];

            //Verificando se a celula nome existe e se o conteudo é igual ao que quer ser removido
            if(celulaNome && celulaNome.innerHTML === nomeParaRemover){
                tabela.deleteRow(i);
                document.getElementById("nomeParaRemover").value = "";
                return;
            }
            alert("Digite um nome existente")
            document.getElementById("nomeParaRemover").value = "";

        }
    }

    function exportarParaExcel(){
        var tabela = document.getElementById("tabela");
        var nomeArquivo = "tabela_produtos.xlsx";
        var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de Produtos"});
        XLSX.writeFile(wb, nomeArquivo);
    }