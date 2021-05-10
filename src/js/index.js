

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
  


/*function postAPI() {
  var results = submitForm();
  fetch("", { method: 'POST'})
    .then(results => results.json() )
    .then(console.log); 
};*/



 






/*axios({
  method: 'post',
  url: 'https://reqres.in/api/login',
  data: {
    email: '',
    senha: ''
  }
});*/