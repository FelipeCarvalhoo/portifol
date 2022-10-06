let u = document.querySelector('.mmenu');
let u1 = document.querySelector('.new-window');
let u2 = document.querySelector('.new-window');
let footer = document.querySelector('footer');

voltar()

function menuu() {
    u.style.display = 'flex';
}
function voltar() {
    u.style.display = 'none';
    u1.style.display = 'none';
}
function menuToReturn() {
    voltar();
}

function nova_tela() {
    u2.style.display = 'flex';
    u.style.display = 'none';
    footer.style.color = 'black';
}