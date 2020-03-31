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

function uploadImage(imgObj) {
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
    for(let i=allImages.length; i>0; i--) {
        let nmmr = Math.floor(Math.random()*allImages.length)
        uploadImage(objectArray[nmmr]);
        objectArray.splice(nmmr,1);
    }
}

createObjects();
showRandomImages();
