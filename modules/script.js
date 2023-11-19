
var listCtts = [];


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

  var ContatoString = JSON.stringify(listCtts);
  console.log("JSN:" + ContatoString);

  listCtts.push(contato);

  document.getElementById("nome").value = "";
  document.getElementById("telefone_fixo").value = "";
  document.getElementById("email").value = "";
  document.getElementById("apelido").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("endereco").value = "";

}

function exportForm(){
  var ContatoString = JSON.stringify(listCtts);
  downloadArquivoJSON(ContatoString, '../contatos.json');
  listCtts = [];
}

function downloadArquivoJSON(content, nameArq) {
  var blob = new Blob([content], { type: 'application/json' });
  var url = window.URL.createObjectURL(blob);

  var a = document.createElement('a');
  a.href = url;
  a.download = nameArq;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);

  window.URL.revokeObjectURL(url);
}

