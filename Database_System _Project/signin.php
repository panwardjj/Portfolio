<?php 
    session_start();
    include_once('functions.php'); 
    $userdata = new DB_con();

    if (isset($_POST['login'])) {
        $uname = $_POST['username'];
        $password = md5($_POST['password']);

        $result = $userdata->signin($uname, $password);
        $num = mysqli_fetch_array($result);

        if ($num > 0) {

            $_SESSION['id'] = $num['cust_id'];
            $_SESSION['fname'] = $num['fullname'];
            
            echo "<script>alert('Login Successful!');</script>";
            echo "<script>window.location.href='index_main.html';localStorage.setItem('cust_id', '".$num['cust_id']."');</script>";
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
    <title>Login Page</title>

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
        <h1 class="mt-5"style="font-family:courier;">Sign in</h1>
        <p style="font-family:courier;">Welcome to Longdoosiér</p>
        <img src="image/login.png">
        <hr>
        <form method="post">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password">
            </div>
            <button type="submit" name="login" class="btn btn-success">Login</button>
            <a href="index.php" class="btn btn-primary">Forgot password?</a>

            <style>
    .btn-success {
        background-color: #130B2B; /* เปลี่ยนสีปุ่ม */
        border-color: #130B2B; /* เปลี่ยนสีเส้นขอบปุ่ม */
    }

    .btn-primary {
        background-color: #130B2B; /* เปลี่ยนสีปุ่ม */
        border-color: #130B2B; /* เปลี่ยนสีเส้นขอบปุ่ม */
    }
</style>

        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
</body>
</html>