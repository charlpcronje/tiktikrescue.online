<?php
// File: send_email.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Email settings
    $to = "projects@webally.co.za"; // Your email address
    $subject = "TikTok Rescue Contact Us Form"; // Subject line
    $body = "You received a new contact form submission:\n\n" .
            "Name: " . $name . "\n" .
            "Email: " . $email . "\n" .
            "Message:\n" . $message;

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                       // Use SMTP
        $mail->Host = 'smtp.ionos.com';                        // IONOS SMTP server
        $mail->SMTPAuth = true;                                // Enable SMTP authentication
        $mail->Username = 'charl@webally.co.za';               // Your IONOS email address
        $mail->Password = 'Pl@tinum4334';                      // Your IONOS email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;    // Enable TLS encryption
        $mail->Port = 587;                                     // TCP port for TLS

        // Recipients
        $mail->setFrom('projects@webally.co.za', 'TikTok Rescue | Contact Us'); 
        $mail->addAddress($to);                                // Your email as the recipient
        $mail->addReplyTo($email, $name);                      // Reply-To set to client's email

        // Content
        $mail->isHTML(false);                                  // Use plain text email format
        $mail->Subject = $subject;
        $mail->Body    = $body;

        // Send the email
        $mail->send();

        // Redirect to a success page
        header("Location: contact_success.html");
        exit;
    } catch (Exception $e) {
        // Log error and redirect to an error page
        error_log("Mailer Error: " . $mail->ErrorInfo);
        header("Location: contact_error.html");
        exit;
    }
} else {
    // Handle cases where the script is accessed directly
    echo "This page can only be accessed through the contact form.";
    exit;
}
