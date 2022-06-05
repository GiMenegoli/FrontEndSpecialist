// detectar o evento click - quando clicado executará uma função
document.addEventListener('click', function(e){
    // Verificando se a imagem da galeria foi clicada, para isso estou Verificando se ele possui a class gallery-item)
    // console.log(e.target);
    if (e.target.classList.contains('gallery-item')) {
       //pegar os atributos da imagem 
       const src = e.target.getAttribute('src');
       const alt = e.target.getAttribute('alt');
    //    console.log(src, alt);
    document.querySelector('.modal-title').textContent = alt;
    document.querySelector('.modal-img').src = src;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
    myModal.show();
    }
})

