import { Header } from "./_components/header";
import { About } from "./_components/about";
import { Projects } from "./_components/projects";
import { Experience } from "./_components/experience";
import { Education } from "./_components/education";
import { Footer } from "./_components/footer";



export default function Home() {
  return (
    <main className= "min-h-screen">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}