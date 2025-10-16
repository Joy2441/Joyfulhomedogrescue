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
function initMap() {
    // Coordinates for Youngstown, OH (approximate center)
    const youngstown = { lat: 41.0990, lng: -80.6496 };

    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: youngstown,
    });

    // Array of animal charity locations (example data)
    const charities = [
        {
            name: "Youngstown Animal Charity Humane Society",
            location: { lat: 41.0910, lng: -80.6450 },
            address: "Example Address 1",
            phone: "555-123-4567"
        },
        {
            name: "Angels for Animals",
            location: { lat: 41.0000, lng: -80.7000 },
            address: "Example Address 2",
            phone: "555-987-6543"
        }
        // Add more charity locations here
    ];

    // Add markers for each charity
    charities.forEach(charity => {
        const marker = new google.maps.Marker({
            position: charity.location,
            map: map,
            title: charity.name,
        });

        // Add an info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${charity.name}</h3><p>${charity.address}</p><p>Phone: ${charity.phone}</p>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}
