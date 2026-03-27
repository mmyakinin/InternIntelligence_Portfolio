import type React from "react";

import { motion } from "motion/react";
import { Section } from "./Section";
import MaksimMyakinin from "./../assets/images/maksim-myakinin.jpg";

export const About: React.FC = () => {
    return (
        <Section id={"about"} title={"About Me"}>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="w-auto text-[18px] md:text-[20px] text-neutral md:pr-4 mb-4"
                    >
                        Hi, I’m Maksim Myakinin, a Front-End Developer based in
                        Baku, Azerbaijan. I specialize in building modern,
                        production-ready web applications. With a strong focus
                        on UI architecture and user experience, I enjoy crafting
                        clean, responsive interfaces where performance,
                        scalability, and design meet.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="w-auto text-[18px] md:text-[20px] text-neutral md:pr-4"
                    >
                        I have hands-on experience developing end-to-end
                        solutions — from concept to deployment — with attention
                        to SEO, maintainability, and real-world usability. I’m
                        passionate about solving complex problems, writing clean
                        code, and continuously improving my skills to build
                        better digital products.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className="h-80 w-64 shrink-0 rotate-[5deg] bg-white p-4 md:rotate-[7deg]"
                >
                    <img src={MaksimMyakinin} alt="Maksim Myakinin" />
                </motion.div>
            </div>
        </Section>
    );
};
