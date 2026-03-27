import React from "react";

import { motion } from "motion/react";
import { Section } from "./Section";
import { CheckCircle2 } from "lucide-react";

const experience = [
    {
        id: 1,
        company: "Modern Digital AZ",
        position: "Front-End Developer",
        startDate: "October 2024",
        endDate: "May 2025",
        summary: [
            "Built responsive, scalable UIs with TSX, Tailwind, and SCSS, implementing efficient state management via Zustand and Context API.",
            "Improved SEO and performance through SSR, metadata optimization, semantic HTML, and clean Git workflows.",
            "Developed production-ready components with focus on maintainability, scalability, and performance.",
        ],
    },
    {
        id: 2,
        company: "SBL Offshore Services",
        position: "Front-End Developer (Freelance)",
        startDate: "June 2024",
        endDate: "September 2024",
        summary: [
            "Developed a high-performance corporate website (React, TypeScript, Vite), achieving 90+ Lighthouse scores with code-splitting and lazy loading.",
            "Integrated an automated feedback system with email notifications, reducing inquiry response time by 40%.",
            "Achieved first-page Google rankings for 10+ commercial keywords through structured data and advanced on-page SEO.",
        ],
    },
    {
        id: 3,
        company: "Self-Employed",
        position: "WordPress Support Specialist (Freelance)",
        startDate: "January 2024",
        endDate: "June 2025",
        summary: [
            "Optimized a perfume e-commerce store (300+ SKUs), maintaining 99.5% uptime and improving overall site stability.",
            "Built custom PHP and CSS solutions, resolving 12+ critical front-end issues and significantly improving mobile UI.",
            "Increased organic traffic by 35% via SEO improvements, product page optimization, and maintaining 85+ PageSpeed scores.",
        ],
    },
];

export const Experience: React.FC = () => {
    return (
        <Section id={"experience"} title={"Work Experience"}>
            <div className="flex flex-col gap-8">
                {experience.map((job) => (
                    <div key={job.id}>
                        <motion.h3
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mb-4 font-serif text-[28px] font-semibold text-title"
                        >
                            {job.company}
                        </motion.h3>
                        <div className="flex flex-col items-start pb-4 gap-4">
                            <motion.h4
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-[28px] text-primary font-semibold"
                            >
                                {job.position}
                            </motion.h4>
                            <motion.span
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-[18px] font-semibold text-title/70"
                            >
                                {job.startDate} - {job.endDate}
                            </motion.span>
                        </div>
                        <motion.ul
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            {job.summary.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-[18px] md:text-[20px] mb-4"
                                >
                                    <CheckCircle2
                                        size={24}
                                        className="shrink-0 mt-1"
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};
