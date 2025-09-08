import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';

function CafBar() {
  const [text, setText] = useState('');
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const displayTextRef = useRef('');

  useEffect(() => {
    async function loadSheetData() {
      try {
        const response = await fetch("../data/sheet_value.json");
        const data = await response.json();
        const sheetValue = Math.round(data.sheetValue);
        displayTextRef.current = isNaN(sheetValue)
          ? 'Not currently caffeinated'
          : `Currently ${sheetValue}mg caffeinated`;

        setText('');
        indexRef.current = 0;

        intervalRef.current = setInterval(() => {
          const nextChar = displayTextRef.current.charAt(indexRef.current);
          indexRef.current++;

          setText(displayTextRef.current.slice(0, indexRef.current));

          if (indexRef.current >= displayTextRef.current.length) {
            clearInterval(intervalRef.current);
          }
        }, 75);
      } catch (error) {
        console.error('Error loading sheet data:', error);
        setText('Failed to load data.');
      }
    }

    loadSheetData();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Container fluid style={{
      fontSize: '1.4em'
      }}>
        <a
          id="cafLink"
          href="https://docs.google.com/spreadsheets/d/1vcsjGSYogF5qhITc6uiURuAzZngN3RxZZJ0jILF6t-E/edit?usp=sharing"
          target="_blank"
          className='caf-nav-link'
        >
          {text}
        </a>
    </Container>
  );
}

export default CafBar;
