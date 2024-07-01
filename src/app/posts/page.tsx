import Link from "next/link";

export default async function Page() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json()

  return (
    <main className="text-center p-10 ">
      <h1 className="text-4xl mb-3 md:text-6xl font-bold">Welcome to the blogs</h1>
      <ul>
      {data.posts.map((post:any)=>(
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    </main>
  );
}