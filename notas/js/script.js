// var meuFormulario = document.getElementById("cadastro_professor");
// meuFormulario.addEventListener("submit", function(event) {
//   event.preventDefault();
//   cadastrar_professor();
// });

// function capturarPrimeiroNumeroInteiro() {
//   const primeiro_numero_inteiro = Number(document.getElementById("nome_prof").value);
//   return primeiro_numero_inteiro;
// }

// function capturarSegundoNumeroInteiro() {
//  const segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value); 
//  return segundo_numero_inteiro;
// }


// function somar() {
//   let primeiro_numero_inteiro = capturarPrimeiroNumeroInteiro();
//   let segundo_numero_inteiro = capturarSegundoNumeroInteiro();
//   let resultado_soma = primeiro_numero_inteiro + segundo_numero_inteiro;
//   imprimirResultadoNaTela(resultado_soma);
// }


// function imprimirResultadoNaTela(resultado_soma) {
//   document.getElementById("resultado_soma").value = resultado_soma;
// }



let vetor = [];

function adicionarValor() {
    const valor = Number(document.getElementById('valor').value);
    if (!isNaN(valor)) {
        vetor.push(valor);

        const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();
        const celula = novaLinha.insertCell(0);
        celula.textContent = valor;

        document.getElementById('valor').value = '';
        document.getElementById('valor').focus();
    }
}

function mostrarPares() {
    const tabelaPares = document.getElementById('tabelaPares').getElementsByTagName('tbody')[0];
    tabelaPares.innerHTML = ''; // Limpa a tabela antes de adicionar novos valores

    vetor.forEach(valor => {
        if (valor % 2 === 0) {
            const novaLinha = tabelaPares.insertRow();
            const celula = novaLinha.insertCell(0);
            celula.textContent = valor;
        }
    });
}
