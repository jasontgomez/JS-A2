// Jason Gomez 200587201
// Daniel Perusse 20055190
// Sebastian Bruce 200561191
// COMP1073

// image object
class Image {
    // setter
    constructor(linkInput, descInput, colorInput) {
        this.link = linkInput;
        this.description = descInput;
        this.color = colorInput;
    }
    // getter
    getLink() {
        return this.link;
    }
    getDesc() {
        return this.description;
    }
}

// array of image objects
let imageArray = [
    new Image('images/flowers-pink-small.jpg', 'these flowers are pink', 'pink'),
    new Image('images/flowers-purple-small.jpg', 'these flowers are purple', 'purple'),
    new Image('images/flowers-red-small.jpg', 'these flowers are red', 'red'),
    new Image('images/flowers-white-small.jpg', 'these flowers are white', 'white'),
    new Image('images/flowers-yellow-small.jpg', 'these flowers are yellow', 'yellow')
]

// references
const featureImage = document.querySelector('img');
const featureDesc = document.querySelector('figcaption');

// add images to html
const container = document.getElementById('image-container');
for (let i = 0; i < imageArray.length; i++) {
    const img = document.createElement('img');
    img.src = imageArray[i].link;
    if (i == 0) {
        img.classList.add('selected');
    }
    container.appendChild(img);
    container.appendChild(document.createElement('br'));
}

// event listener for picture list items
const imageGallery = document.querySelector('ul');

// event listener 
imageGallery.addEventListener('click', function(event){

    //get all selected imgs
    const selected = document.querySelectorAll(".selected");

    //remove the selected id
    selected.forEach(cell => cell.classList.remove("selected"));

    console.log('Received ' + cleanSrc(event.target.src));
    updateFigure(cleanSrc(event.target.src));   
    //add selected id to clicked img
    event.target.classList.add('selected');

  });


 // function to clean src string, returns local path
function cleanSrc(inputString) {
    return inputString.substring(inputString.search('images'));
}


// function to update big image
function updateFigure(targetSrc) {

    // loop through image array
    for (let j = 0; j < imageArray.length; j++) {
        if(imageArray[j].getLink() == targetSrc){
            // new image path
            featureImage.src = imageArray[j].link.replace('small', 'large');
            // new desc
            featureDesc.innerText = imageArray[j].description;
            //color
            featureDesc.style.backgroundColor = imageArray[j].color;
        }
    }
}

// first element
updateFigure(imageArray[0].link); 