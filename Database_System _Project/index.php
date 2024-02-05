<?php 
    include_once('functions.php'); 
    
    $userdata = new DB_con();

    if (isset($_POST['submit'])) {
        $fname = $_POST['fullname'];
        $uname = $_POST['username'];
        $uemail = $_POST['email'];
        $password = md5($_POST['password']);

        $sql = $userdata->registration($fname, $uname, $uemail, $password);

        if ($sql) {
            echo "<script>alert('Registor Successful!');</script>";
            echo "<script>window.location.href='signin.php'</script>";
        } else {
            echo "<script>alert('Something went wrong! Please try again.');</script>";
            echo "<script>window.location.href='signin.php'</script>";
        }
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
<style>
    body {
        background-image: url("image/wallpaper.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f9f9f9;
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 400px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333333;
            margin-bottom: 20px;
        }

        p {
            color: #666666;
            line-height: 1.5;
            text-align: center;
        }

        img {
            display: block;
            margin: 0 auto;
            width: 128px;
            height: 128px;
            margin-bottom: 20px;
        }

        form {
            text-align: center;
        }

        .form-label {
            display: block;
            text-align: left;
            margin-bottom: 5px;
            color: #666666;
        }

        .form-control {
            width: 100%;
            padding: 8px 12px;
            font-size: 14px;
            border: 1px solid #cccccc;
            border-radius: 4px;
            margin-bottom: 10px;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="mt-5"style="font-family:courier;">Register Page</h1>
        <img src="image/registered.png">
        <hr>
        <form method="post">
            <div class="mb-3">
                <label for="fullname" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullname" name="fullname">
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" onblur="checkUsernameAvailability(this.value)">
                <span id="usernameAvailability"></span>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password">
            </div>
            <button type="submit" name="submit" id="submit" class="btn btn-success">Register</button>

            <style>
            .btn-success {
            background-color: #130B2B; /* เปลี่ยนสีปุ่ม */
            border-color: #130B2B; /* เปลี่ยนสีเส้นขอบปุ่ม */
            }
            </style>

        </form>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        function checkUsernameAvailability(val) {
            $.ajax({
                type: 'POST',
                url: 'checkusername.php',
                data: 'username=' + val,
                success: function(data) {
                    $('#usernameAvailability').html(data);
                }
            });
        }
    </script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-o2nsJZ/09vO9a7npQd0i0lBMzOnqltqTYQJwhiTVXosJtpFNSlcDB2bnwCK
    CDsoSZZ5P9wJUP1DdbHSMem1GygzKLpqriTI9AisHXi3ZjzeSoFqym6P2s6JY8ztI" crossorigin="anonymous"></script>
</body>
</html>

