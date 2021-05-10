

var botaoEntrar = document.querySelector("#entrar");

botaoEntrar.addEventListener("click", function login (event) {

  event.preventDefault();

  var form = document.querySelector("#login");

  var email = form.email.value;
  var password = form.senha.value;

  console.log(email);
  console.log(password); 

  var loginObj = {"email" : [email], "password" : [password] };
  var loginJSON = JSON.stringify (loginObj);
  //localStorage.setItem("apiJSON", loginJSON);
  console.log(loginJSON);
  return{
    loginJSON
  }
  
});