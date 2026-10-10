function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function handleFormSubmit(event, modalId) {
    event.preventDefault();
    alert('Thank you! Your inquiry has been received successfully. Our travel expert will contact you shortly.');
    closeModal(modalId);
}

// Close modal when clicking outside content area
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = "none";
    }
}