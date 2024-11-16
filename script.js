document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.hero');
  const container = document.querySelector('.container');
  const menuButton = document.querySelector('.menu-button img'); // Select the image inside the menu button
  const verticalMenu = document.querySelector('.vertical-menu');
  let currentVerticalIndex = 0;
  let currentHorizontalIndex = 0;

  // Function to toggle menu visibility and button image
  menuButton.addEventListener('click', () => {
    const isOpen = verticalMenu.classList.toggle('open');

    // Change menu button image based on menu state
    menuButton.src = isOpen ? 'assets/close.svg' : 'assets/more.svg';
  });

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






