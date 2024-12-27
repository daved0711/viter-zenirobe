<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clothes = new clothes($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("clothesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $clothes->clothes_aid = $_GET['clothesid'];
  $clothes->clothes_image = checkIndex($data, "clothes_image");
  $clothes->clothes_title = checkIndex($data, "clothes_title");
  $clothes->clothes_price = checkIndex($data, "clothes_price");
  $clothes->clothes_category_id = checkIndex($data, "clothes_category_id");
  $clothes->clothes_created = date("Y-m-d H:i:s");
  $clothes->clothes_datetime = date("Y-m-d H:i:s");
  checkId($clothes->clothes_aid);

  //checks current data to avoid same entries from being updated
  // $clothes_name_old = checkIndex($data, 'clothes_name_old');
  // compareName($role, $role_name_old, $role->role_name);
  // checkId($role->role_aid);

  // update
  $query = checkUpdate($clothes);
  returnSuccess($clothes, "clothes", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
