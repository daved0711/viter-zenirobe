<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$tshirts = new Tshirts($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("tshirtsid", $_GET)) {
  // get data
  $tshirts->tshirts_aid = $_GET['tshirtsid'];
  checkId($tshirts->tshirts_aid);
  

  $query = checkDelete($tshirts);

  returnSuccess($tshirts, "Departments", $query);
}

// return 404 error if endpoint not available
checkEndpoint();