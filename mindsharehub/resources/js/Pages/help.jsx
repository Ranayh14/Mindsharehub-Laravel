import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Footer from '../Layouts/Footer';
import CookieConsent from '../Components/CookieConsent';
import TermsModal   from '../Components/TermsModal';

const faqs = [
  { q: 'What is MindshareHub?', a: 'MindshareHub is a platform for individuals to share thoughts, ideas, and experiences anonymously.' },
  { q: 'How can I join MindshareHub?', a: 'You can join by registering on our website. It’s quick and easy!' },
  { q: 'Is my data safe?', a: 'Yes, we prioritize your privacy and ensure that your data is protected.' },
  { q: 'Can I remain anonymous?', a: 'Absolutely! Our platform allows you to share without revealing your identity.' },
];

export default function Help() {
  const [open, setOpen] = useState({});
  const toggleFAQ = (i) => setOpen(o => ({ ...o, [i]: !o[i] }));

  return (
    <>
      <Head title="FAQ" />

      {/* Header */}
      <header className="flex justify-between items-center sticky top-0 py-1 px-10 bg-[#2B1B54] shadow-lg z-60">
        <img src="/images/Logo MindsahreHub-08 1.png" alt="Logo" className="w-20 py-1" />
        <nav className="flex-grow flex justify-start ml-[50px]">
          <div className="flex gap-4 space-x-10">
            <Link href="/" className="text-white font-medium hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-white font-medium hover:text-gray-300">About Us</Link>
            <Link href="/help" className="text-white font-medium hover:text-gray-300 border-b-4 border-white">FAQ</Link>
          </div>
        </nav>
        <div className="flex gap-4">
          <Link href="/login" className="py-2 px-4 text-white border border-white rounded-full hover:bg-white hover:text-[#2B1B54]">Login</Link>
          <Link href="/register" className="py-2 px-4 bg-white text-[#2B1B54] font-semibold rounded-full hover:bg-gray-200">Register</Link>
        </div>
      </header>

      {/* FAQ Content */}
      <div className="content flex flex-col bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/Login - visible (1).png')" }}>
        <main className="container mx-auto p-8">
          <h1 id="cp" className="text-white text-2xl font-medium mb-6 text-center">Frequently Asked Questions</h1>
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-6 mb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{q}</h2>
                <button onClick={() => toggleFAQ(i)} className="text-gray-500 focus:outline-none">
                  {open[i] ? '−' : '+'}
                </button>
              </div>
              {open[i] && <p className="text-gray-600 mt-2">{a}</p>}
            </div>
          ))}

          {/* Contact Form */}
          <div className="pl-48 pr-48 mb-[118px]">
            <h2 className="text-2xl font-medium mt-12 mb-6 text-center text-white">Contact MindshareHub Team</h2>
            <form action="#" method="POST" className="bg-white bg-opacity-25 shadow-md rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="fullname" className="block text-white text-sm font-bold mb-2">Full Name</label>
                  <input type="text" id="fullname" name="fullname" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="border border-white bg-[#2B1B54] bg-opacity-25 hover:bg-white hover:text-[#2B1B54] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
              </div>
            </form>
          </div>
        </main>
      </div>

      <CookieConsent />

      {/* Footer */}
      <Footer />
    </>
  );
}