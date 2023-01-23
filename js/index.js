// Ejercicio 1
// var ensaladaDeFrutas = ["Rambutan", "Pitaya", "Carambola", "Achiote", "Sandia"];

// Ejer. 2
// let ensaladaDeFrutas = ["Rambutan", "Pitaya", "Carambola", "Achiote", "Sandia"];


// for (let i = 0; i < ensaladaDeFrutas.length; i++) {
//     console.log(`Las frutas que hay en la ensalada son: ${ensaladaDeFrutas[i]} `)
// }
// console.log("Lo que quiera poner:" + la variable)

// Ejer .2
// var edades = [3, 36, 47, 29, 33, 7];
// var promedio = 0

// for (var i = 0; i < edades.length; i++) {
//     Math.floor(promedio += edades[i] / edades.length);


// }
// console.log(promedio)





// Ejercicio 3: Mis amigos.
// let amigos = ["Ryan", "Kieran", "Mark", "Miguel"];




// for (var i = 0; i < amigos.length; i++) {
//     // esta es la condicion que deseo que se cumpla, linea 36.
//     if (amigos[i].length < 5) {
//         console.log(amigos[i]);

//     }
// }
// Esta linea(37) me muestra amigos con los nombres

// /Ejercicio 4: Métodos de arrays.
// Practiquemos los métodos de arrays. Dado el siguiente array:
// Instrucciones:
// 1. Agregue al final del array un nuevo producto "shampoo"
// 2. Elimine el primer producto del array
// 3. Consulta el largo del array y muestralo por la consola.
// 4. Consulta si existe el elemento "shampoo" a través del método indexOf()

// const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
// listaDeSuper.push('shampoo');
// listaDeSuper.shift()
// console.log(listaDeSuper.length);
// console.log(listaDeSuper);
// console.log(listaDeSuper.indexOf("shampoo"));
// linea 56 para saber si existe en el índice el Shampoo


// Ejercicio 5: Mi primera función
// Declara una función llamada saludo() que muestre una alerta de Bienvenida al visitante al
// invocar por la consola del navegador.
// function saludo() {
//     alert("Bienvenida");
// }
// saludo();

// Ejercicio 6: Calculando el mayor
// 1. Declara una función que se llama calculoMayor() y pásale como parámetros(num1, num2).
// 2. Dentro de la función muestra una alerta que diga quién de los números ingresados
// es mayor.En caso de ser iguales, tendrá que indicarlo a través de una alerta
// también.
// 3. Invoca la función y llena los argumentos con los números que desees.

// function calculoMayor(num1, num2) {
//     if (num1 < num2) {
//         alert(num2 + "  mayor que  " + num1)
//     } else if (num2 < num1) {

//         alert(num1 + "  mayor que  " + num2)
//     } else if (num1 === num2) {

//         alert(num2 + "  es igual al  " + num1)
//     }
// }
// console.log(calculoMayor(3, 3));

// otra forma: `${num1} mayor que ${num2}`

// Ejercicio 7: Mis amigos.
// 1. Declara una función que se llame filtrarAmigos() y pásale como parámetro (arr).
// 2. La función deberá filtrar el arreglo y devolver uno nuevo con el nombre de sus
// amigos. Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro que es
// amigo! De lo contrario, no lo son.
// const amigo1 = [“Ryan”, “Kieran”, “Mark”, “Miguel”]
// const amigo2 = [“Ringo”,”Jhon”,”Paul”,”George”,”Ada”,”Marie”]
// El resultado esperado para amigo1 es [“Ryan”, “Mark”]
// El resultado esperado para amigo2 es [”Jhon”,”Paul”]

// const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
// const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"]

// function filtrarAmigos(arr) {

//     for (var i = 0; i < arr.length; i++) {
//         // esta es la condicion que deseo que se cumpla
//         if (arr[i].length === 4) {
//             console.log(arr[i]);
//         }
//     }
// }
// // filtrarAmigos()


// filtrarAmigos(amigo1);
// filtrarAmigos(amigo2);

// Esta linea me muestra amigos con los nombres




// Ejercicio 8: Tirar dados.
// 1. Crea un función tirarDado() que cuando sea ejecutada en la consola tire un
// resultado aleatorio del siguiente array: const dado = [1,2,3,4,5,6];
// 2. Deberás codear dentro del bloque de la función, el lanzamiento aleatorio a través de
// un math.ramdom (pregúntale a san Google como funciona este señor).

// const dado = [1, 2, 3, 4, 5, 6];

// function tirarDado() {
//     let random = dado[Math.floor((Math.random() * dado.length))];

//     console.log(random);


// }
// tirarDado();



// Ejercicio 9: Creando y consultando un objeto
// Crea un objeto con el nombre toDoList debería tener las siguientes propiedades y valores:
// ● tipo de tarea: un string que diga "Compras" (ojo con los espacios en el nombre de la
// propiedad, tienes que poner entre comillas si tiene espacios)
// ● dia: un string que indique el día a realizar la tarea.
// ● productos: un array con los nombres de los productos.
// ● cantidad de productos: un número que indica la cantidad de productos de las
// compras. (Recuerda los espacios en el nombre de la propiedad)
// ● estado: "pendiente"
// ● notificacion: un método(una función) que haga una alerta con el siguiente mensaje
// "Esta tarea tiene una prioridad urgente!".
// Ahora desde la consola extrae estos valores de las siguientes formas:
// 1. El día de la compra usando dot notation.
// 2. El tipo de tarea usando bracket notation.
// 3. Extrae la cantidad de productos usando bracket notation.
// 4. Ejecuta el método (función) de la propiedad notificación (tienes que extraerlo del objeto y
// recuerda que es una función).

// let toDoList = {
//     "tipo de tarea": 'Compras',
//     "dia": "20 / 08 / 258347",
//     "productos": ["pro1", "pro2"],
//     "cantidad de productos": "12",
//     "estado": "pendiente",
//     "notification": function() {
//         alert("Esta tarea tiene una prioridad urgente!")
//     }
// };
// console.log((toDoList.dia));
// console.log((toDoList["tipo de tarea"]));
// console.log((toDoList["cantidad de productos"]));


// (toDoList.notification())

// Ejercicio 10: Consultando valores.
// Muchas veces vamos a tener estructuras más complejas de objetos y nosotros vamos a
// tener que acordarnos de todos los conceptos que hemos visto hasta ahora. Copia y pega
// esto en tu archivo JS
const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhumanreflexes "]
        }
    ]
}
// Consultemos por consola los siguientes valores:
// 1. Consulta el valor ("Super Hero Squad") de la propiedad squadName.
// 2. Consulta el valor que dice "Madame Uppercut" (ayuda:
// objeto-propiedad-arreglo-propiedad).
// 3. Consulta el valor que dice "Superhuman reflexes".
// 4. Consulta el valor "39" de la propiedad age de Madame Uppercut.


console.log(superHeroes.squadName);
console.log(superHeroes.members[1].name);
console.log(superHeroes.);