
// Ejercicio1

function numParImpar(num){
    let resultado = "par";

    if (num % 2 != 0) {
        resultado = "impar";
    }
    return resultado;
}

console.log("El número es " + numParImpar(5));