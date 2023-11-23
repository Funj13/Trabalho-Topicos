
var listCtts = [];

function validar_contato(){
  
  var nome = document.getElementById("nome");
  var tel_fixo = document.getElementById("telefone_fixo");
  var email = document.getElementById("email");
  var apelido = document.getElementById("apelido");
  var tel_cell = document.getElementById("celular");
  var ender = document.getElementById("endereco");
  //verificar se os campos estao vazios
  if(nome.value === '' || email.value === '' || tel_fixo.value === '' || apelido.value === '' || tel_cell.value === '' || ender.value === ''){
      alert("PREENCHA OS CAMPOS VAZIOS .");
      event.preventDefault();
      return false;
  }
  // var nomeRegex = /^[A-Za-z]+$/
  // // if (!nomeRegex.test(nome.value)){
  // //     alert("nome Invalido!");
  // //     nome.focus();
  // //     event.preventDefault();
  // //     return false;
  // // }
  var numeroRegex = /^[0-9]+$/
  if (!numeroRegex.test(tel_cell.value)){
    alert("numero de telefone celular Invalido!");
    tel_cell.focus();
    event.preventDefault();
    return false;
}
if (!numeroRegex.test(tel_fixo.value)){
    alert("numero de telefone fixo Invalido!");
    tel_fixo.focus();
    event.preventDefault();
    return false;
}
  let emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email.value)){
      alert("Email Invalido!");
      email.focus();
      event.preventDefault();
      return false;
  }
  SaveCtt();
}

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
  deletElement = listCtts = [];
  deletElement.remove();

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
