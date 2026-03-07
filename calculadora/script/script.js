//PEGANDO O DISPLAY DO HTML
const display = document.querySelector('.display')
//PEGANDO OS BOTOES
const botoes = document.querySelectorAll('button')

//NUMEROS E OPERACOES
    let primeiroNum = null
    let operador = null
    let resultado = null

//LAÇO PARA CAPTURAR TODO VALOR DOS BOTAOES, SEU PARAMETRO É UM VALOR DOS BOTAOES
botoes.forEach((botao) => {

    //ADD EVENTO NO BOTAO
    botao.addEventListener('click', () => {
        //RECEBENDO O VALOR DE DATASET DO BOTAO
        let valor = botao.dataset.value;

        // ARRAYS NUMERICOS
        const valorNumerico = ["1","2","3","4","5","6","7","8","9"]

        //GUARDANDO O PRIMEIRO VALOR E O OPERADOR
        if(valor === "+" || valor === "-" || valor === "*" || valor === "/"){
            primeiroNum = Number(display.textContent)
            operador = valor
            display.textContent = ''
            return
        }

        if(valor === "="){
            let segundoNum = Number(display.textContent)
            switch (operador) {
                case "+":
                    resultado = primeiroNum + segundoNum
                    break;
                case "-":
                    resultado = primeiroNum - segundoNum
                    break;
                case "*":
                    resultado = primeiroNum * segundoNum
                    break;
                case "/":
                    resultado = primeiroNum / segundoNum
                    break;
                default:
                    display.textContent = ""
                    break;
            }
            display.textContent = resultado
            return
        }

        //MOSTRANDO NO DISPLAY
        display.textContent += valor

        //CLEAR
        if(valor === "C"){
            display.textContent = ''
        }
    })
});
