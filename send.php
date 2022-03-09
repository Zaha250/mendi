<?php 
    $to = "Mail@mendi.ru";
    $message = "Номер телефона: ".$_GET["phone"];

    mail($to, "Заявка", $message); 
?>