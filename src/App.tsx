import CreatorNameSVG from "./components/CreatorNameSVG";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    /* minus-margin used here to offset slightly from middle of screen on desktop, remove later */
    <div className="min-h-svh flex flex-col justify-center -mt-16">
      <header className="flex flex-col">
        <nav className="flex flex-col gap-y-1 items-center text-[2.6rem]">
          <CreatorNameSVG width={280} height={160} />
          <h1>Developer</h1>
        </nav>
      </header>
      <main className="flex flex-col items-center text-center mt-4">
        <p>
          This website is under{" "}
          <span className="text-secondary-accent">development</span>, content
          coming soon.
        </p>
        <p>In the meantime you can check out my:</p>

        <ul className="flex flex-col items-center gap-y-1">
          <li className="mt-5">
            <a
              href="https://github.com/simon-s-99"
              className="flex flex-row gap-x-1 px-2 py-1.5 border-2 rounded-md bg-primary border-secondary-accent hover:text-secondary-accent"
            >
              <ImGithub className="text-2xl" /> GitHub
            </a>
          </li>
          <li className="mt-4">
            <a
              href="https://www.linkedin.com/in/simon-sorqvist/"
              className="flex flex-row gap-x-1 px-2 py-1.5 border-2 rounded-md bg-primary border-secondary-accent hover:text-secondary-accent"
            >
              <FaLinkedin className="text-2xl" /> LinkedIn
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
