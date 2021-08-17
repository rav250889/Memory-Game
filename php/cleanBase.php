<?php

include "connection.php";

$Easyelement = $_POST['Easyelement'];

$Mediumelement = $_POST['Mediumelement'];

$Hardelement = $_POST['Hardelement'];

if($Easyelement > 0)
{
	mysqli_query($link, "delete from easy where time > '$Easyelement'");
}

if($Mediumelement > 0)
{
	mysqli_query($link, "delete from medium where time > '$Mediumelement'");
}

if($Hardelement > 0)
{
	mysqli_query($link, "delete from hard where time > '$Hardelement'");
}

mysqli_close($link);

?>