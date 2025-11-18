let nombre//var,let 
const apellido = "Campo"
document.writeln('Hola este es mi primer programa con Javascript')

nombre = prompt("Dime tu nombre: ")
//confirm("Hace calor?")
console.log("Forma 1: Hola", nombre, apellido)//tambien se concatena con coma( , )
console.log("Forma 2: Hola "+nombre+" "+apellido)
console.log(`Forma 3: Hola ${nombre} ${apellido}`)//tambien se puede concatenar dentro de ``usando $ llaves y el nombre de la constante eje: Àsi se concatena ${nombrevariable}