/*
let ambientes = parseFloat(prompt("indique cantidad de ambientes"))

class propiedad {
      constructor (nombrePropietario, direccionPropiedad, localidadPropiedad, ambientesPropiedad){
      this.nombre = nombrePropietario
      this.direccion = direccionPropiedad
      this.localidad = localidadPropiedad
      this.ambientes = ambientesPropiedad
}
}

function elegirAmbientes () {
    console.log (ambientesPropiedad)
}


const propiedad1 = new propiedad ("Gonzalez", "Independencia 280", "Merlo", 3 )
const propiedad2 = new propiedad ("Benitez", "Formosa 1108", "San antonio de Padua", 2 )
const propiedad3 = new propiedad ("Cuenca", "Riobamba 639", "Merlo", 5 )
const propiedad4 = new propiedad ("Perez", "Mitre 280", "Moron", 2 )

function recomendacion(){
  let resultados = []
  for(i=0; i< propiedades.length; i++){
    if(ambientes == propiedades[i].ambientes && localidad == propiedades[i].localidad.toLowerCase() && preferencia == propiedades[i].preferencia.toLowerCase()){
      resultados.push(propiedades[i]) 
    }
  }
  return resultados
}

let resultadoFinal = recomendacion()
console.log(resultadoFinal)


function recomendacion(paramAmbientes) {
    if (paramAmbientes == 1 || paramAmbientes == 2) {
      console.log(`Propiedad disponible ubicada en ${propiedad4.direccion}, ${propiedad4.localidad}, con ${propiedad4.ambientes} ambientes`);
    } else if (paramAmbientes == 3 || paramAmbientes == 4) {
      console.log(`Propiedad disponible ubicada en ${propiedad1.direccion}, ${propiedad1.localidad}, con ${propiedad1.ambientes} ambientes`);
    } else if (paramAmbientes == 5 || paramAmbientes == 6) {
      console.log(`Propiedad disponible ubicada en ${propiedad3.direccion}, ${propiedad3.localidad}, con ${propiedad3.ambientes} ambientes`);
    } else {
      console.log("Ingrese cantidad de ambientes validos");
    }
  }
 

  recomendacion(ambientes)
*/

/*
alquileresTemporales.splice(2,1)
console.log(alquileresTemporales)


let propiedadQuitar = prompt("Ingrese la propiedad a eliminar (casaDeCampo, quintaConPileta, departamentoCentrico)").toLocaleLowerCase()

let seleccion = alquileresTemporales.indexOf(propiedadQuitar)

if(propiedadQuitar != -1) {
       alquileresTemporales.splice(seleccion,1)
} else {
  alert("alquiler no encontrado")
}

console.log(alquileresTemporales)
console.log(alquileresTemporales.includes("casaDeCampo"))

*/

class propiedad {
  constructor (preferencia, direccion, localidad, ambientes){
  this.preferencia = preferencia
  this.direccion = direccion
  this.localidad = localidad
  this.ambientes = ambientes
}
}

let preferencia = prompt ("Ingrese su preferencia (Depto, Casa)")
let localidad = prompt ("ingrese localidad (Merlo, San antonio de Padua)").toLowerCase()
let ambientes = parseFloat (prompt("ingrese cantidad de ambientes (Hasta 6)"))


const propiedad1 = new propiedad ("Depto", "Independencia 280", "Merlo", 3 )
const propiedad2 = new propiedad ("Casa", "Formosa 1108", "San antonio de Padua", 2 )
const propiedad3 = new propiedad ("Casa", "Riobamba 639", "Merlo", 5 )
const propiedad4 = new propiedad ("Depto", "Mitre 280", "San antonio de Padua", 2 )
const propiedades = [propiedad1, propiedad2, propiedad3, propiedad4]

function recomendacion(){
let resultados = []
  propiedades.forEach(function(prop){
    if(prop.ambientes == ambientes && prop.localidad.toLowerCase() == localidad && prop.preferencia.toLowerCase() == preferencia)
      resultados.push(prop)
    })
  return resultados
}

let resultadoFinal = recomendacion()
console.log(resultadoFinal)

