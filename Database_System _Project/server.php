<?php 

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "project";

    //create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    //check cennection
    if(!$conn){
        die("connection failed".mysqli_connect_error());
    }
    $errors = array();

    $seat_not_valid_query = "SELECT * FROM seat WHERE seat_status = 'reserved'";
    $query = mysqli_query($conn, $seat_not_valid_query);
    $result = mysqli_fetch_assoc($query);
    

    
?>