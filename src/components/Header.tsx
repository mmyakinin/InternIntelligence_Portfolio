import React from "react";

import { Menu } from "lucide-react";
import MaksimMyakinin from "./../assets/images/maksim-myakinin.jpg";

const links = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export const Header: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const onClickOpen = () => {
        setOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl justify-between p-4">
                <a href="/">
                    <img
                        src={MaksimMyakinin}
                        alt="Maksim Myakinin"
                        className="rounded-full"
                        width={45}
                        height={45}
                    />
                </a>

                <button
                    className="block md:hidden"
                    type="button"
                    onClick={onClickOpen}
                    aria-expanded={open}
                    aria-controls="main-menu"
                >
                    <Menu size={32} />
                </button>

                <nav
                    id="main-menu"
                    className={`
                        absolute top-full right-4 mt-2 w-[150px] rounded-xl border border-neutral bg-background px-4 py-6
                        ${open ? "flex" : "hidden"}
                        md:static md:mt-0 md:flex md:w-auto md:items-center md:border-none md:bg-transparent md:p-0
                    `}
                >
                    <ul className="flex w-full flex-col gap-3 md:flex-row md:items-center">
                        {links.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="font-medium transition-all duration-500 hover:text-white"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
