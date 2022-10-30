let index = 1;
function carousel(){
    let imageNode = document.getElementById("carousel");
    if(index <7){
        index++;    
    } else {
        index = 1;
    }
    imageNode.setAttribute("src", "assets/images/carousel/" + index + ".jpg");
    imageNode.style.animation = "none";
}