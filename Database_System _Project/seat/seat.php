<?php 
    session_start();
    include('../server.php'); 
    $sql = "SELECT * FROM theater, showtime, movie";
    $data = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Seats</title>
        <link rel="stylesheet" type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />
        <!-- font awesome stylesheet -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <!-- fonts style -->
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet">
        <!-- custom stylesheet -->
        <link rel="stylesheet" type="text/css" href="seat.css" />
    
    </head>

<body>

    <header>
        <input type="checkbox" name="" id="chk1">
        <div class="logo"><a href="index.html"><img src="../images/Logo.png" class="longdoo"></a></div>
        <div class="search-box">
            <form action="">
                <input type="text" name="search" id="srch" placeholder="Search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
        <ul>
        <li><a href="#" id="home">Home</a></li>
            <li><a href="#" id="my-bookings">My Booking</a></li>
            <li><a href="#" id="history">Booking History</a></li>
            <li><a href="#" id="report">Report a problem</a></li>
        </ul>
        <div class="logoutbutton">
            <button class="btn">Logout</button>
        </div>
    </header>

    <div class="movie-head">
        <div>
            <div class="movie-title">
            <?php 
            $str = mysqli_fetch_assoc($data)["title"];
            $values = explode('\n', $str);
            foreach ($values as $x) {
                if ($x == $values[0])
                    echo "<h2>".$x."<h2>";
                else 
                    echo "<h3>".$x."<h3>";
            }
            
            ?>
            </div>

            <div class="about-movie">

                <div style="width: 50px;">
                    <?php 
                     $data->data_seek(0);
                     echo "<span>" . mysqli_fetch_assoc($data)["category"] . "</span>"
                        ?>
                </div>
                <div style="width: 100px;">
                    <div class="clock1"></div>
                    <div class="clock2"></div>
                    <div class="clock3"></div>
                    <?php 
                     $data->data_seek(0);
                     echo "<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" . mysqli_fetch_assoc($data)["movie_length"] . "</span>"
                        ?>
                </div>
            </div>
        </div>

        <div class="cinema">
            <?php
            $data->data_seek(0);
         
                echo "<h4>" . mysqli_fetch_assoc($data)["theater_name"] . "</h4>";
                echo "<h4>" . mysqli_fetch_assoc($data)["theater_id"] . " | " . mysqli_fetch_assoc($data)["audio"] . " | " . "</h4>";
                echo "<h4>" . date('D j M Y', strtotime(mysqli_fetch_assoc($data)["show_date"])) . "</h4>";
            
            ?>
            <div class="cinema-time-button">
            <?php
                $data->data_seek(0);
         
                echo "<button class='time-not-selected'>" . date('H:i',strtotime(mysqli_fetch_assoc($data)["show_time"])) . "</button>";
                echo "<button class='time-selected'>" . date('H:i',strtotime(mysqli_fetch_assoc($data)["show_time"])) . "</button>";
            ?>
            </div>
        </div>
    </div>

    </div>

    <div class="row-screen">
        <div class="screen"></div>
        <div class="scr_hightlight"></div>
        <h3>SCREEN</h3>
    </div>
      
