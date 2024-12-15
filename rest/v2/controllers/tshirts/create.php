<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$tshirts = new Tshirts($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$tshirts->tshirts_is_active = 1;
$tshirts->tshirts_image = checkIndex($data, "tshirts_image");
$tshirts->tshirts_title = checkIndex($data, "tshirts_title");
$tshirts->tshirts_price = checkIndex($data, "tshirts_price");
$tshirts->tshirts_category_id = checkIndex($data, "tshirts_category_id");
$tshirts->tshirts_created = date("Y-m-d H:i:s");
$tshirts->tshirts_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
// isNameExist($tshirts, $tshirts->tshirts_title);

$query = checkCreate($tshirts);

returnSuccess($tshirts, "tshirts", $query);
