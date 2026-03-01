import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-black p-4 text-white flex justify-between">
      <h1 className="font-bold">Navbar</h1>

      <nav className="flex gap-4">
        <Link href='posts'>Posts</Link>
        <a href={"/"}>Home</a>
        <a href="service">Service</a>
        <a href="contato">Contato</a>
      </nav>
    </header>
  );
}
