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

//************About Us */
// Add a class to the navigation when the page is scrolled
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.navigation');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Add hover effect to team members
document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('mouseenter', function() {
      this.classList.add('hover');
  });
  member.addEventListener('mouseleave', function() {
      this.classList.remove('hover');
  });
});

//Fading effect
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in').forEach(element => {
      element.classList.add('visible');
  });
});

// Sliding effect
function slideInOnLoad() {
  document.querySelectorAll('.slide-in').forEach(element => {
    element.classList.add('visible');
  });
}

window.addEventListener('load', slideInOnLoad);

//************Our Stylists *
window.addEventListener('load', () => {
  const stylistsSection = document.querySelectorAll('.the-stylist');
  stylistsSection.classList.add('visible');
});