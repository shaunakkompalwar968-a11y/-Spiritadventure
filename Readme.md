

SPIRIT ADVENTURES TRAVEL AGENCY WEBSITE - DOCUMENTATION \& MAINTENANCE GUIDE

&#x20; **© Shaunak Kompalwar. All Rights Reserved.**





1\. BRAND \& PROJECT OVERVIEW

\--------------------------------------------------------------------------------

\- Brand Name: Spirit Adventures

\- Headquarters / Location: Vasantha Sai Apartments, Opposite Rishi Towers, KPHB, Kukatpally, Hyderabad - 500085

\- Primary Goal: A fully interactive, mobile-responsive travel agency landing page designed to showcase tour packages, photo memories, traveler reviews, and instant booking inquiries.



2\. CORE FEATURES INTEGRATED

\--------------------------------------------------------------------------------

\- Opening Welcome Video Modal: Plays automatically upon page load with sound/muted fallback. The moment the video finishes playing (via JavaScript 'ended' event listener), it automatically dismisses itself and opens the main website. Includes manual options ("1. Enter Website" and "2. Book Now").

\- Split-Screen Hero Landing Page:

&#x20; \* Left Side: Frosted teal styling with animated typography, custom flight path graphic, social sidebars, and call-to-action buttons.

&#x20; \* Right Side: Media frame featuring an HD traveling woman nature video, animated "SPIRIT ADVENTURES" glowing brand badge, and a tilted "Top Rated" stamp sticker.

\- Interactive Photo Gallery: Contains 20 destination photos (10 visible initially + 10 toggleable via an animated "Show More Photos / Show Less Photos" button). Includes a full-screen Lightbox Zoom modal when any image is clicked.

\- Wall of Fame (Traveler Experiences): Contains 9 authentic traveler reviews (3 visible initially + 6 toggleable via a smooth "Show More Reviews / Show Less Reviews" animation).

\- Instant Booking Inquiry Modal: Routes submissions securely via AJAX through Formspree directly to the agency email (shaunakkompalwar968@gmail.com) without page reloads.

\- Floating Action Bar (Bottom Right):

&#x20; \* Google Maps Rating Button: Pulsing red button with a hover tooltip ("Rate Us!").

&#x20; \* WhatsApp Floating Button: Pulsing green button linked directly to customer support (+91 966 656 7551).

&#x20; \* AI Chatbot Assistant: Interactive pop-up chat window ("Spirit AI Guide") capable of answering customer inquiries regarding Coorg, Goa, Ooty, Hampi, and office contact details.

\- Demo Watermark: A subtle, semi-transparent tilted "DEMO WEBSITE" watermark overlaid across the screen that allows full user interaction right through the text.



3\. TECHNICAL STACK \& CONCEPTS

\--------------------------------------------------------------------------------

\- Languages Used:

&#x20; \* HTML5: Structural markup (semantic sections, navigation, forms, modals).

&#x20; \* CSS3: Styling, Flexbox/Grid layouts, frosted glass effects (backdrop-filter), keyframe animations, and responsive media queries.

&#x20; \* JavaScript (ES6+): Interactivity, autoplay video handlers, DOM manipulation, asynchronous Fetch API requests, and Intersection Observer scroll-reveal animations.

\- Core Concepts Applied:

&#x20; \* Responsive Design: Adapts seamlessly across desktop, tablet, and mobile phone screens.

&#x20; \* Event-Driven Programming: Listens for user clicks, form submissions, and video end triggers.

&#x20; \* Asynchronous Form Submission: Submits lead inquiries in the background with real-time loading feedback.



4\. MAINTENANCE \& MODIFICATION GUIDE

\--------------------------------------------------------------------------------

\- How to change tour packages / pricing:

&#x20; \* Open `index.html`, locate `<section id="destinations">`, and edit the titles, durations, or prices. Remember to also update the package dropdown `<select>` inside the `#booking-modal`.

\- How to update contact info or address:

&#x20; \* Open `index.html`, locate `<footer id="contact">`, and modify the address, phone number, or email text. Also update WhatsApp links (`https://wa.me/91...`) if phone numbers change.

\- How to change Formspree email endpoint:

&#x20; \* Open `index.html`, find `<form id="booking-form" action="https://formspree.io/f/YOUR\_ID" ...>`, and replace `YOUR\_ID` with your new Formspree form code.

\- How to update photos or reviews:

&#x20; \* Open `index.html`, scroll to `#gallery` (for photos) or `#reviews` (for reviews), and update image source links or review paragraph texts.

\- How to remove the "DEMO WEBSITE" watermark:

&#x20; \* Open `style.css` and delete or comment out the `body::before` block near the top of the file.



================================================================================

End of Documentation

================================================================================

