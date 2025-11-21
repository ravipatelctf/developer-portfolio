import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

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
  SiTypescript,
} from "react-icons/si";

function SkillCard({ children, logoLabel }) {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center 
                 gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg 
                 bg-neutral-900 hover:bg-neutral-800 transition-all
                 text-center sm:text-left"
    >
      <span className="flex justify-center sm:justify-start">{children}</span>
      <span className="text-white text-base sm:text-lg font-medium">
        {logoLabel}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-white text-4xl sm:text-5xl font-extrabold">
        Tech Stack
      </h1>

      <p className="text-gray-300 text-base sm:text-lg mt-3">
        Technologies and tools I work with
      </p>

      <div className="border-2 border-green-500 w-20 sm:w-24 my-6"></div>

      {/* Responsive Auto-Fit Grid */}
      <div
        className="
          grid 
          grid-cols-2
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5
          gap-4 sm:gap-6
        "
      >
        <SkillCard logoLabel="React"><FaReact size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Next.js"><SiNextdotjs size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Redux"><SiRedux size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Tailwind CSS"><SiTailwindcss size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Bootstrap"><SiBootstrap size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Node.js"><FaNodeJs size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Express"><SiExpress size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="JWT"><SiJsonwebtokens size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="MongoDB"><SiMongodb size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Mongoose"><SiMongoose size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Python"><FaPython size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Flask"><SiFlask size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="SQLAlchemy"><SiSqlalchemy size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="PostgreSQL"><SiPostgresql size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Vercel"><SiVercel size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Railway"><SiRailway size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Supabase"><SiSupabase size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="Git"><FaGitAlt size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="GitHub"><FaGithub size={28} color="white" /></SkillCard>
        <SkillCard logoLabel="TypeScript"><SiTypescript size={28} color="white" /></SkillCard>
      </div>
    </section>
  );
}
