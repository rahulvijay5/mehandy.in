'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="title-font text-2xl text-[#FF4B91]">
            Mehandy.in
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#FF4B91] transition-colors">
              Home
            </Link>
            <Link href="/app" className="hover:text-[#FF4B91] text-[#f3307b] font-semibold transition-colors">
              Download App
            </Link>
            <Link href="/about" className="hover:text-[#FF4B91] transition-colors">
              About
            </Link>
            <Link href="/#courses" className="hover:text-[#FF4B91] transition-colors">
              Courses
            </Link>
            <Link href="/contact" className="hover:text-[#FF4B91] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden pb-4`}
        >
          <div className="flex flex-col space-y-3">
            <Link
              href="/app"
              className="hover:text-[#FF4B91] text-[#f3307b] font-semibold transition-colors px-4"
              onClick={() => setIsOpen(false)}
            >
              Download App
            </Link>
            <Link
              href="/about"
              className="hover:text-[#FF4B91] transition-colors px-4"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#courses"
              className="hover:text-[#FF4B91] transition-colors px-4"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FF4B91] transition-colors px-4"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 