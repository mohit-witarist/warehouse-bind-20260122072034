import React from 'react';
import { useInventory } from '../context/InventoryContext';
import { Package, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { items } = useInventory();
  
  const totalValue = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const lowStock = items.filter(i => i.quantity < 10).length;
  
  const stats = [
    { label: 'Total Items', value: items.length, icon: Package, color: 'bg-blue-500' },
    { label: 'Inventory Value', value: `$${totalValue.toLocaleString()}`, icon: DollarSign, color: 'bg-green-500' },
    { label: 'Low Stock Alerts', value: lowStock, icon: AlertTriangle, color: 'bg-amber-500' },
    { label: 'Orders (Monthly)', value: '124', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Warehouse Overview</h1>
        <p className="text-slate-500">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-xl text-white`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {items.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">Updated {new Date(item.lastUpdated).toLocaleTimeString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">{item.quantity} units</p>
                  <p className="text-xs text-green-600">In Stock</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Category Distribution</h3>
          <div className="space-y-4">
            {['Computers', 'Accessories', 'Gadgets'].map(cat => {
              const count = items.filter(i => i.category === cat).length;
              const percentage = (count / items.length) * 100;
              return (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-600">{cat}</span>
                    <span className="text-slate-400">{count} items</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary-600 h-full rounded-full" 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
