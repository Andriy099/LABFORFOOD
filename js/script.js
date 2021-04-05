function menuToggle(){
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('toggle')
    nav.classList.toggle('active')
    toggle.classList.toggle('active')
}


function register() {
    password1 = $("#pass1").val();
    passowrd2 = $("#pass2").val();
    if(password1!=passowrd2) {
        $("#pass1").addClass("is-invalid");
        $("#pass2").addClass("is-invalid");
    } else {
        // chiudi il modal
        $("#registrationModal").modal('hide');
    }

    return false; //altrimenti lo chiude sempre

}

function login() {
    // window.alert("login");


     return false; //altrimenti lo chiude
}

const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {

  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  slideshowImages[currentImageCounter].style.opacity = 1;
}
