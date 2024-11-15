document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.hero');
  const container = document.querySelector('.container');
  let currentVerticalIndex = 0;
  let currentHorizontalIndex = 0;

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
  }

  // Scroll to the specified vertical section
  function scrollToVerticalIndex(index) {
    const targetSection = [...sections].find(
      (section) =>
        parseInt(section.dataset.verticalIndex, 10) === index &&
        parseInt(section.dataset.horizontalIndex, 10) === 0 // Default to horizontalIndex=0
    );
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      currentVerticalIndex = index;
      currentHorizontalIndex = 0; // Reset horizontal index when scrolling
    }
  }

  // Handle scrolling motion
  container.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      // Scroll Down
      if (currentVerticalIndex < sections.length - 1) {
        currentVerticalIndex++;
        scrollToVerticalIndex(currentVerticalIndex);
      }
    } else if (event.deltaY < 0) {
      // Scroll Up
      if (currentVerticalIndex > 0) {
        currentVerticalIndex--;
        scrollToVerticalIndex(currentVerticalIndex);
      }
    }
  });

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




