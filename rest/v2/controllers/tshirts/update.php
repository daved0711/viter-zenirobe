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
  // check data
  checkPayload($data);
  // get data
  $tshirts->tshirts_aid = $_GET['tshirtsid'];
  $tshirts->tshirts_image = checkIndex($data, "tshirts_image");
  $tshirts->tshirts_title = checkIndex($data, "tshirts_title");
  $tshirts->tshirts_price = checkIndex($data, "tshirts_price");
  $tshirts->tshirts_category_id = checkIndex($data, "tshirts_category_id");
  $tshirts->tshirts_created = date("Y-m-d H:i:s");
  $tshirts->tshirts_datetime = date("Y-m-d H:i:s");
  checkId($tshirts->tshirts_aid);

//checks current data to avoid same entries from being updated
// $tshirts_name_old = checkIndex($data, 'tshirts_name_old');
// compareName($role, $role_name_old, $role->role_name);
// checkId($role->role_aid);

  // update
  $query = checkUpdate($tshirts);
  returnSuccess($tshirts, "tshirts", $query);
}

// return 404 error if endpoint not available
checkEndpoint();