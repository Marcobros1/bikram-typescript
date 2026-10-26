// === Tipos básicos y funciones =============================================

// Ejercicio 1
// Variables tipadas.
// Declara las variables nombre, edad y activo con los tipos adecuados.
// Asígnales valores y muestra los tres por consola. Después, prueba a
// asignar un valor de tipo incorrecto a una de ellas y observa el error que
// indica TypeScript. Deja esa asignación incorrecta comentada.

let nombre : string = "Marco";
let edad : number = 23;
let activo : boolean = true;

console.log("1. Nombre: " + nombre);
console.log("1. Edad: " + edad);
console.log("1. Activo: " + activo);

//nombre = 23; Type 'number' is not assignable to type 'string'.

// Ejercicio 2
// Lista de números.
// Crea un array precios que solo pueda contener números y guarda en él los
// valores 12.5, 30, 8.99 y 45. Crea una función sumarPrecios que reciba ese
// array y devuelva la suma de sus elementos.

let arrayOfNumbers : number[] = [12.5,30,8.99,45];

function sumPrices(prices : number[]) : number{
    let sum : number = 0;
    prices.forEach(price => {
        sum += price;
    });
    return sum;
}

console.log("2. " + sumPrices(arrayOfNumbers));

// Ejercicio 3
// Función de presentación.
// Crea una función presentar que reciba un nombre obligatorio y un apellido
// opcional. Debe devolver un texto como "Hola, Ana Pérez". Si no se indica
// apellido, debe devolver "Hola, Ana".
// OJO: "opcional" en TS es parámetro con ? → su tipo es string | undefined.

function presentar(name : string, surname ?: string) : string{
    let sentence : string = "Hola, " + name;

    if (surname !== undefined) {
        sentence += " " + surname;
    }

    return sentence;
}

console.log("3. " + presentar("Ana","Pérez"));
console.log("3. " + presentar("Ana"));

// Ejercicio 4
// Calcular descuento.
// Crea una función calcularDescuento que reciba precio y porcentaje, ambos de
// tipo number, y devuelva el precio con el descuento aplicado. Por ejemplo,
// calcularDescuento(100, 20) debe devolver 80.

function calcularDescuento(price: number, percentage: number): number{
    return(price - (price * percentage / 100));
}

console.log("4. " + calcularDescuento(100,20));

// Ejercicio 5
// Identificadores.
// Crea una función mostrarId que acepte un identificador que pueda ser string
// o number. Si recibe un texto, muéstralo en mayúsculas. Si recibe un número,
// muestra el número con dos decimales. Prueba la función con "usr-25" y 25.
// OJO: con la unión string | number, TS no te deja llamar a toUpperCase() ni
// a toFixed() sin comprobar antes el tipo (typeof) — ése es el ejercicio.

function mostrarId(id : string | number) : void{
    switch(typeof id){
        case "string": console.log("5. " + id.toUpperCase()); break;
        case "number": console.log("5. " + id.toFixed(2)); break;
        default: throw new Error("No es el formato esperado");
    }
}

mostrarId("usr-25");
mostrarId(25);

// === Objetos, type e interface =============================================

// Ejercicio 6
// Objeto tipado.
// Define un type llamado Producto con las propiedades obligatorias nombre
// (string) y precio (number), y la propiedad opcional descripcion (string).
// Crea dos productos, uno con descripción y otro sin ella.

type Producto = {
    nombre : string;
    precio : number;
    descripcion?: string;
}

const jabon : Producto ={
    nombre: "Jabon",
    precio: 2,
    descripcion: "Producto de limpieza"
};
const cuchara : Producto ={
    nombre: "Cuchara",
    precio: 3,
};

console.log("6. " + JSON.stringify(jabon));
console.log("6. " + JSON.stringify(cuchara));

// Ejercicio 7
// Mostrar productos.
// Utiliza el tipo Producto del ejercicio anterior para crear una función
// mostrarProducto. Debe recibir un producto y devolver un texto con su nombre
// y precio, por ejemplo: "Teclado: 35 €". Llama a la función con los dos
// productos.

function mostrarProducto(producto : Producto): string{
    return (producto.nombre + ": " + producto.precio + "€");
}

console.log("7. " + mostrarProducto(jabon));
console.log("7. " + mostrarProducto(cuchara));

// Ejercicio 8
// Estados de una tarea.
// Crea un tipo EstadoTarea que solo permita los valores "pendiente",
// "en-proceso" y "completada". Crea una variable de ese tipo y prueba a
// asignarle "cancelada". Deja el intento incorrecto COMENTADO para que el
// archivo pueda compilar.

enum EstadoTarea {
    Pendiente = "pendiente",
    En_proceso = "en-proceso",
    Completada = "completada"
}

//EstadoTarea.cancelada; Property 'cancelada' does not exist on type 'typeof EstadoTarea'.

// Ejercicio 9
// Interfaz de persona.
// Define una interface Persona con nombre (string), edad (number) y ciudad
// opcional (string). Crea dos personas, una con ciudad y otra sin ella. Crea
// una función que reciba una persona y muestre su información.

