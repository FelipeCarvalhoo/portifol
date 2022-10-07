let u = document.querySelector('.mmenu');
let u1 = document.querySelector('.new-window');
let telaInformacao = document.querySelector('.new-window');
let footer = document.querySelector('footer');
//imagens
let primeiroStatus = document.querySelector('.new-window .status1');
let texto2 = document.querySelector('.status2');
let imagem1 = document.querySelector('.image1');
let imagem2 = document.querySelector('.image2');
let imagem3 = document.querySelector('.image3');
let imagem4 = document.querySelector('.image4');
let imagem5 = document.querySelector('.image5');

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
//pegar 
let howIam = document.querySelector('.image1');
function nova_tela1() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.color = 'black';
    howIam.style.display = 'flex';
    imagem1.style.display = 'flex';

    texto2.innerHTML = '<h1>Ola meu nome é Felipe</h1><br><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quas quasi, iusto totam minus sunt non sapiente asperiores, commodi itaque beatae cupiditate perspiciatis? Quaerat molestiae nisi in? Deleniti, magni et?</p>';

}

function nova_tela2() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.display = 'none';
    howIam.style.display = 'none';
    imagem2.style.display = 'flex';

    texto2.innerHTML = '<h1>hhhhhFelipe</h1><br><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quas quasi, iusto totam minus sunt non sapiente asperiores, commodi itaque beatae cupiditate perspiciatis? Quaerat molestiae nisi in? Deleniti, magni et?</p>';

}
function nova_tela4() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.display = 'none';
    howIam.style.display = 'none';
    imagem4.style.display = 'flex';

    texto2.innerHTML = '<h1>hhhhhFelipe</h1><br><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quas quasi, iusto totam minus sunt non sapiente asperiores, commodi itaque beatae cupiditate perspiciatis? Quaerat molestiae nisi in? Deleniti, magni et?</p>';

}
function nova_tela() {
    telaInformacao.style.display = 'flex';
    u.style.display = 'none';
    footer.style.color = 'black';
    howIam.style.display = 'flex';

}
function image1(nova_tela) {
    let howIam = document.querySelector('.image1');
    status2.innerHTML = "";
}