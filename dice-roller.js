/* retorna um número aleatório */

// function rollOfDice() {
//     return Math.random()
//}

/* retorna um número decimal entre 0-inclusivo e 1-exclusivo. */

// function rollOfDice() {
//     return Math.random()
// }

/* Para um dado de 6 lados, precisamos de um número inteiro de 1 a 6. Multiplicando por teríamos um número decimal aleatório entre 0-inclusivo e 6-exclusivo. */

// function rollOfDice() {
//     return Math.random()*6
// }

/* Próxima etapa, obter valores inteiros:
Se 0 ≤ x <1, retorna 1
Se 1 ≤ x <2, retorna 2
Se 2 ≤ x <3, retorne 3
Se 3 ≤ x <4, retorna 4
Se 4 ≤ x <5, retorne 5
Se 5 ≤ x <6, retorne 6 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor */
function rollOfDice() {
    return Math.floor(Math.random() * 6 + 1);
}

function returnResult() {

    let resultado = document.getElementById("container-resultado");
    resultado.innerHTML = '';
    let grafico = document.getElementById("estatistica");
    grafico.innerHTML = '';
    /* Soma dos valores dos dados rolados:
    dado1 + dado2 = total */

    /* Array count contendo zeros */
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    /* Após rolagem dos dados guardar valor no elemento do array de contagem (frequencia) */
    let total = [];

    /* loop até 1000 (lançamentos) */
    for (i = 0; i < 1000; i++) {
    // obter resultado após rolar os dados
    let dado1 = rollOfDice();
    let dado2 = rollOfDice();
    let soma = dado1 + dado2
    total.push(soma)
    }

    for (i = 0; i < total.length; i++) {
        if (total[i] === 2) {
            count[0] = count[0] + 1 
        } else if (total[i] === 3) {
            count[1] += 1
        } else if (total[i] === 4) {
            count[2] += 1
        } else if (total[i] === 5) {
            count[3] += 1
        } else if (total[i] === 6) {
            count[4] += 1
        } else if (total[i] === 7) {
            count[5] += 1
        } else if (total[i] === 8) {
            count[6] += 1
        } else if (total[i] === 9) {
            count[7] += 1
        } else if (total[i] === 10) {
            count[8] += 1
        } else if (total[i] === 11) {
            count[9] += 1
        } else {
            count[10] += 1
        }
    }
    console.log(total);  
    console.log(count);  

    for (i = 0; i < count.length; i++) {
        let paragrafo = document.createElement("p")
        paragrafo.innerHTML += `${i + 2}: ${count[i]}\n`; //interpolação
        resultado.appendChild(paragrafo);
    } 


    for (i = 0; i < 11; i++) {
        let minhaBarra = document.createElement("div");
        minhaBarra.style.width += `${count[i]}px`;
        grafico.appendChild(minhaBarra);
    }
    
}