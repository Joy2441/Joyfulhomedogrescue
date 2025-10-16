// Show a welcome message on page load
window.addEventListener('DOMContentLoaded', () => {
    const welcomeMsg = "🐾 Welcome to Joy's Dog Rescue! Thank you for visiting. 🐶";
    console.log(welcomeMsg);
    alert(welcomeMsg); // You can comment this out if you prefer not to show it every time
});

// Add animation when hovering over dog images
const dogImages = document.querySelectorAll('.dog-image');

dogImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.08)';
        img.style.boxShadow = '0 0 30px #ff66cc, 0 0 50px #00ffff';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = '0 0 20px #ff00cc, 0 0 30px #00ffff';
    });
});

// Button click effect
const donateButton = document.querySelector('.donate-button');
const adoptButton = document.getElementById('adoptButton');

function buttonClickEffect(button) {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
}

if (donateButton) buttonClickEffect(donateButton);
if (adoptButton) buttonClickEffect(adoptButton);

// Smooth scroll to events section when adoption button is clicked
if (adoptButton) {
    adoptButton.addEventListener('click', (e) => {
        const isSamePageLink = adoptButton.getAttribute('href') === '#events';
        if (isSamePageLink) {
            e.preventDefault();
            const eventsSection = document.getElementById('events');
            if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}
