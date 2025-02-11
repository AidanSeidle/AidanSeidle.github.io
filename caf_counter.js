async function loadSheetData() {
try {
    const response = await fetch('/data/sheet_value.json');
    const data = await response.json();
    
    // Assuming the value is stored in "sheetValue" in the JSON
    //document.getElementById('cafLink').textContent = `Currently ${Math.round(data.sheetValue)}mg caffeinated` || 'Not currently caffinated';
    text = `Currently ${Math.round(data.sheetValue)}mg caffeinated` || 'Not currently caffinated';

    let index = 0;
    const speed = 75; // Typing speed in milliseconds
    const typewriterElement = document.getElementById("cafLink");

    function type() {
        if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
        }
    }

    type(); // Start the typing effect on page load
} catch (error) {
    console.error('Error loading sheet data:', error);
    document.getElementById('cafLink').textContent = 'Failed to load data.';
}
}

loadSheetData();