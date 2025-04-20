import React from 'react';

export default function AboutUs() {
    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('Login - visible (1).png')" }}>
            {/* Header */}
            <header className="flex justify-between items-center sticky top-0 py-1 px-10 bg-[#2B1B54] shadow-lg z-60">
                <div>
                    <img src="Logo MindsahreHub-08 1.png" alt="MindshareHub Logo" className="w-20 py-1" />
                </div>
                <nav className="flex-grow flex justify-start ml-[50px]">
                    <div className="flex gap-4 space-x-10">
                        <Link href="/" className="text-white font-medium hover:text-gray-300">Home</Link>
                        <Link href="/about-us" className="text-white font-medium hover:text-gray-300">About Us</Link>
                        <Link href="/help" className="text-white font-medium hover:text-gray-300">FAQ</Link>
                    </div>
                </nav>
                <div className="flex gap-4">
                    <Link href="/login" className="py-2 px-4 text-white border border-white rounded-full hover:bg-white hover:text-[#2B1B54]">Login</Link>
                    <Link href="/register" className="py-2 px-4 bg-white text-[#2B1B54] font-semibold rounded-full hover:bg-gray-200">Register</Link>
                </div>
            </header>

            {/* About Us Section */}
            <section className="text-center py-10">
                <h1 className="text-2xl font-medium mb-6 text-white">About Us</h1>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    MindshareHub adalah platform yang bertujuan untuk menciptakan ruang aman bagi individu untuk berbagi pemikiran...
                </p>
            </section>
        </div>
    );
}
