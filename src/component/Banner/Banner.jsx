import './Banner.css';
const Banner = () => {
    return (
        <div>
<div>

  <div className="container mx-auto px-4 py-12 md:py-24 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div className="flex flex-col items-start gap-6 max-w-2xl animate-left">
        <div className="flex items-center gap-2 bg-[#e1e7ff] px-4 py-2 rounded-full">
          <span className="h-2 w-2 rounded-full bg-linear-to-b from-[#4F39F6] to-[#9514FA]"></span>
          <span className="font-medium text-sm bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            V2.0 Update: Advanced Web Apps Live
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-semibold text-[#101727] leading-[1.1] tracking-tight max-w-150">
          Accelerate Your Projects Using <span className="bg-linear-to-r from-[#4F39F6] via-[#7625F8] to-[#9514FA] bg-clip-text text-transparent">Pro Components</span>
        </h1>

        <p className="text-[#627382] text-[18px] leading-[1.6] font-normal max-w-135">
          Eliminate complex design setups. Launch interactive single-page dashboards, modern tracking modules, and styled commerce templates optimized to move your applications from local server to production instantly.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          <a className="btn border-none font-bold px-6 py-3 rounded-[20px] bg-linear-to-r from-[#4F39F6] via-[#7625F8] to-[#9514FA] text-white hover:opacity-90 min-h-0 h-auto">
            Browse Components
          </a>

          <button className="btn min-h-0 h-auto font-bold px-6 py-3 rounded-[20px] border-2 bg-transparent border-[#7625F8] hover:bg-purple-50 flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-4 h-4 text-[#4F39F6]"
              strokeWidth="3"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
            <span className="bg-linear-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              See Live Preview
            </span>
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end w-full animate-right">
        <img 
          src="/banner.png"
          alt="Modern Application Development Interface Illustration" 
          className="w-125 h-147.5 object-cover rounded-xl"
        />
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;