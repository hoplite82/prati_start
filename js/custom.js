// custom 
console.log("custom.js start")

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer e5d85bcbcb9265ab84624e37ea488b9b47471306");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};



fetch("https://api.todoist.com/rest/v1/tasks?project_id=2239338509", requestOptions)
  .then(response => response.json())
  .then(result => {
      for(let task of result){
          let el = document.createElement("li");
          if (task.section_id==13973542) {
            el.innerText = task.content;
            document.getElementById('shortterm').appendChild(el);
            console.log(task.content);     
          } 
         
      }  
      //console.log(result)
    })
  .catch(error => console.log('error', error));

  console.log("custom.js end")