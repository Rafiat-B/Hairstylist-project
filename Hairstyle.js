window.addEventListener('load', function() 
{
    const navigation = document.querySelector('.intro');
    navigation.classList.add('pop-out');
});

let imageArray = [
    'Images/homepage1.jpg',
    'Images/homepage2.jpg',
    'Images/homepage3.jpg',
    'Images/homepage4.jpg',
    'Images/homepage5.jpg',
]
let imageNumber = 0;
let difference = imageArray.length - 1;
let delay = 3500;

function Imagechange(direction) {
    imageNumber = imageNumber + direction;
    if (imageNumber > difference) {
        //begin inner first if
        imageNumber = 0;
      } //end inner first if
    
      if (imageNumber < 0) {
        //begin inner second if
        imageNumber = difference;
      } //end inner second if
      
      document.querySelector('.flip').src = imageArray[imageNumber];
}

setInterval(()=> Imagechange(1), delay);
// window.onload = function() {
//     const images = document.querySelectorAll('.flip');
//     images.forEach(image => {
//         image.classList.add('flipped');
//     });
// };() => ChangeImages(1), delay)