//==================Modal=====================//
const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modalTrigger");
const modalCloseButtons = document.querySelectorAll(".modal-close");
const CloseButtons = document.querySelectorAll(".close-btn");
const overlay = document.querySelector(".overlay-modal");

modalTriggerButtons.forEach(elem => {
    elem.addEventListener("click", event => {
        const targetModalId = event.currentTarget.getAttribute("data-modal-target");

        // Close all modals before opening the target modal
        modals.forEach(modal => {
            if (modal.id !== targetModalId) {
                closeModal(modal.id, false); // Close without hiding the overlay
            }
        });

        toggleModal(targetModalId);

        // Show the overlay
        overlay.style.opacity = "1";
        overlay.style.zIndex = "200";
        overlay.style.visibility = "visible";
        overlay.style.transition = "opacity 0.3s ease"; // Optional transition
    });
});

modalCloseButtons.forEach(elem => {
    elem.addEventListener("click", () => {
        closeAllModals(); // Close all modals and hide overlay
    });
});

CloseButtons.forEach(elem => {
    elem.addEventListener("click", () => {
        closeAllModals(); // Close all modals and hide overlay
    });
});

modals.forEach(elem => {
    elem.addEventListener("click", event => {
        if (event.currentTarget === event.target) closeModal(event.currentTarget.id, true);
    });
});

// Close Modal with "Esc" key
document.addEventListener("keydown", event => {
    if (event.key === "Escape" || event.keyCode === 27) {
        closeAllModals(); // Close all modals and hide overlay
    }
});

// Helper Functions

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);

    if (getComputedStyle(modal).display === "flex") {
        closeModal(modalId, true);
    } else {
        modal.style.display = "flex";
        modal.classList.add("modal-show");
    }
}

function closeModal(modalId, hideOverlay = true) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.classList.add("modal-hide");
        setTimeout(() => {
            modal.classList.remove("modal-show", "modal-hide");
            modal.style.display = "none";
        }, 200);
    }

    // Hide overlay if specified
    if (hideOverlay) {
        overlay.style.opacity = "0";
        overlay.style.zIndex = "-1";
        overlay.style.visibility = "hidden";
        overlay.style.transition = "opacity 0.3s ease"; // Optional transition
    }
}

function closeAllModals() {
    modals.forEach(modal => closeModal(modal.id, true));
}

/*=======generate button enabled=============*/
let selectedTrigger = null;
let selectedTarget = null;

// Function to handle trigger selection
function selectTrigger(triggerId, targetId) {
  // Store the selected trigger and target
  selectedTrigger = triggerId;
  selectedTarget = targetId;

  // Highlight the selected trigger
  document.querySelectorAll('ul li div').forEach(el => el.classList.remove('active-box'));
  document.getElementById(triggerId).classList.add('active-box');

  // Enable the "try" button
  const generateBtn = document.getElementById('GenerateBtn');
  generateBtn.disabled = false;
  generateBtn.classList.remove('cursor-not-allowed');
  generateBtn.classList.add('cursor-pointer');
}

// Function to reveal the target div
function applyTexture() {
  if (!selectedTarget) return;

  // Hide all target divs
  document.querySelectorAll('[id^="targetDiv"]').forEach(div => {
    div.classList.add('hidden');
    div.classList.remove('opacity-100');
  });

  // Show the selected target div
  const targetDiv = document.getElementById(selectedTarget);
  targetDiv.classList.remove('hidden');
  setTimeout(() => targetDiv.classList.add('opacity-100'), 10);
}





// ----------===================== Range slider ================--------------------------- 
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.inputRange').forEach(function (element) {
    let input = element.getElementsByTagName('input')[0];
    let output = element.getElementsByTagName('output')[0];
    if (!input || !output) return;
    let val = parseFloat(input.value);
    let min = parseFloat(input.min) || 0;
    let max = parseFloat(input.max) || 100;
    output.textContent = val;
    function handleInput() {
      let val = parseFloat(input.value);
      let fillPercent = ((val - min) / (max - min)) * 100;
      input.style.background = 'linear-gradient(to right, #F99D1A 0%, #F99D1A ' + fillPercent + '%, #2C2B2A ' + fillPercent + '%)';
      output.textContent = val;
    }
    input.addEventListener('input', handleInput);
    input.addEventListener('change', handleInput);
    handleInput();
  });
});

// ----------===================== user-input ================--------------------------- 

