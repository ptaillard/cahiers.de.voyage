<?php
	$serveur     = "localhost";
	$utilisateur = "cdv";
	$motDePasse  = "CZed2MvPe23QMUav";
	$base        = "cahiers_de_voyage";
	mysql_connect($serveur, $utilisateur, $motDePasse);
	mysql_select_db($base) or die("Impossible de se connecter : " . mysql_error());
?>