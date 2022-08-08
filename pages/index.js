import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-zinc-600">Main page</h1>
          <p className="text-zinc-600 font-light mt-2">
            A modern responsive navbar made with next and tailwind by
            <a
              href="https://www.instagram.com/robinvriens"
              target="_blank"
              rel="noreferrer"
              className="ml-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#D9A94C] to-[#E136B8] shadow-red-500/50"
            >
              @robinvriens
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
