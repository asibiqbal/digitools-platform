
const State = () => {
    return (
        <div>
            <div className="w-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] py-16 md:py-10 mb-2">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 text-center items-center">
    
    {/* Left Column */}
    <div className="flex flex-col items-center justify-center md:border-r border-white/20 last:border-none py-4">
      <h4 className="text-[60px] font-extrabold text-white capitalize leading-none mb-3">
        50k+
      </h4>
      <p className="text-[24px] font-light text-white">
        Active Users
      </p>
    </div>

    {/* Middle Column */}
    <div className="flex flex-col items-center justify-center md:border-r border-white/20 last:border-none py-4">
      <h4 className="text-[60px] font-extrabold text-white capitalize leading-none mb-3">
        200+
      </h4>
      <p className="text-[24px] font-light text-white">
        Premium Tools
      </p>
    </div>

    {/* Right Column */}
    <div className="flex flex-col items-center justify-center md:border-r border-white/20 last:border-none py-4">
      <h4 className="text-[60px] font-extrabold text-white capitalize leading-none mb-3">
        4.9
      </h4>
      <p className="text-[24px] font-light text-white">
        Rating
      </p>
    </div>

  </div>
</div>
        </div>
    );
};

export default State;