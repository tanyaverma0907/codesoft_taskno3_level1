let string = "";
let memory = 0; // Initialize memory variable

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (buttonText === 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (buttonText === 'M+') {
            // Add current value to memory
            memory += parseFloat(string);
            string = ""; // Clear the input field
            document.querySelector('input').value = string;
        }
        else if (buttonText === 'M-') {
            // Subtract current value from memory
            memory -= parseFloat(string);
            string = ""; // Clear the input field
            document.querySelector('input').value = string;
        }
        else {
            string = string + buttonText;
            document.querySelector('input').value = string;
        }

    })
})
