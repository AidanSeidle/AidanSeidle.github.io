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
    shakeBag();

    setTimeout(() => {
    // Rotate and switch bag state
    bag.style.transform = `rotate(${isOpen ? '0' : '90deg'})`;
    bag.src = isOpen ? '/media/BundleClosed.png' : '/media/BundleOpen.png';
    
    // Toggle bag state
    isOpen = !isOpen;
    
    // Update the link text and page
    updateLink();
    }, 300);
});