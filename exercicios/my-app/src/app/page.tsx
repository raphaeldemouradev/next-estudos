import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina Home",
  description: "Descubra sobre o conteudo!",
  openGraph: {
    title: "Descubra mais",
    description: "Venha nos conhecer",
    images: [''],
  },
  robots: {
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function Home() {
  return (
    <div>
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
