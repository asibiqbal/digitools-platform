import { useState } from 'react';
import productsData from '../../data/products.json';

export default function Product({ cartItems = [], onToggleCart }) {
  const [activeTab, setActiveTab] = useState('product');

  const getTagStyles = (tagType) => {
    switch (tagType) {
      case 'popular': return 'bg-amber-100 text-amber-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'bestseller': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        <div className="text-center max-w-2xl mx-auto">
          <h4 className="text-[48px] font-extrabold text-[#101727] leading-tight">
            Premium Digital Tools
          </h4>
          <p className="text-[#627382] text-[16px] font-normal leading-tight py-4">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => setActiveTab('product')}
            className={`btn font-bold px-8 py-4 rounded-[20px] min-h-0 h-auto transition-all duration-300 border ${
              activeTab === 'product'
                ? 'bg-linear-to-r from-[#4F39F6] via-[#7625F8] to-[#9514FA] text-white border-transparent shadow-md'
                : 'bg-white text-black border-gray-300 hover:bg-gray-50'
            }`}
          >
            Product
          </button>

          <button
            onClick={() => setActiveTab('cart')}
            className={`btn font-bold px-8 py-4 rounded-[20px] min-h-0 h-auto transition-all duration-300 border ${
              activeTab === 'cart'
                ? 'bg-linear-to-r from-[#4F39F6] via-[#7625F8] to-[#9514FA] text-white border-transparent shadow-md'
                : 'bg-white text-black border-gray-300 hover:bg-gray-50'
            }`}
          >
            Cart {cartItems.length > 0 && `(${cartItems.length})`}
          </button>
        </div>

        <div className="w-full mt-12">
          {activeTab === 'product' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.map((data) => {
                const isAdded = cartItems.includes(data.id);
                return (
                  <div key={data.id} className="relative flex flex-col justify-between bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                    
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{data.icon}</span>
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${getTagStyles(data.tagType)}`}>
                        {data.tag}
                      </span>
                    </div>

                    <div>
                      <h5 className="text-xl font-bold text-[#101727] mb-2">{data.name}</h5>
                      <p className="text-[#627382] text-sm leading-relaxed mb-4">{data.description}</p>
                      <p className="text-2xl font-extrabold text-[#101727] mb-6">
                        ${data.price}<span className="text-sm font-normal text-[#627382]">/{data.period}</span>
                      </p>

                      <ul className="space-y-3 mb-8">
                        {data.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-[#627382]">
                            <svg className="w-4 h-4 text-[#7625F8] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onToggleCart(data.id, data.name)}
                      className={`w-full btn border-none font-bold px-6 py-3 rounded-[20px] min-h-0 h-auto transition-all duration-200 ${
                        isAdded
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          : 'bg-linear-to-r from-[#4F39F6] via-[#7625F8] to-[#9514FA] text-white hover:opacity-90'
                      }`}
                    >
                      {isAdded ? 'Added To Cart' : 'Buy Now'}
                    </button>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full max-w-xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <h6 className="text-xl font-bold mb-4 text-[#101727]">Your Selected Items</h6>
              {cartItems.length === 0 ? (
                <p className="text-gray-400 py-4 text-center">Your shopping cart is completely empty.</p>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {productsData
                    .filter((item) => cartItems.includes(item.id))
                    .map((item) => (
                      <li key={item.id} className="flex items-center justify-between py-4">
                        <div className="flex items-center gap-3">
                          <span>{item.icon}</span>
                          <span className="font-semibold text-[#101727]">{item.name}</span>
                        </div>
                        <span className="font-bold text-[#7625F8]">${item.price}</span>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}