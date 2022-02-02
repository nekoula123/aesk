<?php
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$text = htmlspecialchars($_POST["text"]);

$to = "gagik.gagikovitch@yandex.ru";

$headers  = "Content-type: text/plain; charset=utf-8 \r\n"; 
$headers .= "From: От кого письмо <info@aeksrent.ru>\r\n"; 
$headers .= "Reply-To: info@aeksrent.ru\r\n"; 

if(isset($_POST)){
     // Здесь нужно написать e-mail, куда будут приходить письма
    $subject = "Сообщение с сайта aeksrent.ru";
    $message = $name . "\n" . $tel . "\nКорпоративный сайт: aeksrent.ru " . "\n" . $text;

    if(mail($to,$subject,$message,$headers)){
        http_response_code(200);
        echo "send OK";
    } else {
        http_response_code(500);
        echo "send ERROR";
    };
}

?>
