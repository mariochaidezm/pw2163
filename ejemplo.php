
<h1>Alta de usuarios</h1>
<form action="registro_ejemplo.php" method="POST">
	<input type="hidden" name="txtOculto" value="guardaUsuario">
	<input type="text" name="txtUsuario" id="txtUsuario">
	<input type="text" name="txtNombre" id="txtNombre">
	<input type="password" name="txtClave" id="txtClave">
	<select name="txtTipo" id="txtTipo">
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
	</select>
	<input type="submit" value="Enviar">
</form>
<?php
	//conecto al servidor
	$conexion = mysql_connect("localhost","root","");  //la tercera es la contraseña vacia
	mysql_select_db("bd2163");
	$consulta = "select* from usuarios order by usuario";
	$resultado = mysql_query($consulta); //Ejecutando consulta
	$tabla = "<table border=1>";    //inicializo la variable
	$tabla.= "<tr>";				//le asigno los datos,  el punto es para concatenar
	$tabla.= "<th>Usuario</th>Nombre</th><th>Clave</th><th>Tipo</th>";
	$tabla.="</tr>";
	while ($registro = mysql_fetch_array($resultado))  //Mientras sea posible hacer esa asignacion
	{
			$tabla.="<tr>";
			$tabla.="<td>".$registro["usuario"]."</td>";
			$tabla.="<td>".$registro["nombre"]."</td>";
			$tabla.="<td>".$registro["clave"]."</td>";
			$tabla.="<td>".$registro["tipousuario"]."</td>";
			$tabla.="</tr>";
	}
	$tabla.="</table>";
	print $tabla;
?>
Fin de la conversación de chat