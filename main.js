const unitForm = document.querySelector('fieldset');
const unitList = document.getElementById('unitList');

unitForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const availabilityInput = document.getElementById('availability');
  const priceInput = document.getElementById('price');

  const name = nameInput.value;
  const availability = availabilityInput.value;
  const price = priceInput.value;
  const inStock = document.querySelector('input[name="stock"]:checked').value;

  const imageUrl = getImageUrl(availability);

  // Create a new unit element
  const newUnit = document.createElement('div');
  newUnit.classList.add('unit');

  // Set the inner HTML of the new unit element with the dynamic content
  newUnit.innerHTML = `
    <h2>${name}</h2>
    <h4>${availability}</h4>
    <img src="${imageUrl}" alt="" width="200" height="200">
    <div>Price: <span class="price">${price}</span></div>
    <div>In Stock: <span class="in-stock">${inStock}</span></div>
    <button class="remove">Remove</button>
  `;

  // Add the new unit to the unit list
  unitList.appendChild(newUnit);

  // Clear the form inputs
  nameInput.value = '';
  availabilityInput.selectedIndex = 0;
  priceInput.value = '';
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
