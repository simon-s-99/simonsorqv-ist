import CreatorNameSVG from "./components/CreatorNameSVG";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import Banner from "./components/Banner";
import CreatorImage from "./components/CreatorImage";

export default function App() {
  return (
    /* minus-margin used here to offset slightly from middle of screen on desktop, remove later */
    <div className="min-h-svh flex flex-col">
      <header className="flex flex-col">
        <Banner />
        <nav className="flex flex-col gap-y-1 items-center text-[2.6rem] mt-6">
          <CreatorImage />
          <CreatorNameSVG width={280} height={160} />
          <h1 className="text-center">Software Engineer</h1>
        </nav>
      </header>
      <main className="flex flex-col">
        <section className="flex flex-col items-center text-center">
          <p className="mt-2">Check out my:</p>

          <ul className="flex flex-col items-center gap-y-1">
            <li className="mt-5">
              <a
                href="https://github.simonsorqv.ist/"
                className="flex flex-row gap-x-1 px-2 py-1.5 border-2 rounded-md bg-primary border-secondary-accent hover:text-secondary-accent"
              >
                <ImGithub className="text-2xl" /> GitHub
              </a>
            </li>
            <li className="mt-4">
              <a
                href="https://linkedin.simonsorqv.ist/"
                className="flex flex-row gap-x-1 px-2 py-1.5 border-2 rounded-md bg-primary border-secondary-accent hover:text-secondary-accent"
              >
                <FaLinkedin className="text-2xl" /> LinkedIn
              </a>
            </li>
          </ul>
        </section>
        <section>{/* TODO: add section */}</section>
      </main>
      <footer>{/* TODO: add footer */}</footer>
    </div>
  );
}
