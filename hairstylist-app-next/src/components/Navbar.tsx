'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center  bg-white shadow-md">
      <div>
        <Link href="/">
          <Image
            src="/Images/Authentic-Logo.png"
            alt="Logo"
            width={200}
            height={70}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex items-center gap-6"> {/* Inline style as a fallback */}
        <Link href="/" className={`text-lg hover:text-brown-600 ${pathname === '/' ? 'border-b-2 border-brown-600' : ''}`}>
          Home
        </Link>
        <Link href="/about" className={`text-lg hover:text-brown-600 ${pathname === '/about' ? 'border-b-2 border-brown-600' : ''}`}>
          About Us
        </Link>
        <Link href="/stylists" className={`text-lg hover:text-brown-600 ${pathname === '/stylists' ? 'border-b-2 border-brown-600' : ''}`}>
          Our Stylists
        </Link>
      </div>
      <div className="flex gap-2">
        <Link href="/signin">
          <button className="px-4 py-2 bg-brown-600 text-white rounded-lg hover:bg-blue-700">Login</button>
        </Link>
        <Link href="/register">
          <button className="px-4 py-2 bg-brown-600 text-white rounded-lg hover:bg-blue-700">Register</button>
        </Link>
      </div>
    </nav>
  );
}