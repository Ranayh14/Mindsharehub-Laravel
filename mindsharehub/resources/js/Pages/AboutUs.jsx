// File: resources/js/Pages/AboutUs.jsx
import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Footer from '../Layouts/Footer';
import CookieConsent from '../Components/CookieConsent';
import TermsModal   from '../Components/TermsModal';

export default function AboutUs() {
  return (
    <>
      <Head title="About Us" />

      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Login - visible (1).png')" }}
      >
        {/* Header */}
        <header className="flex justify-between items-center sticky top-0 py-1 px-10 bg-[#2B1B54] shadow-lg z-60">
          <img
            src="/images/Logo MindsahreHub-08 1.png"
            alt="MindshareHub Logo"
            className="w-20 py-1"
          />
          <nav className="flex-grow flex justify-start ml-[50px]">
            <Link
              href="/"
              className="text-white font-medium hover:text-gray-300 transition border-b-4 border-transparent hover:border-gray-300 mx-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white font-medium hover:text-gray-300 transition border-b-4 border-transparent hover:border-gray-300 mx-4"
            >
              About Us
            </Link>
            <Link
              href="/help"
              className="text-white font-medium hover:text-gray-300 transition border-b-4 border-transparent hover:border-gray-300 mx-4"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="py-2 px-4 text-white border border-white rounded-full hover:bg-white hover:text-[#2B1B54] transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="py-2 px-4 bg-white text-[#2B1B54] font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Register
            </Link>
          </div>
        </header>

        {/* About Us Section */}
        <section className="text-center py-10">
          <h1 className="text-2xl font-medium mb-6 text-white">About Us</h1>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            MindshareHub adalah platform yang bertujuan untuk menciptakan ruang aman bagi individu
            untuk berbagi pemikiran, ide, dan pengalaman. Kami percaya bahwa setiap orang memiliki
            cerita yang layak didengarkan dan kami berkomitmen untuk menyediakan lingkungan yang
            mendukung dan inklusif bagi semua pengguna.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="space-y-20 px-10 mt-10">
          <div className="flex flex-col items-center max-w-5xl mx-auto gap-10 fade-in">
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-sm text-center">
              Misi kami adalah memberdayakan individu untuk berbicara secara terbuka dan anonim tentang
              topik yang penting bagi mereka. Kami ingin menjembatani kesenjangan komunikasi dan
              menciptakan komunitas yang saling mendukung.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-5xl mx-auto gap-10 fade-in">
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed text-sm text-center">
              Kami berharap dapat menjadi platform terdepan untuk diskusi terbuka dan berbagi
              pengalaman. Dengan teknologi dan komunitas yang kuat, kami ingin menjadikan
              MindshareHub sebagai tempat yang aman dan nyaman bagi semua orang.
            </p>
          </div>
        </section>

        {/* Cookie Consent*/}
        <CookieConsent />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
