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
  const stylistsSection = document.querySelectorAll('.the-stylists');
  stylistsSection.classList.add('visible');
});

//************Contact *

function submitGoogleForm() {
  // e.preventDefault();
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (name === '') {
      alert('Please enter your name.');
      return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
      alert('Please enter your email.');
      return false;
  } else if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  if (message === '') {
      alert('Please enter your message.');
      return false;
  }

  // If validation passes, submit the form
  document.querySelector('.contact-form').submit();
  alert('Thank you! Your message has been sent.');

  document.querySelector('.contact-form').reset();
  window.location.href = 'https://www.technova.software';
}