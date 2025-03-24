<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

//`true` enables exceptions: PHPMailer(true)
$mail = new PHPMailer();

try {
  $json = file_get_contents('php://input');
  // echo $json;
  // exit;
  $data = json_decode($json, true);

  $request_method = strtoupper($_SERVER['REQUEST_METHOD']);
  echo "Request method: " . $request_method;

  if ($request_method === 'POST') {
    if (isset($data['phone'])) {
      $honeypot = htmlspecialchars(trim($data['phone']), ENT_COMPAT, 'UTF-8');
      if ($honeypot) {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        // trigger_error("405 Method Not Allowed", E_USER_ERROR);
        exit;
      }
    }

    $name = "";
    if (isset($data['name'])) {
      $name = htmlspecialchars(trim($data['name']), ENT_COMPAT, 'UTF-8');
      if ($name === '') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        // trigger_error("405 Method Not Allowed", E_USER_ERROR);
        exit;
      }
    }

    $inputs['name'] = $name;

    $email = "";
    if (isset($data['email'])) {
      $email = htmlspecialchars(trim($data['email']), ENT_COMPAT, 'UTF-8');
      if ($email === '') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        // trigger_error("405 Method Not Allowed", E_USER_ERROR);
        exit;
      } else {
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        if (!$email) {
            $email = "[email wiped, sanitation failed]";
        }
      }
    }

    $inputs['email'] = $email;

    $subject = "";
    if (isset($data['subject'])) {
      $subject = htmlspecialchars(trim($data['subject']), ENT_COMPAT, 'UTF-8');
      if ($subject === '') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        // trigger_error("405 Method Not Allowed", E_USER_ERROR);
        exit;
      }
    }

    $inputs['subject'] = $subject;

    $message = "";
    if (isset($data['message'])) {
      $message = htmlspecialchars(trim($data['message']), ENT_COMPAT, 'UTF-8');
      if ($message === '') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        // trigger_error("405 Method Not Allowed", E_USER_ERROR);
        exit;
      }
    }


    $inputs['message'] = $message;
    
  } else {
    // Only post is allowed
    header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
    exit;
  }

    $contact_name = $inputs['name'];
    $contact_email = $inputs['email'];
    $message = $inputs['message'];
    $subject = $inputs['subject'];

    $contact_form_contents = "\nContact name: $contact_name" . "\nContact email: $contact_email" . "\nSubject: $subject" . "\nMessage: $message" . "\n";
    // echo "Contact form: $contact_form_contents";

    $env = file_get_contents('./.env');
    $lines = explode("\n",$env);

    foreach($lines as $line){
      preg_match("/([^#]+)\=(.*)/",$line,$matches);
      if(isset($matches[2])){ putenv(trim($line)); }
    } 

    $mail->SMTPDebug = SMTP::DEBUG_SERVER; //Enable verbose debug output
    $mail->isSMTP();  
    $mail->Host       = getenv('SMTPHOST');
    $mail->SMTPAuth   = true;
    $mail->Username   = getenv('SMTPUSER');
    $mail->Password   = getenv('SMTPPWD');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
    $mail->Port       = getenv('SMTPPORT');

    $mail->setFrom(getenv('FROM'), getenv('FROMNAME'));
    $mail->addAddress(getenv('CONTACTRECIPIENT'), "SwansonSoftware Admin");
    $mail->addReplyTo(getenv('REPLYTO'), getenv('FROMNAME'));


    $mail->isHTML(false); 
    $mail->Subject = "Contact Form Submission";
    $mail->Body    = "Contact form contents: $contact_form_contents";


    $mail->send();

    //header('Location: thankyou.html', true, 303);

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

