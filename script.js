// Get the current date
const currentDate = new Date();

// Get the day, month, and year
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-indexed
const year = currentDate.getFullYear();

// Create a message with the current date
const message = `Today's date is ${day}/${month}/${year}.`;

// Display the message in the console
console.log(message);

// Get the main content element
const mainContent = document.querySelector('main');

// Create a new paragraph element with the message
const messageElement = document.createElement('p');
messageElement.textContent = message;

// Add the message to the main content
mainContent.appendChild(messageElement);