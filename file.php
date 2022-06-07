<?php
$names = $_POST['names'];
$email = $_POST['email'];
$file = fopen("f.txt","at");
fwrite($file,"\n $names:$email \n");
fclose($file);
?>