import type React from "react";

import { motion } from "motion/react";
import { Section } from "./Section";

import SnackyProjectImg from "./../assets/images/next-snack.png";
import ModernDigiatalProjectImg from "./../assets/images/moderndigital.png";
import BrandboxProjectImg from "./../assets/images/brandbox.png";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        name: "Next Snack",
        description:
            "A modern snack ordering web app inspired by Dodo Pizza, built with Next.js and modern frontend tools.",

        source: "https://github.com/mmyakinin/next-snack",
        preview: "https://next-snack.vercel.app/",
        imgSrc: SnackyProjectImg,
        delay: 0.6,
    },
    {
        id: 2,
        name: "Modern Digital",
        description:
            "Developed a corporate website for a software company, focusing on modern design, clear service presentation, and strong digital presence.",

        preview: "https://moderndigital.az/",
        imgSrc: ModernDigiatalProjectImg,
        delay: 0.6,
    },
    {
        id: 3,
        name: "Brandbox LLC",
        description:
            "Built a corporate website for an FMCG company specializing in dairy products, with a focus on user-friendly design, brand identity, and showcasing long-term partnerships.",

        preview: "https://brandbox.az/",
        imgSrc: BrandboxProjectImg,
        delay: 0.6,
    },
];

export const Projects: React.FC = () => {
    return (
        <Section id={"projects"} title="Last Projects">
            <div className="flex flex-col gap-8">
                {projects.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        className="grid grid-cols-1 sm:grid-cols-2 bg-secondary rounded-2xl overflow-hidden"
                    >
                        <div className="px-8 py-12">
                            <h3 className="text-primary text-[32px] font-semibold mb-4">
                                {item.name}
                            </h3>
                            <p className="text-[18px] text-title/70">
                                {item.description}
                            </p>
                            <div className="flex items-center gap-4 text-title pt-10">
                                {item.source && (
                                    <a
                                        href={item.source}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-[18px]"
                                    >
                                        <span>Source</span>
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                                <a
                                    href={item.preview}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-[18px]"
                                >
                                    <span>Preview</span>
                                    <ExternalLink size={24} />
                                </a>
                            </div>
                        </div>
                        <div className="h-full overflow-hidden">
                            <img
                                src={item.imgSrc}
                                alt={item.name}
                                className="w-full h-full object-cover object-top-left"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
