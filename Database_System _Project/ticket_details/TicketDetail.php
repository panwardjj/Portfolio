<?php
include '../server.php';
$sql = "SELECT * FROM theater, showtime, movie";
$result = $connect->query($sql);
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>My Ticket</title>
	<link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" type="text/css"
		href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />
	<!-- font wesome stylesheet -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

	<!-- bootstrap core css -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

	<!-- fonts style -->
	<link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet">
	<!-- Custom styles for this template -->
	<link href="css/style.css" rel="stylesheet" />
	<!-- responsive style -->
	<link href="css/responsive.css" rel="stylesheet" />

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

	<div class="rowname">
		<h1>My Ticket</h1>
	</div>

	<!-- partial:index.partial.html -->
	<!--
Inspired by: https://dribbble.com/shots/1166639-Movie-Ticket/attachments/152161
-->
	<div class="outerticket">
		<div class="ticket">
			<div class="holes-top"></div>
			<div class="title">
			<?php 
            $str = mysqli_fetch_assoc($result)["title"];
            $values = explode('\n', $str);
            foreach ($values as $x) {
                if ($x == $values[0])
                    echo "<p class='cinemaTicket'>".$x."</p>";
                else 
                    echo "<p class='movie-title-ticket'>".$x."</p>";
            }
            ?>
			</div>
			<div class="poster">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg"
					alt="Movie: Only God Forgives" />
			</div>
			<div class="info">
				<table>
					<tr>
						<th>SCREEN</th>
						<th>ROW</th>
						<th>SEAT</th>
					</tr>
					<tr>
						<td class="bigger">18</td>
						<td class="bigger">H</td>
						<td class="bigger">24</td>
					</tr>
				</table>
				<table>
					<tr>
						<th>PRICE</th>
						<th>DATE</th>
						<th>TIME</th>
					</tr>
					<tr>
						<td>$12.00</td>
						<td>1/13/17</td>
						<td>19:30</td>
					</tr>
				</table>
			</div>
			<div class="holes-lower"></div>
			<div class="serial">
				<table class="barcode">
					<tr></tr>
				</table>
				<table class="numbers">
					<tr>
						<td>9</td>
						<td>1</td>
						<td>7</td>
						<td>3</td>
						<td>7</td>
						<td>5</td>
						<td>4</td>
						<td>4</td>
						<td>4</td>
						<td>5</td>
						<td>4</td>
						<td>1</td>
						<td>4</td>
						<td>7</td>
						<td>8</td>
						<td>7</td>
						<td>3</td>
						<td>4</td>
						<td>1</td>
						<td>4</td>
						<td>5</td>
						<td>2</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	<!-- partial -->
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
	<script src="./TicketScript.js"></script>

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