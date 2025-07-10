// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate__animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.getAttribute('class').split('animate__')[1];
                entry.target.classList.add('animate__' + animation);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// Floating animation for special offer button
const offerBtn = document.querySelector('.pulse-animation');
if (offerBtn) {
    setInterval(() => {
        offerBtn.classList.toggle('pulse-animation');
        setTimeout(() => {
            offerBtn.classList.toggle('pulse-animation');
        }, 100);
    }, 4000);
}
// check availability code
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector(".available");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop default form submission

        // Grab form data
        const checkIn = document.getElementById("check-in").value;
        const checkOut = document.getElementById("check-out").value;
        const guests = document.getElementById("guests").value;

        // Simple validation (optional)
        if (!checkIn || !checkOut) {
            alert("Please select both check-in and check-out dates.");
            return;
        }

        // For now, just log or alert (you can replace this with AJAX or fetch)
        console.log("Check-In:", checkIn);
        console.log("Check-Out:", checkOut);
        console.log("Guests:", guests);

        alert(`Checking availability from ${checkIn} to ${checkOut} for ${guests} guest(s).`);

        // Clear form after submission
        form.reset();
        document.getElementById("guests").selectedIndex = 0;
    });
});

 // Initialize carousel with autoplay
 const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
    interval: 5000,
    ride: 'carousel',
    wrap: true
});




// room section
 // View All Rooms functionality

//  document.getElementById('viewAllRooms').addEventListener('click', function() {
//     const extraRooms = document.querySelectorAll('.extra-room');
//     const viewAllBtn = document.getElementById('viewAllRooms');
    
//     if (viewAllBtn.textContent === 'View All Rooms') {
//         extraRooms.forEach(room => {
//             room.style.display = 'block';
//         });
//         viewAllBtn.textContent = 'Show Less';
//     } else {
//         extraRooms.forEach(room => {
//             room.style.display = 'none';
//         });
//         viewAllBtn.textContent = 'View All Rooms';
//     }
document.getElementById('viewAllRooms').addEventListener('click', function() {
    const extraRooms = document.querySelectorAll('.extra-room');
    const button = this;
    
    extraRooms.forEach(room => {
        if (room.style.display === 'none') {
            room.style.display = 'block';
            button.textContent = 'Show Less';
        } else {
            room.style.display = 'none';
            button.textContent = 'View All Rooms';
            // Smooth scroll to rooms section
            document.querySelector('#rooms').scrollIntoView({ behavior: 'smooth' });
        }
    });

    
    // Trigger animations for newly shown rooms
    extraRooms.forEach(room => {
        if (room.style.display === 'block') {
            room.classList.add('animate__fadeIn');
        }
    });
viewAllBtn.textContent = isShowingAll ? 'Show Less' : 'View All Rooms';
});














