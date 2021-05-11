var botaoEntrar = document.querySelector("#entrar");

botaoEntrar.addEventListener("click", async function login (event) {

  event.preventDefault();

  var form = document.querySelector("#login");

  var email = form.email.value;
  var password = form.senha.value;

  var loginObj = {"email" : email, "password" : password };  
  var loginJSON = JSON.stringify (loginObj);
  
  await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: [loginJSON]
  })
    .then((response) => response.json())
    .then((data) => {
      let token = data.token;
      if (token !== undefined && token !== null) {
        sessionStorage.setItem('token', token)
        userList();
      } else {
        removeSpinner();
        setErrorMessage('Usuário ou senha incorretos');
      }    
    })
    //var a = response.json();
});

async function userList(token) {

  await fetch('https://reqres.in/api/users?page=1', {
      method: 'GET',
      headers : {
          'content-type': 'aplication/json;charset=utf-8'
      }
  })
  .then((response) => response.json())  
  .then((data) => {
    let page = data.page;
    console.log(page)    
  });
  
};