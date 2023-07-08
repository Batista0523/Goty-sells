const unitForm = document.getElementById('unitForm');
const unitList = document.getElementById('unitList');

unitForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const { value: name } = document.getElementById('name');
  const { value: availability } = document.getElementById('availability');
  const { value: price } = document.getElementById('price');
  const { value: stock } = document.getElementById('stock');

  if (!isNumeric(price)) {
    displayError('Price must be a number', 'price');
    return;
  }

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

  unitForm.reset();
  clearError('price');
});

const getImageUrl = (availability) => {
  const availabilityMap = {
    'M-Series H2i': 'https://www.acwholesalers.com/products-image/208/mass_107672_.jpg',
    'M-Series 115V': 'https://www.acwholesalers.com/products-image/600/MZ-JP12WA_99497_600.png',
    'HM-Series': 'https://www.acwholesalers.com/products-image/600/mass_81586_600.png',
  };

  return availabilityMap[availability] || '';
};

const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const unit = button.parentNode;
    unitList.removeChild(unit);
  });
});

const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

const displayError = (errorMessage, fieldId) => {
  const errorElement = document.createElement('p');
  errorElement.classList.add('error-message');
  errorElement.innerText = errorMessage;

  const field = document.getElementById(fieldId);
  field.parentNode.appendChild(errorElement);
};

const clearError = (fieldId) => {
  const errorElement = document.querySelector(`#${fieldId} ~ .error-message`);
  if (errorElement) errorElement.remove();
};
