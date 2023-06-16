// Cadena de texto con mi nombre : 

let nombre = "Fernanda Belén ";
console.log(nombre)


// Cadena de texto con mi apellido : 
let apellido = "Morales"
console.log(apellido)

//Cadena de texto que se llame estudiante concantenando mi nombre y apellido con un espacio entre medias.

let estudiante = nombre + "" + apellido;
console.log(estudiante)

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas.

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus= estudiante.toLowerCase();
console.log(estudianteMinus)

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let letrasEstudiante = estudiante.length;
console.log(letrasEstudiante)

//Una variable que contenga la primera letra del Nombre

let letraNombre = nombre.charAt(0);
console.log(letraNombre)

//Otra variable que contenga la última letra del Apellido

let letraApellido = "Morales"
console.log(letraApellido.charAt(6))

//Una cadena de texto que elimine los espacios de la variable "estudiante"

let cadenaEstudiante = estudiante.trim();
console.log(estudiante)

//Una variable booleana que diga si el Nombre esta contenido en la variable "estudiante"
let contenidoEstudiante = (estudiante.includes('Nombre'))
console.log(contenidoEstudiante)
