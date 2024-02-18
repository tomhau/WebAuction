import { useState } from 'react';
import { Item } from './models/Item';
import { fetchItems } from './services/ItemService';

function AuctionComponent() {
  const [items, setItems] = useState<Item[]>([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  function handleFetchData() {
    fetchItems()
      .then((fetchedItems: any) => {
        setItems(fetchedItems);
        setIsDataFetched(true);
      })
      .catch((error: any) => {
        console.error('Error fetching items:', error);
      });
  }

  return (
    <div>
      {!isDataFetched && (
        <button onClick={handleFetchData}>Fetch Items</button>
      )}

      {isDataFetched && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
             
            </tr>
          </thead>
          <tbody>
            {items.map(function(item:Item) {
              return (
                <tr >
                  <td>{item.id}</td>
                  <td>{item.title}</td> 
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AuctionComponent;
