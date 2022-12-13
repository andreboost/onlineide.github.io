function CheckPassword() 
{ 
var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
if(passK.value.match(paswd)) 
{ 
alert('Регистрация прошла успешно')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}
