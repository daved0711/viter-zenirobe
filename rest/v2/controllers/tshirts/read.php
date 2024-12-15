<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$tshirts = new Tshirts ($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("tshirtsid", $_GET)) {
  $tshirts->tshirts_aid = $_GET['tshirtsid'];
  checkId($tshirts->tshirts_aid);
  $query = checkReadById($tshirts);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($tshirts);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();