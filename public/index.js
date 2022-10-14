// const { ids } = require("webpack");

var activestate = 'top';
let lanes = ['ban','top','jg','mid','adc','sup'];
let champlanedict = {
                        'ban':[], 
                        'top':[], 
                        'jg':[],
                        'mid':[],
                        'adc':[],
                        'sup':[]
                    };

function openImg(t){
    var img = document.createElement("img");
    img.src = t;
    img.id = t;
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
    champlanedict[div.id] = tmp;
}

function changelane(lane){
    activestate = lane;
    for (elem of lanes){
        if (elem === lane){
            document.getElementById(elem).style.backgroundColor= 'yellow';
        } 
        else { 
            document.getElementById(elem).style.backgroundColor = 'white';
        }
    }
   
    // console.log(activestate);
}