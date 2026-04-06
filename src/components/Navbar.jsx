
const Navbar = () => {
    return (
<div className="bg-base-100 shadow-sm">
    <div className="navbar  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
     <div className="mt-2 indicator ml-2">
         <i class="fa-solid fa-cart-shopping"></i>
          <span className="hidden badge badge-sm indicator-item">8</span>
        </div>
    <a className="btn border-none bg-white hover:bg-white shadow-none mr-auto">Login</a>
    <a className="btn bg-gradient text-white rounded-4xl mr-auto">Get Started</a>
      </ul>
    </div>
    <a className="text-xl text-gradient">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end hidden md:flex">
     <div className="indicator mr-1.5">
         <i class="fa-solid fa-cart-shopping"></i>
          <span className="hidden badge badge-sm indicator-item">8</span>
        </div>
    <a className="btn border-none bg-white hover:bg-white shadow-none">Login</a>
    <a className="btn bg-gradient text-white rounded-4xl">Get Started</a>
  </div>
</div>
</div>
    );
};

export default Navbar;