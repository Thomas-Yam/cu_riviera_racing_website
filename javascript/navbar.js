window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollPos = window.scrollY || document.documentElement.scrollTop;
  var threshold = 300;
  var maxOpacity = 0.7;
  var gradientOpacity = Math.min((scrollPos - threshold) / threshold, maxOpacity);
  var width = window.innerWidth;

  if (width > 767) {
    if (scrollPos > threshold) {
      navbar.style.backgroundImage = `linear-gradient(rgba(4, 9, 30, ${gradientOpacity}), rgba(4, 9, 30, ${gradientOpacity}))`;
    } else {
      navbar.style.backgroundImage = 'linear-gradient(rgba(4, 9, 30, 0), rgba(4, 9, 30, 0))';
    }
  }
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); 
    const targetId = link.getAttribute('href'); 
    const targetSection = document.querySelector(targetId); 
    targetSection.scrollIntoView({ behavior: 'smooth' }); 
  });
});

const menuButton = document.getElementsByClassName('menu-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const navbarLinkButtons = document.getElementsByClassName('nav-links')[0].getElementsByTagName('a');

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

for (var i = 0; i < navbarLinkButtons.length; i++) {
  var button = navbarLinkButtons[i];
  
  button.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
}





