import React from 'react';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('Login - visible (1).png')" }}>
            {/* Header */}
            <header className="flex justify-between items-center sticky top-0 py-1 px-10 bg-[#2B1B54] shadow-lg z-60">
                {/* Logo */}
                <div>
                    <img src="Logo MindsahreHub-08 1.png" alt="MindshareHub Logo" className="w-20 py-1" />
                </div>
                <nav className="flex-grow flex justify-start ml-[50px]">
                    <div className="flex gap-4 space-x-10">
                        <Link href="/" className="text-white font-medium hover:text-gray-300 transition border-b border-b-4 border-rounded border-gray-300">Home</Link>
                        <Link href="/about-us" className="text-white font-medium hover:text-gray-300 hover:border-b hover:border-b-4 hover:border-rounded hover:border-gray-300">About Us</Link>
                        <Link href="/help" className="text-white font-medium hover:text-gray-300 hover:border-b hover:border-b-4 hover:border-rounded hover:border-gray-300">FAQ</Link>
                    </div>
                </nav>
                {/* Login & Register Buttons */}
                <div className="flex gap-4">
                    <Link href="/login" className="py-2 px-4 text-white border border-white rounded-full hover:bg-white hover:text-[#2B1B54] transition">Login</Link>
                    <Link href="/register" className="py-2 px-4 bg-white text-[#2B1B54] font-semibold rounded-full hover:bg-gray-200 transition">Register</Link>
                </div>
            </header>

            {/* Welcome Section */}
            <section className="text-center py-10">
                <h1 className="text-2xl font-medium mb-6 text-white">Welcome To</h1>
                <div className="inline-block bg-white text-[#2B1B54] py-3 px-6 rounded-full font-semibold text-3xl">
                    MindshareHub
                </div>
            </section>

            {/* Features Section */}
            <section className="space-y-20 px-10 mt-10">
                {/* Forum Anonym */}
                <div className="flex flex-col lg:flex-row items-center max-w-5xl mx-auto gap-10 fade-in">
                    <div className="flex-1 text-left">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Forum Anonym</h2>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Forum anonim adalah platform online di mana pengguna dapat berpartisipasi dalam diskusi...
                        </p>
                    </div>
                    <div className="w-24 h-24">
                        <img src="People Working Together.png" alt="Forum Icon" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Diary */}
                <div className="flex flex-col lg:flex-row items-center max-w-5xl mx-auto gap-10 fade-in">
                    <div className="flex-1 text-left">
                        <h2 className="text-2xl font-semibold mb-4 text-white">Diary</h2>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Fitur diary di anonim forum adalah layanan yang memungkinkan pengguna untuk membuat catatan pribadi...
                        </p>
                    </div>
                    <div className="w-24 h-24">
                        <img src="Journal.png" alt="Diary Icon" className="w-full h-full object-contain" />
                    </div>
                </div>
            </section>

            {/* Cookie Consent Section */}
            <div id="cookieConsent" className="fixed bottom-0 left-0 right-0 bg-white text-[#2B1B54] py-4 px-8 flex items-center justify-between shadow-lg z-50 rounded-t-lg">
                <div className="flex items-center gap-4">
                    <span className="text-sm">We use cookies to ensure you get the best experience on our website.</span>
                </div>
                <button id="acceptCookies" className="py-2 px-6 bg-[#2B1B54] text-white font-semibold rounded-full hover:bg-[#4C3A75] transition">
                    Got it!
                </button>
            </div>

            {/* Footer */}
            <footer className="bg-[#2B1B54] text-white py-6 mt-10 fixed w-full bottom-0">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                        <Link href="/help" className="hover:text-gray-300">Contact Us</Link>
                        <Link href="#" data-modal-target="static-modal" data-modal-toggle="static-modal" className="hover:text-gray-300">Terms and Conditions</Link>
                    </div>
                    <p className="text-xs">© 2024 MindshareHub. Hak cipta dilindungi.</p>
                </div>
            </footer>
        </div>
    );
}
