const toggleButton = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Image color change
function imageMood(mood) {
  image1.src = `img/undraw_proud_coder_${mood}.svg`;
  image2.src = `img/undraw_feeling_proud_${mood}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mood}.svg`;
}


// Dark mood
function darkMood() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';

  toggleIcon.children[0].textContent = "Dark Mood";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMood('dark')
}

// Light mood
function lightMood() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';

  toggleIcon.children[0].textContent = "Light Mood";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMood('light')
}


// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMood();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMood();
  }
}



// Add event listeners  on toggleButton
toggleButton.addEventListener('change', switchTheme);