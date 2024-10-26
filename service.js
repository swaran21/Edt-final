document.getElementById('service-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const wasteType = document.getElementById('waste-type').value;
    const quantity = document.getElementById('quantity').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const pickupDate = document.getElementById('pickup-date').value;

    // Store data in sessionStorage
    sessionStorage.setItem('wasteType', wasteType);
    sessionStorage.setItem('quantity', quantity);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('pickupDate', pickupDate);

    // Redirect to submit page
    window.location.href = 'submit.html';
});
