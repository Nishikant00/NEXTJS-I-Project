import { db } from "@/db";
import Link from "next/link";

export default async function PostList() {
    const data = await db.query.Posts.findMany()
    return (
        <div>
        <ul>
            {data.map((post:any)=>(
        <li key={post.id} className="text-stone-600 hover:text-stone-900 font-bold text-xl mt-4">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    </div>
    );
}