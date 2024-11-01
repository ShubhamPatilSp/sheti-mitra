"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-700">
              🌾 Sheti Mitra
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-700 hover:text-green-600"
            >
              Features
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600">
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-green-600"
            >
              Contact
            </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Download App
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link
              href="#"
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Contact
            </Link>
            <button className="mt-2 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Download App
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
