import React from "react";

import { motion } from "motion/react";

interface Props {
    id: string;
    title: string;
}

export const Section: React.FC<React.PropsWithChildren<Props>> = ({
    id,
    title,
    children,
}) => {
    return (
        <section id={id} className="py-24">
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-[36px] md:text-[48px] text-title font-bold mb-8 md:mb-10"
            >
                {title}
            </motion.h2>
            {children}
        </section>
    );
};
