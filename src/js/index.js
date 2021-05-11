

var botaoEntrar = document.querySelector("#entrar");

botaoEntrar.addEventListener("click", async function login (event) {

  event.preventDefault();

  var form = document.querySelector("#login");

  var email = form.email.value;
  var password = form.senha.value;

  var loginObj = {"email" : email, "password" : password };
  console.log(loginObj);
  var loginJSON = JSON.stringify (loginObj);
  
  let response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: [loginJSON]
  });
  var a = await response.json();
      
      alert(a.token);
});