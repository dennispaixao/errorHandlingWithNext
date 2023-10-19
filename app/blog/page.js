import Link from "next/link";
function Blog() {
  throw new Error("errouuu");
  return (
    <div className="w-full bg-blue-500 h-[100vh] flex  items-center justify-center">
      <Link href="/">
        <button className="bg-green-300 hover:bg-green-500 hover:drop-shadow-sm p-3 rounded-md drop-shadow-md">
          ir para Home
        </button>
      </Link>
    </div>
  );
}

export default Blog;
