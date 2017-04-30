//se crea un objeto a través del literal
var star = {};

//se crea la funcion constructora
function Star(constell, type, specclass, magnitude) {
	this.constellation = constell;
	this.type= type;
	this.spectrallClass = specclass;
	this.mag = magnitude;	
}


console.log(Star.constructor); //Me indica que el constructor es una funcion

console.log(Star.prototype); //me indica la función constructora y sus caracteristicas  y el prototype object 

//empiezo a crear los nuevos objetos 

star["polaris"] = new Star("UsaMinor","Double/Cepheidd", "F7", 2.0);
star["Castor"] = new Star("Gemini", "Multiple", "A1V", 1.58);
star["Altair"] = new Star("Aquila", "White", "A7", 0.77);


//Recorro las propiedades del objeto star.
for(prop in star){
	console.log(prop);
	console.log(star[prop].constellation);
	console.log(star[prop].type);
	console.log(star[prop].spectrallClass);
	console.log(star[prop].mag);

}