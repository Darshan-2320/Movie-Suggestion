import React from "react";
import Header from "./Header";

const Helpus = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-900 text-white px-6 py-24">
                <div className="max-w-3xl mx-auto text-center">

                    <h1 className="text-4xl font-bold mt-11">Help Us Grow 🎬</h1>
                    <p className="text-lg text-gray-300 mt-8">
                        We are constantly trying to improve this Movie Suggestion App!
                        You can support us by reporting bugs, giving feedback, or
                        suggesting new movies to add.
                    </p>

                    {/* Contact / Feedback */}
                    <form className="bg-gray-800 p-6 rounded-xl mt-8 space-y-4 shadow-lg">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-gray-700 focus:ring focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-gray-700 focus:ring focus:ring-blue-500 outline-none"
                        />
                        <textarea
                            placeholder="Your Message (report issue / suggestion)"
                            rows="4"
                            className="w-full p-3 rounded-lg bg-gray-700 focus:ring focus:ring-blue-500 outline-none"
                        ></textarea>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold">
                            Submit Feedback
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                        <p className="text-gray-300">
                            Email: support@moviesuggest.com
                        </p>
                        <p className="text-gray-300 mt-1">
                            Github: https://github.com/Darshan-2320
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Helpus;
