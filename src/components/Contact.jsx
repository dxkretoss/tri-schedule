const Contact = () => {
    return (
        <section className="py-24 bg-[#F7F9FC]">
            <div className="max-w-5xl mx-auto text-center">
                {/* Heading & Description */}
                <div className="space-y-4 mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        <span className="text-[#3440B5]">Stay Ahead</span> with Training Insights
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                        Subscribe to get the latest updates, performance tips, and exclusive TriSchedule
                        features straight to your inbox.
                    </p>
                </div>

                {/* Email Input & Button */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto w-full px-2 mt-5"
                >
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 w-full border border-gray-300 rounded-md px-4 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#3440B5] text-gray-700 placeholder-gray-400 transition-all text-sm sm:text-base"
                    />
                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-3 sm:py-4 font-semibold text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                        style={{
                            background: "linear-gradient(135deg, #3440B5 0%, #212DA2 100%)",
                        }}
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
