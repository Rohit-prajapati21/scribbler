var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the signUpModal
var createPostModalbtn = document.getElementById("createPostBtn");

// Get the <signUpModalspan> element that closes the signUpModal
var createPostModalspan = document.getElementById("createPost-close");

createPostModalbtn.onclick = function() {
  createPostModal.style.display = "block";
}

// When the user clicks on <signUpModalspan> (x), close the signUpModal
createPostModalspan.onclick = function() {
  createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the signUpModal, close it
window.onclick = function(event) {
  if(event.target == createPostModal){
    createPostModal.style.display = "none";
  }
}
let allPost=document.getElementById("allPostBtn");
allPost.onclick=function(){
  document.getElementById("postListLink").click();
}
var nameHtml="";
var passHtml="";
var userNameHtml="";
let loginForm = document.getElementById("signUpForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let username = document.getElementById("username");
  let password = document.getElementById("pass");
  let confirmPas = document.getElementById("confirmpass");

  if (password.value!==confirmPas.value) {
    alert("Ensure you input same password in both fields!");
  } else {
   nameHtml=name.value;
   userNameHtml=username.value;
   passHtml=password.value;
   console.log(nameHtml);
   console.log(passHtml);
   console.log(userNameHtml);
    name.value="";
    username.value = "";
    password.value = "";
    confirmPas.value="";
    signUpCallback();
  }
});
var obj={};
function signUpCallback(){
  alert("i am in")
  var fs=require('fs');
  fs.readFile('/userData.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj.user.push({name: nameHtml, pass:passHtml,userName:userNameHtml}); //add some data
    var json = JSON.stringify(obj); //convert it back to json
    try{
      fs.writeFile('/userData.json', json, 'utf8'); // write it back 
    }catch(err){
      alert("try again")
    }
  }});
}