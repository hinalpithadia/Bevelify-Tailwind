 /*============ Modal ===============*/
 const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
 const modals = document.querySelectorAll(".modalTrigger");
 const modalCloseButtons = document.querySelectorAll(".modal-close");
 const overlay = document.querySelector(".overlay-modal");

 modalTriggerButtons.forEach(elem => {
     elem.addEventListener("click", event => {
         toggleModal(event.currentTarget.getAttribute("data-modal-target"));

         // Setting multiple CSS properties individually
         overlay.style.opacity = "1";
         overlay.style.zIndex = "200";
         overlay.style.visibility = "visible";
         overlay.style.transition = "opacity 0.3s ease"; // Optional: Add a transition
     });
 });


 // modalCloseButtons.forEach(elem => {
 //   elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modalTrigger").id));
 //   elem.addEventListener("click", event => overlay.style.opacity = 0);

 // });

 modalCloseButtons.forEach(elem => {
     elem.addEventListener("click", event => {
         toggleModal(event.currentTarget.closest(".modalTrigger").id);
         overlay.style.opacity = "0";
         overlay.style.zIndex = "-1";
         overlay.style.visibility = "hidden";
         overlay.style.transition = "opacity 0.3s ease"; // Optional: Add a transition
     });
 });



 modals.forEach(elem => {
     elem.addEventListener("click", event => {
         if (event.currentTarget === event.target) toggleModal(event.currentTarget.id);
     });
 });

 // Close Modal with "Esc"...
 document.addEventListener("keydown", event => {
     if (event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
         toggleModal(document.querySelector(".modal.modal-show").id);
     }
 });

 function toggleModal(modalId) {
     const modal = document.getElementById(modalId);

     if (getComputedStyle(modal).display === "flex") { // alternatively: if(modal.classList.contains("modal-show"))
         modal.classList.add("modal-hide");
         setTimeout(() => {
             document.body.style.overflow = "initial";
             modal.classList.remove("modal-show", "modal-hide");
             modal.style.display = "none";
         }, 200);
     }
     else {
         document.body.style.overflow = "hidden";
         modal.style.display = "flex";
         modal.classList.add("modal-show");
     }
 }


// ============ tippy tooltip ================
 
tippy('button', { 
  theme: 'custom',
  arrow: true,
 
});


// ============ DropDown ================

const selectedAll = document.querySelectorAll(".wrapper-dropdown");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.children[2];
  const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

  selected.addEventListener("click", () => {
    let arrow = selected.children[1];
   
    if (selected.classList.contains("active")) {
      handleDropdown(selected, arrow, false);
    } else {
      let currentActive = document.querySelector(".wrapper-dropdown.active");

      if (currentActive) {
        let anotherArrow = currentActive.children[1];
        handleDropdown(currentActive, anotherArrow, false);
      }

      handleDropdown(selected, arrow, true);
    }
  });

  // update the display of the dropdown
  for (let o of optionsList) {
    o.addEventListener("click", () => {
      selected.querySelector(".selected-display").innerHTML = o.innerHTML;
    });
  }
});

// check if anything else ofther than the dropdown is clicked
window.addEventListener("click", function (e) {
  if (e.target.closest(".wrapper-dropdown") === null) {
    closeAllDropdowns();
  }
});

// close all the dropdowns
function closeAllDropdowns() {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown");
  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    let arrow = selected.children[1];

    handleDropdown(selected, arrow, false);
  });
}

// open all the dropdowns
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}


// ============ DropDown with click outside [close] ================
// Select all toggle buttons and content elements
const toggleButtons = document.querySelectorAll('.icon-btn');
const contents = document.querySelectorAll('.icon-content');

// Function to close all content elements
function closeAllContents(exceptIndex = -1) {
  contents.forEach((content, index) => {
    if (index !== exceptIndex) {
      content.classList.add('hidden');
    }
  });
}

// Add a click event listener to each button
toggleButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    // Prevent click from propagating to document
    event.stopPropagation();
    
   // tooltipInstance[1].hide();
   
    // Check if the associated content is already visible
    const isContentVisible = !contents[index].classList.contains('hidden');
    
    // Close all content elements except the one being toggled
    closeAllContents(index);
    
    // Only toggle the current content if it was not already visible
    if (!isContentVisible) {
      contents[index].classList.remove('hidden');
      toggleButtons.classList.remove('tippy-active');
      
    }
    else  {
      contents[index].classList.add('hidden');
      toggleButtons.classList.add('tippy-active');
    }
  });
});

// Prevent content click from closing it
contents.forEach((content) => {
  content.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

// Add a click event listener to the document to close contents when clicking outside
document.addEventListener('click', () => {
  closeAllContents();
});

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




// =============== Tooltip ======================== 

// =============== Tabs ======================== 
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
      tabTogglers[i].parentElement.classList.remove("border-t", "border-r", "border-l", "-mb-px", "bg-white");  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    e.target.parentElement.classList.add("border-t", "border-r", "border-l", "-mb-px", "bg-white");
  });
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

