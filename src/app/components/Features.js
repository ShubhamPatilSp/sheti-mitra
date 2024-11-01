const features = [
  {
    icon: "🚜",
    title: "Equipment Rental",
    description: "Access modern farming equipment on-demand",
  },
  {
    icon: "🌤",
    title: "Weather Updates",
    description: "Real-time weather forecasts for better planning",
  },
  {
    icon: "🌱",
    title: "Soil Testing",
    description: "Professional soil analysis and recommendations",
  },
  {
    icon: "📊",
    title: "Market Prices",
    description: "Live market rates for agricultural products",
  },
  {
    icon: "📑",
    title: "Government Schemes",
    description: "Information about agricultural policies and schemes",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
