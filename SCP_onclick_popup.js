// Function to handle opening and closing popups
function setupPopup(openButtonId, popupId, closeButtonId) {
    const openButton = document.getElementById(openButtonId);
    const popup = document.getElementById(popupId);
    const closeButton = document.getElementById(closeButtonId);

    if (!openButton || !popup || !closeButton) {
        console.log(`Element not found for: ${openButtonId}, ${popupId}, ${closeButtonId}`);
        return;
    }

    openButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
    console.log(`Popup setup complete for: ${openButtonId}, ${popupId}, ${closeButtonId}`);
}

// Get all elements with IDs that match the pattern "openPopupText_SCP[number]"
const popupTextElements = document.querySelectorAll('[id^="openPopupText_SCP"]');
console.log('Found elements:', popupTextElements);

// Extract the SCP numbers from these IDs
const scpNumbers = Array.from(popupTextElements).map(element => {
  const id = element.id;
  // Extract the number part from the ID, assuming the ID format is "openPopupText_SCP[number]"
  const numberMatch = id.match(/\d+/);
  const number = numberMatch ? numberMatch[0] : null;
  console.log('Processing ID:', id, 'Extracted number:', number);
  return number;
}).filter(Boolean); // Remove any null values

console.log('SCP numbers:', scpNumbers);

// Call setupPopup for each SCP number
scpNumbers.forEach(number => {
  console.log(`Setting up popup for SCP ${number}`);
  setupPopup(`openPopupText_SCP${number}`, `popup_SCP${number}`, `closePopupBtn_SCP${number}`);
});





