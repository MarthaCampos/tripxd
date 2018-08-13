const menuButton = document.querySelector('header img:nth-child(2)');
const menu = document.querySelector('nav');

menuButton.onclick = () => {
    if(menu.classList.contains('visible')){
        menu.classList.remove('visible');
    }else{
        menu.classList.add('visible');
    }
}