<?php
  require 'jsonwrapper.php';
  require 'connect.php';
  
 
  $NomImage=$_GET['image'];
  $Comment=$_GET['comment'];
  $Auteur=$_GET['auteur'];

  print "Nom=".$NomImage;
  print $Comment;
  print $Auteur;
 
  $sql = "INSERT into `ouestamericain_commentaire` (image, commentaire, auteur) values(\"".$NomImage."\", \"".$Comment."\", \"".$Auteur."\") on DUPLICATE KEY UPDATE commentaire=\"".$Comment."\", auteur=\"".$Auteur."\"";
  $req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error());

  exit(0);
  mysql_close();
?>