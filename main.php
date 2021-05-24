<?php
    // Указываем кодировку
    header('Content-Type: text/html; charset=utf-8');
 
    $server = "localhost"; 
    $username = "имя_пользователя_бд"; // Имя пользователя БД
    $password = "пароль_пользователя_бд"; // Пароль пользователя. Если у пользователя нету пароля то, оставляем пустое значение ""
    $database = "имя_базы_данных"; // Имя базы данных, которую создали
     
    // Подключение к базе данных через MySQLi
    $mysqli = new mysqli($server, $username, $password, $database);
 
    // Проверяем, успешность соединения. 
    if ($mysqli->connect_errno) { 
        die("<p><strong>Ошибка подключения к БД</strong></p><p><strong>Код ошибки: </strong> ". $mysqli->connect_errno ." </p><p><strong>Описание ошибки:</strong> ".$mysqli->connect_error."</p>"); 
    }
 
    // Устанавливаем кодировку подключения
    $mysqli->set_charset('utf8');
 
    //Для удобства, добавим здесь переменную, которая будет содержать адрес (URL) нашего сайта
    $address_site = "http://testsite.local";
?>
<?php
	function generateSalt()
	{
		$salt = '';
		$saltLength = 8; 
		for($i=0; $i<$saltLength; $i++) {
			$salt .= chr(mt_rand(33,126)); 
		}
		return $salt;
	}
?> 
