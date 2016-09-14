<?php

// configure
$from = 'From BoraALAP.com <boraalapdev@gmail.com>'; 
$sendTo = 'From BoraALAP.com <alapbora@gmail.com>';
$subject = 'New message from contact form';
$fields = array('your-name' => 'Name', 'your-email' => 'Email', 'your-message' => 'Message'); // array variable name => Text to appear in email
$okMessage = 'I got your message. Thank you, for writing me!';
$errorMessage = 'There was a small problem, I guess. Please find me on LinkedIn';

// let's do the sending

try
{
    $emailText = "You have new message from contact form\n===========\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}
