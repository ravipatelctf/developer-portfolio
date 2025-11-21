export default function Projects() {
    const techStack = ["React", "Node.js", "MongoDB", "Stripe"];

    const cardClasses =
        "bg-neutral-900 rounded-xl overflow-hidden shadow-lg " +
        "transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(22,220,158,0.4)]";

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h2 className="text-white text-4xl sm:text-5xl font-extrabold">Projects</h2>
            <p className="text-gray-300 text-lg sm:text-2xl mt-3">
                Building solutions that solve real-world problems
            </p>

            <div className="border-2 border-green-500 w-20 sm:w-24 my-6"></div>

            {/* Responsive Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Project Card 1 */}
                <div className={cardClasses}>
                    <div className="aspect-[4/3] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1629360057380-18b15b42e650?h=400&w=600&fit=crop"
                            alt="Tutor Directory"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6">
                        <p className="text-white text-xl sm:text-2xl font-bold">
                            Tutor Directory
                        </p>

                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                            A platform where students and tutors can connect without any agency.
                        </p>

                        <div className="flex gap-2 flex-wrap mt-4">
                            {techStack.map((t) => (
                                <span
                                    key={t}
                                    className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-6 font-semibold text-white">
                            <a
                                href="https://tutordirectory.vercel.app"
                                target="_blank"
                                className="hover:text-green-400 transition"
                            >
                                🔗 Demo
                            </a>
                            <a
                                href="https://github.com/ravipatelctf/tutor-directory"
                                target="_blank"
                                className="hover:text-green-400 transition"
                            >
                                {`</>`} Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className={cardClasses}>
                    <div className="aspect-[4/3] overflow-hidden">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?h=400&w=600&fit=crop"
                            alt="myShoppingSite"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6">
                        <p className="text-white text-xl sm:text-2xl font-bold">
                            myShoppingSite
                        </p>

                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                            Modern e-commerce platform with cart, wishlist, user & order history.
                        </p>

                        <div className="flex gap-2 flex-wrap mt-4">
                            {techStack.map((t) => (
                                <span
                                    key={t}
                                    className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-6 font-semibold text-white">
                            <a
                                href="https://frontend-mp1.vercel.app/"
                                target="_blank"
                                className="hover:text-green-400 transition"
                            >
                                🔗 Demo
                            </a>
                            <a
                                href="https://github.com/ravipatelctf/frontend-mp1"
                                target="_blank"
                                className="hover:text-green-400 transition"
                            >
                                {`</>`} Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className={cardClasses}>
                    <div className="aspect-[4/3] overflow-hidden">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1733306696471-807493ff845b?h=400&w=600&fit=crop"
                            alt="Anvaya CRM"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-6">
                        <p className="text-white text-xl sm:text-2xl font-bold">
                            Anvaya CRM
                        </p>

                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                            CRM app to manage leads, agents, and real-time sales reporting.
                        </p>

                        <div className="flex gap-2 flex-wrap mt-4">
                            {techStack.map((t) => (
                                <span
                                    key={t}
                                    className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-6 font-semibold text-white">
                            <a
                                href="https://frontend-mp2.vercel.app/"
                                target="_blank"
                                className="hover:text-green-400 transition"
                            >
                                🔗 Demo
                            </a>
                            <a
                                href="https://github.com/ravipatelctf/frontend-mp2"
                                target="_blank"
                                className="hover:text-green-400 transition"
                            >
                                {`</>`} Code
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
