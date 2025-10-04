import { useState } from "react";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individual educators and small teams",
      features: [
        "Basic digital tools",
        "Community support",
        "Up to 5 users",
        "1GB storage",
        "Basic analytics",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      id: "basic",
      name: "Basic",
      price: "$29",
      period: "per month",
      description: "Ideal for small schools and departments",
      features: [
        "All Free features",
        "Email support",
        "Up to 25 users",
        "10GB storage",
        "Advanced analytics",
        "Custom branding",
      ],
      cta: "Start Trial",
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: "$79",
      period: "per month",
      description: "Comprehensive solution for medium institutions",
      features: [
        "All Basic features",
        "Priority support",
        "Unlimited users",
        "100GB storage",
        "Advanced reporting",
        "API access",
        "Training sessions",
      ],
      cta: "Start Trial",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      period: "tailored",
      description: "Complete solution for large organizations",
      features: [
        "All Premium features",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited storage",
        "SLA guarantee",
        "Custom training",
        "On-premise options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const featuresComparison = [
    {
      feature: "Users",
      free: "Up to 5",
      basic: "Up to 25",
      premium: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      feature: "Storage",
      free: "1GB",
      basic: "10GB",
      premium: "100GB",
      enterprise: "Unlimited",
    },
    {
      feature: "Support",
      free: "Community",
      basic: "Email",
      premium: "Priority",
      enterprise: "24/7 Dedicated",
    },
    {
      feature: "Analytics",
      free: "Basic",
      basic: "Advanced",
      premium: "Advanced + Reporting",
      enterprise: "Custom",
    },
    {
      feature: "API Access",
      free: "No",
      basic: "No",
      premium: "Yes",
      enterprise: "Full Access",
    },
    {
      feature: "Training",
      free: "No",
      basic: "No",
      premium: "4 sessions/year",
      enterprise: "Custom",
    },
    {
      feature: "SLA",
      free: "No",
      basic: "No",
      premium: "Standard",
      enterprise: "Premium",
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
          include our core features with scalable options.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
                className={`btn btn-block ${
                  plan.popular ? "btn-primary" : "btn-outline"
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Features Comparison */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free</th>
                <th>Basic</th>
                <th>Premium</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {featuresComparison.map((row, index) => (
                <tr key={index}>
                  <td className="font-semibold">{row.feature}</td>
                  <td>{row.free}</td>
                  <td>{row.basic}</td>
                  <td>{row.premium}</td>
                  <td>{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-base-200 rounded-3xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl opacity-70 mb-8 max-w-2xl mx-auto">
          Join thousands of educational institutions transforming their learning
          environments with EduInnovate.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn btn-primary btn-lg">
            Start Your Free Trial
          </button>
          <button className="btn btn-outline btn-lg">Schedule a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
