let edad = 27;
let name1 = 'Mario';
const email = 'correo@correo.com';

console.log(edad);
console.log(name1);
console.log(email);

name1 = 'Humberto'
console.log(name1);
console.log("Hola a todos");

const result = 4 + 4;

// Arrays - Arreglos
const array = ["text", 456, true, {propiedad: "Valor"}, [1,2,3] ];
console.log(array);

//objeto
const person = {
    name1: "Carlos",
    age: 27,
    car: {
        marca: "...",
        color: "black"
    }  
};

function hello (){
    console.log(hello);
    
}

hello()

function calcular() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operador = document.getElementById("operador").value;
    let result1;

    switch (operador) {
        case "+":
            result1 = number1 + number2;
            break;
        case "-":
            result1 = number1 - number2;
            break;
        case "*":
            result1 = number1 * number2;
            break;
        case "/":
            if (number2 !== 0) {
                result1 = number1 / number2;
            } else {
                result1 = "Error: División por cero";
            }
            break;
        default:
            result1 = "Operador no válido";
    }

    document.getElementById("result1").textContent = "El resultado es: " + result1;
}
