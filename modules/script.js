

function SaveCtt(){
  var nome = document.getElementById("nome").value;
  var tel_fixo = document.getElementById("telefone_fixo").value;
  var email = document.getElementById("email").value;
  var apelido = document.getElementById("apelido").value;
  var tel_cell = document.getElementById("celular").value;
  var ender = document.getElementById("endereco").value;

  var contato ={
    "nome":nome,
    "tel_fixo":tel_fixo,
    "email": email,
    "apelido": apelido,
    "tel_cell": tel_cell,
    "endereo": ender
  }

  var ContatoString = JSON.stringify(contato);
  console.log("JSN:" + ContatoString);
  return ContatoString;
}

function exportForm(ContatoString){
  downloadArquivoJSON(ContatoString, '../contatos.json');
}

function downloadArquivoJSON(conteudo, nomeArquivo) {
  var blob = new Blob([conteudo], { type: 'application/json' });
  var url = window.URL.createObjectURL(blob);

  var a = document.createElement('a');
  a.href = url;
  a.download = nomeArquivo;

  // Adicionar o link ao corpo do documento e clicar nele
  document.body.appendChild(a);
  a.click();

  // Remover o link do corpo do documento
  document.body.removeChild(a);

  // Limpar a URL do objeto Blob
  window.URL.revokeObjectURL(url);
}

