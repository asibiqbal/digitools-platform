import { useState } from 'react';
import productsData from '../../data/products.json';

export default function Product({ cartItems = [], onToggleCart, onClearCart }) {
  const [activeTab, setActiveTab] = useState('product');

  const getTagStyles = (tagType) => {
    switch (tagType) {
      case 'popular': return 'bg-amber-100 text-amber-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'bestseller': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const selectedProducts = productsData.filter((item) => cartItems.includes(item.id));
  const totalPrice = selectedProducts.reduce((sum, item) => sum + Number(item.price), 0);

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
            
            <div className="w-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm min-h-87.5 flex flex-col justify-between">
              
              <div className="text-left w-full pb-4">
                <h6 className="text-2xl font-extrabold text-[#101727]">Your Cart</h6>
              </div>

              <div className="flex-1 w-full py-4">
                {cartItems.length === 0 ? (
                  
                  <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                    <div className="p-4 bg-gray-50 rounded-full text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 font-medium text-lg">Your cart is empty</p>
                  </div>

                ) : (
                  
                  <div className="space-y-6 w-full">
                    <div className="space-y-4">
                      {selectedProducts.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-slate-50/60 rounded-2xl p-4 border border-gray-50">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl">
                              {item.icon}
                            </div>
                            <div>
                              <span className="font-bold text-[#101727] text-base block">{item.name}</span>
                              <span className="text-sm font-medium text-gray-500">${item.price}</span>
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => onToggleCart(item.id, item.name)}
                            className="text-pink-500 hover:text-pink-600 font-semibold text-sm transition-colors duration-150 px-4 py-2"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-6 px-2">
                      <span className="text-gray-400 font-medium text-sm tracking-wider">Total:</span>
                      <span className="text-2xl font-black text-[#101727]">${totalPrice}</span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onClearCart}
                        className="w-full py-4 text-center text-white bg-[#8B2CFA] hover:bg-[#7625F8] active:scale-[0.99] transition-all duration-200 font-bold rounded-2xl shadow-sm tracking-wide"
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>

                )}
              </div>
              
            </div>

          )}
        </div>

      </div>
    </div>
  );
}