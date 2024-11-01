export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Farmers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "Sheti Mitra has transformed how I manage my farm. The weather
              updates and market prices help me make better decisions."
            </p>
            <div className="font-semibold">- Rajesh Patil, Maharashtra</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
              "The equipment rental feature has made modern farming machinery
              accessible to small farmers like me."
            </p>
            <div className="font-semibold">- Suresh Kumar, Gujarat</div>
          </div>
        </div>
      </div>
    </section>
  );
}
