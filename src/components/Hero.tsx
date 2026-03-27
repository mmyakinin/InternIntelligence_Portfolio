import type React from "react";

import { motion } from "motion/react";

export const Hero: React.FC = () => {
    return (
        <section className="py-16 md:py-24" id="#hero">
            <motion.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-[48px] sm:text-[64px] md:text-[72px] font-bold text-title mb-4"
            >
                Maksim Myakinin
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-primary text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-8"
            >
                Front-End Developer
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-neutral text-[18px] md:text-[24px] font-normal mb-12"
            >
                Frontend developer based in Baku, Azerbaijan. I specialize in
                building modern web interfaces and creating responsive,
                user-friendly frontend experiences.
            </motion.p>
            <motion.a
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                href="mailto:maxim.myakinin@gmail.com"
                className="inline-block rounded-full bg-primary px-8 py-5 text-[18px] leading-5 font-medium text-white"
            >
                Get in Touch
            </motion.a>
        </section>
    );
};
