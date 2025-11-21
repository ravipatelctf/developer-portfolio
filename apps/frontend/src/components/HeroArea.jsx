export default function HeroArea() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-white">
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Ravi Shankar Patel
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mt-3">
                Full Stack Web Developer
            </p>

            <div className="border-2 border-green-500 w-20 sm:w-24 my-6"></div>

            {/* Description Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed">
                    Aspiring full-stack web developer, involved in coding web apps
                    using MERN stack technologies throughout day and night.
                </p>

                <p className="text-base sm:text-lg leading-relaxed">
                    Specializing in MongoDB, Express.js, React, and Node.js to build
                    scalable and user-centered applications.
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10">
                <a
                    href="https://ravipatelctf@gmail.com"
                    target="_blank"
                    className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-center hover:bg-green-700 transition w-full sm:w-auto"
                >
                    Contact Me
                </a>

                <a
                    href="https://drive.google.com/drive/folders/1lZZxK14I-rh2M-bVVVn11RHaQST-jvGT?usp=drive_link"
                    target="_blank"
                    className="border border-gray-500 text-gray-200 font-semibold py-3 px-8 rounded-lg text-center hover:bg-gray-800 transition w-full sm:w-auto"
                >
                    Resume
                </a>
            </div>
        </section>
    );
}
