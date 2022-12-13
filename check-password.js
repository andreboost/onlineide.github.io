function CheckPassword() 
{ 
let password = document.getElementById("passwordBox");
let passwordEntered = password.value;
if(passwordEntered === "12345") {
  return true;
}
alert("Неверный пароль!!");
return false;
}  