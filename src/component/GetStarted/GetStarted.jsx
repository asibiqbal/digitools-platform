export default function GetStarted() {
  const steps = [
    {
      id: '01',
      title: 'Select Component',
      description: 'Explore our modular layout ecosystem and select the interface blocks that match your app requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#7625F8]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-14.25v9" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Customize Styling',
      description: 'Fine-tune code configurations or layout structures locally with Tailwind utility variables in seconds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#7625F8]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Deploy Pipeline',
      description: 'Copy cleanly structured component blocks into your repository and ship live applications instantly.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#7625F8]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41a14.93 14.93 0 0 0-3.07 10.23 6 6 0 0 1 9.03-4.27ZM10.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#101727] tracking-tight">
            Streamlined Setup Flow
          </h2>
          <p className="text-[#627382] text-base font-normal mt-4">
            Integrate production-ready web blocks into your code architecture systematically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-white border border-gray-100 rounded-2xl p-10 shadow-xs flex flex-col items-center text-center">
              
              <div className="absolute top-6 right-6 w-7 h-7 bg-[#7625F8] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {step.id}
              </div>

              <div className="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6 mt-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-extrabold text-[#101727] mb-3">
                {step.title}
              </h3>

              <p className="text-[#627382] text-sm leading-relaxed max-w-60">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}