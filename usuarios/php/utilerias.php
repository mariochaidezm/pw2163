<?
	function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
	function validaUsuario()
	{
		$u = $_POST["usuario"];
		$c = $_POST["clave"];
		$conexion = mysql_connect("localhost","root","")
		$consulta = sprintf("select * from usuarios where usuario=%s and clave=%s",);
	}
	//Menu principal
	$opc = $_POST["opcion"];
	switch ($opc) {
		case 'valida':
			validaUsuario();
			break;
		
		default:
			# code...
			break;
	}
?>