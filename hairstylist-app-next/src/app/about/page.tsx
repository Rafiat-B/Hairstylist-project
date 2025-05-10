import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 font-sans"> 
      <section className="bg-brown-700 text-white p-10 fade-in max-w-7xl mx-auto" style={{ padding: '20px' }}>
        <h2 className="text-2xl font-bold">Our Journey</h2>
        <p>Our story began with a simple mission: to bridge the gap between clients and authentic African hairstylists in Toronto...</p>
      </section>
      <section className="bg-brown-700 text-white p-10 fade-in mt-2 max-w-7xl mx-auto" style={{ padding: '20px' }}>
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p>
          Our mission is to provide a trusted and authentic network for clients seeking genuine African hairstyling services...
          Faced with the difficulty and expensive rate to get you looking good but turns the other way is under-emphasized.
        </p>
      </section>

      <section className="bg-brown-700 text-white p-10 fade-in mt-2 max-w-7xl mx-auto" style={{ padding: '20px' }} >
        <h2 className="text-2xl font-bold">Meet the Team</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          <div className="slide-in text-center">
            <img src="/Images/Snapchat.jpg" alt="Juzt-Oyin" className="w-[202px] h-[288px] mx-auto" />
            <h3 className="text-xl font-semibold"> Rafiat Oyindamola</h3>
            <h4>Developer</h4>
            <p className="italic">A risk taker breaking into a strange world..</p>
          </div>
          <div className="slide-in text-center">
            <img src="/Images/leo.jpg" alt="Mighty Moh" className="w-[202px] h-[288px] mx-auto" /> {/* Added h-[288px] for consistency */}
            <h3 className="text-xl font-semibold">Mohammed Sherif</h3>
            <h4>Developer</h4>
            <p className="italic">An angel in human form, Mighty Moh...</p>
          </div>
          <div className="slide-in text-center">
            <img src="/Images/leo.jpg" alt="Mighty Moh" className="w-[202px] h-[288px] mx-auto" /> {/* Added h-[288px] for consistency */}
            <h3 className="text-xl font-semibold">test test</h3>
            <h4>Developer</h4>
            <p className="italic">An angel in human form, Mighty Moh...</p>
          </div>
        </div>

      </section>
      <section className="p-10 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Join Our Community</h2>
        <p>Ready to experience the best of African hairstyling in Toronto? Join our community today and connect with talented, authentic hairstylists.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/register" className="text-blue-600 hover:underline">Sign Up</Link>
          <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
        </div>
      </section>
      <section className="p-10 text-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Education Resources</h2>
        <p>You want to become an authentic hairstylist too? Learn from our experts in the industry.</p>
        <Link href="/register" className="text-blue-600 hover:underline">Sign Up</Link>
      </section>
    </div>
  );
}