document.addEventListener('DOMContentLoaded', function () {
  // Get the textarea and the paragraph for displaying the character count
  const textarea = document.getElementById('user-input');
  const characterCountParagraph = document.getElementById('character-count-paragraph');
  const maxLength = 50; // Set the maximum character limit

  // Event listener for when the user types in the textarea
  textarea.addEventListener('input', function () {
    // If the current input exceeds the max length, truncate it
    if (textarea.value.length > maxLength) {
      textarea.value = textarea.value.substring(0, maxLength);
    }

    // Update the paragraph with the current character count
    const currentLength = textarea.value.length;
    characterCountParagraph.textContent = `${currentLength} / ${maxLength}`;
  });
});



// ======================== Radio selector value =====================================

document.addEventListener('DOMContentLoaded', function () {
  // Get the element where the selected value should be displayed
  const selector = document.getElementById('selector');

  // Get all radio buttons with the name "radio" inside the class .radio-list
  const radioButtons = document.querySelectorAll('.radio-list input[name="radio"]');

  // Add an event listener to each radio button
  radioButtons.forEach(function (radio) {
    radio.addEventListener('change', function () {
      // Update the innerHTML of the selector with the value of the selected radio
      if (radio.checked) {
        selector.innerHTML = radio.value;
      }
    });
  });
});




// =============== Target Polycount ======================== 

function show1() {
  const target = document.getElementById('target');

  // Set the styles
  target.style.display = 'none';  // Hide the element
  target.style.opacity = '0';     // Set opacity to 0 (make it invisible)
  target.style.transform = 'translateY(-20px)'; // Move the element 150px to the left
}

// function show2(){
//   document.getElementById('target').style.display = 'flex';
//   document.getElementById('target').style.opacity = '1';
// }
function show2() {
  const target = document.getElementById('target');

  // Show the element first
  target.style.display = 'flex';

  // Add a small delay before changing opacity (e.g., 100ms)
  setTimeout(function () {
    target.style.opacity = '1';
    target.style.transform = 'translateY(0px)';
  }, 50);  // Delay in milliseconds
}


// =============== Tabs ======================== 
document.addEventListener('click', function (event) {
  // Check if the clicked element has the "tablink" class
  if (event.target.classList.contains('tablink')) {
      var tab = event.target.dataset.tab; // Get the data-tab attribute value
      var tabContainer = event.target.closest('.tabs'); // Find the closest .tabs container
      // Hide all tab content within the current tab container
      var tabcontents = tabContainer.querySelectorAll('.tabcontent');
      for (var i = 0; i < tabcontents.length; i++) {
          tabcontents[i].style.display = 'none';
      }

      // Remove "active" class from all tab links within the current tab container
      var tablinks = tabContainer.querySelectorAll('.tablink');
      for (var i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove('active');
      }

      // Show the current tab content and add "active" class to the clicked tab link
      var tabcontent = tabContainer.querySelector('#' + tab);
      tabcontent.style.display = 'block';
      event.target.classList.add('active');
  }
});

// =============== gsap js ======================== 

document.addEventListener("DOMContentLoaded", function () {
  animateText("#prompt");
});

function animateText(selector) {
  const textElement = document.querySelector(selector);
  const textContent = textElement.textContent;

  // Replace text with spans for each character
  textElement.innerHTML = [...textContent]
      .map(char => `<span>${char == "" ? "&nbsp;" : char}</span>`)
      .join("");

  // Animate each span
  gsap.fromTo(
      `${selector} span`,
      { opacity: 0, y: 90 },
      {
          opacity: 1,
          y: 0,
          duration: 0.02,
          stagger: 0.02,
          ease: "elastic(1.2, 0.5)",
      }
  );
}

// JavaScript to handle pricing updates
const toggle = document.getElementById("pricingToggle");
const prices = document.querySelectorAll(".price");
const postfixes = document.querySelectorAll(".postfix");

toggle.addEventListener("change", () => {
  const isYearly = toggle.checked;

  // Update pricing and postfix text
  prices.forEach(price => {
    const monthlyPrice = price.getAttribute("data-monthly");
    const yearlyPrice = price.getAttribute("data-yearly");
    price.textContent = `$${isYearly ? yearlyPrice : monthlyPrice}`;
  });

  postfixes.forEach(postfix => {
    postfix.textContent = isYearly ? "/ month" : "/ month";
  });
});

