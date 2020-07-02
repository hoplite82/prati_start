// custom 


var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer e5d85bcbcb9265ab84624e37ea488b9b47471306");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.todoist.com/rest/v1/tasks", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));