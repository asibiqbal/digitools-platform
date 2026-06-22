import { useState } from 'react';

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Components', href: '#', active: true },
    { name: 'Templates', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl h-20 flex items-center justify-between">
        
        <div className="flex items-center shrink-0">
          <span className="text-2xl font-black bg-linear-to-r from-[#4F39F6] via-[#7625F8] to-[#9514FA] bg-clip-text text-transparent tracking-tight">
            DigiTools
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`text-[16px] transition-colors duration-200 hover:text-[#D97706] ${
                  link.active 
                    ? 'text-[#101727] font-bold' 
                    : 'text-[#101727] font-normal'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

     
        <div className="hidden md:flex items-center gap-6">
          <div className="relative p-2.5 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#101727]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button className="bg-[#7625F8] hover:bg-[#632FF7] text-white font-bold py-3 px-6 rounded-2xl shadow-sm transition-all duration-200 active:scale-[0.98]">
            Get Started
          </button>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#101727] hover:bg-gray-50 rounded-xl transition-colors focus:outline-none md:hidden"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </div>

      <div className={`absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="px-6 py-6 flex flex-col gap-5 items-center">
          
          <ul className="w-full text-center space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`text-[16px] block transition-colors duration-200 hover:text-[#D97706] ${
                    link.active 
                      ? 'text-[#101727] font-bold' 
                      : 'text-[#101727] font-normal'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <hr className="w-full border-gray-100" />

     
          <div className="relative p-2.5 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#101727]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </div>

          <button className="w-full max-w-xs bg-[#7625F8] hover:bg-[#632FF7] text-white font-bold py-3 px-6 rounded-2xl shadow-sm transition-all duration-200 active:scale-[0.98]">
            Get Started
          </button>

        </div>
      </div>
    </nav>
  );
}