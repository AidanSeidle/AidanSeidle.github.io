const bag = document.getElementById('link_bag_img');
const link = document.getElementById('link_bag_link');
let isOpen = false;

// Random page options for the <a> element
const pages = [
    { text: 'Instagram ~ Not Empty', url: 'https://www.instagram.com/aidanseidle/#' },
    { text: 'LinkedIn ~ Less Empty', url: 'https://www.linkedin.com/in/aidan-seidle/' },
    { text: 'X ~ More Empty', url: 'https://x.com/AidanSeidle' },
    { text: 'Bluesky ~ Mostly Empty', url: 'https://bsky.app/profile/aidanseidle.bsky.social' }
];

// Shake the bag
function shakeBag() {
    bag.style.animation = 'shake 0.3s';
    setTimeout(() => {
    bag.style.animation = '';
    }, 300);
}

// Update the <a> element text and link based on a random page
function updateLink() {
    if (isOpen) {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    link.textContent = randomPage.text;
    link.href = randomPage.url;
    link.classList.add('visible');
    } else {
    link.textContent = '';
    link.href = '#';
    link.classList.remove('visible');
    }
}

// Handle bag click event
bag.addEventListener('click', () => {
    if (isOpen) {
        // Toggle signal bag close
        isOpen = false;

        
        // Hide link
        updateLink();
        // Closed image
        bag.src = '/media/BundleClosed.png';
        // Rotate upright
        bag.style.transform = 'rotate(0)';
        setTimeout(() => {
            shakeBag();

            // Toggle bag state
            isOpen = true;

            // Rotate and switch bag state
            setTimeout(() => {
                
                bag.style.transform = 'rotate(180deg)';

                setTimeout(() => {
                    bag.src = '/media/BundleOpen.png';
                }, 400);

                setTimeout(() => {
                    // Update the link text and page
                    updateLink();
                }, 425);
            }, 500);
        }, 300);

        

    } else {
        shakeBag();

        // Toggle bag state
        isOpen = true;

        // Rotate and switch bag state
        setTimeout(() => {

            bag.style.transform = 'rotate(180deg)';

            setTimeout(() => {
            bag.src = '/media/BundleOpen.png';
            }, 400);

            setTimeout(() => {
                // Update the link text and page
                updateLink();
            }, 425);
        }, 500);
       
    
    }

});