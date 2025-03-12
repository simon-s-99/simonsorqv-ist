import CreatorNameSVG from "./components/CreatorNameSVG";

export default function App() {
  return (
    <>
      <header className="font-supershiny w-full flex flex-row place-content-evenly pt-8">
        <nav className="flex flex-col items-center text-5xl">
          <h1>Simon Sörqvist</h1>
          <p>Developer</p>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center mt-4">
        <p>This website is under development, content coming soon.</p>
        <p>In the meantime you can check out my:</p>
        <ul className="flex flex-col items-center mt-1 mb-6">
          <li className="mt-4">
            <a
              href="https://github.com/simon-s-99"
              className="px-1 py-0.5 border-2 border-gray-400 border-dotted hover:border-solid"
            >
              GitHub
            </a>
          </li>
          <li className="mt-4">
            <a
              href="https://www.linkedin.com/in/simon-sorqvist/"
              className="px-1 py-0.5 border-2 border-gray-400 border-dotted hover:border-solid"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <CreatorNameSVG width={280} height={160} />
      </main>
    </>
  );
}
