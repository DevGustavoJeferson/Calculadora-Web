//PEGANDO O VALOR DO DISPLAY
let display = document.querySelector('.display')

//FUNCAO PARA OPERACOES
function operation(button){
    var valor = button.dataset.value;
    display.innerText = valor
}