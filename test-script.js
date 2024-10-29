// Get the modal, text element, and close button elements
const popup = document.getElementById('popup');
const openPopupText = document.getElementById('openPopupText');
const closePopupBtn = document.getElementById('closePopupBtn');

// When the user clicks the text, open the popup
openPopupText.addEventListener('click', () => {
    popup.style.display = 'block';
});

// When the user clicks on the close button, close the popup
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// When the user clicks anywhere outside of the popup, close it
window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
