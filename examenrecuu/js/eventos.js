var inicioUsuarios = function()
{
	

	
	
	
	var CambioUsuario = function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		//Recuperamos los valores del formulario y los
		//ponemos en variables locales.
		var idArticulo   = $("#txtIdArticulo").val(); 
		var descripcion  = $("#txtDescripcion").val();
		var cantidad     = $("#txtCantidad").val();
		var precio       = $("#txtPrecio").val();
		var unidad       = $("#txtUnidad").val();
		if(idArticulo!="" && descripcion!="" && cantidad!="" && precio!="" && unidad!="")
		{
			//Parámetros para el ajax
			var parametros = "opcion=cambio"+
							 "&idArticulo="+idArticulo+
							 "&descripcion="+descripcion+
							 "&cantidad="+cantidad+
							 "&precio="+precio+
							 "&unidad="+unidad+
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("producto actualizado");
	
					}
					else
						alert("No se pudo actualizar el producto");
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
				}
			});
		}
		else
			alert("Todos los campos son obligatorios");
	}


	$("#btnCambio").on("click",CambioUsuario);

}
//Evento inicial
$(document).on("ready",inicioUsuarios);





























