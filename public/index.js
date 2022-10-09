var activestate = 'top';


function openImg(t){
    var img = document.createElement("img");
    img.src = t;
    console.log(t);
    var div = document.getElementById(activestate);
    div.appendChild(img);
}

function changelane(lane){
    activestate = lane;
    console.log(activestate);
}