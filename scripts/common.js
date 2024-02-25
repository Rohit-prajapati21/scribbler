// Get the signUpModal
var signUpModal = document.getElementById("signUpModal");

// Get the button that opens the signUpModal
var signUpModalbtn = document.getElementById("signUpBtn");

// Get the <signUpModalspan> element that closes the signUpModal
var signUpModalspan = document.getElementById("signUpModal-close");

// When the user clicks on the button, open the signUpModal
signUpModalbtn.onclick = function() {
  signUpModal.style.display = "block";
}

// When the user clicks on <signUpModalspan> (x), close the signUpModal
signUpModalspan.onclick = function() {
  signUpModal.style.display = "none";
}

// Get the signInModal
var signInModal = document.getElementById("signInModal");

// Get the button that opens the signUpModal
var signInModalbtn = document.getElementById("signInBtn");

// Get the <signUpModalspan> element that closes the signUpModal
var signInModalspan = document.getElementById("signInModal-close");

// When the user clicks on the button, open the signUpModal
signInModalbtn.onclick = function() {
  signInModal.style.display = "block";
}

// When the user clicks on <signUpModalspan> (x), close the signUpModal
signInModalspan.onclick = function() {
  signInModal.style.display = "none";
}

window.onclick = function(event) {
  if(event.target == signUpModal) {
    signUpModal.style.display = "none";
  }else if(event.target == signInModal){
    signInModal.style.display = "none";
  }
}

function showSignUp(){
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
}