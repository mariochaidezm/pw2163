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
}

//Evento inicial
$(document).on("ready",inicioUsuarios);




































