
<?php
if (isset($_POST['feedback'])) {
    $feedback = trim($_POST['feedback']);
    file_put_contents("feedbacks.txt", $feedback . "\n", FILE_APPEND | LOCK_EX);
}
header("Location: index.html");
exit();
?>