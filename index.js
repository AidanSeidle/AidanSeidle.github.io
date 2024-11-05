async function loadSheetData() {
    try {
      const response = await fetch('_data/sheet_value.json');
      const data = await response.json();
      document.getElementById('sheetData').textContent = data.sheetValue;
    } catch (error) {
      console.error('Error loading sheet data:', error);
      document.getElementById('sheetData').textContent = 'Not currently caffinated.';
    }
  }

  loadSheetData();