<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', '/language/directory/');
$mail->isHTML(true);

$mail->setFrom('Mindi@mail.ru', 'Mindi@mail.ru');
$mail->addAddress('koltunov1998@mail.ru');
$mail->Subject = 'Заявка';

$body = '<p> Номер телефона: '. $_POST['phone'].'</p>';

$mail->Body = $body;
$mail->send();

if(!$mail->send()) {
    $message = 'Ошибка при отправке';
} else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-Type: application/json');
echo json_encode($response);