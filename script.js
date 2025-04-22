// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const dynamicText = document.getElementById('dynamic-text');
  const styleDemo = document.getElementById('style-demo');
  const elementContainer = document.getElementById('element-container');
  
  // Buttons
  const changeTextBtn = document.getElementById('changeTextBtn');
  const changeStyleBtn = document.getElementById('changeStyleBtn');
  const addElementBtn = document.getElementById('addElementBtn');
  const removeElementBtn = document.getElementById('removeElementBtn');
  
  // Text content array
  const textOptions = [
      "This text has been changed dynamically using JavaScript!",
      "JavaScript makes web pages interactive.",
      "DOM manipulation is a powerful JavaScript feature.",
      "You can change content without reloading the page!"
  ];
  
  // Counter for tracking added elements
  let elementCount = 0;
  
  // Function to change text content
  function changeText() {
      // Get random text from options
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      dynamicText.textContent = textOptions[randomIndex];
      
      // Add animation effect
      dynamicText.style.opacity = '0';
      setTimeout(() => {
          dynamicText.style.opacity = '1';
      }, 200);
  }
  
  // Function to change styles
  function changeStyle() {
      // Toggle highlight class
      styleDemo.classList.toggle('highlight');
      
      // Change additional styles
      if (styleDemo.classList.contains('highlight')) {
          styleDemo.style.fontSize = '1.2em';
          styleDemo.style.transform = 'translateY(-5px)';
          styleDemo.style.transition = 'all 0.3s ease';
          changeStyleBtn.textContent = 'Remove Style';
      } else {
          styleDemo.style.fontSize = '1em';
          styleDemo.style.transform = 'translateY(0)';
          changeStyleBtn.textContent = 'Change Style';
      }
  }
  
  // Function to add a new element
  function addElement() {
      elementCount++;
      
      // Create new element
      const newElement = document.createElement('div');
      newElement.className = 'new-element';
      newElement.id = `element-${elementCount}`;
      newElement.textContent = `This is dynamically added element #${elementCount}`;
      
      // Add to container
      elementContainer.appendChild(newElement);
      
      // Show/hide remove button based on elements present
      if (elementContainer.children.length > 0) {
          removeElementBtn.style.display = 'inline-block';
      }
  }
  
  // Function to remove the last element
  function removeElement() {
      if (elementContainer.children.length > 0) {
          elementContainer.removeChild(elementContainer.lastChild);
          
          // Hide remove button if no elements remain
          if (elementContainer.children.length === 0) {
              removeElementBtn.style.display = 'none';
          }
      }
  }
  
  // Event listeners for buttons
  changeTextBtn.addEventListener('click', changeText);
  changeStyleBtn.addEventListener('click', changeStyle);
  addElementBtn.addEventListener('click', addElement);
  removeElementBtn.addEventListener('click', removeElement);
  
  // Initialize UI state
  removeElementBtn.style.display = 'none';
});
