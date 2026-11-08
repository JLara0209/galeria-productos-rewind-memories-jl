import './style.css';
import brandLogoUrl from './assets/brand/by-jev.svg';
import { products } from './data/products.js';
import { renderProducts } from './views/gallery.js';

// Select DOM containers and elements
const brandLogoImg = document.getElementById('brand-logo-img');
const productGrid = document.getElementById('product-grid');
const categoryFiltersContainer = document.getElementById('category-filters');
const maxPriceInput = document.getElementById('max-price');
const applyPriceFilterBtn = document.getElementById('apply-price-filter');
const clearPriceFilterBtn = document.getElementById('clear-price-filter');
const priceError = document.getElementById('price-error');

// Filter state variables
let currentCategory = 'Todos';
let maxPrice = null;

/**
 * Applies both category and maximum price filters combined and updates the grid.
 * Displays an empty state message if no products match the criteria.
 */
function applyFilters() {
  if (!productGrid) return;

  // 1. Start with the full products array
  let filteredProducts = products;

  // 2. Filter by category if not 'Todos'
  if (currentCategory !== 'Todos') {
    filteredProducts = filteredProducts.filter(
      (product) => product.categoria === currentCategory
    );
  }

  // 3. Filter by maximum price if a valid max price is set
  if (maxPrice !== null && Number.isFinite(maxPrice)) {
    filteredProducts = filteredProducts.filter(
      (product) => product.precio <= maxPrice
    );
  }

  // 4. Update the DOM or display empty state if no matches exist
  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon" aria-hidden="true">♫</div>
        <p class="empty-state-message">No encontramos productos que coincidan con los filtros seleccionados.</p>
      </div>
    `;
  } else {
    productGrid.innerHTML = renderProducts(filteredProducts);
  }
}

/**
 * Generates and renders category filter buttons dynamically.
 */
function renderCategoryFilters() {
  if (!categoryFiltersContainer) return;

  const uniqueCategories = [...new Set(products.map((product) => product.categoria))];
  const allCategories = ['Todos', ...uniqueCategories];

  categoryFiltersContainer.innerHTML = allCategories
    .map(
      (category) => `
    <button 
      type="button" 
      class="filter-btn ${category === currentCategory ? 'active' : ''}" 
      data-category="${category}">
      ${category}
    </button>
  `
    )
    .join('');
}

/**
 * Sets up click events on category buttons.
 */
function setupCategoryFilters() {
  if (!categoryFiltersContainer) return;

  categoryFiltersContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;

    // Update active category while retaining previously applied max price
    currentCategory = button.dataset.category;

    // Update active button classes
    const buttons = categoryFiltersContainer.querySelectorAll('.filter-btn');
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    // Apply combined filters
    applyFilters();
  });
}

/**
 * Sets up events and strict validation for the maximum price filter.
 */
function setupPriceFilter() {
  if (!applyPriceFilterBtn || !maxPriceInput || !priceError) return;

  // Apply price filter event
  applyPriceFilterBtn.addEventListener('click', () => {
    const rawValue = maxPriceInput.value.trim();

    // Validation 1: Field is empty
    if (rawValue === '') {
      priceError.textContent = 'Por favor, ingresa un precio para filtrar.';
      return;
    }

    // Convert using Number() to reject partially numeric strings
    const numericValue = Number(rawValue);

    // Validation 2: Ensure complete value is a valid finite number
    if (!Number.isFinite(numericValue)) {
      priceError.textContent = 'Por favor, ingresa un número válido sin caracteres adicionales.';
      return;
    }

    // Validation 3: Ensure non-negative value
    if (numericValue < 0) {
      priceError.textContent = 'El precio no puede ser un valor negativo.';
      return;
    }

    // Valid price: clear error, store maxPrice and update filters
    priceError.textContent = '';
    maxPrice = numericValue;
    applyFilters();
  });

  // Clear price filter event
  if (clearPriceFilterBtn) {
    clearPriceFilterBtn.addEventListener('click', () => {
      maxPrice = null;
      maxPriceInput.value = '';
      priceError.textContent = '';
      applyFilters();
    });
  }

  // Convenience: trigger price filter on Enter key
  maxPriceInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      applyPriceFilterBtn.click();
    }
  });
}

// Initialize application
if (brandLogoImg) {
  brandLogoImg.src = brandLogoUrl;
}
renderCategoryFilters();
setupCategoryFilters();
setupPriceFilter();
applyFilters();
