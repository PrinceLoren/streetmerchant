import {Store} from './store';

export const AlternateDe: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.details-cart-button',
      text: ['In den Warenkorb'],
    },
    maxPrice: {
      container: '.price > span:nth-child(1)',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: 'span.d-flex > b:nth-child(1)',
        text: ['liefertermin unbekannt'],
      },
      {
        container: 'span.d-flex > b:nth-child(1)',
        text: ['Artikel kann nicht gekauft werden'],
      },
      {
        container: 'div.col-12 > div:nth-child(1)',
        text: ['Artikel kann derzeit nicht gekauft werden'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.alternate.de/html/product/1679012',
    },
    {
      brand: 'palit',
      model: 'dual',
      series: '3060ti',
      url: 'https://www.alternate.de/Palit/GeForce-RTX-3060-Ti-Dual-LHR-Grafikkarte/html/product/1780517',
    },
  ],
  name: 'alternate-de',
};
