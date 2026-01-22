export interface InventoryItem {
  id: string;
  name: string;
  category: 'Computers' | 'Accessories' | 'Gadgets';
  quantity: number;
  price: number;
  sku: string;
  location: string;
  lastUpdated: string;
}

export type Category = InventoryItem['category'];
