let u = document.querySelector('.mmenu');

voltar()

function menuu() {
    u.style.display = 'flex';
}
function voltar() {
    u.style.display = 'none';
}
function menuToReturn() {
    voltar();
}

function nova_tela() {
    document.querySelector('.new-window').style.display = 'flex';
    voltar();
}