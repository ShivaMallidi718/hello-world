let username = localStorage.getItem("username");
if(!username){
    username = window.prompt("What's your name?");
    localStorage.setItem("username",username); 
}
document.getElementById("result").textContent = `Hello ${username} !`;
