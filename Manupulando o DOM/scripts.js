/*
Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie o HTML e o CSS deste repositório
Crie um arquivo chamado scripts.js na sua pasta assets/js
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original
*/

const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    botao.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    if(body.classList.contains('dark-mode')){
        botao.innerHTML = 'light mode';
        h1.innerHTML = 'dark mode' + " On";
        return;
    }
    botao.innerHTML = 'dark mode';
        h1.innerHTML = 'light mode' + " On";

}

botao.addEventListener('click',changeMode);