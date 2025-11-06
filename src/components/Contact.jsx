


const Contact = () => {
    return (
        <section className="py-24 bg-[#F7F9FC]">
            <div className="container px-6 mx-auto max-w-4xl">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-[#3440B5]">Stay Ahead</span> with Training Insights
                    </h2>
                    <p className="text-[20px] text-muted-foreground">
                        Subscribe to get the latest updates, performance tips, and exclusive TriSchedule features straight to your inbox.
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3440B5] text-gray-700 w-full"
                />
                <button
                    className="px-8 py-3 font-semibold text-white rounded-md transition-all duration-300 shadow-md"
                    style={{
                        background: "linear-gradient(135deg, #3440B5 0%, #212DA2 100%)",
                    }}
                >
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default Contact;
