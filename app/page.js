import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] items-center justify-center">
      <Link href="/blog">
        <button>ir para blog</button>
      </Link>
    </div>
  );
}
