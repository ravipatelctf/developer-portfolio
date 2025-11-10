import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6"; 
import { FaXTwitter } from "react-icons/fa6"; 
import "../App.css";

function SkillCard({children, cardlink, logoLabel, cardText}) {
    return (
        <>
        <div className="col-md-6 mb-2">
            <a href={cardlink} target="_blank" className="card bg-dark tech-card">
                <div className="card-body pb-4 d-flex align-items-center gap-3">
                    <span>{children}</span>
                    <span className="text-white fs-5 fw-bold">{logoLabel}</span>                  
                </div>
                <p className="text-light px-4">{cardText}</p>
            </a>
        </div>
        </>
    )
}

export default function Connect() {
    return (
        <div className="container py-5 my-5">
            <section>
                <h2 className="text-white display-4 fw-bold">Connect</h2>
                <p className="text-white-50 fs-3">Let's collaborate on something amazing together</p>
                <div className="border border-2 border-success w-25 my-4"></div>
                
                <div className="row">
                    {/* GitHub */}
                    <SkillCard 
                        logoLabel="GitHub" 
                        cardlink="https://github.com/ravipatelctf" 
                        cardText="Follow on GitHub">
                        <FaGithub size={25} color="white" />
                    </SkillCard>

                    {/* LinkedIn */}
                    <SkillCard 
                        logoLabel="LinkedIn" 
                        cardlink="https://www.linkedin.com/in/ravipatelctf" 
                        cardText="Connect on LinkedIn"
                    >
                        <FaLinkedin size={25} color="white" />
                    </SkillCard>

                    {/* X (Twitter) */}
                    <SkillCard 
                        logoLabel="X (formaly Twitter)" 
                        cardlink="https://x.com/ravipatelctf" 
                        cardText="Follow on X"
                    >
                        <FaXTwitter size={25} color="white" />
                    </SkillCard>

                    {/* Email */}
                    <SkillCard 
                        logoLabel="Email" 
                        cardlink="https://ravipatelctf@gmail.com" 
                        cardText="ravipatelctf@gmail.com"
                    >
                        <FaEnvelope size={25} color="white" />
                    </SkillCard>

                </div>
            </section>
        </div>
    );
}