interface Persona{
    nombre : string;
    edad : number;
    ciudad ?: string;
}

const Cris : Persona = {
    nombre : "Cristina",
    edad : 56,
    ciudad : "Madrid"
}

const Marco : Persona = {
    nombre : "Marco",
    edad : 23,
}

function mostrarPersona( persona : Persona) : void{
    console.log("9. " + JSON.stringify(persona));
}

mostrarPersona(Cris);
mostrarPersona(Marco);

// Ejercicio 10
// Catálogo de libros.
// Define una interfaz Libro con titulo, autor, paginas y disponible. Crea un
// array de al menos tres libros. Escribe una función que reciba un libro y
// devuelva true si está disponible y false si no lo está. Utiliza la función
// para mostrar los libros disponibles.

interface Libro{
    titulo : string;
    autor : string;
    paginas : number;
    disponible : boolean;
}

const books : Libro[] = [
    { titulo : "El principito", autor : "Antoine de Saint-Exupéry", paginas : 96, disponible : true },
    { titulo : "Cien años de soledad", autor : "Gabriel García Márquez", paginas : 471, disponible : false },
    { titulo : "Clean Code", autor : "Robert C. Martin", paginas : 464, disponible : true },
];

function availableBook(book : Libro) : boolean{
    return book.disponible;
}

books.forEach(book => {
    console.log("10. " + book.titulo + " " + (availableBook(book) ? "is available" : "is not available"));
});

// === Uniones, unknown y tipos utilitarios ==================================

// Ejercicio 11
// Datos que pueden faltar.
// Crea una función buscarUsuario que reciba un identificador numérico. Si el
// identificador es 1, debe devolver "Ana"; para cualquier otro identificador,
// debe devolver undefined. Llama a la función y comprueba si el resultado
// existe antes de convertirlo a mayúsculas.

function buscarUsuario(id : number) : string | undefined{
    if (id === 1) return "Ana";
    return undefined;
}

const usuario : string | undefined = buscarUsuario(1);
if (usuario !== undefined) {
    console.log("11. " + usuario.toUpperCase());
}

const otro : string | undefined = buscarUsuario(2);
if (otro !== undefined) {
    console.log("11. " + otro.toUpperCase());
} else {
    console.log("11. Usuario no encontrado");
}

// Ejercicio 12
// Comprobar un unknown.
// Declara una variable dato de tipo unknown y asígnale primero un texto.
// Comprueba con typeof si es un texto antes de utilizar toUpperCase().
// Después, cambia el valor a un número y comprueba que tu código sigue
// siendo seguro.

let iDontknow : unknown;
iDontknow = "I dont know";
if(typeof iDontknow === "string") console.log("12. " + iDontknow.toUpperCase());

iDontknow = 12;
if(typeof iDontknow === "string") {
    console.log("12. " + iDontknow.toUpperCase());
} else {
    console.log("12. No es un texto, así que ni intenta toUpperCase: ", iDontknow);
}

// Ejercicio 13
// Actualizar parcialmente un usuario.
// Define un tipo Usuario con id, nombre, email y edad. Crea un objeto cambios
// de tipo Partial<Usuario> que modifique únicamente el email. Crea otro
// objeto resumen de tipo Pick<Usuario, "id" | "nombre"> con solo el
// identificador y el nombre.

type Usuario = {
    id: number,
    nombre: string,
    email: string,
    edad: number
}

const cambios: Partial<Usuario> = {
  email: "nuevo@example.com"
};


type UsuarioResumen = Pick<Usuario, "id" | "nombre">;

const resumen: UsuarioResumen = {
  id: 1,
  nombre: "Ana"
};

console.log("13. " + JSON.stringify(cambios));
console.log("13. " + JSON.stringify(resumen));

// Ejercicio 14
// Usuario público.
// A partir del tipo Usuario del ejercicio anterior, crea un tipo UsuarioPublico
// utilizando Omit para excluir la propiedad email. Crea un objeto de ese tipo
// sin incluir el email.

type UsuarioSinEmail = Omit<Usuario, "email">;

const usuarioPublico: UsuarioSinEmail = {
  id: 1,
  nombre: "Ana",
  edad: 25
};

console.log("14. " + JSON.stringify(usuarioPublico));

// Ejercicio 15
// Configuración obligatoria y de solo lectura.
// Define una interfaz Configuracion con las propiedades opcionales tema e
// idioma. Crea una variable configuracionCompleta de tipo
// Required<Configuracion> e incluye ambas propiedades. Después, crea un
// usuario de tipo Readonly<Usuario> e intenta cambiar su nombre; deja el
// intento incorrecto COMENTADO.

interface Configuracion {
  tema?: string;
  idioma?: string;
}

const configuracion: Required<Configuracion> = {
  tema: "oscuro",
  idioma: "es"
};

const usuarioLectura: Readonly<Usuario> = {
  id: 1,
  nombre: "Ana",
  email: "ana@example.com",
  edad: 25
};

