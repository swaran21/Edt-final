window.onload = function() {
    // Retrieve data from sessionStorage
    const wasteType = sessionStorage.getItem('wasteType');
    const quantity = sessionStorage.getItem('quantity');
    const phone = sessionStorage.getItem('phone');
    const address = sessionStorage.getItem('address');
    const pickupDate = sessionStorage.getItem('pickupDate');

    // Set the content of the confirmation page
    document.getElementById('waste-type').textContent = wasteType;
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('phone').textContent = phone;
    document.getElementById('address').textContent = address;
    document.getElementById('pickup-date').textContent = pickupDate;

    // Optional: Clear sessionStorage after displaying data
    // sessionStorage.clear();
};
