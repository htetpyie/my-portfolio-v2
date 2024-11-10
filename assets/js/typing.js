const texts = ["I'm Htet Pyie Phyoe Maung.", "I'm a Software Engineer.", "Nice to meet you."];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 1000; // Delay before starting to type a new text
const typingTextElement = document.getElementById("typing-text");

function type() {
  // Check if we're deleting or typing
  if (isDeleting) {
    currentText = texts[textIndex].substring(0, charIndex--);
    typingTextElement.textContent = currentText;

    // When text is fully erased, move to the next text
    if (currentText === "") {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Go to the next text in the array
      setTimeout(type, newTextDelay);
      return;
    }
  } else {
    currentText = texts[textIndex].substring(0, charIndex++);
    typingTextElement.textContent = currentText;

    // When text is fully typed out, start erasing
    if (currentText === texts[textIndex]) {
      isDeleting = true;
      setTimeout(type, newTextDelay);
      return;
    }
  }

  // Set typing speed based on whether we're typing or deleting
  setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
}

// Start typing on DOM load
document.addEventListener("DOMContentLoaded", () => setTimeout(type, newTextDelay));
