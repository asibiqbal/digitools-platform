
const Navbar = ({ cartCount }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm pb-4">
        <div className="navbar-start">
          <a className="font-bold text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] via-[#632FF7]_28% via-[#7525F8]_54% to-[#9514FA] py-2">
            Digitools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="font-bold bg-transparent">Products</a></li>
            <li><a className="transition-all duration-200 hover:font-bold bg-transparent">Features</a></li>
            <li><a className="transition-all duration-200 hover:font-bold bg-transparent">Price</a></li>
            <li><a className="transition-all duration-200 hover:font-bold bg-transparent">Testimonials</a></li>
            <li><a className="transition-all duration-200 hover:font-bold bg-transparent">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3.5">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="badge badge-sm indicator-item bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none font-bold">
                {cartCount}
              </span>
            )}
          </div>

          <a className="btn border-none font-semibold px-4 py-2 rounded-[20px] bg-linear-to-r from-[#4F39F6] via-[#7625F8] to-[#9514FA] text-white hover:opacity-90 min-h-0 h-auto">
            Get Startedæ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;