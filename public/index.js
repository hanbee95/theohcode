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
    var div = document.getElementById(activestate);
    div.appendChild(img);
    // var tmp = champlanedict[div.id];
    console.log(t)
    console.log(div.id)
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