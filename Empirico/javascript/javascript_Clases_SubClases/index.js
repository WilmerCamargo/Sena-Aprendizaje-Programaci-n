// clases en javascript

    class Player {
        constructor (nombre, colorSombrero){
            this._nombre = nombre;
            this._colorSombrero = colorSombrero;
        }
        saltar(){}
        correr(){}
        saludar(){
            return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}, `;
        }

        get nombre(){
            return this._nombre;
        }
        set cambiarNombre(nuevoNombre){
            this._nombre = nuevoNombre;
        }
    }

    let Player1 = new Player('Mario', 'Rojo');
    let Player2 = new Player('Luigi', 'Verde');

    console.log(Player1); // Player {_nombre: 'Mario', colorSombrero: 'Rojo'}
    console.log(Player2); // Player {_nombre: 'Luigi', colorSombrero: 'Verde'}

    console.log(Player1.saludar()); // Hola soy Mario y mi sombrero es Rojo
    console.log(Player2.saludar()); // Hola soy Luigi y mi sombrero es Verde

    // GET = leer
    console.log(Player1.nombre); // Mario

    // SET = modificar
    Player1.cambiarNombre = 'peach';
    console.log(Player1.nombre); // peach 

    // Crear una SubClases, clase hija
    
     class Pet extends Player {
        constructor(nombre, colorSombrero, colorpiel){
            super(nombre, colorSombrero);
            this._colorpiel = colorpiel;
        }
        get colorpiel(){
            return this._colorpiel
        }
        set colorpiel(NuevoColorPiel){
            this._colorpiel = NuevoColorPiel;
        }
        comer(){
            return 'Yo como manzanas';
        }
        saludar(){
            return super.saludar() + 'además soy una mascota';
        }
     }

     let pet1 = new Pet('Yoshi', 'Invisible', 'Verde');
     console.log(pet1); // Pet {_nombre: 'Yoshi', colorSombrero: 'Invisible', _colorpiel: 'Verde'}
     
     console.log(pet1.nombre); // Yoshi
     pet1.cambiarNombre = 'Rufus';
     console.log(pet1.nombre); // Rufus
     
     // GET
     console.log(pet1.colorpiel); // verde
     
     // SET
     pet1.colorpiel = 'Punpura';
     console.log(pet1.colorpiel); // Punpura

     console.log(pet1.comer()); // Yo como manzanas
     console.log(pet1.saludar()); // Hola soy Rufus y mi sombrero es Invisible, 

// Cada clase puede tener propiedades, métodos y constructores. Los constructores son los métodos que se ejecutan cuando se crea un objeto de esa clase. Los métodos son las funciones que se pueden llamar desde objetos de esa clase. Las propiedades son las variables que se pueden utilizar dentro de los métodos de esa clase.