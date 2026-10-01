document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect for Transparent to Blur Gradient Transition
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Opening Welcome Video Popup & Auto-Open Website on Video End
    const welcomePopup = document.getElementById('welcome-popup');
    const openingVideo = document.getElementById('opening-video');
    const closeWelcomeBtn = document.getElementById('close-welcome');
    const enterSiteBtn = document.getElementById('enter-site-btn');

    const closeWelcomePopup = () => {
        if(welcomePopup && openingVideo) {
            openingVideo.pause();
            welcomePopup.classList.add('hidden');
        }
    };

    window.addEventListener('load', () => {
        if(welcomePopup && openingVideo) {
            openingVideo.muted = false;
            openingVideo.play().catch(error => {
                console.log("Browser policy restricted unmuted autoplay:", error);
            });
        }
    });

    if(openingVideo) {
        openingVideo.addEventListener('ended', () => {
            closeWelcomePopup();
        });
    }

    if(closeWelcomeBtn) closeWelcomeBtn.addEventListener('click', closeWelcomePopup);
    if(enterSiteBtn) enterSiteBtn.addEventListener('click', closeWelcomePopup);
    
    window.addEventListener('click', (e) => {
        if (e.target === welcomePopup) closeWelcomePopup();
    });

    // 3. Scroll Reveal Animation Observer
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(reveal => revealOnScroll.observe(reveal));

    // 4. Show More / Show Less Photos Toggle Logic
    const togglePhotosBtn = document.getElementById('toggle-photos-btn');
    const hiddenPhotos = document.querySelectorAll('.hidden-photo');

    if(togglePhotosBtn) {
        let isExpanded = false;
        togglePhotosBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            hiddenPhotos.forEach(photo => {
                if(isExpanded) photo.classList.add('revealed');
                else photo.classList.remove('revealed');
            });

            if(isExpanded) {
                togglePhotosBtn.innerHTML = 'Show Less Photos <i class="fas fa-chevron-up" id="toggle-icon"></i>';
            } else {
                togglePhotosBtn.innerHTML = 'Show More Photos <i class="fas fa-chevron-down" id="toggle-icon"></i>';
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Toggle More/Less Reviews Logic
    const toggleReviewsBtn = document.getElementById('toggle-reviews-btn');
    const hiddenReviews = document.querySelectorAll('.hidden-review');

    if(toggleReviewsBtn) {
        let isReviewsExpanded = false;
        toggleReviewsBtn.addEventListener('click', () => {
            isReviewsExpanded = !isReviewsExpanded;
            hiddenReviews.forEach(review => {
                if(isReviewsExpanded) review.classList.add('revealed');
                else review.classList.remove('revealed');
            });

            if(isReviewsExpanded) {
                toggleReviewsBtn.innerHTML = 'Show Less Reviews <i class="fas fa-chevron-up"></i>';
            } else {
                toggleReviewsBtn.innerHTML = 'Show More Reviews <i class="fas fa-chevron-down"></i>';
                document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 5. Photo Gallery Lightbox Zoom Up Modal Logic
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    
    document.addEventListener('click', (e) => {
        const photoItem = e.target.closest('.photo-item');
        if (photoItem) {
            const img = photoItem.querySelector('img');
            if(lightboxModal && lightboxImg && img) {
                lightboxImg.src = img.src;
                lightboxModal.classList.add('active');
            }
        }
    });

    const closeLightbox = () => {
        if(lightboxModal) lightboxModal.classList.remove('active');
    };

    if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if(lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if(e.target === lightboxModal) closeLightbox();
        });
    }

    // 6. Separate Modals for Online Booking vs Enquiry Form
    const onlineBookingModal = document.getElementById('booking-modal');
    const inquiryModal = document.getElementById('inquiry-modal');
    
    const closeBookingBtn = document.getElementById('close-modal');
    const closeInquiryBtn = document.getElementById('close-inquiry');

    const onlineBookingTriggers = document.querySelectorAll('.book-online-trigger');
    const inquiryTriggers = document.querySelectorAll('.inquiry-trigger');

    // Open Online Booking Modal (Top Navbar Book Now Button Only)
    onlineBookingTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(onlineBookingModal) {
                onlineBookingModal.classList.remove('hidden');
                onlineBookingModal.classList.add('active');
            }
        });
    });

    // Open Inquiry Modal (All other buttons)
    inquiryTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(inquiryModal) {
                inquiryModal.classList.remove('hidden');
                inquiryModal.classList.add('active');
            }
        });
    });

    if(closeBookingBtn) {
        closeBookingBtn.addEventListener('click', () => onlineBookingModal.classList.remove('active'));
    }
    if(closeInquiryBtn) {
        closeInquiryBtn.addEventListener('click', () => inquiryModal.classList.remove('active'));
    }

    window.addEventListener('click', (e) => {
        if (e.target === onlineBookingModal) onlineBookingModal.classList.remove('active');
        if (e.target === inquiryModal) inquiryModal.classList.remove('active');
    });

    // Form Submissions
    const bookingForm = document.getElementById('booking-form');
    if(bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            alert("🎉 Online Booking & Payment Request Received! Our agent will contact you shortly to complete the transaction.");
            onlineBookingModal.classList.remove('active');
            bookingForm.reset();
        });
    }

    const inquiryForm = document.getElementById('inquiry-form');
    if(inquiryForm) {
        inquiryForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            alert("✨ Enquiry Submitted Successfully! Our travel desk will respond to your questions shortly.");
            inquiryModal.classList.remove('active');
            inquiryForm.reset();
        });
    }

    // 7. AI Chatbot Logic
    const chatToggleBtn = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatCloseBtn = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send');
    const chatBody = document.getElementById('chat-body');

    if(chatToggleBtn) {
        chatToggleBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('hidden');
            if(!chatWindow.classList.contains('hidden') && chatInput) {
                setTimeout(() => chatInput.focus(), 300);
            }
        });
    }

    if(chatCloseBtn) chatCloseBtn.addEventListener('click', () => chatWindow.classList.add('hidden'));

    const handleSendMessage = () => {
        if(!chatInput) return;
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, 'user-msg');
        chatInput.value = '';

        const loadingId = addMessage('...', 'bot-msg', true);

        setTimeout(() => {
            const loadingElement = document.getElementById(loadingId);
            if (loadingElement) loadingElement.remove();
            
            let response = "I'm your Spirit AI Guide! We offer packages for Coorg, Goa, Hampi & Gokarna, and Ooty. Want to book or know more?";
            let lowerText = text.toLowerCase();
            
            if (lowerText.includes('coorg')) {
                response = "Our 2D 1N Coorg package is very popular! It includes guided tours and cozy stays. Click 'Book Now' to reserve your spot.";
            } else if (lowerText.includes('goa')) {
                response = "Our 3D 2N Goa trip covers beaches, heritage sites, and water sports!";
            } else if (lowerText.includes('ooty') || lowerText.includes('mysore')) {
                response = "Our 6D 5N Kodaikanal, Ooty & Mysore trip is a fantastic hill station getaway.";
            } else if (lowerText.includes('contact') || lowerText.includes('address')) {
                response = "We are located at Vasantha Sai Apartments, KPHB, Kukatpally, Hyderabad. Call us at +91 966 656 7551!";
            }

            addMessage(response, 'bot-msg');
        }, 1200);
    };

    if(chatSendBtn) chatSendBtn.addEventListener('click', handleSendMessage);
    if(chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSendMessage();
        });
    }

    function addMessage(text, className, isHTML = false) {
        if(!chatBody) return;
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', className);
        
        if(isHTML) msgDiv.innerHTML = text;
        else msgDiv.textContent = text;

        const id = 'msg-' + Date.now();
        msgDiv.id = id;
        
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        
        return id;
    }
});
