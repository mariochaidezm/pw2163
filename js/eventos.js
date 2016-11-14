// DOM = Modelo de objetos del documento
var inicio = function() //Main
{
	var dameclic = function()
	{
		alert("Le di clic a un boton");
	}
	$("#DameClic").on("click",damelic);
}

// las funciones anonimas no tienen nombre y solo se ejecutan una vez a diferencia de las que tienen
//nombre se pueden ejecutar N veces

//Inicializar nuestro documento
// $ ("document").on("ready",function(){
// 	//Codigo o mas funciones

// });

//Inicializar nuestro documento
$ ("document").on("ready",inicio);