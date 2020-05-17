// Exemplo 1:
// Declarando um array:
let lista: number[] = [1, 2, 3]
console.log(lista[0]) // saída: 1

// Exemplo 2: (Tuplas)
let list: number[] = [1, 2, 3]
let list2: [string, number, boolean] = ['Oi', 2020, true]
console.log(list2[0]) // saída: Oi

// Exemplo 3: (enum)
enum Color {
    Vermelho = 2,
    Verde = 3,
    Azul = 5,
}
let c: Color = Color.Azul;
console.log(c) // saída: 5

// Exemplo 4: (Any)

let semCerteza: any = 4;
semCerteza = "Pode ter uma string aqui!"
semCerteza = false
console.log(semCerteza) // saída: false

// Exemplo 4.1: (Any)

let lista3: any[] = [1, true, "string"]
lista[1] = 100 // Você pode alterar os tipos dentro de um array do tipo any.
console.log(lista) // saída: 100

// Exemplo 5: (Void)

function messagem(): void {
    console.log("Oi gente!")
}
messagem(); // Saída: Oi gente!

// Exemplo 6: (Null & Undefined)

let indefinido: undefined = undefined;
let nulo: null = null;

console.log(typeof(indefinido), typeof(nulo))