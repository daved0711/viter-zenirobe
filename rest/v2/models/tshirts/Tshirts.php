<?php


class Tshirts
{
    public $tshirts_aid;
    public $tshirts_is_active;
    public $tshirts_image;  
    public $tshirts_title;  
    public $tshirts_price;  
    public $tshirts_category_id;  
    public $tshirts_datetime;
    public $tshirts_created;

    public $category_aid;
    public $category_is_active;  
    public $category_title;
    public $category_datetime;
    public $category_created;

    public $connection;
    public $lastInsertedId;

    public $tshirts_start;
    public $tshirts_total;
    public $tshirts_search;
    
    public $category_start;
    public $category_total;
    public $category_search;
   
    public $tblTshirts;
    public $tblCategory;


    public function __construct($db)
    {
        $this->connection = $db;
     
        $this->tblTshirts = "zenorobe_tshirts";
        $this->tblCategory = "zenorobe_category";    
    }
    public function readAll()
    {
      try {
        $sql = "select * ";
        $sql .= "from ";
        $sql .= "{$this->tblTshirts} as tshirts, ";
        $sql .= "{$this->tblCategory} as category ";
        $sql .= "where category.category_aid = tshirts.tshirts_category_id ";
        $sql .= "order by tshirts.tshirts_is_active desc, ";
        $sql .= "tshirts.tshirts_aid asc ";
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
        $sql .= "{$this->tblTshirts} as tshirts, ";
        $sql .= "{$this->tblCategory} as category ";
        $sql .= "where category.category_aid = tshirts.tshirts_category_id ";
        $sql .= "order by tshirts.tshirts_is_active desc, ";
        $sql .= "tshirts.tshirts_aid asc ";
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
        $sql = "select * from {$this->tblTshirts} ";
        $sql .= "where tshirts_aid = :tshirts_aid ";
        $query = $this->connection->prepare($sql);
        $query->execute([
            "tshirts_aid" => $this->tshirts_aid,
        ]);
    } catch (PDOException $ex) {
        $query = false;
    }
    return $query;
}
public function create()
  {
    try {
      $sql = "insert into {$this->tblTshirts} ";
      $sql .= "(tshirts_is_active, ";
      $sql .= "tshirts_image, ";
      $sql .= "tshirts_title, ";
      $sql .= "tshirts_price, ";
      $sql .= "tshirts_category_id, ";
      $sql .= "tshirts_created, ";
      $sql .= "tshirts_datetime ) values ( ";
      $sql .= ":tshirts_is_active, ";
      $sql .= ":tshirts_image, ";
      $sql .= ":tshirts_title, ";
      $sql .= ":tshirts_price, ";
      $sql .= ":tshirts_category_id, ";
      $sql .= ":tshirts_created, ";
      $sql .= ":tshirts_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "tshirts_is_active" => $this->tshirts_is_active,
        "tshirts_image" => $this->tshirts_image,
        "tshirts_title" => $this->tshirts_title,
        "tshirts_price" => $this->tshirts_price,
        "tshirts_category_id" => $this->tshirts_category_id,
        "tshirts_created" => $this->tshirts_created,
        "tshirts_datetime" => $this->tshirts_datetime,

      ]);
      $this->lastInsertedId = $this->connection->lastInsertId();
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }



  public function checkName()
  {
    try {
      $sql = "select title_name from {$this->tblTitle} ";
      $sql .= "where title_name = :title_name ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "title_name" => "{$this->title_name}",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function update()
  {
    try {
      $sql = "update {$this->tblTshirts} set ";
      $sql .= "tshirts_image = :tshirts_image, ";
      $sql .= "tshirts_title = :tshirts_title, ";
      $sql .= "tshirts_price = :tshirts_price, ";
      $sql .= "tshirts_category_id = :tshirts_category_id, ";
      $sql .= "tshirts_datetime = :tshirts_datetime ";
      $sql .= "where tshirts_aid  = :tshirts_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "tshirts_image" => $this->tshirts_image,
        "tshirts_title" => $this->tshirts_title,
        "tshirts_price" => $this->tshirts_price,
        "tshirts_category_id" => $this->tshirts_category_id,
        "tshirts_datetime" => $this->tshirts_datetime,
        "tshirts_aid" => $this->tshirts_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function delete()
  {
    try {
      $sql = "delete from {$this->tblTshirts} ";
      $sql .= "where tshirts_aid = :tshirts_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "tshirts_aid" => $this->tshirts_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function active()
    {
    try {
    $sql = "update {$this->tblTshirts} set ";
    $sql .= "tshirts_is_active = :tshirts_is_active, ";
    $sql .= "tshirts_datetime = :tshirts_datetime ";
    $sql .= "where tshirts_aid  = :tshirts_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "tshirts_is_active" => $this->tshirts_is_active,
    "tshirts_datetime" => $this->tshirts_datetime,
    "tshirts_aid" => $this->tshirts_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }  
}





