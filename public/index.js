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
}

function possibility(){
    let listpossible = [];
    let banned = champlanedict['ban'];
    for (const x1 of champlanedict['top']){
        if (champlanedict['ban'].indexOf(x1) === -1){
            for (const x2 of champlanedict['jg']){
                if (champlanedict['ban'].indexOf(x2) === -1){
                    for (const x3 of champlanedict['mid']){
                        if (champlanedict['ban'].indexOf(x3) === -1){
                            for (const x4 of champlanedict['adc']){
                                if (champlanedict['ban'].indexOf(x4) === -1){
                                    for (const x5 of champlanedict['sup']){
                                        if (champlanedict['ban'].indexOf(x5) === -1){
                                            // let tmp = [x1,x2,x3,x4,x5];
                                            // listpossible.push(tmp);
                                            var tag = document.createElement('p');
                                            var element = document.getElementById('new');
                                            element.appendChild(tag);
                                            var img1 = document.createElement("img");
                                            var img2 = document.createElement("img");
                                            var img3 = document.createElement("img");
                                            var img4 = document.createElement("img");
                                            var img5 = document.createElement("img");
                                            img1.src = x1;
                                            img2.src = x2;
                                            img3.src = x3;
                                            img4.src = x4;
                                            img5.src = x5;
                                            tag.appendChild(img1);
                                            tag.appendChild(img2);
                                            tag.appendChild(img3);
                                            tag.appendChild(img4);
                                            tag.appendChild(img5);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(listpossible)
}