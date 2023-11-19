
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

function Editar(edit){
  var contato = listCtts[edit];

    // Preencher o formulário com os dados do contato selecionado
    document.getElementById("nome").value = contato.nome;
    document.getElementById("telefone_fixo").value = contato.tel_fixo;
    document.getElementById("email").value = contato.email;
    document.getElementById("apelido").value = contato.apelido;
    document.getElementById("celular").value = contato.tel_cell;
    document.getElementById("endereco").value = contato.endereco;

    // Armazenar o índice do contato que está sendo editado (pode ser útil para salvar as alterações)
    document.getElementById("editarIndice").value = edit;
}

function EditCtt() {
  var edit = document.getElementById("editarIndice").value;

  // Atualizar os dados do contato no array
  listCtts[edit] = {
      nome: document.getElementById("nome").value,
      tel_fixo: document.getElementById("telefone_fixo").value,
      email: document.getElementById("email").value,
      apelido: document.getElementById("apelido").value,
      tel_cell: document.getElementById("celular").value,
      endereco: document.getElementById("endereco").value
  };

  // Limpar o formulário
  document.getElementById("nome").value = "";
  document.getElementById("telefone_fixo").value = "";
  document.getElementById("email").value = "";
  document.getElementById("apelido").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("endereco").value = "";

}


function Delt(){

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

