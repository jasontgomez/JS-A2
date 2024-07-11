
// array of images
const imageArray = [
    ['images/flowers-pink-small.jpg', 'these flowers are pink'], 
    ['images/flowers-purple-small.jpg', 'these flowers are purple'], 
    ['images/flowers-red-small.jpg', 'these flowers are red'], 
    ['images/flowers-white-small.jpg', 'these flowers are white'], 
    ['images/flowers-yellow-small.jpg', 'these flowers are yellow']]

// referrences
const featureImage = document.querySelector('img');
const featureDesc = document.querySelector('figcaption');

// add images to html
const container = document.getElementById('image-container');
for (let i = 0; i < imageArray.length; i++) {
    const img = document.createElement('img');
    img.src = imageArray[i][0];
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

    let updateImg = '';
    let updateDesc = '';

    // loop through image array
    for (let j = 0; j < imageArray.length; j++) {
        if(imageArray[j][0] == targetSrc){
            // new image path
            updateImg = updateImg + imageArray[j][0].replace('small', 'large');
            // new desc
            updateDesc = updateDesc + imageArray[j][1];
        }
    }
    // update featured images
    featureImage.src = updateImg;
    
    // update image description
    featureDesc.innerText = updateDesc;
}

// first element
updateFigure(imageArray[0][0]); 