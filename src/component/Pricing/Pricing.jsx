export default function Pricing() {
  const plans = [
    {
      name: 'Lite License',
      tagline: 'Ideal for personal & staging setups',
      price: '$0',
      period: '/Forever',
      features: [
        'Access to 15 base blocks',
        'Standard layout configuration',
        'Community patch documentation',
        '1 active local domain slot'
      ],
      buttonText: 'Claim Free Access',
      isPopular: false
    },
    {
      name: 'Production Pro',
      tagline: 'Tailored for active app developers',
      price: '$29',
      period: '/Month',
      features: [
        'Unlocks full component catalog',
        'Uncapped commercial workflows',
        'Direct stack support channel',
        'Unlimited live domain pipelines',
        'Private repository configuration',
        'Automated updates workflow'
      ],
      buttonText: 'Initialize Pro Workspace',
      isPopular: true
    },
    {
      name: 'Agency Hub',
      tagline: 'Built for scale and fast-paced teams',
      price: '$99',
      period: '/Month',
      features: [
        'Everything included in Pro tier',
        'Shared design system pipeline',
        'Custom template integration',
        'Dedicated deployment architect',
        'Priority uptime guarantees',
        'White-labeled code boilerplate'
      ],
      buttonText: 'Provision Team Seats',
      isPopular: false
    }
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#101727] tracking-tight">
            Flexible Licensing Options
          </h2>
          <p className="text-[#627382] text-base font-normal mt-4">
            Select the tier that matches your deployment scope. Seamlessly scale configurations as your applications expand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-3xl p-8 border transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl ${
                plan.isPopular
                  ? 'bg-[#7625F8] border-transparent text-white shadow-lg'
                  : 'bg-white border-gray-100 text-[#101727] shadow-xs'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-4 py-1 rounded-full shadow-xs border border-[#FDE68A]">
                  Recommended Tier
                </div>
              )}

              <div>
                <h3 className="text-2xl font-extrabold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.isPopular ? 'text-purple-200' : 'text-[#627382]'}`}>
                  {plan.tagline}
                </p>

                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                  <span className={`text-base font-medium ml-1 ${plan.isPopular ? 'text-purple-200' : 'text-[#627382]'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-white' : 'text-emerald-500'}`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className={plan.isPopular ? 'text-white' : 'text-[#627382]'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3.5 px-6 rounded-2xl font-bold text-base transition-all duration-200 active:scale-[0.98] ${
                  plan.isPopular
                    ? 'bg-white text-[#7625F8] hover:bg-gray-50 shadow-md'
                    : 'bg-[#7625F8] text-white hover:bg-[#632FF7] shadow-sm'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}