<form action="reservation.php" method="post">
    <div class="seats-box">
        <div class="row-seats">
            <div style="padding: 20px;">
                <h3>D</h3>
            </div>
            <div>
                <input type="checkbox" id="D1" value="D1" name="seat_no[]"> <label for="D1"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px"/></label>
                <input type="checkbox" id="D2" value="D2" name="seat_no[]"> <label for="D2"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D3" value="D3" name="seat_no[]"> <label for="D3"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D4" value="D4" name="seat_no[]"> <label for="D4"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D5" value="D5" name="seat_no[]"> <label for="D5"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D6" value="D6" name="seat_no[]"> <label for="D6"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D7" value="D7" name="seat_no[]"> <label for="D7"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D8" value="D8" name="seat_no[]"> <label for="D8"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D9" value="D9" name="seat_no[]"> <label for="D9"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D10" value="D10" name="seat_no[]"> <label for="D10"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D11" value="D11" name="seat_no[]"> <label for="D11"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D12" value="D12" name="seat_no[]"> <label for="D12"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D13" value="D13" name="seat_no[]"> <label for="D13"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D14" value="D14" name="seat_no[]"> <label for="D14"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="D15" value="D15" name="seat_no[]"> <label for="D15"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
            </div>
        </div>

        <div class="row-seats">
            <div style="padding: 20px;">
                <h3>C</h3>
            </div>
            <div>
                <input type="checkbox" id="C1" value="C1" name="seat_no[]"><label for="C1"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C2" value="C2" name="seat_no[]"><label for="C2"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C3" value="C3" name="seat_no[]"><label for="C3"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C4" value="C4" name="seat_no[]"><label for="C4"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C5" value="C5" name="seat_no[]"><label for="C5"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C6" value="C6" name="seat_no[]"><label for="C6"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C7" value="C7" name="seat_no[]"><label for="C7"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C8" value="C8" name="seat_no[]"><label for="C8"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C9" value="C9" name="seat_no[]"><label for="C9"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C10" value="C10" name="seat_no[]"><label for="C10"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C11" value="C11" name="seat_no[]"><label for="C11"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C12" value="C12" name="seat_no[]"><label for="C12"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C13" value="C13" name="seat_no[]"><label for="C13"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C14" value="C14" name="seat_no[]"><label for="C14"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="C15" value="C15" name="seat_no[]"><label for="C15"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
            </div>
        </div>

        <div class="row-seats">
            <div style="padding: 20px;">
                <h3>B</h3>
            </div>
            <div>
                <input type="checkbox" id="B1" value="B1" name="seat_no[]"><label for="B1"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B2" value="B2" name="seat_no[]"><label for="B2"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B3" value="B3" name="seat_no[]"><label for="B3"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B4" value="B4" name="seat_no[]"><label for="B4"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B5" value="B5" name="seat_no[]"><label for="B5"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B6" value="B6" name="seat_no[]"><label for="B6"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B7" value="B7" name="seat_no[]"><label for="B7"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B8" value="B8" name="seat_no[]"><label for="B8"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B9" value="B9" name="seat_no[]"><label for="B9"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B10" value="B10" name="seat_no[]"><label for="B10"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B11" value="B11" name="seat_no[]"><label for="B11"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B12" value="B12" name="seat_no[]"><label for="B12"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B13" value="B13" name="seat_no[]"><label for="B13"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B14" value="B14" name="seat_no[]"><label for="B14"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="B15" value="B15" name="seat_no[]"><label for="B15"><img src="../images/Seat-normal.png" alt="" class="seats" width="69px" height="60px" /></label>
            </div>
        </div>

        <div class="row-seats">
            <div style="padding: 20px;">
                <h3>A</h3>
            </div>
            <div>
                <input type="checkbox" id="A1" value="A1" name="seat_no[]"><label for="A1"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A2" value="A2" name="seat_no[]"><label for="A2"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A3" value="A3" name="seat_no[]"><label for="A3"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A4" value="A4" name="seat_no[]"><label for="A4"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A5" value="A5" name="seat_no[]"><label for="A5"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A6" value="A6" name="seat_no[]"><label for="A6"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A7" value="A7" name="seat_no[]"><label for="A7"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A8" value="A8" name="seat_no[]"><label for="A8"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A9" value="A9" name="seat_no[]"><label for="A9"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A10" value="A10" name="seat_no[]"><label for="A10"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A11" value="A11" name="seat_no[]"><label for="A11"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A12" value="A12" name="seat_no[]"><label for="A12"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A13" value="A13" name="seat_no[]"><label for="A13"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A14" value="A14" name="seat_no[]"><label for="A14"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
                <input type="checkbox" id="A15" value="A15" name="seat_no[]"><label for="A15"><img src="../images/Seat-honeymoon.png" alt="" class="seats" width="69px" height="60px" /></label>
            </div>
        </div>

    </div>


    <div class="seat-price">
        <div class="seat-price-box" style="margin-right: 20px;">
            <img src="../images/Seat-normal.png" alt="" class="seat" width="69px" height="60px" />
            <div>
                <span>Normal</span>
            </div>
            <div>
                <h3>260฿</h3>
            </div>

        </div>

        <div class="seat-price-box" style="margin-left: 20px;padding-left: 30px;padding-right: 30px;">
            <img src="../images/Seat-honeymoon.png" alt="" class="seat" width="69px" height="60px" />
            <div>
                <span>Honeymoon</span>
            </div>
            <div>
                <h3>280฿</h3>
            </div>

        </div>

    </div>

    <div class="status-box">
        <div style="margin-right: 30px;">
            <img src=" images/ellipse-reserved.png" alt="" class="status" />
            <span style="margin-right: 70px;">Reserved</span>

        </div>
        <div style="margin-left: 10px;">
            <img src="images/ellipse-selected.png" alt="" class="status" />
            <span>Selected</span>

        </div>
    </div>

    <div class="continue-button">
        <button type="submit" style="margin-right: 0px;">continue</button>
    </div><br><br>
    </form>
    <script>
        const home_btn = document.getElementById("home");
        home_btn.addEventListener('click', function onClick(event) {

            window.location = '/cs251_project/movie_detail.html'
        })

        const My_bookings_btn = document.getElementById("my-bookings");
        My_bookings_btn.addEventListener('click', function onClick(event) {

            window.location = '/cs251_project/Bookingdetail.html'
        })

        const booking_history_btn = document.getElementById("history");
        booking_history_btn.addEventListener('click', function onClick(event) {

            window.location = '/cs251_project/index_history.html'
        })

        const report_btn = document.getElementById("report");
        report_btn.addEventListener('click', function onClick(event) {

            window.location = '/cs251_project/index_report.html'
        })
    </script>


</body>

</html>