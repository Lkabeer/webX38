var modal = document.getElementById('myModal');
var imgX = document.getElementById('imgX');
var modalX = document.getElementById("modalX");
var captionX = document.getElementById("captionX");
var closeX = document.getElementById('closeX');

imgX.onclick = function(){
    modalX.style.display = "flex";
    modalImgX.src = this.src;
    captionX.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
closeX.onclick = function() { 
  modalX.style.display = "none";
}

modalX.onclick = function() {
    modalX.style.display = 'none';
}