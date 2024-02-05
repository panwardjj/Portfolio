<?php
    session_start();
    include('server.php');

    $errors = array();

    $select_seat = $_POST["seat_no"];
    echo "<br> select seat --> ".implode(",",$select_seat);
   
        
    //save to db
    foreach($select_seat as $se){
        $sql = "UPDATE seat SET seat_status='reserved' WHERE seat_no='$se'";
        $result = mysqli_query($conn, $sql);
        if($result){
            echo "<br>saved<br>";
        }
    }

?>