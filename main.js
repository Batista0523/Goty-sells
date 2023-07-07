const unitForm = document.getElementById('unitForm');
const unitList = document.getElementById('unitList');

// Event listener for form submission
unitForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const availabilityInput = document.getElementById('availability');
  const priceInput = document.getElementById('price');
  const stockInput = document.getElementById('stock');

  const name = nameInput.value;
  const availability = availabilityInput.value;
  const price = priceInput.value;
  const stock = stockInput.value;

  const imageUrl = getImageUrl(availability);

  const newUnit = document.createElement('div');
  newUnit.classList.add('unit');

  newUnit.innerHTML = `
    <h2>${name}</h2>
    <h4>${availability}</h4>
    <img src="${imageUrl}" alt="" width="200" height="200">
    <div>Price: <span class="price">${price}</span></div>
    <div>In Stock: <span class="in-stock">${stock}</span></div>
    <button class="remove">Remove</button>
  `;

  unitList.appendChild(newUnit);

  nameInput.value = '';
  availabilityInput.selectedIndex = 0;
  priceInput.value = '';
  stockInput.selectedIndex = 0;

  // Add event listener to the new "Remove" button
  const removeButton = newUnit.querySelector('.remove');
  removeButton.addEventListener('click', function() {
    unitList.removeChild(newUnit);
  });
});

function getImageUrl(availability) {
  if (availability === 'M-Series H2i') {
    return 'https://www.acwholesalers.com/products-image/208/mass_107672_.jpg';
  } else if (availability === 'M-Series 115V') {
    return 'https://www.acwholesalers.com/products-image/600/MZ-JP12WA_99497_600.png';
  } else if (availability === 'HM-Series') {
    return 'https://www.acwholesalers.com/products-image/600/mass_81586_600.png';
  } 
}

// Add event listeners to existing "Remove" buttons
const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const unit = button.parentNode;
    unitList.removeChild(unit);
  });
});
