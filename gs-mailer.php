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
  // $json = file_get_contents('php://input');
  // echo $json;
  // exit;
  // $data = json_decode($json, true); // When JSON format is used
  $data = $_POST; // when FormData format is used
  // echo $data;
  // exit;

  $request_method = strtoupper($_SERVER['REQUEST_METHOD']);

  require __DIR__ . '/vendor/autoload.php';

  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
  $dotenv->load();

  $secret = $_ENV['SECRET']; 
  $ts  = $data['gs_ts'] ?? 0;
  $sig = $data['gs_sig'] ?? '';

  $expected = hash('sha256', $secret . $ts);

  if (!hash_equals($expected, $sig)) {
      echo json_encode([
          "success" => false,
          "message" => "Invalid signature."
      ]);
      exit;
  }
  if (time() - $ts > 900) { // 900 seconds = 15 minutes
    echo json_encode([
        "success" => false,
        "message" => "Form expired. Please reload the page."
    ]);
    exit;
  }

  if ($request_method === 'POST') {
    if (isset($data['gs_phone'])) {
      $honeypot = htmlspecialchars(trim($data['gs_phone']), ENT_COMPAT, 'UTF-8');
      if ($honeypot) {
        echo json_encode([
            "success" => false,
            "message" => "405 Method Not Allowed."
        ]);
        exit;
      }
    }

    $name = "";
    if (isset($data['gs_name'])) {
      $name = htmlspecialchars(trim($data['gs_name']), ENT_COMPAT, 'UTF-8');
      if ($name === '') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        echo json_encode([
            "success" => false,
            "message" => "405 Method Not Allowed."
        ]);
        exit;
      }
    }

    $inputs['name'] = $name;

    $email = "";
    if (isset($data['gs_email'])) {
      $email = htmlspecialchars(trim($data['gs_email']), ENT_COMPAT, 'UTF-8');
      if ($email === '') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        echo json_encode([
            "success" => false,
            "message" => "405 Method Not Allowed."
        ]);
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
    if (isset($data['gs_subject'])) {
      $subject = htmlspecialchars(trim($data['gs_subject']), ENT_COMPAT, 'UTF-8');
      if ($subject === '') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        echo json_encode([
            "success" => false,
            "message" => "405 Method Not Allowed."
        ]);
        exit;
      }
    }

    $inputs['subject'] = $subject;

    $message = "";
    if (isset($data['gs_message'])) {
      $message = htmlspecialchars(trim($data['gs_message']), ENT_COMPAT, 'UTF-8');
      if ($message === '') {
        header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
        echo json_encode([
            "success" => false,
            "message" => "405 Method Not Allowed."
        ]);
        exit;
      }
    }


    $inputs['message'] = $message;
    
  } else {
    // Only post is allowed
    header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
    echo json_encode([
        "success" => false,
        "message" => "405 Method Not Allowed."
    ]);
    exit;
  }

    $contact_name = $inputs['name'];
    $contact_email = $inputs['email'];
    $message = $inputs['message'];
    $subject = $inputs['subject'];

    $contact_form_contents = "\nContact name: $contact_name" . "\nContact email: $contact_email" . "\nSubject: $subject" . "\nMessage: $message" . "\n";
    // echo "Contact form: $contact_form_contents";

    $mail->SMTPDebug = SMTP::DEBUG_OFF; //SMTP::DEBUG_SERVER; //Enable verbose debug output or SMTP::DEBUG_OFF; //production
    $mail->isSMTP();  
    $mail->Host       = $_ENV['SMTPHOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTPUSER'];
    $mail->Password   = $_ENV['SMTPPWD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
    $mail->Port       = $_ENV['SMTPPORT'];

    $mail->setFrom($_ENV['FROM'], $_ENV['FROMNAME']);
    $mail->addAddress($_ENV['CONTACTRECIPIENT'], $_ENV['CONTACTRECIPIENTNAME']);
    $mail->addReplyTo($_ENV['REPLYTO'], $_ENV['FROMNAME']);


    $mail->isHTML(false); 
    $mail->Subject = "Contact Form Submission";
    $mail->Body    = "Contact form contents: $contact_form_contents";


    if (!$mail->send()) {
        header('Content-Type: application/json');
        echo json_encode([
            "success" => false,
            "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
        ]);
    } else {
        header('Content-Type: application/json');
        echo json_encode([
            "success" => true,
            "message" => "Message sent!"
        ]);
    }

    exit;

} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode([
        "success" => false,
        "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
    ]);
    exit;
}

