/**
 * Shared API client and helpers. All Strapi requests use customFetch (baseURL set).
 * Price is stored in cents; formatPrice displays as USD. generateAmountOptions builds <option>s for quantity selects.
 */
import axios from 'axios';

const productionUrl = ' https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

/** Convert price in cents to formatted USD string (e.g. 1999 -> "$19.99") */
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

/** Returns an array of <option> elements 1..number for use in quantity dropdowns */
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
