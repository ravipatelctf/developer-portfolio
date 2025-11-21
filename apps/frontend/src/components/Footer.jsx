export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 mt-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">

                <p className="text-sm sm:text-base text-gray-300">
                    © {new Date().getFullYear()} Ravi Shankar Patel • All rights reserved
                </p>

                <p className="text-sm sm:text-base text-gray-400">
                    Built with ❤️ using React.js
                </p>

                <p className="text-sm sm:text-base text-gray-400">
                    Learning full stack development at{" "}
                    <a
                        href="https://neog.camp/"
                        target="_blank"
                        className="text-green-500 hover:text-green-400 transition underline-offset-2 hover:underline"
                    >
                        neog.camp
                    </a>
                </p>

            </div>
        </footer>
    );
}
