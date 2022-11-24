function openImg(t){
    console.log(t)
    var img = document.createElement("img");
    img.src = t;
    img.id = t;
    console.log(img.id);
    var div = document.getElementById(activestate);

    var tmp = champlanedict[div.id];
    if (champlanedict[div.id].includes(t)){
        // div.removeAttribute(img);
        div.removeChild(document.getElementById(t));
        tmp.splice(t,1)
    } else {
        div.appendChild(img);
        tmp.push(t);
    }
    console.log(tmp);
    champlanedict[div.id] = tmp;
}