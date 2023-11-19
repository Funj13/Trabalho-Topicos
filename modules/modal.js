
document.addEventListener('DOMContentLoaded', function () {
  OpenModal('OpenModalAdic', 'openModal-Adicionar');
  OpenModal('OpenModalEditar', 'openModal-Editar');
  OpenModal('OpenModalExcluir', 'openModal-Excluir');
});

function OpenModal(Openbtn, OpenModal){
  var btn = document.getElementById(Openbtn);
  var modal = document.getElementById(OpenModal);

  btn.addEventListener('click', function () {
  modal.style.display = 'block';
  });

  var closeModalBtn = modal.querySelector('.fecharModal'); 
    closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}
