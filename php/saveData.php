<?php

include "connection.php";

$nick = $_POST['nick'];

$level = $_POST['level'];

$time = $_POST['time'];

if($level == "Easy")
{
    mysqli_query($link, "INSERT INTO easy (user, level, time) VALUES ('$nick', '$level', '$time')");
}

if($level == "Medium")
{
    mysqli_query($link, "INSERT INTO medium (user, level, time) VALUES ('$nick', '$level', '$time')");
}

if($level == "Hard")
{
    mysqli_query($link, "INSERT INTO hard (user, level, time) VALUES ('$nick', '$level', '$time')");
}

mysqli_close($link);

?>


