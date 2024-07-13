document.addEventListener('DOMContentLoaded', function() {
    // Project Slider
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        } else {
            currentIndex = totalSlides - 1;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        } else {
            currentIndex = 0;
            updateSlider();
        }
    });

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    // Optional JavaScript for scroll animations
const skillsListItems = document.querySelectorAll('.skills-list li');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    skillsListItems.forEach(item => {
        if (scrollPosition > item.offsetTop) {
            item.classList.add('animate');
        }
    });
});


    // Contact Form Validation
    const form = document.querySelector('.contact-section form');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageTextarea = form.querySelector('textarea[name="message"]');

    form.addEventListener('submit', function(event) {
        let valid = true;

        if (nameInput.value.trim() === '') {
            valid = false;
            alert('Please enter your name.');
        }

        if (emailInput.value.trim() === '') {
            valid = false;
            alert('Please enter your email.');
        } else if (!validateEmail(emailInput.value.trim())) {
            valid = false;
            alert('Please enter a valid email address.');
        }

        if (messageTextarea.value.trim() === '') {
            valid = false;
            alert('Please enter your message.');
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});





