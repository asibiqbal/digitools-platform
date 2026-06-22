export default function Footer() {
  return (
    <footer className="w-full bg-[#101727] text-white pt-24 pb-8 border-t border-gray-800/20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 mt-4">
          <div className="md:col-span-4">
            <h3 className="text-3xl font-black tracking-tight mb-4">DigiTools</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Modular UI components and production-ready layout systems engineered for modern application developers. Build interface layers in minutes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-6 gap-8">
            <div>
              <h4 className="font-bold text-base mb-4">Ecosystem</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">UI Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licensing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Layout Blocks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base mb-4">Platform</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Core Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Engineering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Code Specs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dev Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Stack</a></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-base mb-4">Channels</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101727] transition-transform hover:scale-110">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101727] transition-transform hover:scale-110">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#101727] transition-transform hover:scale-110">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <span>© 2026 DigiTools Ecosystem. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Infrastructure</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}