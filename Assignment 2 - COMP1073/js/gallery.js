// object of images
const imageObject = {
    'images/flowers-pink-small.jpg': 'these flowers are pink', 
    'images/flowers-purple-small.jpg': 'these flowers are purple', 
    'images/flowers-red-small.jpg': 'these flowers are red', 
    'images/flowers-white-small.jpg': 'these flowers are white', 
    'images/flowers-yellow-small.jpg': 'these flowers are yellow'
}

// references
const featureImage = document.querySelector('img');
const featureDesc = document.querySelector('figcaption');

// add images to html
const container = document.getElementById('image-container');
for (let key in imageObject) {
    const img = document.createElement('img');
    img.src = key;
    if (container.children.length === 0) {
        img.classList.add('selected');
    }
    container.appendChild(img);
    //container.appendChild(document.createElement('br'));
}

// event listener for picture list items
const imageGallery = document.querySelector('ul');

// event listener 
imageGallery.addEventListener('click', function(event){

    //get all selected imgs
    const selected = document.querySelectorAll(".selected");

    //remove the selected class
    selected.forEach(cell => cell.classList.remove("selected"));

    console.log('Received ' + cleanSrc(event.target.src));
    updateFigure(cleanSrc(event.target.src));   
    //add selected class to clicked img
    event.target.classList.add('selected');

});

 // function to clean src string, returns local path
function cleanSrc(inputString) {
    return inputString.substring(inputString.search('images'));
}

// function to update big image
function updateFigure(targetSrc) {

    let updateImg = '';
    let updateDesc = '';

    if (imageObject[targetSrc]) {
        // new image path
        updateImg = targetSrc.replace('small', 'large');
        // new desc
        updateDesc = imageObject[targetSrc];
    }

    // update featured images
    featureImage.src = updateImg;
    
    // update image description
    featureDesc.innerText = updateDesc;
}

// first element
updateFigure('images/flowers-pink-small.jpg');
