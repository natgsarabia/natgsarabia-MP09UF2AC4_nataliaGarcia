<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ENVIAR MAIL</title>
</head>
<body>
    <?php
        session_start(); 

        //inicalitzem PHPMailer
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;

        //Inicialitzem vendor
        require __DIR__ . '/vendor/autoload.php';

        //si el metode es posts creem un nou registre a la bbdd
        if ($_SERVER['REQUEST_METHOD']=='POST')
        {
            // Rebem l'informació de form-data ($_POST)
            $name = isset($_POST["name"]) ? $_POST["name"] : "";
            $email = isset($_POST["email"]) ? $_POST["email"] : "";
            $subject = isset($_POST["subject"]) ? $_POST["subject"] : "";
            $message = isset($_POST["message"]) ? $_POST["message"] : "";    

            if(filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                try {
    
                    // Configuració del servidor SMTP
                    $mail = new PHPMailer(true);
                    $mail->isSMTP();
                    $mail->Host = "smtp.gmail.com"; 
                    $mail->SMTPAuth = true;
                    $mail->Username = "natgsarabia@gmail.com"; 
    
                    //he creat una contraseña per la applicació de PHPMailer
                    $mail->Password = "uals rczy hgby axyu";    
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                    $mail->Port = 587;
    
                    $mail->setFrom("natgsarabia@gmail.com",$email);
                    $mail->addAddress("natgsarabia@gmail.com");
    
                    $mail->Subject="Nuevo mensaje de $email";
                    $mail->isHTML(true); 
                    $mail->Body="Nombre: $name <br>Mail: $email <br>Asunto: $subject<br>Mensaje:<br>$message";
                    
    
                    $mail->send();
                    header("Location: formulari.html");
                    exit();
                
                }
                catch (Exception $ex)
                {
                    error_log("Error d'enviament del mail: " . $mail->ErrorInfo, 3, "Error/error.log");
                    header("Location: formulari.html");
                    exit();
                }
            }
            else
            {
                error_log( "Correu invalido", 3, "Error/error.log");
                header("Location: formulari.html");
                exit();
            } 
        }
    ?>
    
</body>
</html>