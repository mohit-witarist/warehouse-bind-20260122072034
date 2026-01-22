import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, BarChart, Package } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
            <Package className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">LogiTech</span>
        </div>
        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-primary-600">Features</a>
          <a href="#" className="hover:text-primary-600">Pricing</a>
          <a href="#" className="hover:text-primary-600">About</a>
        </div>
        <Link 
          to="/dashboard" 
          className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition-colors"
        >
          Go to App
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-8 pt-20 pb-32 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Inventory management <br />
            <span className="text-primary-600">made simple.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Track, manage, and optimize your warehouse operations with real-time analytics and seamless stock control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/dashboard" 
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
            >
              Get Started for Free <ArrowRight size={20} />
            </Link>
            <button className="w-full sm:w-auto border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {[
            { icon: Zap, title: "Real-time Tracking", desc: "Monitor stock levels across multiple locations instantly." },
            { icon: Shield, title: "Secure Data", desc: "Your inventory data is encrypted and backed up daily." },
            { icon: BarChart, title: "Smart Analytics", desc: "Predict demand and optimize reorder points with AI." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 border border-slate-100 rounded-3xl bg-slate-50 text-left"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                <feature.icon className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof Image */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop&q=80" 
            alt="Warehouse Management"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
