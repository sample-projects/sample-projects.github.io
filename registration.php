<?php

    require 'connection.php';
    $display = "none";


    if (isset($_POST['submit'])) {
        $studentId = $_POST['studentId'];
        $studentName = $_POST['name'];
        $section = $_POST['section'];
        $gender = $_POST['gender'];
        $display = "none";

        //Inserting into Database

        $sql = "INSERT INTO students VALUES ('$studentId', '$studentName', '$gender', 'null', '$section')";

        if (mysqli_query($connection, $sql)) {
            $display = "flex";
            echo '<script src="qrCode.js"></script>';
        }
        else {
            $display = "none";
        }
    }
?>
<!-- HTML Section -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <!-- <script src="qrCode.js" defer></script> -->
    <title>Register</title>
</head>
<body>
    <div class="container">
        <h1>Register</h1>
        <form class="content" method="POST" action="">
            <div class="studentId input-group">
                <label for="studentId">Student ID</label>
                <input type="text" name="studentId" id="studentId" required>
            </div>
            <div class="name input-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="gender input-group">
                <label for="gender">Gender</label>
                <input type="radio" name="gender" id="gender" value="male" checked required>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-male" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="var(--male-color)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="10" cy="14" r="5"></circle>
                    <path d="M19 5l-5.4 5.4"></path>
                    <path d="M19 5h-5"></path>
                    <path d="M19 5v5"></path>
                </svg>
                <input type="radio" name="gender" id="gender" value="female">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-female" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="var(--female-color)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="9" r="5"></circle>
                    <path d="M12 14v7"></path>
                    <path d="M9 18h6"></path>
                </svg>
            </div>
            <div class="section input-group">
                <label for="section">Section</label>
                <input type="text" name="section" id="section" required>
            </div>
            <input type="submit" id="submitBtn" name="submit" value="Register">
            <div class="qrContainer" style="display: <?= $display ?>">
                <p>You have successfully registered.</p>
                <img src="" alt="" id="qrImg">
            </div>
        </form>
    </div>
    <!-- <script src="script.js"></script> -->
</body>
</html>

