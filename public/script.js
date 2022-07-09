let menuCelular = document.querySelector('.menuCelular');

menuCelular.addEventListener('click', ()=>{
    document.querySelector('header').classList.toggle('menuAtivo');
});

let divMeusConhecimentos = document.getElementById('divMeusConhecimentos');
let arrowRight = document.getElementById('arrowRight');
let marginDiv = 0;

arrowRight.addEventListener('click', ()=>{
    if(marginDiv === -585){
        marginDiv = marginDiv;
    }else{
        marginDiv = marginDiv - 97.5;
        divMeusConhecimentos.style.marginLeft = `${marginDiv}%`;
    }
});

let arrowLeft = document.getElementById('arrowLeft');

arrowLeft.addEventListener('click', ()=>{
    if(marginDiv === 0){
        marginDiv === 0;
    }else{
        marginDiv = marginDiv + 97.5;
        divMeusConhecimentos.style.marginLeft = `${marginDiv}%`;
    }
});

let divMeusProjetos = document.getElementById('divMeusProjetos');
let arrowLeftProject = document.getElementById('arrowLeftProject');
let arrowRightProject = document.getElementById('arrowRightProject');
let marginDivProject = 0;

arrowLeftProject.addEventListener('click', ()=>{
    if(marginDivProject === 0){
        marginDivProject = 0;
    }else{
        marginDivProject = marginDivProject + 97.5;
        divMeusProjetos.style.marginLeft = `${marginDivProject}%`;
    }
});

arrowRightProject.addEventListener('click', ()=>{
    if(marginDivProject === -292.5){
        marginDivProject = marginDivProject;
    }else{
        marginDivProject = marginDivProject - 97.5;
        divMeusProjetos.style.marginLeft = `${marginDivProject}%`;
    }
});

// Efeito de scroll do header

const menuItems = document.querySelectorAll('a[href^="#"]');

menuItems.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 20,
        behavior: 'smooth'
    });
};