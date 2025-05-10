import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="flex justify-between px-6">
        <div>
          <h3 className="text-lg font-bold">HOME</h3>
          <ul>
            <li><Link href="/about" className="hover:text-brown-600">About Us</Link></li>
            <li><Link href="/stylists" className="hover:text-brown-600">Our Stylists</Link></li>
            <li><Link href="/register" className="hover:text-brown-600">Become a Family</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">ABOUT US</h3>
          <ul>
            <li><Link href="/about" className="hover:text-brown-600">Authentic Stylist</Link></li>
            <li><Link href="/about" className="hover:text-brown-600">Corporate Info</Link></li>
            <li><Link href="/about" className="hover:text-brown-600">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-brown-600">Feedbacks</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">FOLLOW US</h3>
          <ul className="flex gap-4">
            <li>
              <a href="https://www.linkedin.com/in/rafiat-bolaji">
                <Image
                  src="/images/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rafiat-bolaji">
                <Image
                  src="/images/ig.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rafiat-bolaji">
                <Image
                  src="/images/fb.svg"
                  alt="Pinterest"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm italic mt-4">© Established by Juzt-Oyin, 2024. All rights reserved</p>
    </footer>
  );
}