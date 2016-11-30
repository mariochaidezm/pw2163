var inicioUsuarios = function()
{
	var validaUsuario = function()
	{
		//javascript se conecta a php y este devuelve un JSON
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//preparar los parametros para AJAX
		var parametros = "opcion=valida"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random();

		//validamos
		//validamos que no esten vacios
		if(usuario!="" && clave !="")
		{
			//Hacemos la peticion remota
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/utilerias.php",
			data:parametros,
			success:function(response){
				//si todo sale bien
				if(response.respuesta == true)
				{
					$("#entradaUsuario").hide("slow");
					$("nav").show("slow");   //aiudaaaaaa
				}
				else
				{
					alert("Datos incorrectos :(");
				}
			},
			error:function(xhr,ajaxOptions,thrownError) {
				//si todo sale mal
			}
		});
		}
		else
		{
			alert("Usuario y clave son obligatorios")
		}
	}
	$("#btnValidaUsuario").on("click",validaUsuario)
	var teclaClave = function(tecla)
	{
		if(tecla.which == 13) //Tecla Enter.  Enter 10-Retorno de carro   13-Avance de linea
		{
			validaUsuario(); //Funcion que valida usuario.
		}
	}
	//keypress: se ejecuta cada vez que presiono una tecla sobre el input.
	$("#txtClave").on("keypress",teclaClave);
}

//Evento inicial
$(document).on("ready",inicioUsuarios);




































