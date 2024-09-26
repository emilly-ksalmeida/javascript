var lista = [];
var numeroInseridoForm = document.getElementById("campnumero");

function adicionar() {
  let numeroInserido = Number(numeroInseridoForm.value);
  //num precisa ser declarada dentro da function para ser
  //atualizada com novos valores sempre que o botão adicionar for acionado.
  let numeroAtualEstaNaLista = lista.indexOf(numeroInserido) >= 0;//o teste lógico pode ser feito na declaração da variável
  
  if (numeroInserido <= 0 || numeroInserido > 100) {
    //primeira parte de validação do formulário.
    window.alert("Preencha o campo com números entre 1 e 100!");
    return;
  } else {
    if (numeroAtualEstaNaLista) {
      window.alert("Não repetir números, escolha outro entre 1 e 100!");
      return;
      } else {//etapa para adição dos números numa lista(array)
      lista.push(numeroInserido);
    }
  }
  
  var localDeAdicaoNum = document.getElementById("boxnumeros");
  localDeAdicaoNum.innerHTML = ``;

  //etapa de inserir visualmente os números num campo da tela destinado à lista de números:

  for (let item of lista) {
    //a variável "item" irá receber o valor contido em cada elemento do array.
    localDeAdicaoNum.innerHTML += `<p>Valor ${item} adicionado</p>`;
  }
  //Etapa para limpar o box resultados sempre que se adicionar mais um número a lista, fará diferença quando a nova adição acontecer após uma ação de finalizar.
  let resultado1 = document.getElementById("exibirresultado");
  resultado1.innerHTML = ``;
  numeroInseridoForm.value = '';//ler observação no fim do código.
  numeroInseridoForm.focus();
}

function finalizar() {
  //let numeroInserido2 = Number(numeroInseridoForm.value);
if (lista.length === 0){
  //if (numeroInserido2 <= 0 || numeroInserido2 > 100) {
    //primeira parte de validação do formulário.
    window.alert("Preencha o campo com números entre 1 e 100!");
    return;
  } else {
    let resultado2 = document.getElementById("exibirresultado");
    let maiorNumeroDaLista = Math.max(...lista);
    let menorNumeroDaLista = Math.min(...lista);
    let soma = 0;

    for (let item of lista) {
      soma += item;
    }

    let mediaDaLista = (soma / lista.length).toFixed(1);

    resultado2.innerHTML = `Avaliação dos números:`;
    resultado2.innerHTML += `<p>Você adicionou ${lista.length} números</p>`;
    resultado2.innerHTML += `<p>O maior número adicionado foi ${maiorNumeroDaLista}</p>`;
    resultado2.innerHTML += `<p>O menor número adicionado foi ${menorNumeroDaLista}</p>`;
    resultado2.innerHTML += `<p>A média dos números adicionados é: ${mediaDaLista}</p>`;
  }
}
//observação final:
/*
Ao inserir a configuração para que o campo do formulário de inserção de números seja apagado após
clicar no botão adicionar, a função finalizar foi afetada e acionava o erro como se nenhum número
tivesse sido adicionado a lista array.
A validação feita na função finalizar estava ligada ao campo do formulário e para resolver este
problema, mudei a relação da validação de finalizar, ao invés de estar vinculada ao campo do
formulário, coloquei vinculada ao array, se o array estiver vazio a mensagem de erro aparece,
se o array já recebeu valores, então a função finalizar irá funcionar.

O código anterior está no local comentado.
*/