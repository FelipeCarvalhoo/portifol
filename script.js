let profession ;
if(profession == '' && undefined) {
console.log('Por que você não trabalha?');}else{
    if(profession == undefined) {
        console.log('Vá procurar um emprego')
    }
    console.log('Sua Profissão e '+profession);
switch(profession) {
    case 'bombeiro':
        console.log('sua camisa e vermelha')
        break;
    case 'policial':
        console.log('sua camisa e azul')
        break;
    case 'politico':
        console.log('você não usa camisas')
        break;
    default:
        console.log('Você não tem trabalho')
        break;
}}
//55