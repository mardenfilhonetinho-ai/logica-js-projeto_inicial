
alert('Bem-vindo ao jogo do número secreto!');
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log('O número secreto é: ' + numeroSecreto);
let chute;
let tentativas = 1;

// Pense num troço chato que foi fazer isso...(mesmo sendo o basico do basico kk).
while (chute != numeroSecreto) {
    chute = prompt('Digite um número entre 1 e 10:');
        if (chute == numeroSecreto) {
            let tentativasTexto = tentativas == 1 ? 'tentativa' : 'tentativas';
            alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${tentativasTexto}!`);
    }
    if (chute > numeroSecreto) { // É "``" e não "''" por que se não da erro.
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1; <-- outra forma de incrementar a variável
    tentativas++;
    }



// let tentativasTexto = tentativas == 1 ? 'tentativa' : 'tentativas'; // Moved inside the if block


// Esses comentarios são só pra eu lembrar das coisas mesmo hihihi.
// ou caso alguem veja esse codigo sei la.

