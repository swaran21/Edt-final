// JavaScript for dropdown functionality

// Toggle dropdown menu
document.getElementById('profile-pic').addEventListener('click', function(event) {
    event.stopPropagation();
    var dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if clicked outside
window.addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    }
});
