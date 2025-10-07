import { useState } from "react";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "For schools that want to try before they commit.",
      features: [
        "Limited essential ERP features",
        "Storage of 1GB",
        "Student & staff management",
        "Attendance tracking",
        "Parent communication (limited)",
        "100 student limit",
        "Setup & training charged separately",
        "Custom domain available at extra cost",
      ],
      cta: "Contact Sales",
      popular: false,
    },
    {
      id: "core",
      name: "Core",
      price: "₹XX",
      period: "student/month",
      description: "Best for small & growing schools.",
      features: [
        "All Free features",
        "Storage of 10GB*",
        "Timetable management",
        "Fee collection & reporting",
        "Library & inventory modules",
        "Custom domain support (included)",
        "Email + chat support",
        "1,000 student limit",
        "3-Months free trial",
      ],
      cta: "Contact Sales",
      popular: true,
      tag: "Most Popular",
    },
    {
      id: "premium",
      name: "Premium",
      price: "₹XX",
      period: "student/month",
      description: "Comprehensive solution for medium institutions.",
      features: [
        "All Core features",
        "Storage of 100GB*",
        "Real-time parent app updates",
        "Smart analytics dashboard",
        "Online exam & grading system",
        "Dedicated account manager",
        "API access + integration support",
        "Unlimited students & staff",
        "Custom AI application at extra cost",
        "3-Months free trial",
      ],
      cta: "Contact Sales",
      popular: false,
    },
    // {
    //   id: "enterprise",
    //   name: "Enterprise",
    //   price: "Custom",
    //   period: "tailored",
    //   description: "Complete solution for large organizations",
    //   features: [
    //     "All Premium features",
    //     "24/7 dedicated support",
    //     "Custom integrations",
    //     "Unlimited storage",
    //     "SLA guarantee",
    //     "Custom training",
    //     "On-premise options",
    //   ],
    //   cta: "Contact Sales",
    //   popular: false,
    // },
  ];

  const featuresComparison = [
    {
      feature: "Users",
      free: "1",
      core: "Up to 25",
      premium: "Unlimited",
      // enterprise: "Unlimited",
    },
    {
      feature: "Storage",
      free: "1GB",
      core: "10GB (upgradable)",
      premium: "100GB (upgradable)",
      // enterprise: "Unlimited",
    },
    {
      feature: "Support",
      free: "Email",
      core: "Email",
      premium: "Priority",
      // enterprise: "24/7 Dedicated",
    },
    {
      feature: "Analytics",
      free: "Basic",
      core: "Advanced",
      premium: "Advanced + Reporting",
      // enterprise: "Custom",
    },
    {
      feature: "API Access",
      free: "No",
      core: "Yes",
      premium: "Yes",
      // enterprise: "Full Access",
    },
    {
      feature: "Training",
      free: "No",
      core: "Yes",
      premium: "Yes",
      // enterprise: "Custom",
    },
    {
      feature: "SLA",
      free: "Standard",
      core: "Standard",
      premium: "Standard",
      // enterprise: "Premium",
    },
    {
      feature: "AI Integration",
      free: "No",
      core: "No",
      premium: "Yes*",
      // enterprise: "Premium",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          Select the perfect plan for your educational institution. All plans
          include our basic features with scalable options.
        </p>
      </div>

      {/* Pricing Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`card shadow-xl relative ${
              plan.popular
                ? "ring-2 ring-primary transform scale-105"
                : "bg-base-200"
            }`}
          >
            {plan.popular && (
              <div className="badge badge-primary absolute -top-3 left-1/2 transform -translate-x-1/2">
                Most Popular
              </div>
            )}
            <div className="card-body">
              <h3 className="card-title text-2xl">{plan.name}</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="opacity-70 ml-2">/{plan.period}</span>
              </div>
              <p className="opacity-70 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

                    <button
                      className={`btn btn-block flex flex-col items-center ${
                        plan.popular ? "btn-primary" : "btn-outline"
                      }`}
                      onClick={() => {
                        if (plan.cta === "Contact Sales") {
                          // Open WhatsApp
                          window.open('https://wa.me/919009888333?text=Hello%20MPencil%20Team%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20the%20' + encodeURIComponent(plan.name) + ' plan. Please contact me with details.', '_blank');
                          // Open Email
                          window.open('mailto:info@MPencil.com?subject=Quote%20Request%20for%20' + encodeURIComponent(plan.name) + '&body=Hello%20MPencil%20Team%2C%0A%0AI%20am%20interested%20in%20getting%20a%20quote%20for%20the%20' + encodeURIComponent(plan.name) + '%20plan.%20Please%20contact%20me%20with%20details.%0A%0AThank%20you!','_blank');
                        } else {
                          setSelectedPlan(plan.id);
                        }
                      }}
                    >
                      {plan.cta}
                    </button>
            </div>
          </div>
        ))}
      </div>
  <div className="text-center mb-10">
    <span className="inline-block bg-primary/10 text-primary font-semibold rounded-full px-4 py-2 text-lg">Get Quote</span>
  </div>

      {/* Features Comparison */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
        <div className="overflow-x-auto flex justify-center">
          <table className="table table-zebra min-w-[600px] max-w-full mx-auto">
            <thead>
              <tr>
                <th className="text-left w-1/4">Feature</th>
                <th className="text-left w-1/4">Free</th>
                <th className="text-left w-1/4">Core</th>
                <th className="text-left w-1/4">Premium</th>
              </tr>
            </thead>
            <tbody>
              {featuresComparison.map((row, index) => (
                <tr key={index}>
                  <td className="font-semibold text-left w-1/4">{row.feature}</td>
                  <td className="text-left w-1/4">{row.free}</td>
                  <td className="text-left w-1/4">{row.core}</td>
                  <td className="text-left w-1/4">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-base-200 rounded-3xl p-12">
        <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          To start your free trial or schedule a demo, contact us via WhatsApp or Email.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mt-4">
          {/* Email Button */}
          <a
            href="mailto:info@MPencil.com?subject=Inquiry%20from%20Website&body=Hello%20MPencil%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20plans.%20Please%20contact%20me%20with%20details.%0A%0AThank%20you!"
            className="btn btn-info btn-lg text-white flex items-center gap-2"
            style={{ backgroundColor: '#3b82f6', borderColor: '#3b82f6' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Contact via Email
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919009888333?text=Hello%20MPencil%20Team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20plans.%20Please%20contact%20me%20with%20details."
            className="btn btn-success btn-lg flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 32 32"><path fill="#fff" d="M16 3C9.373 3 4 8.373 4 15c0 2.646.86 5.1 2.33 7.13L4.06 29.25a1 1 0 001.19 1.19l7.12-2.27A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.45-.36-5-1.03l-.36-.15-5.04 1.6 1.62-4.98-.18-.37A9.96 9.96 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71l-2.54-.73a1 1 0 00-.96.26l-.54.55a7.03 7.03 0 01-3.29-3.29l.55-.54a1 1 0 00.26-.96l-.73-2.54A1 1 0 0013.36 9h-2.1A1.25 1.25 0 0010 10.25c0 5.385 4.365 9.75 9.75 9.75A1.25 1.25 0 0021 18.74v-2.1a1 1 0 00-.71-.95z"/></svg>
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
