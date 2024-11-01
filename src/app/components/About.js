import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 relative h-[400px]">
            <Image
              src="/placeholder-farmer.jpg"
              alt="Farmer"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">About Sheti Mitra</h2>
            <p className="text-gray-600 mb-6">
              Sheti Mitra is dedicated to revolutionizing farming practices by
              providing farmers with essential digital tools and resources. Our
              mission is to empower farmers with technology that enhances
              productivity and sustainability in agriculture.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
