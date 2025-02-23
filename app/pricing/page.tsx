import React from 'react'

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$499/month",
      features: [
        "2 AI Agent Instances",
        "Basic Neural Processing",
        "24/7 Support",
        "Weekly Analytics",
        "Basic Integration Support"
      ],
      button: "Get Started",
      bgColor: "bg-gray-800", // Gray background
      borderColor: "hover:border-gray-400"
    },
    {
      name: "Professional",
      price: "$999/month",
      features: [
        "10 AI Agent Instances",
        "Advanced Neural Networks",
        "Priority Support",
        "Real-time Analytics",
        "Custom Integration",
        "API Access",
        "Advanced Security"
      ],
      button: "Get Started",
      bgColor: "bg-gradient-to-br from-purple-600 to-blue-500", // Highlighted Plan
      borderColor: "hover:border-white"
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Agents",
        "Full Neural Suite",
        "Dedicated Support Team",
        "Advanced Analytics Dashboard",
        "Custom Development",
        "Full API Access",
        "Enterprise Security",
        "Custom Training"
      ],
      button: "Contact Us",
      bgColor: "bg-gray-800", // Gray background
      borderColor: "hover:border-gray-400"
    },
  ];

  return (
    <section id="pricing" className="bg-gradient-to-r from-[#060D1F] via-[#202752] to-[#190D35] text-white py-20">
      <div className="text-center max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Choose the Perfect AI Plan
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Scale your business with intelligent AI solutions tailored for you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 px-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-10 ${plan.bgColor} rounded-2xl shadow-xl border border-transparent ${plan.borderColor} transition-transform text-center w-full max-w-sm min-h-[500px] flex flex-col  hover:border-purple-400 hover:scale-105 duration-300 ease-in-out`}
          >
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            <p className="text-4xl font-extrabold mt-2 text-white">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-gray-300 text-base">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 px-6 py-3 w-full bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-transform">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
