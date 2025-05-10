'use client';

// import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  const handleSubmit = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const message = (document.getElementById('message') as HTMLTextAreaElement).value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
      alert('Please enter your name.');
      return;
    }
    if (email === '' || !emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (message === '') {
      alert('Please enter your message.');
      return;
    }

    alert('Thank you! Your message has been sent.');
    (document.getElementById('contact-form') as HTMLFormElement).reset();
    router.push('/');
  };

  return (
    <div className="bg-gray-50 font-sans p-6 flex justify-center">
      <div className="bg-brown-700 text-white p-10 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Contact Us:</h2>
        <div id="contact-form" className="flex flex-col gap-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="p-3 rounded text-black" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="p-3 rounded text-black" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="p-3 rounded text-black h-32" required></textarea>
          <button onClick={handleSubmit} className="bg-blue-600 text-white p-3 rounded hover:bg-gray-800 font-bold">Submit</button>
        </div>
      </div>
    </div>
  );
}