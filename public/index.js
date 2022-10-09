function openImg(t){
    var img = document.createElement("img");
    img.src = t;
    console.log(t);
    var div = document.getElementById("top");
    div.appendChild(img);
}