<?php
  require 'jsonwrapper.php';
  $dir = "../images/media/gallery/";
  require 'connect.php';

  $it = new DirectoryIterator($dir);


  foreach ($it as $fileinfo) {
      if ($fileinfo->isFile()) {
          $src = $fileinfo->getFilename();
          $desc = $auteur = "";
          $sql = "SELECT commentaire, auteur FROM `ouestamericain_commentaire` WHERE image=\"".$src."\"";
          $req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error());

          while ($row = mysql_fetch_assoc($req)) {
            $desc = $row["commentaire"];
            $auteur = $row["auteur"];
          }

          $files[] = array('src' => 'images/media/gallery/'.$src, 'file' => $src, 'desc' => $desc, 'auteur' => $auteur);
      }
  }
  
  header('Content-type: application/json');
  echo json_encode($files);

  exit(0);
?>