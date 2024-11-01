export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            Empowering Farmers with Essential Resources
          </h1>
          <p className="text-xl mb-8">
            Providing tools, resources, and information for sustainable farming
          </p>
          <a
            href="#features"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
