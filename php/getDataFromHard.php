<?php

header("Content-type: text/xml");

header("Cache-Control: no-cache");

include "connection.php";

$url1=$_SERVER['REQUEST_URI'];

header("Refresh: 5; URL=$url1");

mysqli_query($link, "DELETE FROM hard WHERE time=0");

$sql = "SELECT user, level, time FROM hard ORDER BY time";

$result = mysqli_query($link, $sql) or die("Bad Query: $sql");

echo "<?xml version='1.0' ?>";

	echo "<EasyLevelDataBase>";

	while($row = mysqli_fetch_assoc($result))
	{
        echo "<usersData>";

		echo "<nick>".$row['user']."</nick>";

        echo "<level>".$row['level']."</level>";

        echo "<time>".($row['time']/1000)."</time>";

        echo "</usersData>";
	}

	echo "</EasyLevelDataBase>";

mysqli_close($link);

?>