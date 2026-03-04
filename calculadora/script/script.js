//PEGANDO OS VALORES DO HTML
const display = document.querySelector('.display')
const botoes = document.querySelectorAll('button')

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const valor = botao.dataset.value;
        switch (valor) {
            case '1':
                display.textContent += `${valor}`
                break;
            case '2':
                display.textContent += `${valor}`
                break;
            case '3':
                display.textContent += `${valor}`
                break;
            case '4':
                display.textContent += `${valor}`
                break;
            case '5':
                display.textContent += `${valor}`
                break;
            case '6':
                display.textContent += `${valor}`
                break;
            case '7':
                display.textContent += `${valor}`
                break;
            case '8':
                display.textContent += `${valor}`
                break;
            case '9':
                display.textContent += `${valor}`
                break;
            case 'C':
                display.textContent += `Limpar tudo`
                break;
            case '+':
                display.textContent += `${valor}`
                break;
            case '-':
                display.textContent += `${valor}`
                break;
            case '*':
                display.textContent += `${valor}`
                break;
            case '/':
                display.textContent += `${valor}`
                break;
            case '=':
                display.textContent += `Realizar operação`
                break;
        }
    })
});
