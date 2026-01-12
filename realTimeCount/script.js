const textInput = document.getElementById('text-Input');
const charCount = document.getElementById('char-Count'

);

textInput.addEventListener('input', () => {
    const textLength = textInput.value.length;
    charCount.textContent = `Character Count: ${count}`;
    if(textLength => 50) {
        textInput.value = textInput.value.slice(0, 50);
        charCount.style.color = 'red';
    } else {
        charCount.style.color = '';
    }
});