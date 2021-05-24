
// var myInput = document.getElementById("psw"); 
// var letter = document.getElementById("letter"); 
// var capital = document.getElementById("capital"); 
// var number = document.getElementById("number"); 
// var length = document.getElementById("length"); 
// var password2 = document.getElementById("password2");

// // Когда пользователь нажимает на поле Пароль, отображается окно сообщения 
// myInput.onfocus = function() { 
//   document.getElementById("message").style.display = "block"
// }

// // Когда пользователь щелкает за пределами поля пароля, скрыть окно сообщения 
// myInput.onblur = function() { 
//   document.getElementById("message").style.display = "none"
// } 

// // Когда пользователь начинает вводить что-то в поле пароля 
// myInput.onkeyup = function() { 
//   //Проверка строчных букв 
//   var lowerCaseLetters = /[a-z]/g; 
//   if(myInput.value.match(lowerCaseLetters)) { 
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } 
//   else { 
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

//   // Проверка заглавных букв 
//   var upperCaseLetters = /[A-Z]/g; 
//   if(myInput.value.match(upperCaseLetters)) { 
//     capital.classList.remove("invalid");
//     capital.classList.add("valid"); 
//   } 
//   else { 
//     capital.classList.remove("valid")}; 
//     capital.classList.add("invalid"); 
//   } 

//   // Проверка чисел 
//   var numbers = /[0-9]/g; 
//   if(myInput.value.match(numbers)) { 
//     number.classList.remove("invalid"); 
//     number.classList.add("valid"); 
//   } else { 
//     number.classList.remove("valid"); 
//     number.classList.add("invalid"); 
//   } 

//   // Проверить длину 
//   if(myInput.value.length >= 6) { 
//     length.classList.remove("invalid"); 
//     length.classList.add("valid"); 
//   } 
//   else { 
//     length.classList.remove("valid"); 
//     length.classList.add("invalid"); 
//   } 
//   function ValidateEmail(uemail)
//   {
//   var mailformat = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
//   if(uemail.value.match(mailformat))
//   {
//   return true;
//   }
//   else
//   {
//   alert("You have entered an invalid email address!");
//   uemail.focus();
//   return false;
//   }
//   }





//   function validateForm () {
//     var password1 = document.getElementById('password1'); 
//     var password2 = document.getElementById('password2');
   
//     // сравниваем написанное, если не равно, то:
//     if (password1.value !== password2.value) {
//         // сообщаем пользователю, можно сделать как угодно
//         alert('Проверьте пароли на совпадение!');
//         password2.style.border = ('2px solid rgb(155, 22, 4)');
//         // сообщаем браузеру, что не надо обрабатывать нажатие кнопки
//         // как обычно, т. е. не надо отправлять форму
//         return false;
//     }



function validateForm () {
    // проверяем пароли
    // выбираем элементы
    var password1 = document.getElementById('password1');
    var password2 = document.getElementById('password2');
    // сравниваем написанное, если не равно, то:
    if (password1.value !== password2.value) {
        // сообщаем пользователю, можно сделать как угодно
        alert('Проверьте пароли на совпадение!');
        password2.style.border = ('2px solid rgb(155, 22, 4)');
        // сообщаем браузеру, что не надо обрабатывать нажатие кнопки
        // как обычно, т. е. не надо отправлять форму

        return false;

    }


//проверяем email

    var email = document.getElementById("email");

    // регулярка для проверки, не знаю, работает ли приведенный в примере

    var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;

    // проверяем значение поля email, если нет, то:
    // if (email.value==none) {
    //     email.style.border = ('2px solid rgb(155, 22, 4)');
    //     return false;
    // }
    if (!email_regexp.test(email.value)) {
        email.style.border = ('2px solid rgb(155, 22, 4)');
        alert('Неверно введен email');

        return false;
    }
    else {
        email.style.border = ('2px solid green');
    }
}