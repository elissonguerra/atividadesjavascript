function mostrarTabuada() {
    const numero = prompt("Digite um número para ver a tabuada:");
    
    if (numero !== null && !isNaN(numero)) {
        console.log(`Tabuada do ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    } else {
        console.log("Por favor, insira um número válido.");
    }
}

mostrarTabuada();
