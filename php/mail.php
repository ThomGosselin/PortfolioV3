<?php
    $name= $_POST['name'];
    $email= $_POST['email'];
    $message= $_POST['message'];

    $email_from = $email;

    $email_subject = "Message du Portfolio";

    $email_body = "Nom: $name.\n".
                    "Email: $email.\n".
                        "Message: $message.\n";

    $to = "alexiscegepmatane@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");


?>