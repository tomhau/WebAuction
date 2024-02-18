import { Item } from '../models/Item';

export function fetchItems(): Promise<Item[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const items = await response.json();
      resolve(items);
    } catch (error) {
      console.error('Fetching items failed:', error);
      reject(error);
    }
  });
}
