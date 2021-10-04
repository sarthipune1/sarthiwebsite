<?php

  function getCount() {
    $file = fopen("./hitCount.txt", "r");
    $contents = fread($file, 20);

    $res = array("count" => $contents);

    echo $res;
  }

?>