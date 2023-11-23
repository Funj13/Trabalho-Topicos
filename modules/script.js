
var listCtts = [];
const table = document.getElementById('tabela');

function json(){
  // ContatoString.textContent = JSON.stringify(listCtts, null, 2);
  
}
// Validação do Formulario
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
  insertDados(nome, tel_fixo, email, apelido, tel_cell, ender);
}
// Salvar Contatos no Objeto
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
  listCtts.push(contato);
  document.getElementById("nome").value = "";
  document.getElementById("telefone_fixo").value = "";
  document.getElementById("email").value = "";
  document.getElementById("apelido").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("endereco").value = "";
// Lista JSON
  var ContatoString = JSON.stringify(listCtts);
  console.log("JSN:" + ContatoString);
}
// Inserir Dados a Página HTMl
function insertDados(nome, tel_fixo, email, apelido, tel_cell, ender) {
  var linha = table.insertRow();
  var colunaNome = linha.insertCell();
  var colunaTel_fixo = linha.insertCell();
  var colunaEmail = linha.insertCell();
  var colunaApel = linha.insertCell();
  var colunaCell = linha.insertCell();
  var colunaEnder = linha.insertCell();
  var colunaButtons = linha.insertCell();

  colunaNome.textContent = nome;
  colunaTel_fixo.textContent = tel_fixo;
  colunaEmail.textContent = email;
  colunaApel.textContent = apelido;
  colunaCell.textContent = tel_cell;
  colunaEnder.textContent = ender;

  var buttonEdit = document.createElement('button');
  buttonEdit.textContent = 'Editar';
  buttonEdit.addEventListener('click', () => EditarCtt(linha));

  var buttonDelt = document.createElement('button');
  buttonDelt.textContent = 'Excluir';
  buttonDelt.addEventListener('click', () => Delt(linha));

  colunaButtons.appendChild(buttonEdit);
  colunaButtons.appendChild(buttonDelt);
}
function EditarCtt(linha){
  listCtts[index];
  var index = linha.rowIndex - 1;
  var nome = prompt('Digite o novo Nome:', listCtts[index].nome);
  var tel_fixo = prompt('Digite o novo Telefone Fixo:', listCtts[index].tel_fixo);
  var email = prompt('Digite o novo Email:', listCtts[index].email);
  var apelido = prompt('Digite o novo Apelido:', listCtts[index].apelido);
  var tel_cell = prompt('Digite o novo Telefone Celular:', listCtts[index].tel_cell);
  var ender = prompt('Digite o novo Endereço:', listCtts[index].ender);
  listCtts[index] = { nome, tel_fixo, email, apelido, tel_cell, ender };
  attLinhaHtml(linha, nome, tel_fixo, email, apelido, tel_cell, ender);
  // json();
  var ContatoString = JSON.stringify(listCtts);
  console.log("JSN:" + ContatoString);
}
// 
function attLinhaHtml(linha, nome, tel_fixo, email, apelido, tel_cell, ender) {
  linha.cells[0].textContent = nome;
  linha.cells[1].textContent = tel_fixo;
  linha.cells[2].textContent = email;
  linha.cells[3].textContent = apelido;
  linha.cells[4].textContent = tel_cell;
  linha.cells[5].textContent = ender;
}
// Função para Deletar elemento pelo botão
function Delt(linha){
  let index = linha.rowIndex - 1;
  listCtts.splice(index, 1);
  tabela.deleteRow(linha.rowIndex);
  //json();
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
