import PostList from "@/components/postLists";
import { Suspense } from "react";
export default async function Page() {
   

  return (
    <main className="text-center p-10 ">
      <h1 className="text-3xl mb-3 md:text-6xl font-bold">ALL POSTS</h1>
      <Suspense fallback="Loading...">
      <PostList/>
      </Suspense>
    </main>
  );
}