'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const images = [
    '/Images/homepage1.jpg',
    '/Images/homepage2.jpg',
    '/Images/homepage3.jpg',
    '/Images/homepage4.jpg',
    '/Images/homepage5.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-50 font-sans">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 p-10 items-center">
        <div className="intro animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Welcome to Authentic African Hairstyles Toronto!</h1>
          <p>
            Discover the heart and soul of African hairstyling in Toronto with our dedicated platform. Say goodbye to imposters and gaslighters.<br />
            —our mission is to connect you with genuine, skilled African hairstylists who celebrate and elevate the beauty of your natural hair.<br /><br />
            Our community-driven webpage is a haven for those seeking trustworthy and talented professionals, fostering a network that bridges the gap between clients and stylists.<br />
            Join us in building a vibrant community where authenticity, artistry, and trust are at the forefront. Explore, connect, and experience the best of African hairstyling in Toronto today!
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={images[currentImageIndex]}
            alt="Intro"
            width={350} // Reduced width
            height={400} // Reduced height
            className="object-cover rounded-lg animate-flip" // Removed w-[70%], added object-cover and rounded-lg
          />
        </div>
      </div>
      <div className="bg-brown-700 text-white py-10 text-center">
        <h1 className="text-3xl font-bold mb-6">What We Provide</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          
          <div>
            <h4 className="text-xl font-semibold">Professional Hairstylist Directory</h4>
            <p className="italic">
              Browse through a curated list of verified African hairstylists in Toronto.<br />
              Access stylist profiles with portfolios, client reviews, and contact information.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Appointment Bookings</h4>
            <p className="italic">
              Book appointments directly through our platform with your preferred hairstylist.<br />
              Receive timely reminders for your upcoming appointments.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Community Networking</h4>
            <p className="italic">
              Build lasting relationships with trusted hairstylists.<br />
              Join community forums and groups to share experiences, tips, and recommendations.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Education Resources</h4>
            <p className="italic">
              Hair Care Tips: Access articles and videos on maintaining healthy African hair.<br />
              Learn new styles and techniques from expert stylists.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Events Workshop</h4>
            <p className="italic">
              Community Events: Participate in local events to celebrate African hairstyling and culture.<br />
              Workshops: Attend workshops hosted by top stylists to learn new skills and trends.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Special Offers And Discounts</h4>
            <p className="italic">
              Exclusive Deals: Enjoy special offers and discounts from participating hairstylists.<br />
              Loyalty Programs: Earn rewards for frequent bookings and referrals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}