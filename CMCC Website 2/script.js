// GENERAL - Menu Animation

function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuCheckbox = document.querySelector('.nav-bar input'); // The checkbox input
    var computedStyle = window.getComputedStyle(menu);
    var rightPosition = computedStyle.right;

    if (rightPosition === '0px') {
        menu.style.right = '-152px'; // Collapse the menu
        menuCheckbox.checked = false; // Uncheck the checkbox
    } else {
        menu.style.right = '0px'; // Show the menu
        menuCheckbox.checked = true; // Check the checkbox
    }
}

// Add a click event listener to the document
document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var menuToggle = document.querySelector('.toggle-menu');
    var menuCheckbox = document.querySelector('.nav-bar input'); // The checkbox input

    // Check if the click happened outside the menu and the menu button
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.style.right = '-152px'; // Collapse the menu
        menuCheckbox.checked = false; // Uncheck the checkbox
    }
});

// Add the toggle functionality to your menu button
document.querySelector('.toggle-menu').addEventListener('click', function(event) {
    toggleMenu();
    event.stopPropagation(); // Prevent the document click event from firing
});




// THE CANADIAN MARTYRS - Card Animation




function toggleInfo(element) {
    let info = element.nextElementSibling;
    let button = element.querySelector('.toggle-btn');

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        button.textContent = "−";  // Change + to -
    } else {
        info.style.display = "none";
        button.textContent = "+";  // Change - back to +
    }
}


// LANGUAGE

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,zh-CN,zh-TW', // optional: restrict list
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// After widget loads, replace the text
function changeTranslatePrompt() {
  const interval = setInterval(() => {
    const select = document.querySelector('.goog-te-combo');
    if (select && select.options.length > 0) {
      select.options[0].text = 'Translate'; // change "Select Language" → "Translate"
      clearInterval(interval);
    }
  }, 100); // check every 100ms until ready
}

window.addEventListener('load', changeTranslatePrompt);