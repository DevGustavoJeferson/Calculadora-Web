//PEGANDO O DISPLAY DO HTML
const display = document.querySelector('.display')
//PEGANDO OS BOTOES
const botoes = document.querySelectorAll('button')

//LAÇO PARA CAPTURAR TODO VALOR DOS BOTAOES, SEU PARAMETRO É UM VALOR DOS BOTAOES
botoes.forEach((botao) => {
    //ADD EVENTO NO BOTAO
    botao.addEventListener('click', () => {
        //RECEBENDO O VALOR DE DATASET DO BOTAO
        let valor = botao.dataset.value;

        // ARRAYS NUMERICOS
        const valorNumerico = ["1","2","3","4","5","6","7","8","9"]


        //CONDICIONAL PARA VALIDAR OS NUMEROS, E CONVERTER DE STRING PARA INT
        if(valorNumerico.includes(valor)){
            valor = Number(valor)
        }

        //MOSTRANDO O CAPTURADO NO DISPLAY
        display.textContent += `${valor}`

        //ZERANDO A CALCULADORA SE O C FOR ACIONADO
        if(valor === "C"){
            display.textContent = ''
        }
    })
});
