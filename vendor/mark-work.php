<?php

session_start();
require_once 'connect.php';


$user_fullname = $_POST['get-user'];
$work_mark = $_POST['get-mark'];
$work_date = $_POST['get-work-date'];

$getExist = mysqli_query($connect, "SELECT `user_fullname` AND `work_date` FROM `works` WHERE `user_fullname` = '$user_fullname' AND `work_date` = '$work_date' ");
$existCheck = mysqli_num_rows($getExist);

if($existCheck == 0) {
    header('Location: ../admin-account.php');
    $_SESSION['message'] = "<script>alert('Ученик не загружал работу в этот день!')</script>";
} else {
    mysqli_query($connect, "UPDATE `works` SET `work_mark` = '$work_mark' WHERE `user_fullname` = '$user_fullname' AND `work_date` = '$work_date' ");
    header('Location: ../admin-account.php');
    $_SESSION['message'] = "<script>alert('Оценка выставлена')</script>";
}

?>