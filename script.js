document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Hero Section Content with Multiple Background Images
    const title = document.getElementById('hero-title');
    const description = document.getElementById('hero-description');

    const hour = new Date().getHours();
    if (hour < 12) {
        title.textContent = 'Good Morning! Welcome to Zero Waste Network';
        description.textContent = 'Start your day by learning how to reduce waste and make a difference.';
    } else if (hour < 18) {
        title.textContent = 'Good Afternoon! Welcome to Zero Waste Network';
        description.textContent = 'Discover innovative solutions to reduce, reuse, and recycle waste.';
    } else {
        title.textContent = 'Good Evening! Welcome to Zero Waste Network';
        description.textContent = 'End your day with tips on sustainable living and waste management.';
    }

    const heroImages = [
        'https://images.unsplash.com/photo-1512568400610-62da28bc8a13',
        'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1593642532871-8b12e02d091c'
    ];

    let currentImageIndex = 0;

    function changeHeroImage() {
        const heroSection = document.getElementById('home');
        heroSection.style.backgroundImage = `url(${heroImages[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    }

    setInterval(changeHeroImage, 5000);
    changeHeroImage();

    // Modal functionality
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.modal .close');

    // Open the modal when a button is clicked
    document.querySelector('.hero button').addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    

    // Counter Animation for "Benefits of Recycling" section
    const counters = document.querySelectorAll('#benefits .counter');
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 200;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.disconnect();
                }
            });
        });

        observer.observe(counter);
    });
});
// Function to animate counters rolling down to zero like a countdown
function rollDownToZero(counters) {
    counters.forEach(counter => {
        counter.innerText = Math.ceil(Math.random() * 1000); // Start with a random high number
        let rollDownInterval = setInterval(() => {
            const current = +counter.innerText;
            if (current > 0) {
                counter.innerText = current - 1; // Decrease to simulate rolling down
            } else {
                clearInterval(rollDownInterval);
                counter.innerText = 0; // Ensure it stops at zero
            }
        }, 5); // Speed of the roll down
    });
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener for scroll to trigger the counter animation
let countersAnimated = false;
document.addEventListener('scroll', function () {
    const counterGrid = document.querySelector('.counter-grid');
    if (isElementInViewport(counterGrid) && !countersAnimated) {
        countersAnimated = true;
        rollDownToZero(document.querySelectorAll('.counter'));
    }
}, { passive: true });
document.addEventListener('DOMContentLoaded', function () {
    // ... previous code ...

    // Counter Animation for "Benefits of Recycling"
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the number, the slower the count

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Calculate increment
            const increment = Math.ceil(target / speed);

            // Check if target is reached
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1); // Call this function again
            } else {
                counter.innerText = target; // Ensure it reaches the target
            }
        };
        updateCount();
    });
});
document.getElementById("toggle-more-info").addEventListener("click", function() {
    const moreInfo = document.getElementById("more-info");
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block"; // Show more info
        this.textContent = "Read Less"; // Change button text
    } else {
        moreInfo.style.display = "none"; // Hide more info
        this.textContent = "Read More"; // Reset button text
    }
});


