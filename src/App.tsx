import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Layout } from "./layout/Layout";

const App = () => {
    return (
        <Layout>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </Layout>
    );
};

export default App;
