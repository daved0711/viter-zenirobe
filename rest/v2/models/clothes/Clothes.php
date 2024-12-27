<?php


class clothes
{
  public $clothes_aid;
  public $clothes_is_active;
  public $clothes_image;
  public $clothes_title;
  public $clothes_price;
  public $clothes_category_id;
  public $clothes_datetime;
  public $clothes_created;

  public $category_aid;
  public $category_is_active;
  public $category_title;
  public $category_datetime;
  public $category_created;

  public $connection;
  public $lastInsertedId;

  public $clothes_start;
  public $clothes_total;
  public $clothes_search;

  public $other_start;
  public $other_total;
  public $other_search;

  public $category_start;
  public $category_total;
  public $category_search;

  public $tblclothes;
  public $tblCategory;


  public function __construct($db)
  {
    $this->connection = $db;

    $this->tblclothes = "zenorobe_clothes";
    $this->tblCategory = "zenorobe_category";
  }
  public function readAll()
  {
    try {
      $sql = "select * ";
      $sql .= "from ";
      $sql .= "{$this->tblclothes} as clothes, ";
      $sql .= "{$this->tblCategory} as category ";
      $sql .= "where category.category_aid = clothes.clothes_category_id ";
      $sql .= "order by clothes.clothes_is_active desc, ";
      $sql .= "clothes.clothes_aid asc ";
      $query = $this->connection->query($sql);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function readLimit()
  {
    try {
      $sql = "select * ";
      $sql .= "from ";
      $sql .= "{$this->tblclothes} as clothes, ";
      $sql .= "{$this->tblCategory} as category ";
      $sql .= "where category.category_aid = clothes.clothes_category_id ";
      $sql .= "order by clothes.clothes_is_active desc, ";
      $sql .= "clothes.clothes_aid asc ";
      $sql .= "limit :start, ";
      $sql .= ":total ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "start" => $this->other_start - 1,
        "total" => $this->other_total,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
  public function readById()
  {
    try {
      $sql = "select * from {$this->tblclothes} ";
      $sql .= "where clothes_aid = :clothes_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "clothes_aid" => $this->clothes_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
  public function create()
  {
    try {
      $sql = "insert into {$this->tblclothes} ";
      $sql .= "(clothes_is_active, ";
      $sql .= "clothes_image, ";
      $sql .= "clothes_title, ";
      $sql .= "clothes_price, ";
      $sql .= "clothes_category_id, ";
      $sql .= "clothes_created, ";
      $sql .= "clothes_datetime ) values ( ";
      $sql .= ":clothes_is_active, ";
      $sql .= ":clothes_image, ";
      $sql .= ":clothes_title, ";
      $sql .= ":clothes_price, ";
      $sql .= ":clothes_category_id, ";
      $sql .= ":clothes_created, ";
      $sql .= ":clothes_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "clothes_is_active" => $this->clothes_is_active,
        "clothes_image" => $this->clothes_image,
        "clothes_title" => $this->clothes_title,
        "clothes_price" => $this->clothes_price,
        "clothes_category_id" => $this->clothes_category_id,
        "clothes_created" => $this->clothes_created,
        "clothes_datetime" => $this->clothes_datetime,

      ]);
      $this->lastInsertedId = $this->connection->lastInsertId();
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }



  // public function checkName()
  // {
  //   try {
  //     $sql = "select title_name from {$this->tblTitle} ";
  //     $sql .= "where title_name = :title_name ";
  //     $query = $this->connection->prepare($sql);
  //     $query->execute([
  //       "title_name" => "{$this->title_name}",
  //     ]);
  //   } catch (PDOException $ex) {
  //     $query = false;
  //   }
  //   return $query;
  // }


  public function update()
  {
    try {
      $sql = "update {$this->tblclothes} set ";
      $sql .= "clothes_image = :clothes_image, ";
      $sql .= "clothes_title = :clothes_title, ";
      $sql .= "clothes_price = :clothes_price, ";
      $sql .= "clothes_category_id = :clothes_category_id, ";
      $sql .= "clothes_datetime = :clothes_datetime ";
      $sql .= "where clothes_aid  = :clothes_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "clothes_image" => $this->clothes_image,
        "clothes_title" => $this->clothes_title,
        "clothes_price" => $this->clothes_price,
        "clothes_category_id" => $this->clothes_category_id,
        "clothes_datetime" => $this->clothes_datetime,
        "clothes_aid" => $this->clothes_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function delete()
  {
    try {
      $sql = "delete from {$this->tblclothes} ";
      $sql .= "where clothes_aid = :clothes_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "clothes_aid" => $this->clothes_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function active()
  {
    try {
      $sql = "update {$this->tblclothes} set ";
      $sql .= "clothes_is_active = :clothes_is_active, ";
      $sql .= "clothes_datetime = :clothes_datetime ";
      $sql .= "where clothes_aid  = :clothes_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "clothes_is_active" => $this->clothes_is_active,
        "clothes_datetime" => $this->clothes_datetime,
        "clothes_aid" => $this->clothes_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
}
