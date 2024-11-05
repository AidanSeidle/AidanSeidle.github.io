async function loadSheetData() {
try {
    const response = await fetch('sheet_value.json');
    const data = await response.json();
    
    // Assuming the value is stored in "sheetValue" in the JSON
    document.getElementById('sheetData').textContent = data.sheetValue || 'Not currently Caffinated';
} catch (error) {
    console.error('Error loading sheet data:', error);
    document.getElementById('sheetData').textContent = 'Failed to load data.';
}
}

loadSheetData();
  