export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">🌾 Sheti Mitra</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-400">
              Help
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 Sheti Mitra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
