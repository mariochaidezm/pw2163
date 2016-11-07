//variable global.
var operador = "";


function operadores(ope) {
	operador = ope;
}
function numeros(num)
{
	if(operador == "") //Escribir en el operando1
		//guardamos el valor del operando 1
		var valor = document.calculadora.operando1.value;
		if(valor=="0")
		{
			document.calculadora.operando1.value = "";
		}
	document.calculadora.operando1.value = document.calculadora.operando1.value + num;

	

	}
else{ //escribir el operando2
		//guardamos el valor del operando 2
		var valor = document.calculadora.operando2.value;
		if(valor=="0")
		{
			document.calculadora.operando2.value = "";
		}
	document.calculadora.operando2.value = document.calculadora.operando2.value + num;
}
function igual() {
	// body...
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	var valor1 = 0;
	document.calculadora.resultado = eval(valor1+operador+valor2);
}

function limpiar()
{
	operador = "";
	document.calculadora.operando1.value = 0;
	document.calculadora.operando2.value = 0;
	document.calculadora.resultado.value = 0;
}