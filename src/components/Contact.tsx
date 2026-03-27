import React from "react";
import { Section } from "./Section";
import { ContactForm } from "./ContactForm";

import { motion } from "motion/react";

export const Contact: React.FC = () => {
    return (
        <Section id={"contact"} title={"Contact Me"}>
            <>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-[20px] mb-10"
                >
                    Want to collaborate? Fill out the form below and I’ll get
                    back to you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-[#1c232dd9]  p-10 max-[576px]:px-6 rounded-2xl"
                >
                    <ContactForm />
                </motion.div>
            </>
        </Section>
    );
};
