import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: [
      'Video recording guide',
      'Basic editing tips',
      'Community support',
      '5GB storage',
      'Monthly webinars',
    ],
    color: 'from-blue-600 via-blue-500 to-blue-400',
  },
  {
    name: 'Pro',
    price: '$19.99',
    features: [
      'Everything in Basic',
      'Advanced editing techniques',
      'AI content suggestions',
      'Priority support',
      '50GB storage',
      'Weekly webinars',
      'Custom branding',
    ],
    color: 'from-purple-600 via-purple-500 to-purple-400',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Personalized onboarding',
      'Dedicated account manager',
      'Custom AI integrations',
      'Unlimited storage',
      'On-demand training',
      'API access',
      'Advanced analytics',
    ],
    color: 'from-pink-600 via-pink-500 to-pink-400',
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Pricing Plans</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/3 flex flex-col">
              <div className="flex-grow bg-white dark:bg-gray-800 rounded-t-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div className={`h-3 ${plan.color} rounded-t-xl bg-gradient-to-r`}></div>
                <div className="p-8 text-blue-600 dark:text-white">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto">
                <button className={`w-full py-4 px-4 rounded-b-xl text-white font-semibold transition duration-300 bg-gradient-to-r ${plan.color} hover:opacity-90`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
