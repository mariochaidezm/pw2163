var inicio Usuarios = funtion()
{
	var validaUsuario = function()
	{
		//javascript se conecta a php y este devuelve un JSON
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//preparar los parametros para AJAX
		var parametros = "opcion=valida"+
						 "&usuario="+usuario+
						 "&clave"+clave+
						 "&id="+Math.random();
		//Hacemos la peticion remota
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/utilerias.php",
			data:parametros,
			success:function(response){
				//si todo sale bien
			},
			error:function(xhr,ajaxOptions,thrownError) {
				//si todo sale mal
			}
		});
		//validamos
		//validamos que no esten vacios
		if(usuario!="" && clave !="")
		{

		}
		else
		{
			alert("Usuario y clave son obligatorios")
		}
	}
	$("btnValidaUsuario").on("click",validaUsuario)
}

//Evento inicial
$(document).on("ready",inicioUsuarios);




































