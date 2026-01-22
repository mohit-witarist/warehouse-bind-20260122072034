import React, { createContext, useContext, useState, useEffect } from 'react';
import { InventoryItem } from '../types';

interface InventoryContextType {
  items: InventoryItem[];
  addItem: (item: Omit<InventoryItem, 'id' | 'lastUpdated'>) => void;
  updateItem: (id: string, updates: Partial<InventoryItem>) => void;
  deleteItem: (id: string) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

const initialData: InventoryItem[] = [
  { id: '1', name: 'MacBook Pro 16"', category: 'Computers', quantity: 15, price: 2499, sku: 'MBP-16-001', location: 'A-101', lastUpdated: new Date().toISOString() },
  { id: '2', name: 'Dell XPS 15', category: 'Computers', quantity: 8, price: 1899, sku: 'DELL-XPS-002', location: 'A-102', lastUpdated: new Date().toISOString() },
  { id: '3', name: 'Mechanical Keyboard', category: 'Accessories', quantity: 45, price: 129, sku: 'KEY-MECH-045', location: 'B-205', lastUpdated: new Date().toISOString() },
  { id: '4', name: 'Logitech MX Master 3', category: 'Accessories', quantity: 30, price: 99, sku: 'MSE-MX3-030', location: 'B-206', lastUpdated: new Date().toISOString() },
  { id: '5', name: 'DJI Mini 3 Pro', category: 'Gadgets', quantity: 12, price: 759, sku: 'DRN-DJI-012', location: 'C-301', lastUpdated: new Date().toISOString() },
  { id: '6', name: 'Sony WH-1000XM5', category: 'Gadgets', quantity: 22, price: 349, sku: 'AUD-SON-022', location: 'C-302', lastUpdated: new Date().toISOString() },
];

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<InventoryItem[]>(initialData);

  const addItem = (newItem: Omit<InventoryItem, 'id' | 'lastUpdated'>) => {
    const item: InventoryItem = {
      ...newItem,
      id: Math.random().toString(36).substr(2, 9),
      lastUpdated: new Date().toISOString(),
    };
    setItems((prev) => [item, ...prev]);
  };

  const updateItem = (id: string, updates: Partial<InventoryItem>) => {
    setItems((prev) => prev.map((item) => 
      item.id === id ? { ...item, ...updates, lastUpdated: new Date().toISOString() } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) throw new Error('useInventory must be used within an InventoryProvider');
  return context;
};
