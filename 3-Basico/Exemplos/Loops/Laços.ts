let passo = 5
for (let i = 0; i < passo; i++) {
    console.log("ande um passo para o leste");
}

// Exemplo 2:

for (let i = 0; i < 5; i++) {
    console.log(`O número é ${i}`)
}

// Exemplo 3:
let i: number = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

// Exemplo 4:

let condicao = 0;

while (condicao < 3) {
    console.log(`Condição: ${condicao}`)
    condicao++;
}

// Exemplo 5:

for (i = 0; i < 5; i++) {
    console.log(`Número atual: ${i}`)
    if (i == 3) { // Iremos abordar o if ainda, não se preocupe.
        console.log("Opa encontrei o 3!")
        break;
    }
} // Quando ele encontrar o número 3 o programa vai parar.

// Exemplo 6:
let acumulo: number = 0;
let k: number = 0;
while (k < 5) {
    console.log(`Numero: ${k}`)
    k++;
    if (k == 3) {
        continue;
    }
    acumulo += k;
    console.log(`Acumulo: ${acumulo}`)
}