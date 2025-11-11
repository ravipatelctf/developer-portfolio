
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiRedux, 
  SiTailwindcss, 
  SiBootstrap, 
  SiExpress, 
  SiJsonwebtokens, 
  SiMongodb, 
  SiMongoose, 
  SiFlask, 
  SiSqlalchemy, 
  SiPostgresql, 
  SiVercel, 
  SiRailway, 
  SiSupabase, 
  SiTypescript
} from "react-icons/si";


function SkillCard({children, logoLabel}) {
    return (
        <div className="col-md-3 col-6 d-flex align-items-center gap-3 py-4">
            <span>{children}</span>
            <span className="text-white fs-5">{logoLabel}</span>
        </div>
    )
}

export default function TechStack() {
    return (
        <div className="container py-5 my-5">
            <section>
                <h1 className="text-white display-4 fw-bold">Tech Stack</h1>
                <p className="text-white-50 fs-5">Technologies and tools I work with</p>
                <div className="border border-2 border-success w-25 my-4"></div>
                <div className="row">
                    {/* React */}
                    <SkillCard logoLabel="React">
                    <FaReact size={25} color="white" />
                    </SkillCard>

                    {/* Next.js */}
                    <SkillCard logoLabel="Next.js">
                    <SiNextdotjs size={25} color="white" />
                    </SkillCard>

                    {/* Redux */}
                    <SkillCard logoLabel="Redux">
                    <SiRedux size={25} color="white" />
                    </SkillCard>

                    {/* Tailwind CSS */}
                    <SkillCard logoLabel="Tailwind CSS">
                    <SiTailwindcss size={25} color="white" />
                    </SkillCard>

                    {/* Bootstrap */}
                    <SkillCard logoLabel="Bootstrap">
                    <SiBootstrap size={25} color="white" />
                    </SkillCard>

                    {/* Node.js */}
                    <SkillCard logoLabel="Node.js">
                    <FaNodeJs size={25} color="white" />
                    </SkillCard>

                    {/* Express */}
                    <SkillCard logoLabel="Express">
                    <SiExpress size={25} color="white" />
                    </SkillCard>

                    {/* JWT */}
                    <SkillCard logoLabel="JWT">
                    <SiJsonwebtokens size={25} color="white" />
                    </SkillCard>

                    {/* MongoDB */}
                    <SkillCard logoLabel="MongoDB">
                    <SiMongodb size={25} color="white" />
                    </SkillCard>

                    {/* Mongoose */}
                    <SkillCard logoLabel="Mongoose">
                    <SiMongoose size={25} color="white" />
                    </SkillCard>

                    {/* Python */}
                    <SkillCard logoLabel="Python">
                    <FaPython size={25} color="white" />
                    </SkillCard>

                    {/* Flask */}
                    <SkillCard logoLabel="Flask">
                    <SiFlask size={25} color="white" />
                    </SkillCard>

                    {/* SQLAlchemy */}
                    <SkillCard logoLabel="SQLAlchemy">
                    <SiSqlalchemy size={25} color="white" />
                    </SkillCard>

                    {/* PostgreSQL */}
                    <SkillCard logoLabel="PostgreSQL">
                    <SiPostgresql size={25} color="white" />
                    </SkillCard>

                    {/* Vercel */}
                    <SkillCard logoLabel="Vercel">
                    <SiVercel size={25} color="white" />
                    </SkillCard>

                    {/* Railway */}
                    <SkillCard logoLabel="Railway">
                    <SiRailway size={25} color="white" />
                    </SkillCard>

                    {/* Supabase */}
                    <SkillCard logoLabel="Supabase">
                    <SiSupabase size={25} color="white" />
                    </SkillCard>

                    {/* Git */}
                    <SkillCard logoLabel="Git">
                    <FaGitAlt size={25} color="white" />
                    </SkillCard>

                    {/* GitHub */}
                    <SkillCard logoLabel="GitHub">
                    <FaGithub size={25} color="white" />
                    </SkillCard>

                    {/* TypeScript */}
                    <SkillCard logoLabel="TypeScript">
                    <SiTypescript size={25} color="white" />
                    </SkillCard>

                </div>
            </section>
        </div>
    );
}