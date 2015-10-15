<?php
/**
 * Class who manage Chuck norris facts
 */
class FactManagement {

    /**
     * PDO connection
     */
    private $connection = false;

    /**
     * Constructor
     */
    public function __construct() {
        require ROOT_PATH . '/db_config.php';

        // DB connection
        try {
            $this->connection = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPwd);
        } catch(Exception $e) {
            var_dump($e);
        }
    }


    /**
     * Import fact from JSON
     */
    public function import() {
        $query = "INSERT INTO facts (fact, date, vote, points) VALUES";
        foreach (self::getFactsFromJSON() as $fact) {
            $query .= "('".str_replace("'", "", $fact->fact)."', '".$fact->date."', '".$fact->vote."', '".$fact->points."'),";
        }
        $query = rtrim($query, ",");
        $this->connection->query($query);
    }


    /**
     * Get top of fact
     *
     * @param integer $limit Limit to get
     * @return array Array of facts
     */
     public function getTop($limit = 10) {
        $list = array();
        $query = "SELECT fact FROM facts ORDER BY vote DESC LIMIT $limit";
        foreach ($this->connection->query($query) as $results) {
           $list[] = $results["fact"];
        }
        return $list;
    }


    /**
     * Get randum Chuck Norris fact from JSON file
     *
     * @param int $nb number of facts
     * @return array Array of string
     */
    private static function getFactsFromJSON() {
        $file = dirname(__FILE__) . '/chuck.json';

        return json_decode(file_get_contents($file));
    }

}
