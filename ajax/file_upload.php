<?php
    define ('SITE_ROOT', realpath(dirname(__FILE__)));


    $dossier="bryce";
    if (isset($_POST['dossier'])) {
      $dossier=$_POST['dossier'];  
    }
    
    if ($_FILES["file"]["error"] > 0)
    {
        echo "Error: " . $_FILES["file"]["error"] . "<br>";
    }
    else
    {
        echo "Upload: " . $_FILES["file"]["name"] . "<br>";
        echo "Type: " . $_FILES["file"]["type"] . "<br>";
        echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
        echo "Stored in: " . $_FILES["file"]["tmp_name"];


      if (file_exists(SITE_ROOT."/../../images/gallery/" . $dossier . "/" . $_FILES["file"]["name"]))
      {
        echo $_FILES["file"]["name"] . " already exists. ";
      }
      else
      {
        move_uploaded_file($_FILES["file"]["tmp_name"], SITE_ROOT."/../../images/gallery/" . $dossier . "/" . $_FILES["file"]["name"]);
        echo "Stored in: " . "../../images/gallery/" . $dossier . "/" . $_FILES["file"]["name"];
      }
    }
?>