//creando la funcion constructora, sus propiedades son unicas en cada cilindro objeto nuevo que se vaya a crear
function cilindro(radio, altura){
	this.radio = radio;
	this.altura = altura;
	}

//aqui me dice que el constructor siempre es un función
console.log(cilindro.constructor);

//ahora el prototype object --> prototype property of constructor function 
//este console.log me indica el prototype object
console.log(cilindro.prototype);

//aqui me muestra la función constructora del objeto
console.log(cilindro.prototype.constructor);

//ahora modifico al prototype object para crear tres propiedades (area, volumen, toString), que son metodos 

cilindro.prototype = { 
	constructor : cilindro , //función constructura cilindro
	area: function(){
		return 2*Math.PI*Math.pow(this.radio,2)+2*Math.PI*this.radio*this.altura;
		}, //Propiedad que me da el área en función a las propiedades de la funcion constructora (se le dice metodo porque es un funcion)
	
	volumen: function() {
		return Math.PI*Math.pow(this.radio,2)*this.altura;
		}, // Propiedad que me da el volumen en función a las propiedades de la función constructora (se le dice metodo por ser una funcion)

	toString: function(){
		return "La altura del cilindro es: " + this.altura  + " Y tiene un radio de " + this.radio;
		} // Propiedad que me imprime el valor de las propiedades que tenga  los objetos nuevos creados con la constructor function (se le dice metodo por ser una funcion)

	}

//Se observa que el prototype es un objeto que tiene tres propiedades que son metodos
console.log(cilindro.prototype);


//Ahora creamos instancias u objetos que pertenecen a la misma class

var c1 = new cilindro(1,2);
console.log(c1);

console.log(c1.area());
console.log(c1.volumen());
console.log(c1.toString());


