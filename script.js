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

// --- AI CHATBOT LOGIC ---
function toggleAIChat() {
    const chatDrawer = document.getElementById('aiChatDrawer');
    if (chatDrawer.style.display === 'flex') {
        chatDrawer.style.display = 'none';
    } else {
        chatDrawer.style.display = 'flex';
    }
}

function handleAIPress(event) {
    if (event.key === 'Enter') {
        sendAIMessage();
    }
}

function sendAIMessage() {
    const inputField = document.getElementById('aiUserInput');
    const messageText = inputField.value.trim();
    if (!messageText) return;

    const chatMessages = document.getElementById('aiChatMessages');

    // Append User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'ai-message user';
    userDiv.textContent = messageText;
    chatMessages.appendChild(userDiv);

    inputField.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulate Bot Response after 600ms
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'ai-message bot';
        
        const lower = messageText.toLowerCase();
        if (lower.includes('price') || lower.includes('cost') || lower.includes('package')) {
            botDiv.textContent = 'Our featured packages start at ₹4,999/- for Coorg and range up to ₹13,999/- for hill station retreats. You can click "Customize" for a tailored quote!';
        } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('address')) {
            botDiv.textContent = 'We are located at Vasantha Sai Apartments, KPHB, Kukatpally, Hyderabad. You can call us at +91 96665 67551.';
        } else {
            botDiv.textContent = 'That sounds like a wonderful trip! Let me connect you with our destination expert or you can click "Book Now" to secure your dates.';
        }

        chatMessages.appendChild(botDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
}