<?php
$conn=mysqli_connect('localhost','root','');

	if(!$conn)
	{
		echo ("connection failed:". mysqli_connect_error());
    }
   
		echo ("connected successfully");	
   


?>