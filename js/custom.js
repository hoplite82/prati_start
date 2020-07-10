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

// Promise use more for fun  
projects.then(res => {
  for(let p of res){
    console.log("P_ID: "+ p.id+" P_name: "+p.name);
    
    let pdiv = document.createElement("div");
    pdiv.setAttribute("id",p.id);
    
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
        let i = document.createElement("i");
        let span = document.createElement("span");

        li.setAttribute("class","list-group-item")
        i.setAttribute("class", "far fa-circle");
        span.innerText = " "+task.content;

        li.appendChild(i);
        li.appendChild(span);

        document.getElementById(p_id).appendChild(div);
       
     
    }
    //console.log(result)
  })
  .catch(error => console.log('error', error));
}

function svg_slide_draw(level){
    let svg = document.createElement("svg");
    
    svg.appendChild()
}

console.log("custom.js end")