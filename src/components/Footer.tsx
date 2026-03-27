import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-neutral-200 py-8 text-center text-white">
            <ul className="flex flex-wrap justify-center gap-5 mb-4">
                <li>
                    <a href="https://linkedin.com/in/mmyakinin">
                        <FaLinkedin size={32} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/mmyakinin">
                        <FaGithub size={32} />
                    </a>
                </li>
            </ul>
            <p className="text-base text-white">
                Made by Maksim Myakinin © {currentYear}
            </p>
        </footer>
    );
};
