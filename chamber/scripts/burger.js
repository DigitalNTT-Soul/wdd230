const burger = document.querySelector('#burger');
const navi = document.querySelector('.navi');

burger?.addEventListener('click', () => {
    navi?.classList.toggle('show');
    burger?.classList.toggle('show');
});