import Link from "next/link";

export default function Home() {
  throw new Error("erro root root");
  return (
    <div className="w-full h-[100vh] flex bg-yellow-600  items-center justify-center">
      <Link href="/blog">
        <button className="bg-red-300 hover:bg-yellow-400 hover:drop-shadow-sm p-3 rounded-md drop-shadow-md">
          ir para blog
        </button>
      </Link>
    </div>
  );
}
