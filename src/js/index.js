const userPage = './lista-usuarios.html'
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
        window.location.href = userPage;        
      } else {
        removeSpinner();
        setErrorMessage('Usuário ou senha incorretos');
      }    
    })
    //var a = response.json();
});

/*async function userList(token) {

  await fetch('https://reqres.in/api/users?page=1', {
      method: 'GET',
      headers : {
          'content-type': 'aplication/json;charset=utf-8'
      }
  })
  .then((response) => response.json())  
  .then((data) => {      
      let showing = data.per_page;
      let total = data.total;
      let users = data.data;      
      let displayInfoString = 'Mostrando ' + showing + ' de ' + total + '';
      
      for (let i = 0; i < users.length; i++) {
        
        '<div class="user-item">' +
        `<img class="user-img" src=${
        users[i].avatar}
        >` +
        '<p class="user-name">' +
        `${users[i].first_name}` +
        ' ' +
        `${users[i].last_name}` +
        '</p>' +
        '<p class="user-email">' +
        `${users[i].email}` +
        '</p>' +
        '<img class="edit-icon" src="../assets/icon-edit.svg">' +
        '</div>';
      }
        const container = document.querySelector('#list-container');
        container.insertAdjacentHTML('beforeend', userCard);
        const displayInfo = document.querySelector('#list-info');
        displayInfo.insertAdjacentHTML('beforeend', displayInfoString);  
  });
  
};*/