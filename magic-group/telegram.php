<?php

/* https://api.telegram.org/bot966083676:AAHAJjUJJiY8bTwIprwpA-CQpURLajn9P2Y/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$size = $_POST['size'];
$ui = $_POST['ui'];
$integration_data = $_POST['integration_data-feed'];
$integration_API = $_POST['integration_API'];
$integration_sms = $_POST['integration_sms'];
$integration_mask = $_POST['integration_mask-phone'];
$security_ssl = $_POST['security_ssl'];
$security_ddos = $_POST['security_ddos'];
$security_auth = $_POST['security_auth'];
$user_name = $_POST['user_name'];
$user_phone = $_POST['user_phone'];
$user_email = $_POST['user_email'];
$user_message = $_POST['user_message'];
$token = "966083676:AAHAJjUJJiY8bTwIprwpA-CQpURLajn9P2Y";
$chat_id = "-172379381";
$arr = array(
  '1. Размер' => $size,
  '2. Интерфейс' => $ui,
  '3. Интеграции' => '↓',
  '3.1 Фид данных' => $integration_data,
  '3.2 API для других' => $integration_API,
  '3.3 SMS' => $integration_sms,
  '3.4 Маскировка номера' => $integration_mask,
  '4. Безопасность' => '↓',
  '4.1 SSL' => $security_ssl,
  '4.2 DDOS' => $security_ddos,
  '4.3 Двухфакторная аутенфикация' => $security_auth,
  'Имя' => $user_name,
  'Телефон' => $user_phone,
  'Email' => $user_email,
  'Сообщение' => $user_message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$url = "https://api.telegram.org/bot{$token}/sendDocument";
// $_document = "ok.json";
$_document = $_FILES['user_file']['tmp_name']['name'];
$document = new CURLFile(realpath($_document));
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => "-172379381", "document" => $document]);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
$out = curl_exec($ch);
curl_close($ch);
print_r($out);

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>