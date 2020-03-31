let objectArray = [];

// ImageObject functie aanmaken
function ImageObject(name, description) {
    let imgObj = this;
    imgObj.name = name;
    imgObj.description = description;
    console.log(name);
}

function createObjects() {
    for (let counter = 0; counter < allImages.length; counter++) {
        objectArray.push(new ImageObject(allImages[counter], counter));
    }
}

function uploadImage(obj) {
    let imgdiv = document.createElement('div');
    imgdiv.className = 'imgdiv';

    let mainimg = document.createElement('img');

    mainimg.src = obj.name;
    mainimg.alt = obj.description;
    mainimg.title = obj.description;
    imgdiv.append(mainimg);
    allbox.append(imgdiv);
}

function showRandomImages() {
    for(let i=objectArray.length; i>0; i--) {
        let nmmr = Math.floor(Math.random()*objectArray.length)
        uploadImage(objectArray[nmmr]);
        objectArray.splice(nmmr,1);
    }
}

function createJSON() {
    let id = document.getElementById('json');

    let applicationData = "application/json;charset=utf-8,"
    + encodeURIComponent(JSON.stringify(objectArray));

    let json = document.createElement('a');
    json.href = 'data:' + applicationData;
    json.download = 'json.json';
    json.innerHTML = 'Ready to download json file';

    id.appendChild(json);
}

function requestListener () {
    let obj = JSON.parse(this.responseText);
    objectArray = obj.slice();
}

function createGetRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);

    request.open("GET", "data/json.json", false);
    request.send();
}

createGetRequest();
showRandomImages();
