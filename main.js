// Programación orientada a objetos es un modelo de programación

// 1. Clases
// 2. Objetos

// 3. Herencia
// 4. Encapsulamiento
// 5. Abstracción
// 6. Poliformismo

class Perro { // Declarando la clase Perro
    constructor(nombre,color,size){
        this.nombre = nombre
        this.color = color
        this.size = size
    }
    // Metodos
    ladrar(){
        console.log('wow')
    }
    comer(){
        console.log('estoy comiendo')
    }
    dormir(){
        console.log('zzzz')
    }

}

const perroAlbert = new Perro('xixo','pelirojo','m')
const perraNancy = new Perro('mia','beige','s')
const leo = new Perro('leo','blanco','s')



class NombreClase { // Declaramos la clase
    constructor(atributos){
        // inicilizar los atributos
    }
    // Metodos
}


// Humano, hombre/genero, edad, nombre
// comer, crecer , reproducir, morir

class Humano {
    constructor(genero, edad, nombre){
        this.genero = genero
        this.edad = edad
        this.nombre = nombre
        this.live = 100
    }
    // Metodos
    comer(){
        console.log('estoy comiendo')
    }
    reproducir(){
        console.log('vuelve mas tarde')
    }
}

const casimiro = new Humano('hombre', 30, 'casimiro')




