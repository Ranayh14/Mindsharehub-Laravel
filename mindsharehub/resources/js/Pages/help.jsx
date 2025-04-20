import React, { useState } from 'react';

export default function Help() {
    // State untuk toggle FAQ
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id); // Toggle visibility
    };

    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('Login - visible (1).png')" }}>
            {/* Header */}
            <header className="flex justify-between items-center sticky top-0 py-1 px-10 bg-[#2B1B54] shadow-lg z-60">
                <div>
                    <img src="Logo MindsahreHub-08 1.png" alt="MindshareHub Logo" className="w-20 py-1" />
                </div>
                <nav className="flex-grow flex justify-start ml-[50px]">
                    <div className="flex gap-4 space-x-10">
                        <a href="/" className="text-white font-medium hover:text-gray-300">Home</a>
                        <a href="/about-us" className="text-white font-medium hover:text-gray-300">About Us</a>
                        <a href="/help" className="text-white font-medium hover:text-gray-300 transition border-b border-b-4 border-rounded border-gray-300">FAQ</a>
                    </div>
                </nav>
                <div className="flex gap-4">
                    <a href="/login" className="py-2 px-4 text-white border border-white rounded-full hover:bg-white hover:text-[#2B1B54]">Login</a>
                    <a href="/register" className="py-2 px-4 bg-white text-[#2B1B54] font-semibold rounded-full hover:bg-gray-200">Register</a>
                </div>
            </header>

            {/* FAQ Section */}
            <div className="content flex flex-col">
                <div className="container mx-auto p-8">
                    <h1 className="text-white text-2xl font-medium mb-6 text-center">Frequently Asked Questions</h1>

                    {/* FAQ 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">What is MindshareHub?</h2>
                            <button onClick={() => toggleFAQ('faq1')} className="text-gray-500 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {openFAQ === 'faq1' && (
                            <div className="mt-2">
                                <p className="text-gray-600">MindshareHub is a platform for individuals to share thoughts, ideas, and experiences anonymously.</p>
                            </div>
                        )}
                    </div>

                    {/* FAQ 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">How can I join MindshareHub?</h2>
                            <button onClick={() => toggleFAQ('faq2')} className="text-gray-500 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {openFAQ === 'faq2' && (
                            <div className="mt-2">
                                <p className="text-gray-600">You can join by registering on our website. It’s quick and easy!</p>
                            </div>
                        )}
                    </div>

                    {/* FAQ 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Is my data safe?</h2>
                            <button onClick={() => toggleFAQ('faq3')} className="text-gray-500 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {openFAQ === 'faq3' && (
                            <div className="mt-2">
                                <p className="text-gray-600">Yes, we prioritize your privacy and ensure that your data is protected.</p>
                            </div>
                        )}
                    </div>

                    {/* FAQ 4 */}
                    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Can I remain anonymous?</h2>
                            <button onClick={() => toggleFAQ('faq4')} className="text-gray-500 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {openFAQ === 'faq4' && (
                            <div className="mt-2">
                                <p className="text-gray-600">Absolutely! Our platform allows you to share without revealing your identity.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="pl-48 pr-48 mb-[118px]" id="cp">
                    <h2 className="text-2xl font-medium mt-12 mb-6 text-center text-white">Contact MindshareHub Team</h2>
                    <form action="#" method="POST" className="bg-white bg-opacity-25 shadow-md rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="fullname" className="block text-white text-sm font-bold mb-2">Full Name</label>
                                <input type="text" id="fullname" name="fullname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email Address</label>
                                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="border border-white bg-[#2B1B54] bg-opacity-25 hover:bg-white hover:text-[#2B1B54] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
