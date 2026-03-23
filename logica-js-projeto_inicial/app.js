alert('Bem-vindo ao jogo do número secreto!')
let numeroSecreto = Math.floor(Math.random() * 10);
console.log('O número secreto é: ' + numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt('Digite um número entre 1 e 10:');
        if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto!: ${numeroSecreto}`);
    } else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    }
}