// usuarioLectura.nombre = "Lucía"; Cannot assign to 'nombre' because it is a read-only property.

console.log("15. " + JSON.stringify(configuracion));
console.log("15. " + JSON.stringify(usuarioLectura));


// === Clases, interfaces y enum =============================================

// Ejercicio 16
// Cuenta bancaria.
// Crea una clase CuentaBancaria con una propiedad privada saldo. El
// constructor debe recibir el saldo inicial. Añade un método
// ingresar(cantidad: number): void que solo ingrese cantidades positivas y un
// método consultarSaldo(): number que devuelva el saldo. Crea una cuenta,
// ingresa dinero y consulta el saldo.

class CuentaBancaria{
    private saldo: number;
    constructor(saldo : number){
        this.saldo = saldo;
    }
    ingresar(cantidad: number): void{
        if(cantidad <= 0) return;
        this.saldo += cantidad;   
    }
    consultarSaldo(): number{
        return this.saldo;
    }
}

const banco = new CuentaBancaria(0);
banco.ingresar(-10);
banco.ingresar(10);
console.log("16. Saldo del banco: " + banco.consultarSaldo());

// Ejercicio 17
// Elementos reproducibles.
// Define una interfaz Reproducible con el método reproducir(): void. Crea las
// clases Cancion y Video que implementen la interfaz. Cada clase debe mostrar
// un mensaje diferente al reproducirse. Guarda una instancia de cada clase en
// un array de tipo Reproducible y recórrelo llamando a reproducir().

interface Reproducible{
    reproducir(): void;
}

class Cancion implements Reproducible{
    reproducir(): void {
        console.log("17. Reproduciendo cancion");
    }
}
class Video implements Reproducible{
    reproducir(): void {
        console.log("17. Reproduciendo video");
    }
}

const reproduce: Reproducible[] = [new Cancion(), new Video()];
reproduce.forEach(elemento => elemento.reproducir());

// Ejercicio 18
// Estado de un pedido.
// Crea un enum llamado EstadoPedido con los estados Pendiente, Enviado y
// Entregado. Crea una función que reciba un estado y devuelva un mensaje
// distinto según el estado. Prueba la función con los tres valores.

enum EstadoPedido{
    Pendiente,
    Enviado,
    Entregado
}

function estadoActual(estado: EstadoPedido): string {
    switch (estado) {
        case EstadoPedido.Pendiente:
            return "El pedido está pendiente";
        case EstadoPedido.Enviado:
            return "El pedido ha sido enviado";
        case EstadoPedido.Entregado:
            return "El pedido ha sido entregado";
    }
}

console.log("18. " + estadoActual(EstadoPedido.Pendiente));
console.log("18. " + estadoActual(EstadoPedido.Enviado));
console.log("18. " + estadoActual(EstadoPedido.Entregado));

// === Genéricos, promesas y tipos de objetos ================================

// Ejercicio 19
// Primer elemento genérico.
// Crea una función genérica primero<T> que reciba un array de elementos de
// tipo T y devuelva el primer elemento. Si el array está vacío, debe devolver
// undefined. Prueba la función con un array de números y otro de textos.

function primero<T>(elements: T[]): T | undefined {
    return elements[0];
}

const numbers : number[] = [1,2,3,4];
const letters : string[] = ["A","B","C","D"];

console.log("19. " + primero(numbers));
console.log("19. " + primero(letters));

// Ejercicio 20
// Registro de puntuaciones y promesa.
// Crea un tipo Puntuaciones utilizando Record<string, number> y guarda las
// puntuaciones de al menos tres alumnos. Después, crea una función
// obtenerMensaje de tipo async que devuelva una promesa de texto
// (Promise<string>). La función debe devolver un mensaje que incluya el nombre
// del alumno con la puntuación más alta. Llama a la función y muestra el
// resultado con .then() o utilizando await dentro de otra función async.

type Puntuaciones = Record<string, number>;

const scores: Puntuaciones = {
    Ana: 85,
    Marco: 92,
    Cristina: 78
};

// async: la función SIEMPRE devuelve una promesa — por eso el retorno se
// declara Promise<string> aunque devolvamos un string "pelado" dentro.
async function obtenerMensaje(puntuaciones: Puntuaciones): Promise<string> {
    const alumnos = Object.keys(puntuaciones);
    let mejorAlumno = alumnos[0];

    // Recorremos las claves y nos quedamos con la mayor puntuación
    for (const alumno of alumnos) {
        if (puntuaciones[alumno] > puntuaciones[mejorAlumno]) {
            mejorAlumno = alumno;
        }
    }

    return "El alumno con la puntuación más alta es " + mejorAlumno + " (" + puntuaciones[mejorAlumno] + " puntos)";
}

console.log("20. Calculando puntuaciones...");
// Se consume con .then() porque es una promesa (también valdría await
// dentro de otra función async, como dice el enunciado).
obtenerMensaje(scores).then((mensaje) => console.log("20. " + mensaje));
