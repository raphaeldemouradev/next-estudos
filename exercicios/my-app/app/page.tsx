export default function Home() {
  return (
    <div>
      <header className="bg-black p-4 text-white flex justify-between">
        <h1 className="font-bold">Navbar</h1> 

        <nav className="flex gap-4">
          <p>Home</p>
          <a href="service">Service</a>
          <a href="contato">Contato</a>
        </nav>
      </header>

      <main className="bg-gray-400 h-auto text-white p-2 flex flex-col gap-10">
        <div className="bg-gray-800 h-100 w-full m-auto">Feed</div>
        <div className="bg-gray-800 h-100 w-full m-auto">Feed</div>
      </main>

      <footer className="bg-gray-950 p-2 text-white font-bold">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
