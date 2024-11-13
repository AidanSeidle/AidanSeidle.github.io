async function loadSheetData() {
try {
    const response = await fetch('/data/sheet_value.json');
    const data = await response.json();
    
    // Assuming the value is stored in "sheetValue" in the JSON
    document.getElementById('cafLink').textContent = `Currently ${Math.round(data.sheetValue)}mg caffeinated` || 'Not currently caffinated';
} catch (error) {
    console.error('Error loading sheet data:', error);
    document.getElementById('cafLink').textContent = 'Failed to load data.';
}
}

loadSheetData();
  