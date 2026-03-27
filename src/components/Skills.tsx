import type React from "react";

import { motion } from "motion/react";
import {
    SiCss,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiSass,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { Section } from "./Section";

const baseSkills = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Sass / SCSS", icon: SiSass },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Prisma ORM", icon: SiPrisma },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
];

const skills = baseSkills.map((skill, index) => ({
    ...skill,
    delay: 0.4 + (index + 1) * 0.1,
}));

export const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Main Skills">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                delay: skill.delay,
                            }}
                            className="flex flex-col items-center gap-4 text-center rounded-2xl border border-neutral/30 bg-secondary p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70"
                        >
                            <Icon size={44} className="text-neutral" />
                            <h4 className="text-[18px] font-normal text-title">
                                {skill.name}
                            </h4>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};
