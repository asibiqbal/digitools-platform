const State = () => {
    return (
        <div>
            <div className="w-full bg-linear-to-b from-[#4F39F6] to-[#9514FA] py-16 md:py-10 mb-2">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 text-center items-center">
    
    {/* Left Column */}
    <div className="flex flex-col items-center justify-center md:border-r border-white/20 last:border-none py-4">
      <h4 className="text-[60px] font-extrabold text-white capitalize leading-none mb-3">
        12M+
      </h4>
      <p className="text-[24px] font-light text-white">
        Downloads
      </p>
    </div>

    {/* Middle Column */}
    <div className="flex flex-col items-center justify-center md:border-r border-white/20 last:border-none py-4">
      <h4 className="text-[60px] font-extrabold text-white capitalize leading-none mb-3">
        85+
      </h4>
      <p className="text-[24px] font-light text-white">
        Pro Templates
      </p>
    </div>

    {/* Right Column */}
    <div className="flex flex-col items-center justify-center md:border-r border-white/20 last:border-none py-4">
      <h4 className="text-[60px] font-extrabold text-white capitalize leading-none mb-3">
        99.9%
      </h4>
      <p className="text-[24px] font-light text-white">
        Server Uptime
      </p>
    </div>

  </div>
</div>
        </div>
    );
};

export default State;