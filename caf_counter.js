async function loadSheetData() {
try {
    const response = await fetch('data/sheet_value.json');
    const data = await response.json();
    
    // Assuming the value is stored in "sheetValue" in the JSON
    document.getElementById('sheetData').textContent = `Currently ${Math.round(data.sheetValue)}mg caffinated` || 'Not currently caffinated';
} catch (error) {
    console.error('Error loading sheet data:', error);
    document.getElementById('sheetData').textContent = 'Failed to load data.';
}
}

loadSheetData();
  