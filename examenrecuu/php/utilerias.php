<?php
  //Limpiar parámetros - contra ataques
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
  function cambioUsuario()
  {
    $respuesta = false;
    $id = GetSQLValueString($_POST["idArticulo"],"int");
    $d  = GetSQLValueString($_POST["descripcion"],"text");
    $c  = GetSQLValueString($_POST["cantidad"],"int");
    $p  = GetSQLValueString($_POST["precio"],"int");
    $u  = GetSQLValueString($_POST["unidad"],"text");
    $conexion = mysql_connect("localhost","root","");
    mysql_select_db("examenpw");
    $consulta = sprintf("update articulos set descripcion=%s,cantidad=%s,precio=%s,unidad=%s where idArticulo=%s",$d,$c,$p,$u,$id);
   
    mysql_query($consulta);
    //Si el registro se borró
    if(mysql_affected_rows()>0) 
    {
      $respuesta = true;
    }
    $arregloJSON = array('respuesta' => $respuesta );
    print json_encode($arregloJSON);
  }


  //Menú principal
  $opc = $_POST["opcion"];
  switch ($opc) {
    case 'cambio':
      cambioUsuario();
      break;
    default:
      # code...
      break;
  }
?>
