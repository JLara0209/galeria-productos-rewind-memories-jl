import { products } from '../data/products.js';

/**
 * Independent mapping object associating each product name with its Cloudinary image URL.
 * Preserves the original products array structure in products.js.
 */
const productImages = {
  'GlowVinyl™ Music Box':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111935/glowvinyl.jpg',
  'Imanes musicales sublimables con Bluetooth':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111935/iman-musical.jpg',
  'Placas de Spotify acrílicas con código NFC/QR':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111935/placa-spotify.jpg',
  'Mini rocolas y cajas de música mecánicas de cuerda':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111934/caja-musical-cuerda.jpg',
  'Marcos de fotos digitales magnéticos compactos':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111934/marco-digital.jpg',
  'Llaveros de Mini CD con estuche acrílico':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111934/mini-cd.jpg',
  'Posavasos de Vinilo NFC':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111934/posavasos-vinilo.jpg',
  'Tarjetas musicales tipo Wallet':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111936/tarjeta-wallet.jpg',
  'Pines o Botones Metálicos NFC':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111935/pin-musical.jpg',
  'Cassette NFC':
    'https://res.cloudinary.com/jf9goby0/image/upload/v1794111935/cassette-nfc.jpg'
};

/**
 * Transforms an array of products into HTML markup for product cards.
 * Uses the map() method to iterate over products and build a template literal for each item.
 *
 * @param {Array} [items=products] - Array of product objects to render. Defaults to the full catalog.
 * @returns {string} The complete HTML string representing all product cards.
 */
export function renderProducts(items = products) {
  return items
    .map((product) => {
      const imageUrl = productImages[product.nombre];
      const hasImage = Boolean(imageUrl);

      return `
    <article class="product-card">
      <div class="product-visual">
        ${
          hasImage
            ? `<img 
                 src="${imageUrl}" 
                 alt="${product.nombre}" 
                 class="product-image" 
                 loading="lazy" 
                 onerror="this.style.display='none'; this.nextElementSibling.classList.remove('is-hidden');"
               />
               <div class="product-image-placeholder is-hidden" aria-hidden="true">
                 <span class="product-icon">♫</span>
               </div>`
            : `<div class="product-image-placeholder" aria-hidden="true">
                 <span class="product-icon">♫</span>
               </div>`
        }
        <span class="product-badge">${product.categoria}</span>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.nombre}</h3>
        <p class="product-price">$${product.precio.toFixed(2)}</p>
      </div>
    </article>
  `;
    })
    .join('');
}
