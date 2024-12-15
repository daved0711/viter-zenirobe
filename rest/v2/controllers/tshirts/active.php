<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../models/tshirts/Tshirts.php';
// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$tshirts = new Tshirts($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  //checkApiKey();
  if (array_key_exists("tshirtsid", $_GET)) {
    // check data
    checkPayload($data);
    $tshirts->tshirts_aid = $_GET['tshirtsid'];
    $tshirts->tshirts_is_active = trim($data["isActive"]);
    checkId($tshirts->tshirts_aid);
    $query = checkActive($tshirts);
    http_response_code(200);
    returnSuccess($tshirts, "tshirts", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
