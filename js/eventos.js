// DOM = Modelo de objetos del documento
var inicio = function() //Main
{
	var dameclic = function()
	{
		$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	$("#txtnombre").val(data.results[0].name.first+" "+data.results[0].name.last)
  	$("#imgfoto").attr("src",data.results[0].picture.large)
    console.log(data.results[0].name.first+" "+data.results[0].name.last);
  }
});
	}
	$("#dameClic").on("click",dameclic);
}

// las funciones anonimas no tienen nombre y solo se ejecutan una vez a diferencia de las que tienen
//nombre se pueden ejecutar N veces

//Inicializar nuestro documento
// $ ("document").on("ready",function(){
// 	//Codigo o mas funciones

// });

//Inicializar nuestro documento
$(document).on("ready",inicio);