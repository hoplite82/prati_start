// custom 
console.log("custom.js start")

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer e5d85bcbcb9265ab84624e37ea488b9b47471306");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
//fetch projectlist in a Promise
var projects = fetch("https://api.todoist.com/rest/v1/projects",requestOptions)
  .then(r => r.json())
  
  .catch(error => console.log('error', error));

projects.then(res => {
  for(let p of res){
    console.log("P_ID: "+ p.id+" P_name: "+p.name);
    fetchTasksFromProject(p.id);
    if (p.id == 13973542) {}
  }  
})

function fetchTasksFromProject(p_id){
  fetch("https://api.todoist.com/rest/v1/tasks?project_id="+p_id, requestOptions)
  .then(response => response.json())
  .then(result => {
    for (let task of result) {
      
        console.log(task.content);
        let li = document.createElement("li");
        let el = document.createElement("input");
        let label = document.createElement("label");

        li.setAttribute("class","list-group-item")
        el.setAttribute("type", "checkbox");
        el.setAttribute("readonly", "true");
        label.setAttribute("for", task.content);
        label.innerText = task.content;

        div.appendChild(el);
        div.appendChild(label);

        document.getElementById('shortterm').appendChild(div);
       
     
    }
    //console.log(result)
  })
  .catch(error => console.log('error', error));
}



console.log("custom.js end")