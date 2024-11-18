document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.hero');
  const container = document.querySelector('.container');
  const menuButton = document.querySelector('.menu-button img'); // Select the image inside the menu button
  const verticalMenu = document.querySelector('.vertical-menu');
  const leftMenuButton = document.querySelector('.left-menu-button p');
  const leftVerticalMenu = document.querySelector('.left-vertical-menu');
  let currentVerticalIndex = 0;
  let currentHorizontalIndex = 0;

  //RIGHT MENU
  // Function to toggle right menu visibility and button image
  menuButton.addEventListener('click', () => {
    const isOpen = verticalMenu.classList.toggle('open');

    // Change menu button image based on menu state
    menuButton.src = isOpen ? 'assets/close.svg' : 'assets/more.svg';
  });

  //LEFT MENU
  // Function to toggle left menu visibility and button image
  leftMenuButton.addEventListener('click', () => {
    const isOpen = leftVerticalMenu.classList.toggle('open');

    // Change menu button image based on menu state
    //leftMenuButton.src = isOpen ? 'assets/close.svg' : 'assets/more.svg';
  });

  const left0 = document.querySelector(".left-menu-item-0");
  const left1 = document.querySelector(".left-menu-item-1");
  const left2 = document.querySelector(".left-menu-item-2");

  left0.addEventListener('click', () => showSection(0, 0));
  left1.addEventListener('click', () => showSection(1, 0));
  left2.addEventListener('click', () => showSection(2, 0));



  //MAIN BODY PROJECTS
  // Function to show the correct section
  function showSection(verticalIndex, horizontalIndex) {
    sections.forEach((section) => {
      const sectionVerticalIndex = parseInt(section.dataset.verticalIndex, 10);
      const sectionHorizontalIndex = parseInt(section.dataset.horizontalIndex, 10);

      // Match both vertical and horizontal indices
      const isCurrent =
        sectionVerticalIndex === verticalIndex &&
        sectionHorizontalIndex === horizontalIndex;

      section.style.display = isCurrent ? 'block' : 'none';
    });
    console.log(currentVerticalIndex," ", currentHorizontalIndex)
  }

  // Event listener for navigation arrows
  document.querySelectorAll('.arrow').forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default behavior
      const isUp = arrow.classList.contains('up');
      const isDown = arrow.classList.contains('down');
      const isLeft = arrow.classList.contains('left');
      const isRight = arrow.classList.contains('right');

      if (isUp && currentVerticalIndex > 0) {
        currentVerticalIndex--;
        currentHorizontalIndex = 0; // Reset horizontal navigation
      } else if (isDown && currentVerticalIndex < sections.length - 1) {
        currentVerticalIndex++;
        currentHorizontalIndex = 0; // Reset horizontal navigation
      } else if (isLeft && currentHorizontalIndex > 0) {
        currentHorizontalIndex--;
      } else if (isRight && currentHorizontalIndex < 1) {
        // Limit to one horizontal section
        currentHorizontalIndex++;
      }

      showSection(currentVerticalIndex, currentHorizontalIndex);
    });
  });

  // Initial display
  showSection(currentVerticalIndex, currentHorizontalIndex);
});






