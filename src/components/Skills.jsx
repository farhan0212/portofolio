import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Cpu,
  MessageSquare,
  Code,
  Server,
  Braces,
  Layers,
} from "lucide-react";

const skills = [
  { name: "React.js", icon: <Braces className="w-8 h-8" /> },
  { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> },
  { name: "Next.js", icon: <Globe className="w-8 h-8" /> },
  { name: "JavaScript", icon: <Code className="w-8 h-8" /> },
  { name: "ChatGPT", icon: <MessageSquare className="w-8 h-8" /> },
  { name: "Express.JS", icon: <Server className="w-8 h-8" /> },
  { name: "TypeScript", icon: <Layers className="w-8 h-8" /> },
  { name: "API Integration", icon: <Cpu className="w-8 h-8" /> },
];

function Skills() {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-sora text-center mb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:scale-125 duration-500">
                {skill.icon}
                <h3 className="mt-4 font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
