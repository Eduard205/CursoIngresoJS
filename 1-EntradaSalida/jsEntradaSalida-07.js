/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numUno;
	var numDos;
	var resul;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resul= numUno + numDos

	alert("La suma es: "+resul);	
}

function restar()
{
	var numUno;
	var numDos;
	var resul;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resul= numUno - numDos

	alert("La resta es: "+resul);	
}

function multiplicar()
{ 
	var numUno;
	var numDos;
	var resul;

	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resul= numUno * numDos

	alert("La multiplicación es: "+resul);	
}

function dividir()
{
	var numUno;
	var numDos;
	var resul;

	numUno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numDos = parseFloat(document.getElementById("txtIdNumeroDos").value);
	resul= numUno / numDos

	alert("La división es: "+resul.toFixed(2));	
}
