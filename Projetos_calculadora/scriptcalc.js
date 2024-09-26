//Espaco da tela da calculadora:

let telaCalculadora = window.document.querySelector('#tela');

//Variáveis globais:
let termoOperador = ``;

function clickNoBotao(caracter) {
    if (telaCalculadora.innerHTML.length <= 10) {//Validando a quantidade de caracteres já inserida na tela.
        if (caracter === '+' || caracter === '-' || caracter === '/' || caracter === 'x') {
            if (telaCalculadora.innerHTML.length == 0) {//Verificando se o primeiro caracter inserido é um operador matemárico
                window.alert('Comece digitando, pelo menos, um número!');
                telaCalculadora.innerHTML = ``;
            } else {
                if (termoOperador === ``) {//Verificando se não está sendo adicionado mais de um operador matemático por vez, OBS: talvez isso cause problemas com calculos sequeciais após clicar no botao igual
                    //Para corrigir o problema da variável termoOperador, foi atribuido novamente uma string vazia quando clica no botão igual.
                    termoOperador = caracter;
                    telaCalculadora.innerHTML += `${caracter}`;
                } else {
                    window.alert('Erro! Esta calculadora não realiza mais de uma operação por vez!');
                    telaCalculadora.innerHTML = ``;
                }
            }
            
        } else {
            telaCalculadora.innerHTML += `${caracter}`;
        }
    } else {
        window.alert('Erro! Utilize no máximo 10 caracteres por vez!');
        telaCalculadora.innerHTML = ``;
    }
    
}

function clickNoBotaoLimpar() {
    telaCalculadora.innerHTML = ``;
    termoOperador = ``;
}

function clickNoBotaoIgual() {
    debugger
    let operacaoCompleta = telaCalculadora.innerHTML;
    let resultado = operacaoCompleta.split(termoOperador);
    let calculo;
    let termo1 = Number(resultado[0]);
    //let termo2 = Number(resultado[1]); essa era a forma anterior que eu estava trabalhando o segundo número inserido após o sinal da operação.
    let segundaParte = resultado[1];
    let termo2;
 if(segundaParte === ``) {
    /*
    Garantindo que exista pelo menos mais um número para
    completar a operação, quando não é adicionado um segundo
    número após o sinal de operação, ao aplicar o split, é criado um array
    com o index 0 sendo o primeiro número (na forma de string) e o index 1 sendo uma string vazia,
    porém o JS converte isso para zero quando aplicado Number().

    Como regra de funcionamento, a calculadora deve aceitar zero como segundo termo,
    apenas se o usuário inserir um dígito 0 na calculadora, assim a ausencia de dígito
    deve ser entendida como um erro.
    */
    alert('Digite mais um número');
    return;
 } else {
termo2 = Number(segundaParte);
 }

    switch (termoOperador) {
        case '+':
            calculo = (termo1 + termo2).toFixed(0);
            telaCalculadora.innerHTML = `${calculo}`;
            break;
        case '-':
            calculo = (termo1 - termo2).toFixed(0);
            telaCalculadora.innerHTML = `${calculo}`;
            break;

        case 'x':
            calculo = (termo1 * termo2).toFixed(0);
            telaCalculadora.innerHTML = `${calculo}`;
            break;

        case '/':
            calculo = (termo1 / termo2).toFixed(0);
            telaCalculadora.innerHTML = `${calculo}`;
            break;

        default:
                window.alert('Erro! Digite uma nova operação!');
            break;
    }
    termoOperador = ``;
}
