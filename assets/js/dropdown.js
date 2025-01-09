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

