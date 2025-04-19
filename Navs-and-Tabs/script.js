
//nabs and
function tab(m,n){

    var text   =   document.getElementsByClassName("text");
    var button = document.getElementsByTagName("li")

    for(var i = 0; i<text.length; i++){
        text[i].style.display="none";
    }

    for(var i = 0; i<button.length; i++){
        button[i].style.color = "black"
        button[i].style.backgroundColor = "white"
    }

    document.getElementById(m).style.display = "block"
    n.style.color = "#4154f1";
}

// modal

var modal = document.getElementById("modal");
var text1 = document.getElementById("text1");

var imagesArray = []; 
var currentIndex = 0;  

function open_modal(m) {
   var imgSrc = m.closest('.child').querySelector('.img img').src;
   imagesArray = ["../Images/branding-3 10.jpg", "../Images/product-2.jpg", "../Images/app-1.jpg","../Images/book -4.jpg","../Images/app-5.jpg"]; 

   text1.src = imgSrc;
   currentIndex = imagesArray.indexOf(imgSrc); 

   modal.style.transform = "translateX(0)";
}

function close_modal() {
    modal.style.transform = "translateX(-100%)";
}

function changeImage(direction) {
    if (direction === "right") {
        currentIndex = (currentIndex + 1) % imagesArray.length; 
    } else if (direction === "left") {
        currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length; 
    }

    text1.src = imagesArray[currentIndex];
}



