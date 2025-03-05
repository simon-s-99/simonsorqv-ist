import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />

      <main className="font-mono flex flex-col place-self-center mt-4">
        <p>This website is under development, content coming soon.</p>
        <p>In the meantime you can check out my:</p>
        <ul className="flex flex-col items-center mt-1">
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
      </main>
    </>
  );
}
