import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="max-w-[768px] px-4 mx-auto">{children}</main>
            <Footer />
        </>
    );
};
