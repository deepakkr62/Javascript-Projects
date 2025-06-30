'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btncloseModal=document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.show-modal')
// creating function seprate and then use function name
const openModal=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',openModal)
}

btncloseModal.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal)




//using function dirct in click event
/*
for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

btncloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
*/

//Handling a esc key

document.addEventListener('keydown', function (e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        closeModal();
    };
})
