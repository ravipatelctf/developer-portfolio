import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function SkillCard({ children, cardlink, logoLabel, cardText }) {
    return (
        <a
            href={cardlink}
            target="_blank"
            className="
                bg-neutral-900 rounded-xl block overflow-hidden 
                shadow-lg transition-all duration-300 
                hover:shadow-[0_0_20px_rgba(22,220,158,0.4)]
                hover:bg-neutral-800
                p-6 sm:p-7
            "
        >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <span className="flex justify-center">{children}</span>
                <span className="text-white text-lg font-semibold text-center sm:text-left">
                    {logoLabel}
                </span>
            </div>

            <p className="text-gray-300 text-sm text-center sm:text-left">{cardText}</p>
        </a>
    );
}

export default function Connect() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h2 className="text-white text-4xl sm:text-5xl font-extrabold">Connect</h2>

            <p className="text-gray-300 text-lg sm:text-2xl mt-3">
                Let's collaborate on something amazing together
            </p>

            <div className="border-2 border-green-500 w-20 sm:w-24 my-6"></div>

            {/* Responsive Dynamic Grid */}
            <div
                className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-4
                gap-6 sm:gap-8
                "
            >
                <SkillCard
                    logoLabel="GitHub"
                    cardlink="https://github.com/ravipatelctf"
                    cardText="Follow on GitHub"
                >
                    <FaGithub size={28} color="white" />
                </SkillCard>

                <SkillCard
                    logoLabel="LinkedIn"
                    cardlink="https://www.linkedin.com/in/ravipatelctf"
                    cardText="Connect on LinkedIn"
                >
                    <FaLinkedin size={28} color="white" />
                </SkillCard>

                <SkillCard
                    logoLabel="X (formerly Twitter)"
                    cardlink="https://x.com/ravipatelctf"
                    cardText="Follow on X"
                >
                    <FaXTwitter size={28} color="white" />
                </SkillCard>

                <SkillCard
                    logoLabel="Email"
                    cardlink="mailto:ravipatelctf@gmail.com"
                    cardText="ravipatelctf@gmail.com"
                >
                    <FaEnvelope size={28} color="white" />
                </SkillCard>
            </div>
        </section>
    );
}
