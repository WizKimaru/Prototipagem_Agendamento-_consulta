//Inicio Modal 
function modal(){
    const btnModalAbrir = document.querySelector('[data-modal="jsBtnAbrir"]');
    const btnModalFechar = document.querySelector('[data-modal="jsBtnFechar"]');
    const modalConteiner = document.querySelector('[data-modal="jsModal"]');
    
    
    btnModalAbrir.addEventListener('click', abrirModal)
    function abrirModal(){
      modalConteiner.classList.add('ativo');
    }

    btnModalFechar.addEventListener('click', fecharModal)
    function fecharModal(){
      modalConteiner.classList.remove('ativo');
    }
  }
  
  modal()
  //Fim Modal